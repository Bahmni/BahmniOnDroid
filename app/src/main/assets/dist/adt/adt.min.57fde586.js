angular.module('bahmni.common.routeErrorHandler', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
        .state('commonerror', {
            url: '/commonerror',
            templateUrl: "../common/route-errorhandler/views/error.html"
        });
    }]).run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function () {
            $state.go("commonerror");
        });
    });

'use strict';

angular.module('httpErrorInterceptor',[])
    .config(function($httpProvider) {
        var interceptor = ['$rootScope', '$q', function($rootScope, $q) {
            var serverErrorMessages = Bahmni.Common.Constants.serverErrorMessages;

            var showError = function(errorMessage){
                var result = _.find(serverErrorMessages, function (listItem) {
                    return listItem.serverMessage === errorMessage;
                });
                if(_.isEmpty(result)){
                    $rootScope.$broadcast('event:serverError', "Server Error : " + errorMessage);
                }
            };

            function stringAfter(value, searchString) {
                var indexOfFirstColon = value.indexOf(searchString);
                return value.substr(indexOfFirstColon + 1).trim()
            }

            function getServerError(message) {
                return stringAfter(message, ':');
            }

            function success(response) {
                return response;
            }

            function shouldRedirectToLogin(response){
                var errorMessage = response.data.error? response.data.error.message : response.data;
                if(errorMessage.search("HTTP Status 403 - Session timed out")>0){
                    return true;
                }
            }

            function error(response) {
                var data = response.data;
                var unexpectedError = "There was an unexpected issue on the server. Please try again";
                if (response.status === 500) {
                    var errorMessage = data.error && data.error.message ? getServerError(data.error.message) : unexpectedError;
                    showError(errorMessage);
                } else if (response.status === 409){
                    var errorMessage = data.error && data.error.message ? getServerError(data.error.message) : "Duplicate entry error";
                    showError(errorMessage);
                } else if(response.status === 0){
                    showError("Could not connect to the server. Please check your connection and try again");
                } else if(response.status === 405){
                    showError(unexpectedError);
                } else if(response.status === 400){
                    showError("Could not connect to the server. Please check your connection and try again");
                } else if (response.status === 403) {
                    var errorMessage = data.error && data.error.message ? stringAfter(data.error.message, ':') : unexpectedError;
                    showError(errorMessage);
                    if(shouldRedirectToLogin(response)){
                            $rootScope.$broadcast('event:auth-loginRequired');
                    }
                } else if (response.status === 404) {
                    showError("The requested information does not exist");
                }
                return $q.reject(response);
            }

            return {
                response: success,
                responseError: error
            };

        }];
        $httpProvider.interceptors.push(interceptor);
    });
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Auth = Bahmni.Auth || {};

angular.module('authentication', ['ui.router']);
Bahmni.Auth.User = function (user) {

    angular.extend(this, user);

    this.userProperties = user.userProperties || {};
    this.favouriteObsTemplates = this.userProperties.favouriteObsTemplates ? this.userProperties.favouriteObsTemplates.split("###") : [];
    this.recentlyViewedPatients = this.userProperties.recentlyViewedPatients ? JSON.parse(this.userProperties.recentlyViewedPatients) : [];

    this.toContract = function () {
        var user = angular.copy(this);
        user.userProperties.favouriteObsTemplates = this.favouriteObsTemplates.join("###");
        user.userProperties.recentlyViewedPatients = JSON.stringify(this.recentlyViewedPatients);
        delete user.favouriteObsTemplates;
        delete user.recentlyViewedPatients;
        return user;
    };

    this.addToRecentlyViewed = function(patient, maxPatients) {
        if(!_.any(this.recentlyViewedPatients, {'uuid': patient.uuid})) {
            if(_.size(this.recentlyViewedPatients)> maxPatients){
                this.recentlyViewedPatients = _.first(this.recentlyViewedPatients, maxPatients);
            }
            this.recentlyViewedPatients.unshift({uuid: patient.uuid, name: patient.name});
        }
    };

    this.isFavouriteObsTemplate = function (conceptName) {
        return _.contains(this.favouriteObsTemplates, conceptName);
    };

    this.toggleFavoriteObsTemplate = function (conceptName) {
        if (this.isFavouriteObsTemplate(conceptName)) {
            this.favouriteObsTemplates = _.without(this.favouriteObsTemplates, conceptName);
        } else {
            this.favouriteObsTemplates.push(conceptName);
        }
    }
};


angular.module('authentication')
    .service('userService', ['$rootScope', '$http', function ($rootScope, $http) {

        this.getUser = function (userName) {
            return $http.get("/openmrs/ws/rest/v1/user", {
                method: "GET",
                params: {
                    username: userName,
                    v: "custom:(username,uuid,person:(uuid,),privileges:(name,retired),userProperties)"
                },
                cache: false
            });
        };

        this.savePreferences = function () {
            var user = $rootScope.currentUser.toContract();
            return $http.post("/openmrs/ws/rest/v1/user/" + user.uuid, {"uuid": user.uuid, "userProperties": user.userProperties}, {
                withCredentials: true
            }).then(function (response) {
                    $rootScope.currentUser.userProperties = response.data.userProperties;
                });
        };

    }]);

'use strict';

angular.module('authentication')
    .config(function ($httpProvider) {
        var interceptor = ['$rootScope', '$q', function ($rootScope, $q) {
            function success(response) {
                return response;
            }

            function error(response) {
                if (response.status === 401) {
                    $rootScope.$broadcast('event:auth-loginRequired');
                }
                return $q.reject(response);
            }

            return {
                response: success,
                responseError: error
            };
        }];
        $httpProvider.interceptors.push(interceptor);
    }).run(['$rootScope', '$window', function ($rootScope, $window) {
        $rootScope.$on('event:auth-loginRequired', function () {
            $window.location = "../home/#/login?showLoginMessage=true";
        });
    }]).service('sessionService', ['$rootScope', '$http', '$q', '$bahmniCookieStore', 'userService', function ($rootScope, $http, $q, $bahmniCookieStore, userService) {
        var sessionResourcePath = '/openmrs/ws/rest/v1/session';

        var createSession = function(username, password){
            return $http.get(sessionResourcePath, {
                headers: {'Authorization': 'Basic ' + window.btoa(username + ':' + password)},
                cache: false
            });
        };

        this.destroy = function(){
            return $http.delete(sessionResourcePath).success(function(data){
                delete $.cookie(Bahmni.Common.Constants.currentUser, null, {path: "/"});
                delete $.cookie(Bahmni.Common.Constants.currentUser, null, {path: "/"});
                delete $.cookie(Bahmni.Common.Constants.retrospectiveEntryEncounterDateCookieName, null, {path: "/"});
                $rootScope.currentUser = null;
            });
        };

        this.loginUser = function(username, password, location) {
            var deferrable = $q.defer();
            createSession(username,password).success(function(data) {
                if (data.authenticated) {
                    $bahmniCookieStore.put(Bahmni.Common.Constants.currentUser, username, {path: '/', expires: 7});
                    if(location != undefined) {
                        $bahmniCookieStore.remove(Bahmni.Common.Constants.locationCookieName);
                        $bahmniCookieStore.put(Bahmni.Common.Constants.locationCookieName, {name: location.display, uuid: location.uuid}, {path: '/', expires: 7});
                    }
                    deferrable.resolve();
                } else {
                   deferrable.reject('Authentication failed. Please try again.');   
                }
            }).error(function(){
                deferrable.reject('Authentication failed. Please try again.');   
            });
            return deferrable.promise;
        };

        this.get = function () {
            return $http.get(sessionResourcePath, { cache: false });
        };

        this.loadCredentials = function () {
            var deferrable = $q.defer();
            var currentUser = $bahmniCookieStore.get(Bahmni.Common.Constants.currentUser);
            if(!currentUser) {
                this.destroy().then(function() {
                    $rootScope.$broadcast('event:auth-loginRequired');
                    deferrable.reject("No User in session. Please login again.")
                });
                return deferrable.promise;
            }
            userService.getUser(currentUser).success(function(data) {
                $rootScope.currentUser = new Bahmni.Auth.User(data.results[0]);
                $rootScope.currentUser.currentLocation = $bahmniCookieStore.get(Bahmni.Common.Constants.locationCookieName).name;
                $rootScope.$broadcast('event:user-credentialsLoaded', data.results[0]);
                deferrable.resolve(data.results[0]);
            }).error(function () {
                deferrable.reject('Could not get roles for the current user.');
            });
            return deferrable.promise;
        };

        this.getLoginLocationUuid = function(){
            return $bahmniCookieStore.get(Bahmni.Common.Constants.locationCookieName) ? $bahmniCookieStore.get(Bahmni.Common.Constants.locationCookieName).uuid : null;
        };

        this.loadProviders = function(userInfo) {
            return $http.get("/openmrs/ws/rest/v1/provider", {
                 method: "GET",
                 params: {
                     user: userInfo.uuid
                 },
                 cache: false
             }).success(function (data) {
                var providerUuid = (data.results.length > 0) ? data.results[0].uuid : undefined;
                $rootScope.currentProvider = { uuid: providerUuid };
             });
        };
    }]).factory('authenticator', ['$rootScope', '$q', '$window', 'sessionService', function ($rootScope, $q, $window, sessionService) {
        var authenticateUser = function () {
            var defer = $q.defer();
            var sessionDetails = sessionService.get();
            sessionDetails.success(function (data) {
                if (data.authenticated) {
                    defer.resolve();
                } else {
                    defer.reject('User not authenticated');
                    $rootScope.$broadcast('event:auth-loginRequired');
                }
            });
            sessionDetails.error(function(data){
                defer.reject('User not authenticated');
                $rootScope.$broadcast('event:auth-loginRequired');
            });
            return defer.promise;
        }

        return {
            authenticateUser: authenticateUser
        }

    }]).directive('logOut',['sessionService', '$window', function(sessionService, $window) {
        return {
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    scope.$apply(function() {
                        sessionService.destroy().then(
                            function () {
                                $window.location = "../home/#/login";
                            }
                        );
                    });
                });
            }
        };
    }])
    .directive('btnUserInfo', ['$rootScope', '$window', function($rootScope, $window) {
        return {
            restrict: 'CA',
            link: function(scope, elem, attrs) {
                elem.bind('click', function(event) {
                    $(this).next().toggleClass('active');
                    event.stopPropagation();
                });
                $(document).find('body').bind('click', function() {
                    $(elem).next().removeClass('active');
                });
            }
        };
    }
]);
angular.module('bahmni.common.config', []);

'use strict';

angular.module('bahmni.common.config')
    .service('configurations', ['configurationService', function (configurationService) {

        this.configs = {};

        this.load = function (configNames) {
            var self = this;
            return configurationService.getConfigurations(_.difference(configNames, Object.keys(this.configs))).then(function (configurations) {
                angular.extend(self.configs, configurations);
            });
        };

        this.dosageInstructionConfig = function () {
            return this.configs.dosageInstructionConfig || [];
        };

        this.dosageFrequencyConfig = function () {
            return this.configs.dosageFrequencyConfig || [];
        };

        this.allTestsAndPanelsConcept = function () {
            return this.configs.allTestsAndPanelsConcept.results[0] || [];
        };

        this.impressionConcept = function () {
            return this.configs.radiologyImpressionConfig.results[0] || [];
        };

        this.labOrderNotesConcept = function () {
            return this.configs.labOrderNotesConfig.results[0] || [];
        };

        this.consultationNoteConcept = function () {
            return this.configs.consultationNoteConfig.results[0] || [];
        };

        this.patientConfig = function () {
            return this.configs.patientConfig || {};
        };

        this.encounterConfig = function () {
            return angular.extend(new EncounterConfig(), this.configs.encounterConfig || []);
        };

        this.patientAttributesConfig = function() {
            return this.configs.patientAttributesConfig.results;
        };

        this.identifierSourceConfig = function() {
            return this.configs.identifierSourceConfig;
        };

        this.addressLevels = function() {
            return this.configs.addressLevels;
        }
    }]);
angular.module('bahmni.common.appFramework', ['authentication']);

var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {}; 
Bahmni.Common.AppFramework = Bahmni.Common.AppFramework || {}; 
'use strict';

angular.module('bahmni.common.appFramework')
    .service('appService', ['$http', '$q', 'sessionService', '$rootScope', function ($http, $q, sessionService, $rootScope) {
        var currentUser = null;
        var baseUrl = "/bahmni_config/openmrs/apps/";
        var appDescriptor = null;
        var self = this;

        var loadConfig = function (url) {
            return $http.get(url, {withCredentials: true});
        };

        var loadTemplate = function (appDescriptor) {
            var deferrable = $q.defer();
            loadConfig(baseUrl + appDescriptor.contextPath + "/appTemplate.json").then(
                function (result) {
                    if (result.data.length > 0) {
                        appDescriptor.setTemplate(result.data[0]);
                    }
                    deferrable.resolve(appDescriptor);
                },
                function (error) {
                    if (error.status != 404) {
                        deferrable.reject(error);
                    } else {
                        deferrable.resolve(appDescriptor);
                    }
                }
            );
            return deferrable.promise;
        };

        var loadDefinition = function (appDescriptor) {
            var deferrable = $q.defer();
            loadConfig(baseUrl + appDescriptor.contextPath + "/app.json").then(
                function (result) {
                    if (result.data.length > 0) {
                        appDescriptor.setDefinition(result.data[0]);
                    }
                    deferrable.resolve(appDescriptor);
                },
                function (error) {
                    if (error.status != 404) {
                        deferrable.reject(error);
                    } else {
                        deferrable.resolve(appDescriptor);
                    }
                }
            );
            return deferrable.promise;
        };

        var loadExtensions = function (appDescriptor, extensionFileName) {
            var deferrable = $q.defer();
            loadConfig(baseUrl + appDescriptor.extensionPath + extensionFileName).then(
                function (result) {
                    appDescriptor.setExtensions(result.data);
                    deferrable.resolve(appDescriptor);
                },
                function (error) {
                    if (error.status != 404) {
                        deferrable.reject(error);
                    } else {
                        deferrable.resolve(appDescriptor);
                    }
                }
            );
            return deferrable.promise;
        };

        var loadPageConfig = function(pageName,appDescriptor){
            var deferrable = $q.defer();
            loadConfig(baseUrl + appDescriptor.contextPath + "/"+pageName+".json").then(
                function (result) {
                    if (result.data.length > 0) {
                        appDescriptor.addConfigForPage(pageName,result.data);
                    }
                    deferrable.resolve(appDescriptor);
                },
                function (error) {
                    if (error.status != 404) {
                        deferrable.reject(error);
                    } else {
                        deferrable.resolve(appDescriptor);
                    }
                }
            );
            return deferrable.promise;
        };
        this.getAppDescriptor = function () {
            return appDescriptor;
        };

        this.loadConfig = function (name) {
            return loadConfig(baseUrl + appDescriptor.contextPath + "/" + name + ".json");
        };

        this.loadMandatoryConfig = function(path) {
            return $http.get(path);
        };

        this.initApp = function (appName, options, extensionFileSuffix, configPages) {
            var appLoader = $q.defer();
            var extensionFileName = extensionFileSuffix ? "/extension-" + extensionFileSuffix + ".json" : "/extension.json";
            var promises = [];
            var opts = options || {'app': true, 'extension': true};

            var inheritAppContext = (opts.inherit == undefined) ? true : opts.inherit;

            appDescriptor = new Bahmni.Common.AppFramework.AppDescriptor(appName, inheritAppContext, function () {
                return currentUser;
            });

            var loadCredentialsPromise = sessionService.loadCredentials();
            var loadProviderPromise = loadCredentialsPromise.then(sessionService.loadProviders);

            promises.push(loadCredentialsPromise);
            promises.push(loadProviderPromise);
            if (opts.extension) {
                promises.push(loadExtensions(appDescriptor, extensionFileName));
            }
            if (opts.template) {
                promises.push(loadTemplate(appDescriptor));
            }
            if (opts.app) {
                promises.push(loadDefinition(appDescriptor));
            }
            if(!_.isEmpty(configPages)){
                configPages.forEach(function(configPage){
                    promises.push(loadPageConfig(configPage,appDescriptor));
                });
            }
            $q.all(promises).then(function (results) {
                currentUser = results[0];
                appLoader.resolve(appDescriptor);
                $rootScope.$broadcast('event:appExtensions-loaded');
            }, function (errors) {
                appLoader.reject(errors);
            });
            return appLoader.promise;
        };
    }]);
'use strict';

angular.module('bahmni.common.appFramework')
    .directive('appExtensionList', ['appService', function(appService) {
        var appDescriptor = appService.getAppDescriptor(); 
        return {
            restrict:'EA',
            template: '<ul><li ng-repeat="appExtn in appExtensions">'
                + '<a href="{{formatUrl(appExtn.url, extnParams)}}" class="{{appExtn.icon}}" '
                + ' onclick="return false;" title="{{appExtn.label}}" ng-click="extnLinkClick(appExtn, extnParams)">'
                + ' <span ng-show="showLabel">{{appExtn.label}}</span>'
                +'</a></li></ul>',
            scope: {
                extnPointId : '@',
                showLabel:'@',
                onExtensionClick:'&',
                contextModel:'&'
            },
            compile: function(cElement, cAttrs) {
                var extnList = appDescriptor.getExtensions(cAttrs.extnPointId);
                return function(scope, lElement, attrs) {
                    scope.appExtensions = extnList;
                    var model = scope.contextModel();
                    scope.extnParams = model || {};
                };
            },
            controller: function($scope, $location) {
                $scope.formatUrl = appDescriptor.formatUrl;
                $scope.extnLinkClick = function(extn, params) {
                    var proceedWithDefault = true;
                    var clickHandler = $scope.onExtensionClick();
                    var target = appDescriptor.formatUrl(extn.url, params);
                    if (clickHandler) {
                        var event = {
                            'src': extn,
                            'target': target,
                            'params' : params,
                            'preventDefault' : function() {
                               proceedWithDefault = false;
                            }
                        };
                        clickHandler(event);
                    }
                    if (proceedWithDefault) {
                        $location.url(target);
                    }
                };
            }
        };
    }]);
Bahmni.Common.AppFramework.AppDescriptor = function (context, inheritContext, retrieveUserCallback) {
    this.id = null;
    this.instanceOf = null;
    this.description = null;
    this.contextModel = null;

    this.extensionPoints = [];
    this.extensions = [];
    this.configs = [];

    this.extensionPath = context;
    this.contextPath = inheritContext ? context.split("/")[0] : context;

    var self = this;

    this.setExtensions = function(extensions) {
        extensions.forEach(function(extn) {
            var existing = self.extensionPoints.filter(function(ep) {
                return ep.id == extn.extensionPointId;
            });

            if (existing.length == 0) {
                self.extensionPoints.push({
                    id: extn.extensionPointId,
                    description: extn.description
                });
            }
        });
        self.extensions = extensions;
    };

    this.setTemplate = function(template) {
        self.instanceOf = template.id;
        self.description = self.description || template.description;
        self.contextModel = self.contextModel || template.contextModel;
        if (template.configOptions) {
            template.configOptions.forEach(function(opt) {
                var existing = self.configs.filter(function(cfg) {
                    return cfg.name == opt.name;
                });
                if (existing.length > 0) {
                    existing[0].description = opt.description;
                } else {
                    self.configs.push({
                        name: opt.name,
                        description: opt.description,
                        value: opt.defaultValue
                    });
                }
            });
        }
    };

    this.setDefinition = function(instance) {
        self.instanceOf = instance.instanceOf;
        self.id = instance.id;
        self.description = instance.description;
        self.contextModel = instance.contextModel;
        if (instance.extensionPoints) {
            instance.extensionPoints.forEach(function(iep) {
                var existing = self.extensionPoints.filter(function(ep) {
                    return ep.id == iep.id;
                });
                if (existing.length === 0) {
                    self.extensionPoints.push(iep);
                }
            });
        }

        if (instance.config) {
            for (var configName in instance.config) {
                var existingConfig = self.getConfig(configName);
                if (existingConfig) {
                    existingConfig.value = instance.config[configName];
                } else {
                    self.configs.push({ name: configName, value: instance.config[configName] });
                }
            }
        }
    };

    this.getExtensions = function (extPointId, type) {
        var currentUser = retrieveUserCallback();
        if (currentUser && self.extensions) {
            var extnType = type || 'all';
            var userPrivileges = currentUser.privileges.map(function (priv) {
                return priv.retired ? "" : priv.name;
            });
            var appsExtns = self.extensions.filter(function (extn) {
                return ((extnType==='all') || (extn.type===extnType)) && (extn.extensionPointId === extPointId) && (!extn.requiredPrivilege || (userPrivileges.indexOf(extn.requiredPrivilege) >= 0));
            });
            appsExtns.sort(function(extn1, extn2) {
                return extn1.order - extn2.order;
            });
            return appsExtns;
        }
    };

    this.getExtensionById = function (id){
        return self.extensions.filter(function (extn) { return extn.id === id })[0];
    };

    this.getConfig = function(configName) {
        var cfgList = self.configs.filter(function(cfg) {
            return cfg.name == configName;
        });
        return (cfgList.length > 0) ? cfgList[0] : null;
    };

    this.getConfigValue = function(configName) {
        var config = this.getConfig(configName);
        return config ? config.value : null;
    };

    this.formatUrl =  function (url, options, useQueryParams) {
        var pattern = /{{([^}]*)}}/g,
            matches = url.match(pattern),
            replacedString = url,
            checkQueryParams = useQueryParams || false,
            queryParameters = this.parseQueryParams();
        if (matches) {
            matches.forEach(function(el) {
                var key = el.replace("{{",'').replace("}}",'');
                var value = options[key];
                if (!value && (checkQueryParams===true)) {
                    value = queryParameters[key] || null;
                }
                replacedString = replacedString.replace(el, value);
            });
        }
        return replacedString.trim();
    };

    this.parseQueryParams = function(locationSearchString) {
        var urlParams;
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            queryString  = locationSearchString || window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(queryString)) {
           urlParams[decode(match[1])] = decode(match[2]);
        }
        return urlParams;
    };

    this.addConfigForPage = function(pageName,config){
        self.pageConfigs= self.pageConfigs || {};
        self.pageConfigs[pageName] = config;
    };

    this.getConfigForPage = function(pageName){
        return self.pageConfigs[pageName];
    }
};

var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};

(function(){
    var RESTWS = "/openmrs/ws/rest";
    var RESTWS_V1 = "/openmrs/ws/rest/v1";
    var BAHMNI_CORE = RESTWS_V1 + "/bahmnicore";
    var EMRAPI = RESTWS + "/emrapi";

    var serverErrorMessages = [
        {
            serverMessage: "Cannot have more than one active order for the same orderable and care setting at same time",
            clientMessage: "One or more drugs you are trying to order are already active. Please change the start date of the conflicting drug or remove them from the new prescription."
        }
    ];

    Bahmni.Common.Constants = {
        dateFormat: "dd/mm/yyyy",
        dateDisplayFormat: "DD-MMM-YYYY",
        timeDisplayFormat: "hh:mm",
        emrapiDiagnosisUrl : EMRAPI + "/diagnosis",
        bahmniDiagnosisUrl :BAHMNI_CORE + "/diagnosis/search",
        bahmniDeleteDiagnosisUrl :BAHMNI_CORE + "/diagnosis/delete",
        diseaseTemplateUrl :BAHMNI_CORE + "/diseaseTemplates",
        AllDiseaseTemplateUrl : BAHMNI_CORE + "/diseaseTemplate",
        emrapiConceptUrl :EMRAPI + "/concept",
        encounterConfigurationUrl: BAHMNI_CORE + "/bahmniencounter/config",
        patientConfigurationUrl:BAHMNI_CORE + "/patient/config",
        emrEncounterUrl: EMRAPI + "/encounter",
        encounterUrl: RESTWS_V1 + "/encounter",
        locationUrl: RESTWS_V1 + "/location",
        orderUrl: RESTWS_V1 + "/order",
        bahmniOrderUrl: BAHMNI_CORE + "/orders",
        bahmniDrugOrderUrl: BAHMNI_CORE + "/drugOrders",
        bahmniDispositionByVisitUrl: BAHMNI_CORE + "/disposition/visit",
        bahmniDispositionByPatientUrl: BAHMNI_CORE + "/disposition/patient",
        bahmniLabOrderResultsUrl: BAHMNI_CORE + "/labOrderResults",
        bahmniEncounterUrl: BAHMNI_CORE + "/bahmniencounter",
        conceptUrl: RESTWS_V1 + "/concept",
        visitUrl: RESTWS_V1 + "/visit",
        endVisitUrl: BAHMNI_CORE + "/visit/endVisit",
        visitTypeUrl: RESTWS_V1 + "/visittype",
        patientImageUrl: "/patient_images/",
        labResultUploadedFileNameUrl: "/uploaded_results/",
        visitSummaryUrl: BAHMNI_CORE + "/visit/summary",
        encounterModifierUrl: BAHMNI_CORE + "/bahmniencountermodifier",
        openmrsUrl: "/openmrs",
        idgenConfigurationURL: RESTWS_V1 + "/idgen/identifiersources",
        bahmniRESTBaseURL: BAHMNI_CORE + "",
        observationsUrl: BAHMNI_CORE + "/observations",
        obsRelationshipUrl: BAHMNI_CORE + "/obsrelationships",
        encounterImportUrl: BAHMNI_CORE + "/admin/upload/encounter",
        programImportUrl: BAHMNI_CORE + "/admin/upload/program",
        conceptImportUrl: BAHMNI_CORE + "/admin/upload/concept",
        conceptSetImportUrl: BAHMNI_CORE + "/admin/upload/conceptset",
        drugImportUrl: BAHMNI_CORE + "/admin/upload/drug",
        labResultsImportUrl: BAHMNI_CORE + "/admin/upload/labResults",
        referenceTermsImportUrl: BAHMNI_CORE + "/admin/upload/referenceterms",
        conceptSetExportUrl: BAHMNI_CORE + "/admin/export/conceptset?conceptName=:conceptName",
        patientImportUrl: BAHMNI_CORE + "/admin/upload/patient",
        adminImportStatusUrl: BAHMNI_CORE + "/admin/upload/status",
        dhisAllTasksUrl: RESTWS_V1 + "/dhis/tasks",
        dhisTaskUrl: RESTWS_V1 + "/dhis/task/",
        dhisFireQueriesUrl: RESTWS_V1 + "/dhis/fireQueries",
        diseaseSummaryPivotUrl: BAHMNI_CORE + "/diseaseSummaryData",
        allTestsAndPanelsConceptName : 'All_Tests_and_Panels',
        dosageFrequencyConceptName : 'Dosage Frequency',
        dosageInstructionConceptName : 'Dosage Instructions',
        consultationNoteConceptName : 'Consultation Note',
        radiologyOrderType : 'Radiology Order',
        radiologyResultConceptName :"Radiology Result",
        investigationEncounterType:"INVESTIGATION",
        validationNotesEncounterType: "VALIDATION NOTES",
        labOrderNotesConcept: "Lab Order Notes",
        impressionConcept: "Impression",
        qualifiedByRelationshipType: "qualified-by",
        dispositionConcept : "Disposition",
        dispositionGroupConcept : "Disposition Set",
        dispositionNoteConcept : "Disposition Note",
        ruledOutDiagnosisConceptName : 'Ruled Out Diagnosis',
        emrapiConceptMappingSource :"org.openmrs.module.emrapi",
        includeAllObservations: false,
        openmrsObsUrl :RESTWS_V1 + "/obs",
        openmrsObsRepresentation :"custom:(uuid,obsDatetime,value:(uuid,name:(uuid,name)))" ,
        admissionCode: 'ADMIT',
        dischargeCode: 'DISCHARGE',
        transferCode: 'TRANSFER',
        undoDischargeCode: 'UNDO_DISCHARGE',
        vitalsConceptName: "Vitals",
        heightConceptName: "HEIGHT",
        weightConceptName: "WEIGHT",
        bmiConceptName: "BMI", // TODO : shruthi : revove this when this logic moved to server side
        bmiStatusConceptName: "BMI STATUS", // TODO : shruthi : revove this when this logic moved to server side
        abnormalObservationConceptName: "IS_ABNORMAL",
        documentsPath: '/document_images',
        documentsConceptName: 'Document',
        miscConceptClassName: 'Misc',
        abnormalConceptClassName: 'Abnormal',
        durationConceptClassName: 'Duration',
        conceptDetailsClassName: 'Concept Details',
        admissionEncounterTypeName: 'ADMISSION',
        dischargeEncounterTypeName: 'DISCHARGE',
        consultationEncounterName: 'Consultation',
        imageClassName: 'Image',
        locationCookieName: 'bahmni.user.location',
        retrospectiveEntryEncounterDateCookieName: 'bahmni.clinical.retrospectiveEncounterDate',
        rootScopeRetrospectiveEntry: 'retrospectiveEntry.encounterDate',
        patientFileConceptName: 'Patient file',
        serverErrorMessages: serverErrorMessages,
        currentUser:'bahmni.user',
        retrospectivePrivilege:'app:clinical:retrospective',
        nutritionalConceptName:'Nutritional Values',
        messageForNoObservation: "No observations captured for this visit.",
        messageForNoDisposition: "No dispositions available.",
        reportsUrl: "/bahmnireports/report",
        diagnosisStatuses : {"RULED OUT" : "Ruled Out Diagnosis"},
        registartionConsultationPrivilege:'app:common:registration_consultation_link'
    };
})();

Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Util = Bahmni.Common.Util || {};

angular.module('bahmni.common.util', [])
    .provider('$bahmniCookieStore', [function(){
        var self = this;
        self.defaultOptions = {};

        self.setDefaultOptions = function(options){
            self.defaultOptions = options;
        };

        self.$get = function(){
            return {
                get: function(name){
                    var jsonCookie = $.cookie(name);
                    if(jsonCookie){
                        return angular.fromJson(jsonCookie);
                    }
                },
                put: function(name, value, options){
                    options = $.extend({}, self.defaultOptions, options);
                    $.cookie(name, angular.toJson(value), options);
                },
                remove: function(name, options){
                    options = $.extend({}, self.defaultOptions, options);
                    $.removeCookie(name, options);
                }
            };
        };
    }])
;

'use strict';

Bahmni.Common.Util.DateUtil = {
    diffInDays: function (dateFrom, dateTo) {
        return Math.floor((this.parse(dateTo) - this.parse(dateFrom)) / (60 * 1000 * 60 * 24));
    },
    
    diffInMilliSeconds: function (dateFrom, dateTo) {
        return moment(dateFrom).diff(moment(dateTo), 'milliseconds');
    },

    diffInSeconds: function (dateFrom, dateTo) {
        return moment(dateFrom).diff(moment(dateTo), 'seconds');
    },

    isInvalid: function(date){
        return date == "Invalid Date";
    },

    diffInDaysRegardlessOfTime: function(dateFrom, dateTo) {
        dateFrom.setHours(0,0,0,0);
        dateTo.setHours(0,0,0,0);
        return Math.floor((dateTo - dateFrom) / (60 * 1000 * 60 * 24));
    },

    addDays: function (date, days) {
        return moment(date).add(days, 'day').toDate();
    },

    addSeconds: function (date, seconds) {
        return moment(date).add(seconds, 'seconds').toDate();
    },

    addHours: function (date, hours) {
        return moment(date).add(hours, 'hours').toDate();
    },

    addMilliSeconds: function (date, milliSeconds) {
        return moment(date).add(milliSeconds, 'milliseconds').toDate();
    },

    subtractSeconds: function (date, seconds) {
        return moment(date).subtract(seconds, 'seconds').toDate();
    },

    subtractMilliSeconds: function (date, milliSeconds) {
        return moment(date).subtract(milliSeconds, 'milliseconds').toDate();
    },

    subtractDays: function (date, days) {
        return this.addDays(date, -1 * days)
    },

    createDays: function (startDate, endDate) {
        var startDate = this.getDate(startDate);
        var endDate = this.getDate(endDate);
        var numberOfDays = this.diffInDays(startDate, endDate);
        var days = [];
        for (var i = 0; i <= numberOfDays; i++) {
            days.push({dayNumber: i + 1, date: this.addDays(startDate, i)});
        }
        return days;
    },

    getDayNumber: function (referenceDate, date) {
        return this.diffInDays(this.getDate(referenceDate), this.getDate(date))  + 1;
    },

    getDateWithoutTime: function(datetime){
        return moment(datetime).format("YYYY-MM-DD");
    },

    getDate: function (dateTime) {
        return moment(this.parse(dateTime)).startOf('day').toDate();
    },

    parse: function(dateString){
        return dateString ? moment(dateString).toDate() : null;
    },

    parseDatetime: function(dateTimeString){
        return dateTimeString ? moment(dateTimeString) : null;
    },

    parseLongDatetime: function(longDateTime){
        return longDateTime ? moment(longDateTime).format("DD MMM YY h:mm a") : null;
    },

    now: function(){
        return new Date();
    },

    today: function(){
        return this.getDate(this.now());
    },

    getDateWithoutHours: function(dateString){
        return moment(dateString).toDate().setHours(0,0,0,0);
    },

    getDateTimeWithoutSeconds :function (dateString){
        return moment(dateString).toDate().setSeconds(0,0);
    },

    isSameDateTime: function(date1, date2) {
        if(date1 == null || date2 == null) {
            return false;
        }
        var dateOne = this.parse(date1);
        var dateTwo = this.parse(date2);
        return dateOne.getTime() == dateTwo.getTime();
    },

    isSameDate: function(date1, date2) {
        if(date1 == null || date2 == null) {
            return false;
        }
        var dateOne = this.parse(date1);
        var dateTwo = this.parse(date2);
        return dateOne.getFullYear() === dateTwo.getFullYear()
            && dateOne.getMonth() === dateTwo.getMonth()
            && dateOne.getDate() === dateTwo.getDate();
    },

    diffInYearsMonthsDays: function (dateFrom, dateTo) {
        dateFrom = this.parse(dateFrom)
        dateTo = this.parse(dateTo)

        var from = {
            d: dateFrom.getDate(),
            m: dateFrom.getMonth(),
            y: dateFrom.getFullYear()
        };

        var to = {
            d: dateTo.getDate(),
            m: dateTo.getMonth(),
            y: dateTo.getFullYear()
        };
        
        var age = {
            d: 0,
            m: 0,
            y: 0
        }

        var daysFebruary = to.y % 4 != 0 || (to.y % 100 == 0 && to.y % 400 != 0)? 28 : 29;
        var daysInMonths = [31, daysFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        age.y = to.y - from.y;
        age.m = to.m - from.m;
        
        if(from.m > to.m) {
            age.y = age.y - 1;
            age.m = to.m - from.m + 12;
        }
        age.d = to.d - from.d;
        
        if(from.d > to.d) {
            age.m = age.m -1;

            if(from.m == to.m) {
                age.y = age.y - 1;
                age.m = age.m + 12;
            }
            age.d = to.d - from.d + daysInMonths[parseInt(from.m)];
        }
        return {
            days:  age.d,
            months: age.m,
            years: age.y
        };
    },

    convertToUnits: function (minutes) {
        var allUnits = {"Years": 365 * 24 * 60, "Months": 30 * 24 * 60, "Weeks": 7 * 24 * 60, "Days": 24 * 60, "Hours": 60, "Minutes": 1};

        var durationRepresentation = function (value, unitName, unitValueInMinutes) {
            return {"value": value, "unitName": unitName, "unitValueInMinutes": unitValueInMinutes, "allUnits": allUnits };
        };

        for (var unitName in  allUnits) {
            var unitValueInMinutes = allUnits[unitName];
            if (minutes || minutes !== 0) {
                if (minutes >= unitValueInMinutes && minutes % unitValueInMinutes === 0) {
                    return durationRepresentation(minutes / unitValueInMinutes, unitName, unitValueInMinutes);
                }
            }
        }
        return durationRepresentation(undefined, undefined, undefined);
    },

    getEndDateFromDuration: function (dateFrom, value, unit){
        dateFrom = this.parse(dateFrom);
        var from = {
            h: dateFrom.getHours(),
            d: dateFrom.getDate(),
            m: dateFrom.getMonth(),
            y: dateFrom.getFullYear()
        };
        var to = new Date(from.y,from.m,from.d,from.h);

        if(unit === "Months"){
            to.setMonth(from.m + value);
        }
        else if(unit === "Weeks"){
            to.setDate(from.d + (value * 7));
        }
        else if(unit === "Days"){
            to.setDate(from.d + value);
        }
        else if(unit === "Hours"){
            to.setHours(from.h + value);
        }
        return to;
    },

    parseLongDateToServerFormat: function(longDate){
        return longDate ? moment(longDate).format("YYYY-MM-DDTHH:mm:ss.SSS") : null;
    }
};
'use strict';

Bahmni.Common.Util.ArrayUtil = {
    chunk: function(array, chunkSize) {
        var chunks = [];
        for (var i = 0; i < array.length; i += chunkSize) chunks.push(array.slice(i, i + chunkSize));
        return chunks;
    },

    groupByPreservingOrder: function(records, groupingFunction, keyName, valueName){
        var groups = [];
        records.forEach(function(record){
            var recordKey = groupingFunction(record);
            var existingGroup = _.find(groups, function(group) { return group[keyName] === recordKey; });
            if(existingGroup) {
                existingGroup[valueName].push(record);
            } else {
                var newGroup = {};
                newGroup[keyName] = recordKey;
                newGroup[valueName] = [record];
                groups.push(newGroup)
            }
        })
        return groups;
    }
};
Modernizr.addTest('ios', function(){
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false
});

Modernizr.addTest('windowOS', function(){
    return navigator.appVersion.indexOf("Win")!=-1 ? true : false
});
'use strict';

Bahmni.Common.VisitControl = function(visitTypes, defaultVisitTypeName, encounterService){
    var self = this;
    self.visitTypes = visitTypes;
    self.defaultVisitTypeName = defaultVisitTypeName;
    self.defaultVisitType = visitTypes.filter(function(visitType) { return visitType.name === defaultVisitTypeName})[0];

    self.startButtonText = function(visitType) {
        return "Start " + visitType.name + " visit";
    };

    self.startVisit = function(visitType) {
        if(self.onStartVisit) self.onStartVisit(visitType);
        self.selectedVisitType = visitType;
    };

    self.createVisit = function(patientUuid, encounter) {
        var encounterTransaction = {patientUuid: patientUuid, visitTypeUuid: self.selectedVisitType.uuid, locationUuid : encounter.locationUuid};
        if(encounter && encounter.encounterTypeUuid){
            encounterTransaction.encounterTypeUuid = encounter.encounterTypeUuid;
        }
        if(encounter && encounter.providers){
            encounterTransaction.providers = encounter.providers;
        }
        return encounterService.create(encounterTransaction);
    };
};


angular.module('bahmni.common.patient', []);

'use strict';

Bahmni.PatientMapper = function (patientConfig) {

    this.patientConfig = patientConfig;

    this.map = function (openmrsPatient) {
        var patient = this.mapBasic(openmrsPatient);
        this.mapAttributes(patient, openmrsPatient.person.attributes);
        return patient;
    };

    this.mapBasic = function (openmrsPatient) {
        var patient = {};
        patient.uuid = openmrsPatient.uuid;
        patient.givenName = openmrsPatient.person.preferredName.givenName;
        patient.familyName = openmrsPatient.person.preferredName.familyName;
        patient.name = patient.givenName + ' ' + patient.familyName;
        patient.age = openmrsPatient.person.age;
        patient.ageText = calculateAge(openmrsPatient.person.birthdate);
        patient.gender = openmrsPatient.person.gender;
        patient.genderText = mapGenderText(patient.gender);
        patient.address = mapAddress(openmrsPatient.person.preferredAddress);
        
        if(openmrsPatient.identifiers) {
            patient.identifier = openmrsPatient.identifiers[0].identifier;
        }

        if (openmrsPatient.person.birthdate) {
            patient.birthdate = parseDate(openmrsPatient.person.birthdate);
        }

        if (openmrsPatient.person.personDateCreated) {
            patient.registrationDate = parseDate(openmrsPatient.person.personDateCreated);
        }

        patient.image = Bahmni.Common.Constants.patientImageUrl + openmrsPatient.uuid + ".jpeg";
        return patient;
    };


    this.getPatientConfigByUuid = function (patientConfig, attributeUuid) {
        if (this.patientConfig.personAttributeTypes) {
            return patientConfig.personAttributeTypes.filter(function (item) {
                return item.uuid === attributeUuid
            })[0];
        }
        return {};
    };

    this.mapAttributes = function (patient, attributes) {
        var self = this;
        if (this.patientConfig) {
            attributes.forEach(function (attribute) {
                var x = self.getPatientConfigByUuid(patientConfig, attribute.attributeType.uuid);
                patient[x.name] = {label: x.description, value: attribute.value};
            });
        }
    };

    var calculateAge = function(birthDate) {
        var DateUtil = Bahmni.Common.Util.DateUtil;
        var age = DateUtil.diffInYearsMonthsDays(birthDate, DateUtil.now());
        var ageInString = "";
        if(age.years) ageInString += age.years + " Years ";
        if(age.months) ageInString += age.months + " Months ";
        if(age.days) ageInString += age.days + " Days";
        return ageInString;
    };

    var mapAddress = function (preferredAddress) {
        return preferredAddress ? {
            "address1": preferredAddress.address1,
            "address2": preferredAddress.address2,
            "address3": preferredAddress.address3,
            "cityVillage": preferredAddress.cityVillage,
            "countyDistrict": preferredAddress.countyDistrict === null ? '' : preferredAddress.countyDistrict,
            "stateProvince": preferredAddress.stateProvince
        } : {};
    };

    var parseDate = function (dateStr) {
        if (dateStr)
            return Bahmni.Common.Util.DateUtil.parse(dateStr.substr(0, 10));
        return dateStr;
    };

    var mapGenderText = function (genderChar) {
        if (genderChar == null) {
            return null;
        } else if (genderChar == 'M' || genderChar == 'm') {
            return "Male";
        } else if (genderChar == 'F' || genderChar == 'f') {
            return "Female";
        } else {
            return "Other";
        }
    };

};

'use strict';

angular.module('bahmni.common.patient')
    .service('patientService', ['$http', function ($http) {
        
        this.getPatient = function (uuid) {
            var patient = $http.get(Bahmni.Common.Constants.openmrsUrl + "/ws/rest/v1/patient/" + uuid, {
                method: "GET",
                params: {v: "full"},
                withCredentials: true
            });
            return patient;
        };

        this.findPatients = function (params) {
            return $http.get("/openmrs/ws/rest/v1/bahmnicore/sql" , {
                method: "GET",
                params: params,
                withCredentials: true
            });
        };

        this.search = function (query, offset) {
            offset = offset || 0;
            return $http.get("/openmrs/ws/rest/v1/bahmnicore/patient", {
                method: "GET",
                params: {q: query, s: "byIdOrNameOrVillage", startIndex: offset},
                withCredentials: true
            });
        };

}]);

angular.module('bahmni.common.patient')
.filter('gender', function() {
	return function(text) {
		if(!text) return "Unknown";
		return text === 'M' ? 'Male' : 'Female';
	};
});
'use strict';

angular.module('bahmni.common.patient').directive('patientSummary', function() {
    var link = function($scope, elem, attrs) {
        $scope.showPatientDetails = false;
        $scope.togglePatientDetails = function() {
            $scope.showPatientDetails = !$scope.showPatientDetails;
        };

        $scope.onImageClick = function() {
            if($scope.onImageClickHandler) {
                $scope.onImageClickHandler();
            }
        }
    };

    return {
        restrict: 'E',
        templateUrl: '../common/patient/header/views/patientSummary.html',
        link: link,
        required: 'patient',
        scope: {
            patient: "=",
            bedDetails: "=",
            onImageClickHandler: "&"
        }
    }
});
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Domain = Bahmni.Common.Domain || {};

angular.module('bahmni.common.domain', []);
'use strict';

Bahmni.Common.Domain.RetrospectiveEntry = function() {
    var _encounterDate;
    var _isRetrospective;
    var self = this;

    Object.defineProperty(this, 'encounterDate', {
        get: function () {
            return self._encounterDate;
        },
        set: function (value) {
            if (value) {
                self._encounterDate = value;
                self._isRetrospective = value < Bahmni.Common.Util.DateUtil.getDate(Bahmni.Common.Util.DateUtil.now());
            }
        }
    });

    Object.defineProperty(this, 'isRetrospective', {
        get: function () {
            return self._isRetrospective;
        }
    });

}

Bahmni.Common.Domain.RetrospectiveEntry.createFrom = function (retrospectiveEncounterDateCookie) {
    var obj = new Bahmni.Common.Domain.RetrospectiveEntry();
    obj.encounterDate = retrospectiveEncounterDateCookie;
    return obj;
};



'use strict';

Bahmni.Common.Domain.Diagnosis = function (codedAnswer, order, certainty, existingObsUuid, freeTextAnswer, diagnosisDateTime, voided) {
    var self = this;
    self.codedAnswer = codedAnswer;
    self.order = order;
    self.certainty = certainty;
    self.existingObs = existingObsUuid;
    self.freeTextAnswer = freeTextAnswer;
    self.diagnosisDateTime = diagnosisDateTime;
    self.diagnosisStatus = undefined;
    self.isNonCodedAnswer = false;
    if (self.codedAnswer) {
        self.conceptName = self.codedAnswer.name;
    }
    self.voided = voided;
    self.firstDiagnosis = null;
    self.comments = "";

    self.getDisplayName = function () {
        if (self.freeTextAnswer) {
            return self.freeTextAnswer;
        }
        else {
            return self.codedAnswer.name;
        }
    };

    self.isPrimary = function () {
        return self.order == "PRIMARY";
    };

    self.isSecondary = function () {
        return self.order == "SECONDARY";
    };

    self.isRuledOut = function(){
        return self.diagnosisStatus == "RULED OUT";
    };

    self.answerNotFilled = function () {
        return !self.codedAnswer.name;
    };

    self.isValidAnswer = function () {
        return (self.codedAnswer.name && self.codedAnswer.uuid)
            || (self.codedAnswer.name && !self.codedAnswer.uuid && self.isNonCodedAnswer)
            || self.answerNotFilled();
    };
    self.isValidOrder = function () {
        return self.answerNotFilled() || self.order !== undefined;
    };

    self.isValidCertainty = function () {
        return self.answerNotFilled() || self.certainty !== undefined;
    };

    self.isEmpty = function () {
        return  self.getDisplayName() === undefined || self.getDisplayName().length === 0;
    };

    self.diagnosisStatusValue = null;
    self.diagnosisStatusConcept = null;
    Object.defineProperty(this, 'diagnosisStatus', {
        get: function () {
            return this.diagnosisStatusValue;
        },
        set: function (newStatus) {
            if (newStatus) {
                this.diagnosisStatusValue = newStatus;
                this.diagnosisStatusConcept = { name: Bahmni.Common.Constants.diagnosisStatuses[newStatus]};
            } else {
                this.diagnosisStatusValue = null;
                this.diagnosisStatusConcept = null;
            }
        }
    });


    self.clearCodedAnswerUuid = function(){
        self.codedAnswer.uuid = undefined;
    };

    self.setAsNonCodedAnswer =  function() {
        self.isNonCodedAnswer = !self.isNonCodedAnswer;
    };
};

'use strict';

angular.module('bahmni.common.domain')
    .service('retrospectiveEntryService', ['$rootScope', '$bahmniCookieStore', function ($rootScope, $bahmniCookieStore) {

        var self = this;
        var hasRestrospectivePrivilege = function () {
            _.find($bahmniCookieStore.get(Bahmni.Common.Constants.currentUser).privileges, function (privilege) {
                return Bahmni.Common.Constants.retrospectivePrivilege === privilege.name;
            });
        };


        this.getRetrospectiveEntry = function () {
            var dateUtil = Bahmni.Common.Util.DateUtil;
            if ($rootScope.retrospectiveEntry && $rootScope.retrospectiveEntry.encounterDate)
                return $rootScope.retrospectiveEntry;

            var retrospectiveEncounterDateCookie = $bahmniCookieStore.get(Bahmni.Common.Constants.retrospectiveEntryEncounterDateCookieName);


            if (retrospectiveEncounterDateCookie && hasRestrospectivePrivilege()) {
                $rootScope.retrospectiveEntry = Bahmni.Common.Domain.RetrospectiveEntry.createFrom(dateUtil.getDate(retrospectiveEncounterDateCookie));
                return $rootScope.retrospectiveEntry;
            }

            $rootScope.retrospectiveEntry = Bahmni.Common.Domain.RetrospectiveEntry.createFrom(dateUtil.now());
            return $rootScope.retrospectiveEntry;
        };

        self.getRetrospectiveEntry();

        // Keep service in sync with encounter date changes on the UI.
        $rootScope.$watch(Bahmni.Common.Constants.rootScopeRetrospectiveEntry, function () {
            $bahmniCookieStore.remove(Bahmni.Common.Constants.retrospectiveEntryEncounterDateCookieName);
            $bahmniCookieStore.put(Bahmni.Common.Constants.retrospectiveEntryEncounterDateCookieName, $rootScope.retrospectiveEntry.encounterDate, {path: '/', expires: 1});
        });

        // on fresh login remove the encounter date cookie. User will need to choose a past encounter date again for retrospective entry after fresh login.
//        $rootScope.$on('event:auth-loggedin', function() {
//            $bahmniCookieStore.remove(Bahmni.Common.Constants.retrospectiveEntryEncounterDateCookieName);
//        });

    }]
);
'use strict';

angular.module('bahmni.common.domain')
    .service('diagnosisService', ['$http', function ($http) {
        var self = this;
        this.getAllFor = function (searchTerm) {
            var url = Bahmni.Common.Constants.emrapiConceptUrl;
            return $http.get(url, {
                params: {term: searchTerm, limit: 20}
            });
        };

        this.getPastDiagnoses = function (patientUuid, visitUuid) {
            var url = Bahmni.Common.Constants.bahmniDiagnosisUrl;
            return $http.get(url, {
                params: { patientUuid: patientUuid , visitUuid: visitUuid}
            });
        };

        this.deleteDiagnosis = function(obsUuid){
            var url = Bahmni.Common.Constants.bahmniDeleteDiagnosisUrl;
            return $http.get(url, {
                params : {obsUuid : obsUuid}
            });
        };

        this.getPastAndCurrentDiagnoses = function (patientUuid, encounterUuid) {
            return self.getPastDiagnoses(patientUuid).then(function (response) {
                var diagnosisMapper = new Bahmni.DiagnosisMapper();
                var allDiagnoses = diagnosisMapper.mapDiagnoses(response.data);
                var pastDiagnoses = diagnosisMapper.mapPastDiagnosis(allDiagnoses, encounterUuid);
                var savedDiagnosesFromCurrentEncounter = diagnosisMapper.mapSavedDiagnosesFromCurrentEncounter(allDiagnoses, encounterUuid);
                return {
                    "pastDiagnoses": pastDiagnoses,
                    "savedDiagnosesFromCurrentEncounter": savedDiagnosesFromCurrentEncounter
                }
            });
        };

    }]);
'use strict';

angular.module('bahmni.common.domain')
    .service('bedService', ['$q', '$http', '$rootScope', function ($q, $http, $rootScope) {

        var mapBedDetails = function(response) {
            if (response.results.length > 0) {
                var bed = response.results[0];
                return {
                   'wardName': bed.physicalLocation.parentLocation.display,
                   'wardUuid': bed.physicalLocation.parentLocation.uuid,
                   'physicalLocationName' : bed.physicalLocation.name,
                   'bedNumber' : bed.bedNumber,
                   'bedId' : bed.bedId
                };
            }
        }

        this.setBedDetailsForPatientOnRootScope = function (uuid) {
            var promise = this.getAssignedBedForPatient(uuid);
            promise.then(function (bedDetails) {
                $rootScope.bedDetails = bedDetails;
            });
            return promise;
        };

        this.getAssignedBedForPatient = function(patientUuid) {
            var deffered = $q.defer();
            $http.get("/openmrs/ws/rest/v1/beds", {
                method: "GET",
                params: {patientUuid: patientUuid, v: "full"},
                withCredentials: true
            }).success(function (response) {
                deffered.resolve(mapBedDetails(response));
            });
            return deffered.promise;
        };

        this.freeBed = function (bedId) {
            return $http.delete("/openmrs/ws/rest/v1/beds/" + bedId, {}, {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        this.assignBed = function (bedId, patientUuid, encounterUuid) {
            var patientJson = {"patientUuid": patientUuid, "encounterUuid" : encounterUuid};
            return $http.post("/openmrs/ws/rest/v1/beds/" + bedId, patientJson, {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        this.getBedInfo = function (bedId) {
            return $http.get("/openmrs/ws/rest/v1/beds/" + bedId + "?v=custom:(bedId,bedNumber,patient:(uuid,person:(age,personName:(givenName,familyName),gender),identifiers:(uuid,identifier),),physicalLocation:(name))", {
                withCredentials: true
            });
        };
    }]);

'use strict';

angular.module('bahmni.common.domain')
    .factory('configurationService', ['$http', '$q', function ($http, $q) {

        var configurationFunctions = {};

        configurationFunctions.encounterConfig = function () {
            return $http.get(Bahmni.Common.Constants.encounterConfigurationUrl, {
                params: {"callerContext": "REGISTRATION_CONCEPTS"},
                withCredentials: true
            });
        };

        configurationFunctions.patientConfig = function () {
            var patientConfig = $http.get(Bahmni.Common.Constants.patientConfigurationUrl, {
                withCredentials: true
            });
            return patientConfig;
        };

        configurationFunctions.patientAttributesConfig = function () {
            return $http.get(Bahmni.Common.Constants.openmrsUrl + "/ws/rest/v1/personattributetype?v=full", {
                withCredentials: true
            });
        };

        configurationFunctions.dosageFrequencyConfig = function () {
            var dosageFrequencyConfig = $http.get(Bahmni.Common.Constants.conceptUrl, {
                method: "GET",
                params: {v: 'custom:(uuid,name,answers)', name: Bahmni.Common.Constants.dosageFrequencyConceptName},
                withCredentials: true
            });
            return dosageFrequencyConfig;
        };

        configurationFunctions.dosageInstructionConfig = function () {
            var dosageInstructionConfig = $http.get(Bahmni.Common.Constants.conceptUrl, {
                method: "GET",
                params: {v: 'custom:(uuid,name,answers)', name: Bahmni.Common.Constants.dosageInstructionConceptName},
                withCredentials: true
            });
            return dosageInstructionConfig;
        };

        configurationFunctions.consultationNoteConfig = function () {
            var consultationNoteConfig = $http.get(Bahmni.Common.Constants.conceptUrl, {
                method: "GET",
                params: {v: 'custom:(uuid,name,answers)', name: Bahmni.Common.Constants.consultationNoteConceptName},
                withCredentials: true
            });
            return consultationNoteConfig;
        };

        configurationFunctions.radiologyObservationConfig = function(){
            var radiologyObservationConfig =  $http.get(Bahmni.Common.Constants.conceptUrl, {
                method:"GET",
                params: { v: 'custom:(uuid,name)', name: Bahmni.Common.Constants.radiologyResultConceptName },
                withCredentials: true
            });
            return radiologyObservationConfig;
        }

        configurationFunctions.labOrderNotesConfig = function () {
            var labOrderNotesConfig = $http.get(Bahmni.Common.Constants.conceptUrl, {
                method: "GET",
                params: {v: 'custom:(uuid,name)', name: Bahmni.Common.Constants.labOrderNotesConcept},
                withCredentials: true
            });
            return labOrderNotesConfig;
        }

        configurationFunctions.radiologyImpressionConfig = function () {
            var radiologyImpressionConfig = $http.get(Bahmni.Common.Constants.conceptUrl, {
                method: "GET",
                params: {v: 'custom:(uuid,name)', name: Bahmni.Common.Constants.impressionConcept},
                withCredentials: true
            });
            return radiologyImpressionConfig;
        }


        configurationFunctions.addressLevels = function () {
            return $http.get(Bahmni.Common.Constants.openmrsUrl + "/module/addresshierarchy/ajax/getOrderedAddressHierarchyLevels.form", {
                withCredentials: true
            });
        };

        configurationFunctions.allTestsAndPanelsConcept = function () {
            var allTestsAndPanelsConcept = $http.get(Bahmni.Common.Constants.conceptUrl, {
                method: "GET",
                params: {
                    v: 'custom:(uuid,name:(uuid,name),setMembers:(uuid,name:(uuid,name)))',
                    name: Bahmni.Common.Constants.allTestsAndPanelsConceptName
                },
                withCredentials: true
            });
            return allTestsAndPanelsConcept;
        };

        configurationFunctions.identifierSourceConfig = function () {
            return $http.get(Bahmni.Common.Constants.idgenConfigurationURL, {
                withCredentials: true
            });
        };

        var existingPromises = {};
        var configurations = {};

        var getConfigurations = function (configurationNames) {
            var configurationsPromiseDefer = $q.defer();
            var promises = [];

            configurationNames.forEach(function (configurationName) {
                if (!existingPromises[configurationName]) {
                    existingPromises[configurationName] = configurationFunctions[configurationName]().then(function (response) {
                        configurations[configurationName] = response.data;
                    });
                    promises.push(existingPromises[configurationName]);
                }
            });

            $q.all(promises).then(function () {
                configurationsPromiseDefer.resolve(configurations);
            });

            return configurationsPromiseDefer.promise;
        };

        return {
            getConfigurations: getConfigurations
        };
    }]);

'use strict';

angular.module('bahmni.common.domain')
    .factory('dispositionService', ['$http', function ($http) {
        var getDispositionActions = function () {
            return $http.get(Bahmni.Common.Constants.conceptUrl
                +"?name="+Bahmni.Common.Constants.dispositionConcept
                +"&v=custom:(uuid,name,answers:(uuid,name,mappings))", {cache: true});
        };

        var getDispositionNoteConcept = function(){
            return $http.get(Bahmni.Common.Constants.conceptUrl
                +"?name="+Bahmni.Common.Constants.dispositionNoteConcept
                +"&v=custom:(uuid,name:(name))", {cache: true});
        };

        var getDispositionByVisit = function(visitUuid){
            return $http.get(Bahmni.Common.Constants.bahmniDispositionByVisitUrl, {
                params: {visitUuid: visitUuid}
            });
        };

        var getDispositionByPatient = function(patientUuid, numberOfVisits){
            return $http.get(Bahmni.Common.Constants.bahmniDispositionByPatientUrl, {
                params: {
                    patientUuid: patientUuid,
                    numberOfVisits: numberOfVisits
                }
            });
        };

        return {
            getDispositionActions: getDispositionActions,
            getDispositionNoteConcept:getDispositionNoteConcept,
            getDispositionByVisit: getDispositionByVisit,
            getDispositionByPatient: getDispositionByPatient
        };

    }]);

'use strict';

angular.module('bahmni.common.domain')
    .service('visitService', ['$http', function ($http) {

        this.getVisit = function (uuid, params) {
            var parameters = params ? params : "custom:(uuid,visitId,visitType,patient,encounters:(uuid,encounterType,voided,orders:(uuid,orderType,voided,concept:(uuid,set,name),),obs:(uuid,value,concept,obsDatetime,groupMembers:(uuid,concept:(uuid,name),obsDatetime,value:(uuid,name),groupMembers:(uuid,concept:(uuid,name),value:(uuid,name),groupMembers:(uuid,concept:(uuid,name),value:(uuid,name)))))))";
            return $http.get(Bahmni.Common.Constants.visitUrl + '/' + uuid,
                {
                    params: {
                        v: parameters
                    }
                }
            );
        };

        this.getVisitForAdmissionDetails = function (uuid) {
            var parameters = "custom:(uuid,visitId,visitType,patient,encounters:(uuid,encounterType,encounterDatetime,voided,provider,obs:(uuid,value,concept,obsDatetime)))";
            return this.getVisit(uuid, parameters);
        };

        this.endVisit = function (visitId) {
            return $http.post(Bahmni.Common.Constants.endVisitUrl + '?visitId=' + visitId, {
                withCredentials: true
            });
        };

        this.updateVisit = function (visitUuid, attributes) {
            return $http.post(Bahmni.Common.Constants.visitUrl + '/' + visitUuid, attributes, {
                withCredentials: true
            });
        };

        this.getVisitSummary = function (visitUuid) {
            return $http.get(Bahmni.Common.Constants.visitSummaryUrl,
                {
                    params: {
                        visitUuid: visitUuid
                    },
                    withCredentials: true
                }
            );
        };

        this.search = function (parameters) {
            return $http.get(Bahmni.Common.Constants.visitUrl, {
                params: parameters,
                withCredentials: true
            });
        };

        this.getVisitType = function () {
            return $http.get(Bahmni.Common.Constants.visitTypeUrl, {
                withCredentials: true
            });

        }
    }]);

'use strict';

angular.module('bahmni.common.domain')
    .service('encounterService', ['$http', '$q', '$rootScope', 'configurations',
        function ($http, $q, $rootScope, configurations) {

    this.buildEncounter = function(encounter){
        encounter.observations = encounter.observations || [];
        encounter.observations.forEach(function(obs) {
            stripExtraConceptInfo(obs);
        });

        encounter.providers = encounter.providers || [];
        if ($rootScope.currentProvider && $rootScope.currentProvider.uuid) {
            encounter.providers.push( { "uuid" : $rootScope.currentProvider.uuid } );
        }
        return encounter;
    };

    this.create = function (encounter) {
        encounter = this.buildEncounter(encounter);

        return $http.post(Bahmni.Common.Constants.bahmniEncounterUrl, encounter, {
            withCredentials:true
        });
    };

    this.delete = function(encounterUuid, reason) {
        return $http.delete(Bahmni.Common.Constants.encounterUrl + "/" + encounterUuid, {
            params: {reason : reason}
        });
    }

    var stripExtraConceptInfo = function(obs) {
        obs.concept = {uuid: obs.concept.uuid, name: obs.concept.name, dataType: obs.concept.dataType };
        obs.groupMembers = obs.groupMembers || [];
        obs.groupMembers.forEach(function(groupMember) {
            stripExtraConceptInfo(groupMember);
        });
    };

            var searchWithoutEncounterDate = function (visitUuid) {
                return $http.post(Bahmni.Common.Constants.bahmniEncounterUrl + '/find', {
                    visitUuids: [visitUuid],
                    includeAll: Bahmni.Common.Constants.includeAllObservations
                }, {
                    withCredentials: true
                });
            };

    this.search = function (visitUuid,encounterDate) {
        if (!encounterDate) return searchWithoutEncounterDate(visitUuid);

        return $http.get(Bahmni.Common.Constants.emrEncounterUrl, {
        	params:{
        		visitUuid : visitUuid,
                encounterDate : encounterDate,
                includeAll : Bahmni.Common.Constants.includeAllObservations
        	},
          withCredentials : true
        });
    };

    var getEncountersOfCurrentVisit = function(patientUuid) {
        var deferredEncounters = $q.defer();
        var options = {
            method:"GET",
            params:{
                patient : patientUuid,
                includeInactive : false,
                v : "custom:(uuid,encounters:(uuid,encounterDatetime,encounterType:(uuid,name,retired)))"
            },
            withCredentials : true
        };

        $http.get(Bahmni.Common.Constants.visitUrl, options).success(function(data) {
            var encounters = [];
            if (data.results.length > 0) {
                encounters = data.results[0].encounters;
                encounters.forEach(function(enc) {
                    if (typeof enc.encounterDatetime == 'string') {
                        enc.encounterDatetime = Bahmni.Common.Util.DateUtil.parse(enc.encounterDatetime);
                    }
                    enc.encounterTypeUuid = enc.encounterType.uuid;
                });
            }
            deferredEncounters.resolve(encounters);
        }).error(function(e) {
            deferredEncounters.reject(e);
        });
        return deferredEncounters.promise;
    };

    this.identifyEncounterForType = function(patientUuid, encounterTypeUuid) {
        var searchable = $q.defer();
        getEncountersOfCurrentVisit(patientUuid).then(function(encounters) {
            if (encounters.length == 0) {
                searchable.resolve(null);
                return;
            }
            var selectedEnc = null;
            encounters.sort(function(e1, e2) {
                return e2.encounterDatetime - e1.encounterDatetime;
            });
            for (var i = 0, count =  encounters.length; i < count; i++) {
                if (encounters[i].encounterTypeUuid == encounterTypeUuid) {
                    selectedEnc = encounters[i];
                    break;
                }
            }
            searchable.resolve(selectedEnc);
        },
        function(responseError) {
            searchable.reject("Couldn't identify prerequisite encounter for this operation.");
        });
        return searchable.promise;
    };

    this.activeEncounter = function (params) {
        return $http.get(Bahmni.Common.Constants.bahmniEncounterUrl + '/active', {
            params: params,
            withCredentials : true
        });
    };

    this.find = function (params) {
        return $http.post(Bahmni.Common.Constants.bahmniEncounterUrl + '/find', params, {
            withCredentials: true
        });
    };

    this.getEncountersForEncounterType = function(patientUuid, encounterTypeUuid) {
        return $http.get(Bahmni.Common.Constants.encounterUrl, {
            params:{
                patient: patientUuid,
                encounterType: encounterTypeUuid,
                v: "custom:(uuid,provider,visit:(uuid,),obs:(uuid,concept:(uuid,name),groupMembers:(id,uuid,obsDatetime,value)))"
            },
            withCredentials : true
        });
    };

    this.getDigitized = function(patientUuid) {
    var patientDocumentEncounterTypeUuid = configurations.encounterConfig().getPatientDocumentEncounterTypeUuid();
        return $http.get(Bahmni.Common.Constants.encounterUrl, {
            params:{
                patient: patientUuid,
                encounterType: patientDocumentEncounterTypeUuid,
                v: "custom:(uuid,obs:(uuid))"
            },
            withCredentials : true
        });
    }
}]);


'use strict';

angular.module('bahmni.common.domain')
    .service('observationsService', ['$http', function ($http) {

        this.fetch = function (patientUuid, conceptNames, scope, numberOfVisits, visitUuid) {
            var params = {concept: conceptNames};
            if(visitUuid){
                params.visitUuid = visitUuid;
                params.scope = scope;
            }
            else{
                params.patientUuid = patientUuid;
                params.numberOfVisits = numberOfVisits;
                params.scope = scope;
            }
            return $http.get(Bahmni.Common.Constants.observationsUrl, {
                params: params,
                withCredentials: true
            });
        };

        this.getObsRelationship = function(targetObsUuid){
            return $http.get(Bahmni.Common.Constants.obsRelationshipUrl, {
                params: {
                    targetObsUuid: targetObsUuid
                },
                withCredentials: true
            });
        };
    }]);

var EncounterConfig = (function () {
    function EncounterConfig(encounterTypes) {
        this.encounterTypes = encounterTypes;
    }
    EncounterConfig.prototype = {
        getConsultationEncounterTypeUuid:function () {
            return this.getEncounterTypeUuid("Consultation");
        },
        getAdmissionEncounterTypeUuid:function () {
            return this.getEncounterTypeUuid("ADMISSION");
        },
        getDischargeEncounterTypeUuid:function () {
            return this.getEncounterTypeUuid("DISCHARGE");
        },
        getTransferEncounterTypeUuid:function () {
            return this.getEncounterTypeUuid("TRANSFER");
        },
        getRadiologyEncounterTypeUuid:function () {
            return this.getEncounterTypeUuid("RADIOLOGY");
        },
        getPatientDocumentEncounterTypeUuid: function() {
            return this.getEncounterTypeUuid("Patient Document");
        },
        getValidationEncounterTypeUuid: function() {
            return this.getEncounterTypeUuid(Bahmni.Common.Constants.validationNotesEncounterType);
        },
        getEncounterTypeUuid:function(encounterTypeName) {
            return this.encounterTypes[encounterTypeName]
        },
        getVisitTypes:function(){
            var visitTypesArray = [];
            for(var name in this.visitTypes) {
                visitTypesArray.push({name: name, uuid: this.visitTypes[name]});
            }
            return visitTypesArray;
        },
        getVisitTypeByUuid: function(uuid) {
            var visitTypes = this.getVisitTypes();
            return visitTypes.filter(function(visitType){
                return visitType.uuid === uuid;
            })[0];
        }
    };
    return EncounterConfig;
})();
Bahmni.Common.Domain.ConceptMapper = function () {
    this.map = function (openMrsConcept) {
        if(!openMrsConcept) return null;
        if(alreadyMappedConcept(openMrsConcept)) return openMrsConcept; // TODO: Clean up: God knows why people are passing already mapped concept. Keeping this non sense check in this one line alone to avoid confusion
        var openMrsDescription = openMrsConcept.descriptions ? openMrsConcept.descriptions[0] : null;
        var shortConceptName = _.find(openMrsConcept.names, {conceptNameType: "SHORT"});
        return {
            uuid: openMrsConcept.uuid,
            name: openMrsConcept.name.name,
            shortName: shortConceptName ? shortConceptName.name : null,
            description: openMrsDescription ? openMrsDescription.description : null,
            set: openMrsConcept.set,
            dataType: openMrsConcept.datatype ? openMrsConcept.datatype.name : null,
            hiAbsolute: openMrsConcept.hiAbsolute,
            lowAbsolute: openMrsConcept.lowAbsolute,
            hiNormal: openMrsConcept.hiNormal,
            handler: openMrsConcept.handler,
            lowNormal: openMrsConcept.lowNormal,
            conceptClass: openMrsConcept.conceptClass ? openMrsConcept.conceptClass.name : null,
            answers: openMrsConcept.answers,
            units: openMrsConcept.units
        }
    };

    var alreadyMappedConcept = function(concept) {
        return !concept.name.name;
    }
};
Bahmni.Common.Domain.ObservationValueMapper = function () {
    this.map = function(obs) {
        var type = obs.concept.dataType ? obs.concept.dataType : obs.type;
        if(type === 'Date') {
            return moment(obs.value).format('D-MMM-YYYY');
        }
        if(type === 'Datetime') {
            var date = Bahmni.Common.Util.DateUtil.parseDatetime(obs.value);
            return date != null ? date.format('DD MMM YYYY, hh:mm A') : "";
        }
        if(obs.isMultiSelect){
            return obs.getValues();
        }
        if(type === 'Boolean') {
            return obs.value === true ? "Yes" : obs.value === false ? "No" : obs.value;
        }
        if(type === 'Coded' || typeof obs.value === 'object') {
            return obs.value ? (obs.value.shortName ? obs.value.shortName : (obs.value.name ? obs.value.name : obs.value)) : "";
        }

        return obs.value;
    }
};

Bahmni.DiagnosisMapper = function () {

    var self = this;

    var mapDiagnosis = function (diagnosis) {
        if (!diagnosis.codedAnswer) {
            diagnosis.codedAnswer = {
                name: undefined,
                uuid: undefined
            }
        }
        var mappedDiagnosis = angular.extend(new Bahmni.Common.Domain.Diagnosis(), diagnosis);
        if (mappedDiagnosis.firstDiagnosis) {
            mappedDiagnosis.firstDiagnosis = mapDiagnosis(mappedDiagnosis.firstDiagnosis);
        }
        if (mappedDiagnosis.latestDiagnosis) {
            mappedDiagnosis.latestDiagnosis = mapDiagnosis(mappedDiagnosis.latestDiagnosis);
        }

        if (diagnosis.diagnosisStatusConcept) {
            for (var status in Bahmni.Common.Constants.diagnosisStatuses) {
                if (Bahmni.Common.Constants.diagnosisStatuses[status] === diagnosis.diagnosisStatusConcept.name) {
                    mappedDiagnosis.diagnosisStatus  = status;
                }
            }
        }
        
        return mappedDiagnosis;
    };

    self.mapDiagnosis = mapDiagnosis;
    
    self.mapDiagnoses = function (diagnoses) {
        var mappedDiagnoses = [];
        diagnoses.forEach(function (diagnosis) {
            mappedDiagnoses.push(mapDiagnosis(diagnosis));
        });
        return mappedDiagnoses;
    };
    
    self.mapPastDiagnosis = function (diagnoses, currentEncounterUuid) {
        var pastDiagnosesResponse = [];
        diagnoses.forEach(function (diagnosis) {
            if (diagnosis.encounterUuid !== currentEncounterUuid) {
                diagnosis.previousObs = diagnosis.existingObs;
                diagnosis.existingObs = null;
                diagnosis.inCurrentEncounter = undefined;
                pastDiagnosesResponse.push(diagnosis);
            }
        });
        return pastDiagnosesResponse;
    };

    self.mapSavedDiagnosesFromCurrentEncounter = function (diagnoses, currentEncounterUuid) {
        var savedDiagnosesFromCurrentEncounter = [];
        diagnoses.forEach(function (diagnosis) {
            if (diagnosis.encounterUuid === currentEncounterUuid) {
                diagnosis.inCurrentEncounter = true;
                savedDiagnosesFromCurrentEncounter.push(diagnosis);
            }
        });
        return savedDiagnosesFromCurrentEncounter;
    };

};

'use strict';
var Bahmni = Bahmni || {};
Bahmni.ConceptSet = Bahmni.ConceptSet || {};

angular.module('bahmni.common.conceptSet', ['bahmni.common.uiHelper', 'ui.select2', 'pasvaz.bindonce', 'ngSanitize']);
angular.module('bahmni.common.conceptSet')
    .directive('buttonSelect', function () {
    return {
        restrict:'E',
        scope:{ observation:'='},


        link:function(scope, element, attrs){
            if(attrs.dirtyCheckFlag){
                scope.hasDirtyFlag = true;
            }
        },
        controller:function ($scope) {
            $scope.isSet = function(answer) {
                return $scope.observation.hasValueOf(answer);
            };

            $scope.select = function (answer) {
                $scope.observation.toggleSelection(answer);
            };

            $scope.getAnswerDisplayName = function(answer) {
                var shortName = answer.names ? _.first(answer.names.filter(function(name) {return name.conceptNameType === 'SHORT'})): null;
                return  shortName  ? shortName.name : answer.displayString;
            };
        },
        template:'<div ng-class="{\'multi-select-widget\'' +
        ': observation.isMultiSelect}" class="multi-select-button-group">' +
        '<button type="button" class="grid-row-element" ng-class="{active: isSet(answer)}"'+
        'ng-click="select(answer)" ng-repeat="answer in ::observation.getPossibleAnswers()"><i class="icon-ok"></i>{{::getAnswerDisplayName(answer)}}'+
            '</button></div>'
    };
});
'use strict';

angular.module('bahmni.common.conceptSet')
    .directive('concept', ['RecursionHelper','spinner', 'conceptSetService', '$filter',function (RecursionHelper,spinner, conceptSetService, $filter) {
        var link = function ($scope, $element,$attr) {
            var conceptMapper = new Bahmni.Common.Domain.ConceptMapper();
            $scope.showTitle = $scope.showTitle === undefined ? true : $scope.showTitle;

            $scope.cloneNew = function(observation, parentObservation) {
                var newObs = observation.cloneNew();
                var index = parentObservation.groupMembers.indexOf(observation);
                parentObservation.groupMembers.splice(index+1, 0, newObs);
            };

            $scope.getStringValue = function(observations) {
                return observations.map(function(observation) {
                    return observation.value + ' (' + $filter('date')(observation.date, 'dd MMM yy') + ")";
                }).join(", ");
            };
            $scope.selectOptions = function(codedConcept){
                var limit = 1000;
                return {
                    ajax: {
                        url: Bahmni.Common.Constants.conceptUrl,
                        dataType: 'json',
                        quietMillis: 100,
                        cache: true,
                        data: function (term, page) {
                            return {
                                q: term,
                                limit: limit,
                                startIndex: (page - 1) * limit,
                                answerTo: codedConcept.uuid,
                                v: "custom:(uuid,name:(name))"
                            };
                        },
                        results: function (data) {
                            return {
                                //Remove uniq logic after web service rest bug is fixed
                                results: _.sortBy(_.uniq(data.results, _.property('uuid')).map(conceptMapper.map), 'name'),
                                more: !!_.find(data.links, function(link) { return link.rel === "next"; })
                            };
                        }
                    },
                    allowClear: true,
                    placeholder: 'Select',
                    formatResult: _.property('name'),
                    formatSelection: _.property('name'),
                    id: _.property('uuid')
                };
            };
        };

        var compile = function(element) {
            return RecursionHelper.compile(element, link);
        };

        return {
            restrict: 'E',
            compile:compile,
            scope: {
                observation: "=",
                atLeastOneValueIsSet : "=",
                showTitle: "=",
                conceptSetRequired: "=",
                rootObservation: "=",
                patient: "="
            },
            templateUrl:'../common/concept-set/views/observation.html'
        }
    }]).directive('conceptSet', ['contextChangeHandler', 'appService', 'observationsService', function (contextChangeHandler, appService, observationsService) {
        var template =
            '<form>' +
                '<concept concept-set-required="conceptSetRequired" root-observation="rootObservation" patient="patient" ' +
                'observation="rootObservation" at-least-one-value-is-set="atLeastOneValueIsSet" ' +
                'show-title="showTitleValue" ng-if="!rootObservation.hidden">' +
                '</concept>' +
            '</form>';

        var numberOfLevels = appService.getAppDescriptor().getConfigValue('maxConceptSetLevels') || 4;
        var fields = ['uuid', 'name', 'names', 'set', 'hiNormal', 'lowNormal', 'hiAbsolute', 'lowAbsolute', 'units', 'conceptClass', 'datatype', 'handler', 'answers:(uuid,name,displayString,names)', 'descriptions'];
        var customRepresentation = Bahmni.ConceptSet.CustomRepresentationBuilder.build(fields, 'setMembers', numberOfLevels);

        var controller = function ($scope, conceptSetService, conceptSetUiConfigService, spinner) {
            var conceptSetName = $scope.conceptSetName;
            var conceptSetUIConfig = conceptSetUiConfigService.getConfig();
            var observationMapper = new Bahmni.ConceptSet.ObservationMapper();
            var validationHandler = $scope.validationHandler() || contextChangeHandler;

            var focusFirstObs = function() {
                if($scope.conceptSetFocused && $scope.rootObservation.groupMembers && $scope.rootObservation.groupMembers.length > 0) {
                    var firstObs = _.find($scope.rootObservation.groupMembers, function(obs){
                        return obs.isFormElement && obs.isFormElement();
                    });
                    firstObs && (firstObs.isFocused = true);
                }
            };

            var init = function(){
                return conceptSetService.getConceptSetMembers({name: conceptSetName, v: "custom:" + customRepresentation}).then(function (response) {
                    $scope.conceptSet = response.data.results[0];
                    $scope.rootObservation = $scope.conceptSet ? observationMapper.map($scope.observations, $scope.conceptSet, conceptSetUIConfig) : null;
                    $scope.rootObservation.conceptSetName = $scope.conceptSetName;
                    focusFirstObs();
                    updateObservationsOnRootScope();
                });
            };
            spinner.forPromise(init());

            $scope.atLeastOneValueIsSet = false;
            $scope.conceptSetRequired = false;
            $scope.showTitleValue = $scope.showTitle();
            $scope.numberOfVisits = conceptSetUIConfig[conceptSetName] && conceptSetUIConfig[conceptSetName].numberOfVisits ? conceptSetUIConfig[conceptSetName].numberOfVisits : null;

            var updateObservationsOnRootScope = function () {
                if($scope.rootObservation){
                    for (var i = 0; i < $scope.observations.length; i++) {
                        if ($scope.observations[i].concept.uuid === $scope.rootObservation.concept.uuid) {
                            $scope.observations[i] = $scope.rootObservation;
                            return;
                        }
                    }
                    $scope.observations.push($scope.rootObservation);
                }
            };

            var contextChange = function () {
                $scope.atLeastOneValueIsSet = $scope.rootObservation && $scope.rootObservation.atLeastOneValueSet();
                $scope.conceptSetRequired = $scope.required;
                var errorMessage = null;
                var invalidNodes = $scope.rootObservation && $scope.rootObservation.groupMembers.filter(function(childNode){
                    if(childNode.erroneousValue || (childNode.isObservationNode && childNode.abnormalObs!=null &&childNode.abnormalObs.erroneousValue)){
                        errorMessage = "The value you entered (red field) is outside the range of allowable values for that record. Please check the value.";
                        return true;
                    }
                    return !childNode.isValid($scope.atLeastOneValueIsSet, $scope.conceptSetRequired);
                });
                return {allow: !invalidNodes || invalidNodes.length === 0, errorMessage: errorMessage};
            };
            contextChangeHandler.add(contextChange);
            var validateObservationTree = function () {
                if(!$scope.rootObservation) return true;
                $scope.atLeastOneValueIsSet = $scope.rootObservation.atLeastOneValueSet();
                var invalidNodes = $scope.rootObservation.groupMembers.filter(function(childNode){
                    return childNode.isObservationNode && !childNode.isValid($scope.atLeastOneValueIsSet);
                });
                return {allow: (!invalidNodes || invalidNodes.length === 0)};
            };

            validationHandler.add(validateObservationTree);

            var flattenObs = function(observations) {
                var flattened = [];
                flattened.push.apply(flattened, observations);
                observations.forEach(function(obs) {
                    if(obs.groupMembers && obs.groupMembers.length > 0) {
                        flattened.push.apply(flattened, flattenObs(obs.groupMembers));
                    }
                });
                return flattened;
            };

            $scope.$on('event:showPrevious' + conceptSetName, function (event) {

                return spinner.forPromise(observationsService.fetch($scope.patient.uuid, $scope.conceptSetName, null, $scope.numberOfVisits, null, true)).then(function (response) {
                    var recentObservations = flattenObs(response.data);
                    var conceptSetObservation = $scope.observations.filter(function(observation){
                        return observation.conceptSetName === $scope.conceptSetName;
                    });
                    flattenObs(conceptSetObservation).forEach(function (obs) {
                        var correspondingRecentObs = _.filter(recentObservations, function (recentObs) {
                            return obs.concept.uuid === recentObs.concept.uuid;
                        });
                        if (correspondingRecentObs != null && correspondingRecentObs.length > 0) {
                            correspondingRecentObs.sort(function (obs1, obs2) {
                                return new Date(obs2.encounterDateTime) - new Date(obs1.encounterDateTime);
                            });
                            obs.previous = correspondingRecentObs.map(function (previousObs) {
                                return {
                                    value: new Bahmni.Common.Domain.ObservationValueMapper().map(previousObs),
                                    date: previousObs.observationDateTime
                                };
                            });
                        }
                    });
                });
            });
        };

        return {
            restrict: 'E',
            scope: {
                conceptSetName: "=",
                observations: "=",
                required: "=",
                showTitle: "&",
                validationHandler: "&",
                patient: "=",
                conceptSetFocused: "="
            },
            template: template,
            controller: controller
        }
    }]);
'use strict';

angular.module('bahmni.common.conceptSet')
    .directive('obsConstraints', function () {
        var attributesMap = {'Numeric': 'number', 'Date': 'date'};
        var link = function ($scope, element, attrs, ctrl) {
            var attributes = {};
            var obsConcept = $scope.obs.concept;
            attributes['type'] = attributesMap[obsConcept.dataType] || "text";
            if (attributes['type'] === 'number') {
                attributes['step'] = 'any';
            }
            if (obsConcept.hiNormal) {
                attributes['max'] = obsConcept.hiNormal;
            }
            if (obsConcept.lowNormal) {
                attributes['min'] = obsConcept.lowNormal;
            }
            element.attr(attributes);
        };

        return {
            link: link,
            scope: {
                obs: '='
            },
            require: 'ngModel'
        }
    });


'use strict';

angular.module('bahmni.common.conceptSet')
    .factory('conceptSetService', ['$http', '$q', function ($http, $q) {
        var getConceptSetMembers = function (params, cache) {
            return $http.get(Bahmni.Common.Constants.conceptUrl, 
            	{
            		params: params,
            		cache: cache
            	});
        };

        var getComputedValue = function(encounterData){
            var url = Bahmni.Common.Constants.encounterModifierUrl;
            return $http.post(url, encounterData, {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        return {
            getConceptSetMembers: getConceptSetMembers,
            getComputedValue: getComputedValue
        };

    }]);


'use strict';

angular.module('bahmni.common.conceptSet')
    .factory('conceptSetUiConfigService', ['$http', '$q', 'appService', function ($http, $q, appService) {
        var setConceptUuidInsteadOfName = function(config, conceptNameField, uuidField) {
            var conceptName = config[conceptNameField];
            if(conceptName != null ) {
                return $http.get(Bahmni.Common.Constants.conceptUrl, {
                    params: {name: conceptName, v: "custom:(uuid,name)"}
                }).then(function(response) {
                    var concept = response.data.results.filter(function(c) {return c.name.name === conceptName;})
                    if(concept.length > 0) {
                        config[uuidField] = concept[0].uuid;
                    }
                });
            }
        }

        var setExtraData = function(config) {
            Object.getOwnPropertyNames(config).forEach(function(conceptConfigKey) {
                var conceptConfig = config[conceptConfigKey];
                if(conceptConfig['freeTextAutocomplete'] instanceof Object) {
                    setConceptUuidInsteadOfName(conceptConfig['freeTextAutocomplete'], 'codedConceptName', 'codedConceptUuid');
                    setConceptUuidInsteadOfName(conceptConfig['freeTextAutocomplete'], 'conceptSetName', 'conceptSetUuid');
                }
            })
        }

        var getConfig = function() {
            var config = appService.getAppDescriptor().getConfigValue("conceptSetUI") || {};
            setExtraData(config);
            return config;
        }

        return {
            getConfig: getConfig
        }
    }]);

Bahmni.ConceptSet.ObservationMapper = function () {
    var conceptMapper = new Bahmni.Common.Domain.ConceptMapper();
    var self = this;
    // TODO : Shouldn't this be in clinical module. Don't see a reason for this to be in concept-set code - Shruthi
    this.getObservationsForView = function (observations, conceptSetConfig) {
        return internalMapForDisplay(observations, conceptSetConfig);
    };

    var internalMapForDisplay = function (observations, conceptSetConfig) {
        var observationsForDisplay = [];
        _.forEach(observations, function (savedObs) {
            if (savedObs.concept.conceptClass && (savedObs.concept.conceptClass === Bahmni.Common.Constants.conceptDetailsClassName || savedObs.concept.conceptClass.name === Bahmni.Common.Constants.conceptDetailsClassName)) {
                var observationNode = new Bahmni.ConceptSet.ObservationNode(savedObs, savedObs, []);
                var obsToDisplay = createObservationForDisplay(observationNode, observationNode.primaryObs.concept);
                if (obsToDisplay) observationsForDisplay.push(obsToDisplay);
            } else {
                if (savedObs.concept.set) {
                    if (conceptSetConfig[savedObs.concept.name] && conceptSetConfig[savedObs.concept.name].grid) {
                        savedObs.value = self.getGridObservationDisplayValue(savedObs);
                        observationsForDisplay = observationsForDisplay.concat(createObservationForDisplay(savedObs, savedObs.concept))
                    }
                    else {
                        var groupMemberObservationsForDisplay = internalMapForDisplay(savedObs.groupMembers, conceptSetConfig);
                        observationsForDisplay = observationsForDisplay.concat(groupMemberObservationsForDisplay);
                    }
                } else {
                    var obsToDisplay = null;
                    if (savedObs.isMultiSelect) {
                        obsToDisplay = savedObs;
                    }
                    else if (!savedObs.hidden) {
                        var observation = newObservation(savedObs.concept, savedObs, []);
                        obsToDisplay = createObservationForDisplay(observation, observation.concept);
                    }
                    if (obsToDisplay) observationsForDisplay.push(obsToDisplay);
                }
            }
        });
        return observationsForDisplay;
    };


    this.map = function (observations, rootConcept, conceptSetConfig) {
        var savedObs = findInSavedObservation(rootConcept, observations)[0];
        return mapObservation(rootConcept, savedObs, conceptSetConfig || {});
    };

    var findInSavedObservation = function (concept, observations) {
        return _.filter(observations, function (obs) {
            return obs && obs.concept && concept.uuid === obs.concept.uuid;
        });
    };

    var mapObservation = function (concept, savedObs, conceptSetConfig) {
        var obs = null;
        if (savedObs && (savedObs.isObservation || savedObs.isObservationNode))
            return savedObs;
        var mappedGroupMembers = concept.set ? mapObservationGroupMembers(savedObs ? savedObs.groupMembers : [], concept, conceptSetConfig) : [];

        if (concept.conceptClass.name === Bahmni.Common.Constants.conceptDetailsClassName) {
            obs = newObservationNode(concept, savedObs, conceptSetConfig, mappedGroupMembers);
        } else {
            obs = newObservation(concept, savedObs, conceptSetConfig, mappedGroupMembers);
        }

        new Bahmni.ConceptSet.MultiSelectObservations(conceptSetConfig).map(mappedGroupMembers);
        return obs;
    };

    var mapObservationGroupMembers = function (observations, parentConcept, conceptSetConfig) {
        var observationGroupMembers = [];
        var conceptSetMembers = parentConcept.setMembers;
        conceptSetMembers.forEach(function (memberConcept) {
            var savedObservations = findInSavedObservation(memberConcept, observations);
            var configForConcept = conceptSetConfig[memberConcept.name.name] || {};
            var numberOfNodes = configForConcept.multiple || 1;
            for (var i = savedObservations.length - 1; i >= 0; i--) {
                observationGroupMembers.push(mapObservation(memberConcept, savedObservations[i], conceptSetConfig))
            }
            for (var i = 0; i < numberOfNodes - savedObservations.length; i++) {
                observationGroupMembers.push(mapObservation(memberConcept, null, conceptSetConfig))
            }
        });
        return observationGroupMembers;
    };


    var getDatatype = function (concept) {
        if (concept.dataType) {
            return concept.dataType;
        }
        return concept.datatype && concept.datatype.name;
    };

    // tODO : remove conceptUIConfig
    var newObservation = function (concept, savedObs, conceptSetConfig, mappedGroupMembers) {
        var observation = buildObservation(concept, savedObs, mappedGroupMembers);
        var obs = new Bahmni.ConceptSet.Observation(observation, savedObs, conceptSetConfig, mappedGroupMembers);
        if (getDatatype(concept) == "Boolean") {
            obs = new Bahmni.ConceptSet.BooleanObservation(obs, conceptSetConfig);
        }
        return obs;
    };

    // TODO : remove conceptUIConfig
    var newObservationNode = function (concept, savedObsNode, conceptSetConfig, mappedGroupMembers) {
        var observation = buildObservation(concept, savedObsNode, mappedGroupMembers);
        return new Bahmni.ConceptSet.ObservationNode(observation, savedObsNode, conceptSetConfig);
    };

    function buildObservation(concept, savedObs, mappedGroupMembers) {
        var comment = savedObs ? savedObs.comment : null;
        return { concept: conceptMapper.map(concept), units: concept.units, label: getLabel(concept), possibleAnswers: concept.answers, groupMembers: mappedGroupMembers, comment: comment};
    }

    var createObservationForDisplay = function (observation, concept) {
        if (observation.value == null) return;
        var observationValue = getObservationDisplayValue(observation);
        observationValue = observation.durationObs ? observationValue + " " + getDurationDisplayValue(observation.durationObs) : observationValue;
        return { "value": observationValue, "abnormalObs": observation.abnormalObs, "duration": observation.durationObs,
            "provider": observation.provider, "label": getLabel(observation.concept), "foo": observation,
            "observationDateTime": observation.observationDateTime, "concept": concept,
            "comment": observation.comment, "uuid": observation.uuid};
    };

    var getObservationDisplayValue = function (observation) {
        if (observation.isBoolean || observation.type === "Boolean") {
            return observation.value === true ? "Yes" : "No";
        }
        if(!observation.value) return "";
        if(typeof observation.value.name === 'object') {
            var valueConcept = conceptMapper.map(observation.value);
            return valueConcept.shortName || valueConcept.name;
        }
        return observation.value.shortName || observation.value.name || observation.value ;
    };

    var getDurationDisplayValue = function (duration) {
        var durationForDisplay = Bahmni.Common.Util.DateUtil.convertToUnits(duration.value);
        if (durationForDisplay["value"] && durationForDisplay["unitName"]) {
            return "since " + durationForDisplay["value"] + " " + durationForDisplay["unitName"];
        }
        return "";
    };

    this.getGridObservationDisplayValue = function (observation) {
        var memberValues = _.compact(_.map(observation.groupMembers, function (member) {
            return getObservationDisplayValue(member);
        }));
        return memberValues.join(', ');
    };

    var getLabel = function(concept) {
        var mappedConcept = conceptMapper.map(concept);
        return mappedConcept.shortName || mappedConcept.name;
    }
};

Bahmni.ConceptSet.Observation = function (observation, savedObs, conceptUIConfig) {
    var self = this;
    angular.extend(this, observation);
    this.isObservation = true;
    this.conceptUIConfig = conceptUIConfig[this.concept.name] || []
    this.uniqueId = _.uniqueId('observation_');
    this.erroneousValue = null;

    if (savedObs) {
        this.uuid = savedObs.uuid;
        this.value = savedObs.value;
        this.observationDateTime = savedObs.observationDateTime;
        this.provider = savedObs.provider;
    } else {
        this.value = this.conceptUIConfig.defaultValue;         
    }

    if(this.conceptUIConfig.autocomplete && this.conceptUIConfig.answersConceptName) {
        Object.defineProperty(this, 'autocompleteValue', {
            enumerable: true,
            get: function () {
                return (this.value != null && (typeof this.value === "object")) ? this.value.name: this.value;
            },
            set: function (newValue) {
                this.value = newValue;
            }
        });
    }


    Object.defineProperty(this, 'value', {
                enumerable: true,
                get: function () {
                    if(self._value!=null){
                        return self._value;
                    }
                    return savedObs ? savedObs.value : undefined;
                },
                set: function (newValue) {
                    self._value = newValue;
                    self.onValueChanged();
                }
            });

    this.cloneNew = function() {
        var oldObs = angular.copy(observation);
        if(oldObs.groupMembers && oldObs.groupMembers.length > 0) {
            oldObs.groupMembers = _.filter(oldObs.groupMembers, function(member) {
                return !member.isMultiSelect;
            });
            oldObs.groupMembers = _.map(oldObs.groupMembers, function(member) {
                return member.cloneNew();
            });
        }
        new Bahmni.ConceptSet.MultiSelectObservations(conceptUIConfig).map(oldObs.groupMembers);
        var clone = new Bahmni.ConceptSet.Observation(oldObs, null, conceptUIConfig);
        clone.comment = undefined;
        return clone;
    };
};

Bahmni.ConceptSet.Observation.prototype = {
    displayValue: function () {
        if (this.possibleAnswers.length > 0) {
            for (var i = 0; i < this.possibleAnswers.length; i++) {
                if (this.possibleAnswers[i].uuid === this.value) {
                    return this.possibleAnswers[i].display;
                }
            }
        }
        else {
            return this.value;
        }
    },

    isGroup: function () {
        if (this.groupMembers)
            return this.groupMembers.length > 0;
        return false;
    },

    isComputed: function() {
        return this.concept.conceptClass === "Computed";
    },

    isComputedAndEditable: function() {
        return this.concept.conceptClass === "Computed/Editable";
    },

    isNumeric: function () {
        return this.getDataTypeName() === "Numeric";
    },

    isText: function () {
        return this.getDataTypeName() === "Text";
    },

    isCoded: function () {
        return this.getDataTypeName() === "Coded";
    },

    isDatetime: function() {
        return this.getDataTypeName() === "Datetime";
    },

    isImage: function () {
        return this.concept.conceptClass == Bahmni.Common.Constants.imageClassName;
    },

    getDataTypeName: function () {
        return this.concept.dataType;
    },
    
    isDateDataType: function () {
        return 'Date'.indexOf(this.getDataTypeName()) != -1;
    },

    getPossibleAnswers: function() {
        return this.possibleAnswers;
    },

    getHighAbsolute: function () {
        return this.concept.hiAbsolute;
    },

    getLowAbsolute: function () {
        return this.concept.lowAbsolute;
    },

    isHtml5InputDataType: function () {
        return ['Date', 'Numeric'].indexOf(this.getDataTypeName()) != -1;
    },

    isGrid: function () {
        return this.conceptUIConfig.grid;
    },

    isButtonRadio: function () {
        return this.conceptUIConfig.buttonRadio;
    },

    getControlType: function () {
        if (this.hidden) return "hidden";
        if (this.conceptUIConfig.freeTextAutocomplete) return "freeTextAutocomplete";
        if (this.isHtml5InputDataType()) return "html5InputDataType";
        if (this.isImage()) return "image";
        if (this.isText()) return "text";
        if (this.isCoded()) return this._getCodedControlType();
        if (this.isGrid()) return "grid";
        if (this.isDatetime()) return "datetime";
        return "unknown";
    },

    canHaveComment: function() {
        return !this.isText() && !this.isImage();
    },

    canAddMore: function() {
        return this.conceptUIConfig.allowAddMore == true;
    },

    isStepperControl: function() {
        if(this.isNumeric()){
            return this.conceptUIConfig.stepper;
        }
    },

    isConciseText: function(){
        return this.conceptUIConfig.conciseText == true;
    },

    _getCodedControlType: function () {
        var conceptUIConfig = this.conceptUIConfig;
        if (conceptUIConfig.autocomplete) return "autocomplete";
        return "buttonselect";

    },

    onValueChanged: function () {
        if (this.isNumeric()) {
            this.setErroneousValue();
        }
    },

    setErroneousValue: function () {
            if (this.hasValue()) {
                var erroneousValue = this.value >= (this.concept.hiAbsolute || Infinity) || this.value < (this.concept.lowAbsolute || 0);
                this.erroneousValue = erroneousValue;
            } else {
                this.erroneousValue = undefined;
            }
        },

    getInputType: function () {
        return this.getDataTypeName();
    },

    atLeastOneValueSet: function () {
        if (this.isGroup()) {
            return this.groupMembers.some(function (childNode) {
                return childNode.atLeastOneValueSet();
            })
        } else {
            return this.hasValue();
        }
    },

    hasValue: function () {
        var value = this.value;
        if (value === false) return true;
        if (value === 0) return true; //!value ignores 0
        if (value === '' || !value) return false;
        if (value instanceof Array) return value.length > 0;
        return true;
    },

    hasValueOf: function(value) {
        if(!this.value || !value) return false;
        return this.value == value || this.value.uuid == value.uuid;
    },

    toggleSelection: function(answer) {
        if (this.value && this.value.uuid === answer.uuid) {
            this.value = null;
        } else {
            this.value = answer;
        }
    },

    isValidDate: function () {
        if (!this.hasValue()) return true;
        var date = Bahmni.Common.Util.DateUtil.parse(this.value);
        return date.getUTCFullYear() && date.getUTCFullYear().toString().length <= 4;
    },

    hasInvalidDateTime: function () {
        return this.value === "Invalid Datetime";
    },

    isValid: function (checkRequiredFields, conceptSetRequired) {
        if (this.hidden) return true;
        if (this.isGroup()) return this._hasValidChildren(checkRequiredFields, conceptSetRequired);
        if (conceptSetRequired && this.isRequired() && !this.hasValue()) return false;
        if (checkRequiredFields && this.isRequired() && !this.hasValue()) return false;
        if (this._isDateDataType()) return this.isValidDate();
        if (this._isDateTimeDataType()) return !this.hasInvalidDateTime();
        if (this.erroneousValue) return false;
        return true;
    },

    _isDateDataType: function () {
        return 'Date'.indexOf(this.getDataTypeName()) != -1;
    },

    _isDateTimeDataType: function () {
        return 'Datetime'.indexOf(this.getDataTypeName()) != -1;
    },

    isRequired: function () {
        return this.conceptUIConfig.required;
    },

    isFormElement: function() {
        return (!this.concept.set || this.isGrid()) && !this.isComputed();
    },

    _hasValidChildren: function (checkRequiredFields, conceptSetRequired) {
        return this.groupMembers.every(function (member) {
            return member.isValid(checkRequiredFields, conceptSetRequired)
        });
    },

    markAsNonCoded: function() {
      this.markedAsNonCoded = !this.markedAsNonCoded;
    },

    toggleVoidingOfImage: function() {
        this.voided = !this.voided;
    }

};
Bahmni.ConceptSet.BooleanObservation = function(observation, conceptUIConfig) {
    angular.extend(this, observation);

    this.isBoolean = true;
    this.conceptUIConfig = conceptUIConfig || {};

    this.cloneNew = function() {
        var clone = new Bahmni.ConceptSet.BooleanObservation(angular.copy(observation), conceptUIConfig);
        clone.comment = undefined;
        clone.uuid = null;
        return clone;
    };

    var possibleAnswers = [
        {displayString: "Yes", value: true},
        {displayString: "No", value: false}
    ];

    this.getPossibleAnswers = function() {
        return possibleAnswers;
    };

    this.hasValueOf = function (answer) {
        return this.value === answer.value;
    };

    this.toggleSelection = function(answer) {
        if(this.value === answer.value){
            this.value = null;
        } else{
            this.value = answer.value;
        }
    };

    this.isFormElement = function(){
        return true;
    };

    this.getControlType = function(){
        return "buttonselect";
    };

    this.isRequired = function () {
        return this.getConceptUIConfig().required;
    };

    this.isComputedAndEditable = function() {
        return this.concept.conceptClass === "Computed/Editable";
    };

    this.atLeastOneValueSet = function() {
        return this.value;
    };
    this.isValid = function(checkRequiredFields, conceptSetRequired) {
        var notYetSet = function(value) {
            return (typeof value == 'undefined'  || value == null);
        };
        if (conceptSetRequired && this.isRequired() && notYetSet(this.value)) return false;
        if (checkRequiredFields && this.isRequired() && notYetSet(this.value)) return false;
        return true;
    };

    this.canHaveComment = function() {
        return true;
    };

    this.getConceptUIConfig = function() {
        return this.conceptUIConfig[this.concept.name] || {};
    };

    this.canAddMore = function() {
        return this.getConceptUIConfig().allowAddMore == true;
    };
};

Bahmni.ConceptSet.ObservationNode = function (observation, savedObs, conceptUIConfig) {
    angular.extend(this, observation);

    this.cloneNew = function() {
        var oldObs = angular.copy(observation);
        oldObs.groupMembers = _.map(oldObs.groupMembers, function(member) {
            return member.cloneNew();
        });

        var clone = new Bahmni.ConceptSet.ObservationNode(oldObs, null, conceptUIConfig);
        clone.comment = undefined;
        return clone;
    };

    Object.defineProperty(this, 'value', {
        enumerable: true,
        get: function () {
            if (this.primaryObs) {
                return typeof this.getPrimaryObs().value==="object"  && this.getPrimaryObs().value!==null?
                    this.getPrimaryObs().value.name:this.getPrimaryObs().value;
            }
            return undefined;
        },
        set: function (newValue) {
            if(typeof newValue === "object"){
                this.getCodedObs().value = newValue;
                this.getCodedObs().voided = false;

                if(this.getFreeTextObs()){
                    if(this.getFreeTextObs().uuid){
                        this.getFreeTextObs().voided = true;
                    }else{
                        this.getFreeTextObs().value = undefined;
                    }
                }
            }
            else {
                var freeTextObs = this.getFreeTextObs();
                if(freeTextObs){
                    freeTextObs.value = newValue;
                    freeTextObs.voided = false;
                }
                if(this.getCodedObs()){
                    if(this.getCodedObs().uuid){
                        this.getCodedObs().voided = true;
                    }else{
                        this.getCodedObs().value = undefined;
                    }
                }
            }
            this.onValueChanged(newValue);
        }
    });

    Object.defineProperty(this, 'primaryObs', {
        enumerable: true,
        get: function () {
            return this.getPrimaryObs();
        }
    });

    this.conceptUIConfig= conceptUIConfig[this.primaryObs.concept.name] || [];

    Object.defineProperty(this, 'markedAsNonCoded', {
        enumerable: true,
        get: function () {
            if(this.getPrimaryObs().nonCodedAnswer===undefined){
                this.getPrimaryObs().nonCodedAnswer = Boolean(this.getPrimaryObs().concept.dataType!=="Coded" && this.getPrimaryObs().uuid);
            }
            return this.getPrimaryObs().nonCodedAnswer;
        },
        set : function(isNonCoded){
            this.getPrimaryObs().nonCodedAnswer = isNonCoded;
        }
    });

    this.isObservationNode = true;
    this.uniqueId = _.uniqueId('observation_');
    this.durationObs = this.getDurationObs();
    this.abnormalObs = this.getAbnormalObs();

    if (savedObs) {
        this.uuid = savedObs.uuid;
        this.observationDateTime = savedObs.observationDateTime;
    } else {
        this.value = this.conceptUIConfig.defaultValue;
    }
};

Bahmni.ConceptSet.ObservationNode.prototype = {
    canAddMore: function() {
        return this.conceptUIConfig.allowAddMore == true;
    },

    getPossibleAnswers: function () {
        return this.primaryObs.concept.answers;
    },

    _getGroupMemberWithClass: function(className) {
        return this._getGroupMembersWithClass(className)[0];
    },

    _getGroupMembersWithClass: function(className) {
         var groupMembers = this.groupMembers.filter(function (member) {
            return (member.concept.conceptClass.name === className) || (member.concept.conceptClass === className);
        });

        return groupMembers;
    },

    getAbnormalObs: function () {
        return this._getGroupMemberWithClass(Bahmni.Common.Constants.abnormalConceptClassName);
    },

    getDurationObs: function () {
        var groupMemberWithClass = this._getGroupMemberWithClass(Bahmni.Common.Constants.durationConceptClassName);
        return  groupMemberWithClass;
    },

    getPrimaryObs: function () {
        var observations = this._getGroupMembersWithClass(Bahmni.Common.Constants.miscConceptClassName);
        //todo : add migration to set correct sort orders for the concepts
        //this is needed when you have freetext autocomplete
        var primaryObs = observations[1] && observations[1].uuid && !observations[1].voided? observations[1]:observations[0];
        if(primaryObs.uuid && !primaryObs.voided) return primaryObs;

        return observations[1] && (observations[1].value || observations[1].value === "") && !observations[1].voided? observations[1]:observations[0];
    },

    onValueChanged: function () {
        if (!this.primaryObs.hasValue() && this.getAbnormalObs()) {
            this.getAbnormalObs().value = undefined;
        }
        if (this.primaryObs.isNumeric()) {
            this.setAbnormal();
        }
//        TODO: Mihir, D3 : Hacky fix to update the datetime to current datetime on the server side. Ideal would be void the previous observation and create a new one.
        this.primaryObs.observationDateTime = null;
    },

    setAbnormal: function () {
        if (this.primaryObs.hasValue()) {
            var erroneousValue = this.value >= (this.primaryObs.concept.hiAbsolute || Infinity) || this.value < (this.primaryObs.concept.lowAbsolute || 0);
            var valueInRange = this.value <= (this.primaryObs.concept.hiNormal || Infinity) && this.value >= (this.primaryObs.concept.lowNormal || 0);
            this.abnormalObs.value = !valueInRange;
            this.abnormalObs.erroneousValue = erroneousValue;
        } else {
            this.abnormalObs.value = undefined;
            this.abnormalObs.erroneousValue = undefined;
        }
    },

    displayValue: function () {
        if (this.possibleAnswers.length > 0) {
            for (var i = 0; i < this.possibleAnswers.length; i++) {
                if (this.possibleAnswers[i].uuid === this.value) {
                    return this.possibleAnswers[i].display;
                }
            }
        }
        else {
            return this.value;
        }
    },

    isGroup: function () {
        return false;
    },

    getControlType: function () {
        if (this.conceptUIConfig.freeTextAutocomplete) return "freeTextAutocomplete";
        if (this.conceptUIConfig.autocomplete) return "autocomplete";
        if (this.isHtml5InputDataType()) return "html5InputDataType";
        if (this.primaryObs.isText()) return "text";
        if (this.primaryObs.isCoded()) return this._getCodedControlType();
        return "unknown";
    },

    _getCodedControlType: function () {
        var conceptUIConfig = this.conceptUIConfig;
        if (conceptUIConfig.multiselect) return "multiselect";
        if (conceptUIConfig.autocomplete) return "autocomplete";
        return "dropdown";
    },

    isHtml5InputDataType: function () {
        return ['Date', 'Numeric'].indexOf(this.primaryObs.getDataTypeName()) != -1;
    },

    _isDateDataType: function () {
        return 'Date'.indexOf(this.primaryObs.getDataTypeName()) != -1;
    },

    getHighAbsolute: function () {
        return this.concept.hiAbsolute;
    },

    getLowAbsolute: function () {
        return this.concept.lowAbsolute;
    },

    getInputType: function () {
        return this.getDataTypeName();
    },

    isComputedAndEditable: function() {
        return this.concept.conceptClass === "Computed/Editable";
    },

    atLeastOneValueSet: function () {
        return this.primaryObs.hasValue();
    },

    hasDuration: function () {
        if (!this.getDurationObs() || !this.conceptUIConfig.durationRequired){
            return false;
        }
        else {
            if (!this.getDurationObs().value) {
                return true;
            }
            else if (this.getDurationObs().value < 0){
                return true;
            }
            else{
                return false;
            }
        }

    },

    isValid: function (checkRequiredFields, conceptSetRequired) {
        if (this.isGroup()) return this._hasValidChildren(checkRequiredFields, conceptSetRequired);
        if (conceptSetRequired && this.isRequired() && !this.getPrimaryObs().hasValue()) return false;
        if (checkRequiredFields && this.isRequired() && !this.getPrimaryObs().hasValue()) return false;
        if (this._isDateDataType()) return this.getPrimaryObs().isValidDate();
        if (this.getControlType() === "freeTextAutocomplete" ) { return this.isValidFreeTextAutocomplete()}
        if (this.getPrimaryObs().hasValue() && this.hasDuration()) return false;
        if (this.abnormalObs && this.abnormalObs.erroneousValue) return false;
        return true;
    },

    isValidFreeTextAutocomplete : function(){
        if (this.getPrimaryObs().concept.dataType!=="Coded" && !this.markedAsNonCoded && this.getPrimaryObs().value) {
           return false;
        }
        return true;
    },

    isRequired: function () {
        return this.conceptUIConfig.required || false;
    },

    isDurationRequired: function () {
        return this.conceptUIConfig.durationRequired || false;
    },

    _hasValidChildren: function (checkRequiredFields, conceptSetRequired) {
        return this.groupMembers.every(function (member) {
            return member.isValid(checkRequiredFields, conceptSetRequired)
        });
    },

    getFreeTextObs : function(){
        if(!this.freeTextPrimaryObs){
            this.freeTextPrimaryObs = this.groupMembers.filter(function (member) {
                return (((member.concept.conceptClass.name === Bahmni.Common.Constants.miscConceptClassName)
                    || (member.concept.conceptClass === Bahmni.Common.Constants.miscConceptClassName))
                    && (member.concept.dataType!=="Coded"));
            })[0];
        }
        return this.freeTextPrimaryObs;
    },

    getCodedObs: function(){
        if(!this.codedPrimaryObs){
            this.codedPrimaryObs= this.groupMembers.filter(function (member) {
                return (((member.concept.conceptClass.name === Bahmni.Common.Constants.miscConceptClassName)
                    || (member.concept.conceptClass === Bahmni.Common.Constants.miscConceptClassName))
                    && (member.concept.dataType==="Coded"));
            })[0];
        }
        return this.codedPrimaryObs;
    },

    markAsNonCoded: function() {
        this.markedAsNonCoded = !this.markedAsNonCoded;
    },

    toggleAbnormal: function() {
        this.abnormalObs.value = !this.abnormalObs.value;
    }
};
Bahmni.ConceptSet.MultiSelectObservations = function(conceptSetConfig) {
    var self = this;
    this.multiSelectObservationsMap = {};

    this.map = function(memberOfCollection) {
        memberOfCollection.forEach(function(member) {
            if(isMultiSelectable(member.concept, conceptSetConfig)) {
                add(member.concept, member, memberOfCollection);
            }
        });
        insertMultiSelectObsInExistingOrder(memberOfCollection);
    };

    var isMultiSelectable = function(concept, conceptSetConfig) {
        return conceptSetConfig[concept.name] && conceptSetConfig[concept.name].multiSelect;
    };

    var insertMultiSelectObsInExistingOrder = function(memberOfCollection) {
        getAll().forEach(function(multiObs){
            var index = _.findIndex(memberOfCollection, function(member){
                return member.concept.name === multiObs.concept.name;
            });
            memberOfCollection.splice(index, 0, multiObs);
        });
    };

    var add = function(concept, obs, memberOfCollection) {
        var concept_name = concept.name.name || concept.name;
        self.multiSelectObservationsMap[concept_name] = self.multiSelectObservationsMap[concept_name] ||  new Bahmni.ConceptSet.MultiSelectObservation(concept, memberOfCollection, conceptSetConfig);
        self.multiSelectObservationsMap[concept_name].add(obs);
    };

    var getAll = function() {
        return _.values(self.multiSelectObservationsMap);
    };
};


Bahmni.ConceptSet.MultiSelectObservation = function (concept, memberOfCollection, conceptSetConfig) {
    var self = this;
    this.label = concept.shortName || concept.name;
    this.isMultiSelect = true;
    this.selectedObs = {};
    this.concept = concept;
    this.concept.answers = this.concept.answers || [];
    this.groupMembers = [];
    this.provider = null;
    this.observationDateTime = "";

    this.possibleAnswers = self.concept.answers.map(function(answer) {
        var cloned = _.cloneDeep(answer);
        if(answer.name.name) cloned.name = answer.name.name;
        return cloned;
    });

    this.getPossibleAnswers = function() {
        return this.possibleAnswers;
    };

    this.cloneNew = function() {
        return new Bahmni.ConceptSet.MultiSelectObservation(concept, memberOfCollection, conceptSetConfig);
    };

    this.add = function(obs){
        if(obs.value) {
            self.selectedObs[obs.value.name] = obs;

            if (!self.provider) {
                self.provider = self.selectedObs[obs.value.name].provider;
            }
            var currentObservationDateTime = self.selectedObs[obs.value.name].observationDateTime;
            if (self.observationDateTime < currentObservationDateTime) {
                self.observationDateTime = currentObservationDateTime;
            }
        }
        obs.hidden = true;
    };

    this.isComputedAndEditable = function() {
        return this.concept.conceptClass === "Computed/Editable";
    };

    this.hasValueOf = function (answer) {
        return self.selectedObs[answer.name] && !self.selectedObs[answer.name].voided;
    };

    this.toggleSelection = function(answer) {
        self.hasValueOf(answer) ? unselectAnswer(answer): selectAnswer(answer);
    };

    this.isFormElement = function(){
        return true;
    };

    this.getControlType = function(){
        return "buttonselect";
    };

    this.atLeastOneValueSet = function() {
        return !_.isEmpty(this.selectedObs);
    };

    this.hasValue = function() {
        return !_.isEmpty(this.selectedObs);
    };

    this.isValid = function (checkRequiredFields, conceptSetRequired) {
        if (conceptSetRequired && this.isRequired() && !this.hasValue()) return false;
        if (checkRequiredFields && this.isRequired() && !this.hasValue()) return false;
        return true;
    };

    this.canHaveComment = function() {
        return false;
    };

    this.getConceptUIConfig = function() {
        return conceptSetConfig[this.concept.name] || {};
    };

    this.canAddMore = function() {
        return this.getConceptUIConfig().allowAddMore == true;
    };

    this.isRequired = function () {
        return this.getConceptUIConfig().required;
    };

    var createObsFrom = function(answer) {
        var obs = newObservation(concept, answer, conceptSetConfig)
        memberOfCollection.push(obs);
        return obs;
    };

    var selectAnswer =  function(answer) {
        var obs = self.selectedObs[answer.name];
        if (obs) {
            obs.value = answer;
            obs.voided = false;
        } else {
            obs = createObsFrom((answer));
            self.add(obs);
        }
    };

    var unselectAnswer = function unselectAnswer(answer) {
        var obs = self.selectedObs[answer.name];
        if(obs && obs.uuid) {
            obs.value = null;
            obs.voided = true;
        } else{
            delete self.selectedObs[answer.name];
        }

    };

    var newObservation = function (concept, value, conceptSetConfig) {
        var observation = buildObservation(concept);
        return new Bahmni.ConceptSet.Observation(observation, {value: value}, conceptSetConfig, []);
    };

    var buildObservation = function(concept) {
        return { concept: concept, units: concept.units, label: concept.shortName || concept.name, possibleAnswers: self.concept.answers, groupMembers: [], comment: null};
    };

    this.getValues = function(){
        var values = [];
        _.values(self.selectedObs).forEach(function(obs){
            if(obs.value) {
                values.push(obs.value.shortName || obs.value.name);
            }
        });
        return values.join(" , ");
    }

};

Bahmni.ConceptSet.CustomRepresentationBuilder = {
	build: function(fields, childPropertyName, numberOfLevels) {
		var childPropertyRep = childPropertyName + ':{{entity_fileds}}';
        var singleEntityString = "(" + fields.concat(childPropertyRep).join(',') + ")";
        var customRepresentation = singleEntityString;
        for (var i = 0; i < numberOfLevels; i++) {
            customRepresentation = customRepresentation.replace("{{entity_fileds}}", singleEntityString);
        }
        customRepresentation = customRepresentation.replace("," + childPropertyRep, '');
        return customRepresentation;
	}
};
angular.module('bahmni.common.patientSearch', ['bahmni.common.patient', 'infinite-scroll']);


var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.PatientSearch = Bahmni.Common.PatientSearch || {};

Bahmni.Common.PatientSearch.Constants = {
    patientTileHeight:100,
    patientTileWidth:100,
    tileLoadRatio:1 / 2
};
Bahmni.Common.PatientSearch.Search = function(searchTypes) {
	var self = this;
    self.searchTypes = searchTypes || [];
    self.searchType = this.searchTypes[0];
    self.searchParameter = '';
    self.noResultsMessage = null;
    self.searchResults = [];
    self.activePatients = [];

    self.switchSearchType = function (searchType) {
        if (self.searchType != searchType)
        {
            self.searchParameter = '';
            self.searchType = searchType;
            self.activePatients = [];
            self.searchResults = [];
        }
        self.markPatientEntry();
    };

    self.markPatientEntry = function () {
        self.startPatientSearch = true;
        window.setTimeout(function () {
            self.startPatientSearch = false;
        });
    };

    self.fetchActivePatientList = function(){
        return self.activePatients.length;
    };

    self.updatePatientList = function (patientList) {
        self.activePatients = patientList.map(mapPatient);
        self.searchResults = self.activePatients;
    };

    self.updateSearchResults = function (patientList) {
        self.updatePatientList(patientList);
        if (self.activePatients.length === 0 && self.searchParameter != '') {
            self.noResultsMessage = "No results found";
        } else {
            self.noResultsMessage = null;
        }
    };

    self.hasSingleActivePatient = function () {
        return self.activePatients.length === 1;
    };

    self.filterPatients = function () {
        self.searchResults = self.searchParameter ? self.activePatients.filter(matchesNameOrId) : self.activePatients;
    };

	self.isSelectedSearch = function(searchType) {
        return self.searchType == searchType;
    };

    self.isCurrentSearchLookUp = function() {
        return self.searchType && self.searchType.handler;
    };

    self.showPatientCountOnSearchParameter = function(searchType){
        return showPatientCount(searchType) && self.searchParameter;
    };

    function mapPatient(patient) {
        patient.name = patient.name || (patient.givenName + ' ' + patient.familyName);
        patient.display = patient.identifier + " - " + patient.name;
        patient.image = Bahmni.Common.Constants.patientImageUrl + patient.uuid + ".jpeg";
        return  patient;
    }

    var matchesNameOrId = function (patient) {
        return patient.display.toLowerCase().search(self.searchParameter.toLowerCase()) !== -1;
    };

    var showPatientCount = function(searchType) {
        return self.isSelectedSearch(searchType) && self.isCurrentSearchLookUp();
    };
};

'use strict';

angular.module('bahmni.common.patientSearch')
.directive('resize', function ($window) {
    var controller = function($scope) {
        $scope.storeWindowDimensions = function () {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var tileWidth = Bahmni.Common.PatientSearch.Constants.patientTileWidth;
            var tileHeight = Bahmni.Common.PatientSearch.Constants.patientTileHeight;
            $scope.tilesToFit = Math.ceil(windowWidth * windowHeight / (tileWidth * tileHeight));
            $scope.tilesToLoad = Math.ceil($scope.tilesToFit * Bahmni.Common.PatientSearch.Constants.tileLoadRatio);
        };

        var updateVisibleResults = function() {
            $scope.visibleResults = $scope.searchResults.slice(0, $scope.tilesToLoad);
        };

        $scope.loadMore = function () {
            var last = $scope.visibleResults.length;
            var more = ($scope.searchResults.length - last);
            var toShow = (more > $scope.tilesToLoad) ? $scope.tilesToLoad : more;
            if (toShow > 0) {
                for (var i = 1; i <= toShow; i++) {
                    $scope.visibleResults.push($scope.searchResults[last + i - 1]);
                }
            }
        };

        $scope.$watch('searchResults', updateVisibleResults);
        $scope.$watch('tilesToFit', updateVisibleResults);
    }

    var link = function ($scope, element) {
        $scope.storeWindowDimensions();
        angular.element($window).bind('resize', function () {
            $scope.$apply(function () {
                $scope.storeWindowDimensions();
            });
        });
    };

    return {
        restrict: 'E',
        link: link,
        controller: controller,
        transclude: true,
        scope: {
            searchResults: "=",
            visibleResults: "="
        },
        template: '<div ng-transclude infinite-scroll="loadMore()">' +
                  '</div>'
    };
});
'use strict';

angular.module('bahmni.common.patientSearch')
    .directive('scheduler', function ($interval) {

        var link = function($scope,element,attrs){

            var promise;

            var cancelSchedule = function(){
                if(promise){
                    $interval.cancel(promise);
                    promise=null;
                }
            };

            var startSchedule = function(){
                if(!promise){
                    promise = $interval($scope.triggerFunction, $scope.refreshTime * 1000);
                }
            };

            $scope.$watch(function(){return $scope.watchOn}, function(value) {
                if($scope.refreshTime > 0){
                    value ? cancelSchedule() : startSchedule();
                }
            });

            $scope.triggerFunction();

            $scope.$on('$destroy', function() {
                cancelSchedule();
            });
        };

        return {
            restrict: 'A',
            link: link,
            scope: {
                refreshTime: "=",
                watchOn: "=",
                triggerFunction: "&"
            }
        };
    });
'use strict';

angular.module('bahmni.common.patientSearch')
.controller('PatientsListController', ['$scope', '$window', 'patientService', '$rootScope', 'appService', 'spinner', '$stateParams', 'retrospectiveEntryService',
    function ($scope, $window, patientService, $rootScope, appService, spinner, $stateParams, retrospectiveEntryService) {
        var initialize = function () {
            var searchTypes = appService.getAppDescriptor().getExtensions("org.bahmni.patient.search", "config").map(mapExtensionToSearchType);
            $scope.search = new Bahmni.Common.PatientSearch.Search(searchTypes);
            $scope.search.markPatientEntry();
            $scope.$watch('search.searchType', fetchPatients);
        };

        $scope.searchPatients = function () {
            return spinner.forPromise(patientService.search($scope.search.searchParameter)).then(function (response) {
                $scope.search.updateSearchResults(response.data.pageOfResults);
                if ($scope.search.hasSingleActivePatient()) {
                    $scope.forwardPatient($scope.search.activePatients[0]);
                }
            });
        };

        $scope.filterPatientsAndSubmit = function() {
            if ($scope.search.searchResults.length == 1) {
                $scope.forwardPatient($scope.search.searchResults[0]);
            }
        };

        $scope.getPatientCount = function (searchType) {
            var params = { q: searchType.handler, v: "full", provider_uuid: $rootScope.currentProvider.uuid };
            patientService.findPatients(params).then(function (response) {
                searchType.patientCount = response.data.length;
                if ($scope.search.isSelectedSearch(searchType)) {
                    $scope.search.updatePatientList(response.data);
                }
            });
        };

        var mapExtensionToSearchType = function(appExtn) {
            return {
                    name: appExtn.label,
                    display: appExtn.extensionParams.display,
                    handler: appExtn.extensionParams.searchHandler,
                    forwardUrl: appExtn.extensionParams.forwardUrl,
                    id: appExtn.id,
                    params:appExtn.extensionParams.searchParams,
                    refreshTime: appExtn.extensionParams.refreshTime || 0
            }
        };

        var fetchPatients = function () {
            if($scope.search.isCurrentSearchLookUp()) {
                var params = { q: $scope.search.searchType.handler, v: "full", provider_uuid: $rootScope.currentProvider.uuid };
                return spinner.forPromise(patientService.findPatients(params)).then(function (response) {
                    $scope.search.updatePatientList(response.data);
                })
            }
        };

        $scope.forwardPatient = function (patient) {
            var options = $.extend({}, $stateParams);
            $.extend(options, { patientUuid: patient.uuid, visitUuid: patient.activeVisitUuid || null});
            $window.location = appService.getAppDescriptor().formatUrl($scope.search.searchType.forwardUrl, options, true);
        };

        initialize();
    }
]);

angular.module('bahmni.common.uiHelper', ['ngClipboard']);

angular.module('bahmni.common.uiHelper')
    .service('backlinkService', function ($window) {
        var self = this;
        
        var urls = [];
        self.reset = function() {
            urls = [];
        };

        self.setUrls = function(backLinks){
            self.reset();
            angular.forEach(backLinks, function(backLink){
                self.addUrl(backLink);
            });
        };
            
        self.addUrl = function(backLink){
            urls.push(backLink);
        };

        self.addBackUrl = function(label) {
            var backLabel = label || "Back";
            urls.push({label: backLabel, action: $window.history.back})
        };

        self.getUrlByLabel = function(label){
            return urls.filter(function(url){
                return url.label === label;
            });
        };

        self.getAllUrls= function(){
            return urls;
        }
    });

'use strict';

angular.module('bahmni.common.uiHelper')
 .service('contextChangeHandler', ['$rootScope', function($rootScope) {
	var callbacks = [];
    var self = this;

    $rootScope.$on('$stateChangeSuccess',function(){
        self.reset();
    });

	this.reset = function() {
	    callbacks = []; 
	};

	this.add = function(callback) {
	    callbacks.push(callback);
	};

    this.execute = function () {
        var allow = true;
        var callBackReturn = null;
        var errorMessage = null;
        callbacks.forEach(function (callback) {
            callBackReturn = callback();
            allow = allow && callBackReturn["allow"];
            if(_.isEmpty(errorMessage)){
                errorMessage = callBackReturn["errorMessage"];
            }
        });
        if (callBackReturn && errorMessage) {
            return {allow: allow, errorMessage: errorMessage};
        }
        return {allow: allow};

    };
 }]);
angular.module('bahmni.common.uiHelper')
    .directive('bmPopOver', function(){
        var controller = function($scope) {
            $scope.targetElements = [];

            var hideTargetElements = function() {
                $scope.targetElements.forEach(function(el) { el.hide(); } );
            };

            var showTargetElements = function() {
                $scope.targetElements.forEach(function(el) { el.show(); } );
            };

            this.registerTriggerElement = function(triggerElement) {
                $scope.triggerElement = triggerElement;

                var docClickHandler = function() {
                    if (!$scope.autoclose) return;

                    hideTargetElements();
                    $scope.isTargetOpen = false;
                    $(document).off('click', docClickHandler);
                };

                $scope.triggerElement.on('click', function(event) {
                    if($scope.isTargetOpen) {
                        $scope.isTargetOpen = false;
                        hideTargetElements(0);
                        $(document).off('click', docClickHandler);
                    } else {
                        $scope.isTargetOpen = true;
                        showTargetElements();
                        $(document).on('click', docClickHandler);
                        event.stopImmediatePropagation();
                    }
                });
            };

            this.registerTargetElement = function(targetElement) {
                targetElement.hide();
                $scope.targetElements.push(targetElement);
            };
        };

        return {
            restrict: 'A',
            controller: controller,
            scope: {
                autoclose: "="
            }
        };
    })
    .directive('bmPopOverTarget', function(){
        var link = function($scope, element, attrs, popOverController) {
            popOverController.registerTargetElement(element);
        };

        return {
            restrict: 'A',
            require: '^bmPopOver',
            link: link
        }
    })
    .directive('bmPopOverTrigger', function(){
        var link = function($scope, element, attrs, popOverController) {
            popOverController.registerTriggerElement(element);
        };

        return {
            restrict: 'A',
            require: '^bmPopOver',
            link: link
        }
    });
angular.module('bahmni.common.uiHelper')
    .directive('splitButton',['$timeout', '$parse', function ($timeout, $parse) {
        var controller = function($scope) {
            $scope.primaryOption = $scope.primaryOption || $scope.options[0];
            $scope.secondaryOptions = _.without($scope.options, $scope.primaryOption);
            $scope.hasMultipleOptions = function() {
                return $scope.secondaryOptions.length > 0;
            }

        }

        var link = function(scope,element,attrs){
            var shouldScroll = function(elementPosition, elementHeight){
                var windowHeight = window.innerHeight + $(window).scrollTop();
                return windowHeight < (elementHeight+elementPosition);
            };

            scope.scrollToBottom = function(){
                var timeout = $timeout(function(){
                    var scrollHeight = $(element)[0].scrollHeight;
                    if(shouldScroll(element.position().top,scrollHeight)) {
                        window.scrollBy(0, scrollHeight);
                        $timeout.cancel(timeout);
                    }
                });
            }
        };
        return {
            restrict: 'A',
            template: '<div class="split-button" bm-pop-over>'+
                        '<button bm-pop-over-trigger class="toggle-button icon-caret-down" ng-show="hasMultipleOptions()" ng-click="scrollToBottom()" type="button"></button>' +
                        '<ul class="options">' +
                            '<li class="primaryOption">' +
                                '<button ng-class="buttonClass" ng-click="optionClick()(primaryOption)" accesskey="{{primaryOption.shortcutKey}}" ng-bind-html="optionText()(primaryOption)"></button>' +
                            '</li>' +
                            '<ul class="hidden-options">' +
                            '<li bm-pop-over-target ng-repeat="option in secondaryOptions" class="secondaryOption">' +
                                '<button ng-class="buttonClass" ng-click="optionClick()(option)" accesskey="{{option.shortcutKey}}" ng-bind-html="optionText()(option)"></button>' +
                            '</li>' +
                            '</ul>'+
                        '</ul>' +
                      '</div>',
            controller: controller,
            link:link,
            scope: {
                options: '=',
                primaryOption: '=',
                optionText: '&',
                optionClick: '&'
            }
        };
    }])
'use strict';

angular.module('bahmni.common.uiHelper')
.directive('bmBackLinks', function() {
	return {
		template: '<ul>' +
					    '<li ng-repeat="backLink in backLinks">' +
					        '<a class="back-btn" ng-if="backLink.action" accesskey="{{backLink.accessKey}}" ng-click="backLink.action()" id="{{backLink.id}}"> <span ng-bind-html="backLink.label"></span> </a>' +
					        '<a class="back-btn" ng-class="{\'dashboard-link\':backLink.image}" ng-if="backLink.url" accesskey="{{backLink.accessKey}}" ng-href="{{backLink.url}}" id="{{backLink.id}}"  title="{{backLink.title}}"> ' +
                                '<img ng-if="backLink.image" src="{{backLink.image}}" onerror="this.onerror=null; this.src=\'../images/blank-user.gif\'"/>' +
                                '<i ng-if="backLink.icon && !backLink.image" class="{{backLink.icon}}"></i>' +
                                '<span ng-if="!backLink.image" ng-bind-html="backLink.label"></span> </a>' +
					        '<a class="back-btn" ng-if="backLink.state" accesskey="{{backLink.accessKey}}" ui-sref="{{backLink.state}}" id="{{backLink.id}}">' + 
					        	'<i ng-if="backLink.icon" class="{{backLink.icon}}"></i>' +
					        	'<span ng-bind-html="backLink.label"></span> </a>' +
					    '</li>' +
					'</ul>',
		controller: function ($scope, backlinkService) {
	        $scope.backLinks = backlinkService.getAllUrls();
	        $scope.$on('$stateChangeSuccess', function (event, state, params, fromState, fromParams) {
	            if (state.data && state.data.backLinks) {
	                backlinkService.setUrls(state.data.backLinks);
	                $scope.backLinks = backlinkService.getAllUrls();
	            }
	        });
	    },
	    restrict: 'E'
	}
});

angular.module('bahmni.common.uiHelper')
.directive('focusOn', function ($timeout) {
    return function (scope, elem, attrs) {
        if(Modernizr.ios) return;
        scope.$watch(attrs.focusOn, function (value) {
            if (value) {
                $timeout(function () {
                    $(elem).focus();
                });
            }
        });
    };
});

'use strict';

angular.module('bahmni.common.uiHelper')
    .directive('bmShow', ['$rootScope', function ($rootScope) {
    var link = function ($scope,  element, attr) {
           $scope.$watch('bmShow', function() {
            if ($rootScope.isBeingPrinted || $scope.bmShow ) {
                element.removeClass('ng-hide');
            } else {
                element.addClass('ng-hide');
            }
           })
        };

    return {
        scope:{
           bmShow:"="
        },
        link: link
    }
}]);
'use strict';

angular.module('bahmni.common.uiHelper')
    .factory('spinner', ['$timeout', function () {
        var tokens = [];

        var show = function () {
           var token = Math.random();
           tokens.push(token);
           if($('#overlay').length == 0) {
                $('body').prepend('<div id="overlay"><div></div></div>');
           }
           $('#overlay').stop().show();
           return token;
        }

        var hide = function (token) {
            _.pull(tokens, token);
            if(tokens.length === 0) {
                $('#overlay').fadeOut(300);
            }
        }

        var forPromise = function(promise) {
            var token = show();
            promise['finally'](function() { hide(token); });
            return promise;
        };

        return {
            forPromise: forPromise,
            show: show,
            hide: hide
        }
    }]);
angular.module('bahmni.common.uiHelper')
.filter('thumbnail', function() {
	return function(url) {
	    if(url){
	        return Bahmni.Common.Constants.documentsPath + '/' + url.replace(/(.*)\.(.*)$/, "$1_thumbnail.$2") || null;
	    }
	};
});
'use strict';

angular.module('bahmni.common.uiHelper')
    .controller('MessageController', ['$scope', 'messagingService',
        function ($scope, messagingService) {
            $scope.messages = messagingService.messages;

            $scope.getErrorMessageText = function(){
                var string = "";
                $scope.messages.error.forEach(function(errorMessage){
                    string = string.concat(errorMessage.value);
                });
                return string;
            };

            $scope.showError = false;

            $scope.toggleShowError = function (){
                $scope.showError = !$scope.showError;
                $scope.showError === true ? messagingService.cancelTimeout() : messagingService.createTimeout("error", 0);
            };

            $scope.isErrorMessagePresent = function(){
                return $scope.messages.error.length > 0 ? true : false;
            }
        }]);

'use strict';

angular.module('bahmni.common.uiHelper')
    .service('messagingService', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
        this.messages = {error: [], info: [], formError: []};
        var self = this;
        var promise;

        $rootScope.$on('event:serverError', function(event, errorMessage) {
            self.showMessage('error',  errorMessage, 'serverError');
        });

        this.showMessage = function(level, message, errorEvent) {
            var messageObject = {'value':'', 'isServerError':false};
            messageObject.value = message;
            if(errorEvent){
                messageObject.isServerError = true;
            }
            this.messages[level].push(messageObject);
            if(this.messages[level].length === 1){
                this.createTimeout(level, 4000);
            }
        };

        this.createTimeout = function(level, time) {
            promise = $timeout(function(){ self.messages[level] = [];}, time, true);
        };

        this.cancelTimeout = function(){
            $timeout.cancel(promise);
        };
    }]);
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Logging = Bahmni.Common.Logging || {};

angular.module('bahmni.common.logging', []);
angular.module('bahmni.common.logging')
.config(function($provide){
    $provide.decorator("$exceptionHandler", function($delegate, $injector, $window, $log){
        var logError = function(exception, cause) {
            try {
                var messagingService = $injector.get('messagingService');
                var errorMessage = exception.toString();
                var stackTrace = printStackTrace({ e: exception });
                var errorDetails = {
                    timestamp: new Date(),
                    browser: $window.navigator.userAgent,
                    errorUrl: $window.location.href,
                    errorMessage: errorMessage,
                    stackTrace: stackTrace,
                    cause: ( cause || "" )
                };
                $.ajax({
                    type: "POST",
                    url: "/log",
                    contentType: "application/json",
                    data: angular.toJson(errorDetails)
                });
                messagingService.showMessage('error', errorMessage);
                exposeException(errorDetails);
            } catch (loggingError) {
                $log.warn("Error logging failed");
                $log.log(loggingError);
            }
        };

        var exposeException = function(exceptionDetails) {
            window.angular_exception = window.angular_exception || [];
            window.angular_exception.push(exceptionDetails);
        };

        return function(exception, cause){
            $delegate(exception, cause);
            logError(exception, cause);
        };
    });
});

var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Obs = Bahmni.Common.Obs || {};

angular.module('bahmni.common.obs', []);
Bahmni.Common.Obs.Observation = function () {

    var Observation = function (obs, conceptConfig) {
        angular.extend(this, obs);
        this.concept = obs.concept;
        this.conceptConfig = conceptConfig;
    };

    Observation.prototype = {

        isFormElement: function () {
            return this.groupMembers && this.groupMembers.length <= 0;
        },

        isImageConcept: function () {
            return this.concept.conceptClass === "Image";
        },

        getDisplayValue: function () {
            var displayValue = "";
            var allValues = [];
            if (this.type === "Boolean") {
                return this.value === true ? "Yes" : "No";
            }
            if(this.type === "Datetime") {
                var date = Bahmni.Common.Util.DateUtil.parseDatetime(this.value);
                return date != null ? date.format('DD MMM YYYY, hh:mm A') : "";
            }
            var shortName = this.value ? this.value.shortName : null;
            var fullName = this.value ? this.value.name : null;
            displayValue = shortName || fullName || this.value;
            if (this.duration) {
                displayValue = displayValue + " " + this.getDurationDisplayValue();
            }
            return displayValue;
        },

        getDurationDisplayValue: function () {
            var durationForDisplay = Bahmni.Common.Util.DateUtil.convertToUnits(this.duration);
            return "since " + durationForDisplay["value"] + " " + durationForDisplay["unitName"];
        }};



    return Observation;
    
}();


Bahmni.Common.Obs.MultiSelectObservation = (function () {

    var MultiSelectObservation = function (groupMembers, conceptConfig) {
        this.type = "multiSelect";
        this.concept = groupMembers[0].concept;
        this.encounterDateTime = groupMembers[0].encounterDateTime;
        this.groupMembers = groupMembers;
        this.conceptConfig = conceptConfig;
        this.observationDateTime = getLatestObservationDateTime(this.groupMembers);
        this.providers = groupMembers[0].providers;
    };
    var getLatestObservationDateTime = function(groupMembers){
        var latestObservationDateTime = groupMembers[0].observationDateTime;
        groupMembers.forEach(function(member){
            latestObservationDateTime = latestObservationDateTime < member.observationDateTime ? member.observationDateTime : latestObservationDateTime;
        });
        return latestObservationDateTime;
    };

    MultiSelectObservation.prototype = {

        isFormElement: function () {
            return true;
        },

        getDisplayValue: function () {
            var allValues = [];
            this.groupMembers.forEach(function (member) {
                allValues.push(member.value.shortName || member.value.name || member.value);
            });
            return allValues.join(", ");
        }
    };

    return MultiSelectObservation;

})();

Bahmni.Common.Obs.GridObservation = (function () {

    var conceptMapper = new Bahmni.Common.Domain.ConceptMapper();

    var GridObservation = function (obs, conceptConfig) {
        angular.extend(this, obs);
        this.type = "grid";
        this.conceptConfig = conceptConfig;
    };

    var getObservationDisplayValue = function (observation) {
        if (observation.isBoolean || observation.type === "Boolean") {
            return observation.value === true ? "Yes" : "No";
        }
        if(!observation.value) return "";
        if(typeof observation.value.name === 'object') {
            var valueConcept = conceptMapper.map(observation.value);
            return valueConcept.shortName || valueConcept.name;
        }
        return observation.value.shortName || observation.value.name || observation.value ;
    };

    GridObservation.prototype = {

        isFormElement: function () {
            return true;
        },

        getDisplayValue: function () {
            var gridObservationDisplayValue = _.compact(_.map(this.groupMembers, function (member) {
                return getObservationDisplayValue(member);
            })).join(', ');
            return gridObservationDisplayValue || this.value;
        }
    };



    return GridObservation;

})();

Bahmni.Common.Obs.ObservationMapper = function () {
    var conceptMapper = new Bahmni.Common.Domain.ConceptMapper();
    var self = this;

    this.map = function (bahmniObservations, allConceptsConfig) {
        var mappedObservations = mapObservations(bahmniObservations, allConceptsConfig);
        return mapUIObservations(mappedObservations, allConceptsConfig);
    };

    var mapObservations = function (bahmniObservations, allConceptsConfig) {
        var mappedObservations = [];
        bahmniObservations =  Bahmni.Common.Obs.ObservationUtil.sortSameConceptsWithObsDateTime(bahmniObservations);
        $.each(bahmniObservations, function (i, bahmniObservation) {
            var conceptConfig = allConceptsConfig[bahmniObservation.concept.name] || [];
            var observation = new Bahmni.Common.Obs.Observation(bahmniObservation, conceptConfig);
            if (observation.groupMembers && observation.groupMembers.length >= 0) {
                observation.groupMembers = mapObservations(observation.groupMembers, allConceptsConfig);
            }
            mappedObservations.push(observation);
        });
        return mappedObservations;
    };

    var mapUIObservations = function (observations, allConceptsConfig) {
        var groupedObservations = _.groupBy(observations, function (observation) {
            return observation.concept.name;
        });
        var mappedObservations = [];
        $.each(groupedObservations, function (i, obsGroup) {
            var conceptConfig = allConceptsConfig[obsGroup[0].concept.name] || [];
            if (conceptConfig.multiSelect) {
                mappedObservations.push(new Bahmni.Common.Obs.MultiSelectObservation(obsGroup, conceptConfig));
            } else if (conceptConfig.grid) {
                mappedObservations.push(new Bahmni.Common.Obs.GridObservation(obsGroup[0], conceptConfig));
            } else {
                $.each(obsGroup, function (i, obs) {
                    obs.groupMembers = mapUIObservations(obs.groupMembers, allConceptsConfig);
                    mappedObservations.push(obs);
                });
            }
        });
        return mappedObservations;
    };

    this.getGridObservationDisplayValue = function (observationTemplate) {
        var memberValues = _.compact(_.map(observationTemplate.bahmniObservations, function (observation) {
            return getObservationDisplayValue(observation);
        }));
        return memberValues.join(', ');
    };

    var getObservationDisplayValue = function (observation) {
        if (observation.isBoolean || observation.type === "Boolean") {
            return observation.value === true ? "Yes" : "No";
        }
        if (!observation.value) return "";
        if (typeof observation.value.name === 'object') {
            var valueConcept = conceptMapper.map(observation.value);
            return valueConcept.shortName || valueConcept.name;
        }
        return observation.value.shortName || observation.value.name || observation.value;
    }


};

angular.module('bahmni.common.obs')
    .directive('showObservation', function () {
        var controller = function ($scope, $filter) {
            $scope.toggle = function (observation) {
                observation.showDetails = !observation.showDetails
            };

            $scope.dateString = function (observation) {
                var dateFormat = "";
                if ($scope.showDate && $scope.showTime) {
                    dateFormat = 'dd MMM yy hh:mm a';
                }
                else if (!$scope.showDate && ($scope.showTime || $scope.showTime === undefined)) {
                    dateFormat = "hh:mm a";
                }
                else{
                    return null;
                }
                return $filter('date')(observation.observationDateTime, dateFormat);
            };
        };
        return {
            restrict: 'E',
            scope: {
                observation: "=",
                patient: "=",
                showDate: "=",
                showTime: "=",
                showDetailsButton: "="
            },
            controller: controller,
            template: '<ng-include src="\'../common/obs/views/showObservation.html\'" />'
        };
    });

'use strict';

Bahmni.Common.Obs.ObservationUtil = {
    sortSameConceptsWithObsDateTime: function (observation) {
        var sortedObservations = [];
        for (var i = 0; i < observation.length; i++) {

            if (i != observation.length - 1) {
                if (observation[i].conceptUuid != observation[i + 1].conceptUuid) {
                    sortedObservations.push(observation[i]);
                } else {
                    var sameConceptsSubArray = [];
                    var j = i + 1;
                    sameConceptsSubArray.push(observation[i]);
                    while (j < observation.length && observation[i].conceptUuid == observation[j].conceptUuid) {
                        sameConceptsSubArray.push(observation[j++]);
                    }
                    sameConceptsSubArray = _.sortBy(sameConceptsSubArray, ['observationDateTime']);
                    sortedObservations.push(sameConceptsSubArray);
                    i = j - 1;
                }
            } else {
                sortedObservations.push(observation[i]);
            }
        }
        return _.flatten(sortedObservations);
    }
};

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Dashboard = Bahmni.Common.DisplayControl.Dashboard || {};

angular.module('bahmni.common.displaycontrol.dashboard', []);
'use strict';

angular.module('bahmni.common.displaycontrol.dashboard')
    .directive('dashboard', [ function () {

        var controller = function ($scope) {

            var init = function () {
                $scope.dashboard = Bahmni.Common.DisplayControl.Dashboard.create($scope.config || {});
                $scope.sections = $scope.dashboard.getSections($scope.diseaseTemplates);
            };

            $scope.filterOdd = function (index) {
                return function () {
                    return index++ % 2 === 0;
                };
            };

            $scope.filterEven = function (index) {
                return function () {
                    return index++ % 2 === 1;
                };
            };

            var unbindWatch = $scope.$watch('config', init);
            $scope.$on("$stateChangeStart", unbindWatch);
        };

        return {
            restrict: 'E',
            controller: controller,
            templateUrl: "../common/displaycontrols/dashboard/views/dashboard.html",
            scope: {
                config: "=",
                patient: "=",
                diseaseTemplates: "=",
                visitHistory: "=",
                activeVisitUuid: "="
            }
        }
    }]);

'use strict';

Bahmni.Common.DisplayControl.Dashboard = function (config) {

    this._sections = _.map(config.sections, Bahmni.Common.DisplayControl.Dashboard.Section.create);

    this.getSectionByName = function (name) {
        return _.find(this._sections, function (section) {
            return section.name === name;
        }) || {};
    };

    this.getSections = function (diseaseTemplates) {
        return _.filter(this._sections, function (section) {
            return section.name !== "diseaseTemplate" || _.find(diseaseTemplates, function (diseaseTemplate) {
                return diseaseTemplate.name === section.templateName && diseaseTemplate.obsTemplates.length > 0;
            });
        });
    };
};

Bahmni.Common.DisplayControl.Dashboard.create = function (config) {
    return new Bahmni.Common.DisplayControl.Dashboard(config);
};
'use strict';

Bahmni.Common.DisplayControl.Dashboard.Section = function (section) {
    angular.extend(this, section);
    this.data = section.data || {};
    this.isObservation = section.isObservation || false;
    this.patientAttributes = section.patientAttributes || [];
    var commonDisplayControlNames = ["disposition", "admissionDetails", "patientInformation", "diagnosis"];
    if (this.isObservation === true) {
        this.viewName = "../common/displaycontrols/dashboard/views/sections/observationSection.html";
    } else if (commonDisplayControlNames.some(function (name) {
            return name == section.name
        })) {
        this.viewName = "../common/displaycontrols/dashboard/views/sections/" + this.name + ".html";
    } else {
        this.viewName = "../clinical/dashboard/views/dashboardSections/" + this.name + ".html";
    }
};

Bahmni.Common.DisplayControl.Dashboard.Section.create = function (section) {
    return new Bahmni.Common.DisplayControl.Dashboard.Section(section);
};

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Observation = Bahmni.Common.DisplayControl.Observation || {};

angular.module('bahmni.common.displaycontrol.observation', []);
'use strict';

angular.module('bahmni.common.displaycontrol.observation')
    .directive('bahmniObservation', ['observationsService', 'appService', '$q','spinner',
        function (observationsService, appService, $q, spinner) {
            
            var controller = function($scope){

                var mapObservation = function(response,config){
                    var observationFilter = new Bahmni.Common.DisplayControl.Observation.Filters(config.obsIgnoreList);
                    var observations = observationFilter.removeObsWithOrder(observationFilter.removeUnwantedObs(response.data));
                    var conceptsConfig = appService.getAppDescriptor().getConfigValue("conceptSetUI") || {};
                    observations = new Bahmni.Common.Obs.ObservationMapper().map(observations, conceptsConfig);

                    $scope.bahmniObservations = new Bahmni.Common.DisplayControl.Observation.GroupingFunctions().groupByEncounterDate(observations);
                    if (_.isEmpty($scope.bahmniObservations)) {
                        $scope.noObsMessage = Bahmni.Common.Constants.messageForNoObservation;
                    }
                    else{
                        $scope.bahmniObservations[0].isOpen = true;
                    }
                };

                var fetchObservations = function () {
                    spinner.forPromise(observationsService.fetch($scope.patient.uuid,$scope.config.conceptNames,$scope.config.scope,$scope.config.numberOfVisits,$scope.visitUuid).then(function (response) {
                            mapObservation(response,$scope.config);
                        }));
                };

                $scope.toggle= function(element){
                    element.isOpen = !element.isOpen;
                };

                $scope.isClickable= function(){
                    return $scope.isOnDashboard && $scope.section.allObservationDetails && $scope.section.allObservationDetails.pivotTable;
                };

                fetchObservations();


                $scope.dialogData = {
                    "patient": $scope.patient,
                    "section": $scope.section
                };
                

            };
            return {
                restrict:'E',
                controller:controller,
                templateUrl:"../common/displaycontrols/observation/views/observationDisplayControl.html",
                scope:{
                    patient:"=",
                    visitUuid:"@",
                    section:"=",
                    config:"=",
                    title:"=sectionTitle",
                    isOnDashboard:"="
                }
            }
    }]);

'use strict';
angular.module('bahmni.common.displaycontrol.observation')
    .controller('AllObservationDetailsController', ['$scope',
        function ($scope) {
            $scope.patient = $scope.ngDialogData.patient;
            $scope.section = $scope.ngDialogData.section;
            $scope.config = $scope.ngDialogData.section ? $scope.ngDialogData.section.allObservationDetails : {};
        }]);
Bahmni.Common.DisplayControl.Observation.GroupingFunctions = function(){

    var self = this;
    var observationGroupingFunction = function (obs) {
        return Bahmni.Common.Util.DateUtil.getDateTimeWithoutSeconds(obs.encounterDateTime);
    };

    self.groupByEncounterDate = function (bahmniObservations) {
        var obsArray = [];
        bahmniObservations = _.groupBy(bahmniObservations, observationGroupingFunction);

        var sortWithInAConceptDateCombination = function(anObs, challengerObs) {
            if (anObs.encounterDateTime < challengerObs.encounterDateTime) {
                return 1;
            }
            if (anObs.encounterDateTime > challengerObs.encounterDateTime) {
                return -1;
            }
            if (anObs.sortWeight < challengerObs.sortWeight) {
                return -1;
            }
            if (anObs.sortWeight > challengerObs.sortWeight) {
                return 1;
            }

            return 0;
        };

        for (var obsKey in bahmniObservations){
            var dateTime = obsKey;

            var anObs = {
                "key" : dateTime,
                "value" : bahmniObservations[dateTime].sort(sortWithInAConceptDateCombination),
                "date" : dateTime
            };

            obsArray.push(anObs);
        }
        return _.sortBy(obsArray, ['date']).reverse();
    };

    return self;
};
'use strict';

Bahmni.Common.DisplayControl.Observation.Filters = function(unwantedObsConcepts){
    var self = this;

    var obsHasOrder = function(bahmniObservation){
        return !bahmniObservation.orderUuid;
    };
    var isUnwantedObservation = function (observation) {
        if(!unwantedObsConcepts) return true;
        return !unwantedObsConcepts.some(function (ignoredObsName) {
            return ignoredObsName === observation.concept.name || ignoredObsName === observation.concept.conceptClass;
        });
    };

    var observationFilter = function(obsList,filterFunction){
        return _.transform(obsList, function (result, observation) {
            if (filterFunction(observation)) {
                if (!_.isEmpty(observation.groupMembers)) {
                    observation.groupMembers = observationFilter(observation.groupMembers, filterFunction);
                }
                result.push(observation);
            }
        });
    };

    self.removeObsWithOrder = function(obsList){
        return observationFilter(obsList,obsHasOrder);
    };
    self.removeUnwantedObs = function(obsList){
        return observationFilter(obsList,isUnwantedObservation);
    };

    return self;
};

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Disposition = Bahmni.Common.DisplayControl.Disposition || {};

angular.module('bahmni.common.displaycontrol.disposition', []);
"use strict";

angular.module('bahmni.common.displaycontrol.disposition')
    .directive('disposition', ['dispositionService','$q','spinner',
        function (dispositionService, $q ,spinner) {

            var controller = function($scope){


                var fetchDispositionByPatient = function(patientUuid, numOfVisits){
                    spinner.forPromise(dispositionService.getDispositionByPatient(patientUuid,numOfVisits))
                        .then(handleDispositionResponse);
                };

                var handleDispositionResponse = function(response){
                    $scope.dispositions = response.data;

                    if(_.isEmpty($scope.dispositions)){
                        $scope.noDispositionsMessage = Bahmni.Common.Constants.messageForNoDisposition;
                    }
                };

                var fetchDispositionsByVisit = function(visitUuid){
                    spinner.forPromise(dispositionService.getDispositionByVisit(visitUuid)).then(handleDispositionResponse);
                };

                $scope.getNotes = function(disposition){
                    if(disposition.additionalObs[0] && disposition.additionalObs[0].value){
                        return disposition.additionalObs[0].value;
                    }
                    return "";
                };

                $scope.showDetailsButton = function(disposition){
                    if($scope.getNotes(disposition)){
                        return false;
                    }
                    return $scope.params.showDetailsButton;
                };

                $scope.toggle= function(element){
                    if($scope.showDetailsButton(element)){
                        element.show = !element.show;
                    }else{
                        element.show = true;
                    }
                    return false;
                };

                if($scope.visitUuid){
                    fetchDispositionsByVisit($scope.visitUuid);
                }else if($scope.params.numberOfVisits && $scope.patientUuid){
                    fetchDispositionByPatient($scope.patientUuid, $scope.params.numberOfVisits);
                }

            };
            return {
                restrict:'E',
                controller:controller,
                templateUrl:"../common/displaycontrols/disposition/views/disposition.html",
                scope: {
                    params: "=",
                    patientUuid: "=",
                    visitUuid: "="
                }
            };
        }]);

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.AdmissionDetails = Bahmni.Common.DisplayControl.AdmissionDetails || {};

angular.module('bahmni.common.displaycontrol.admissiondetails', []);
"use strict";

angular.module('bahmni.common.displaycontrol.admissiondetails')
    .directive('admissionDetails', ['bedService', 'visitService',function (bedService, visitService) {

        var controller = function($scope){

            $scope.$watch('visitUuid', function (){
                if($scope.visitUuid) {
                    visitService.getVisitForAdmissionDetails($scope.visitUuid).success(function (visit) {
                        $scope.visit = new Bahmni.ADT.Visit(visit);
                        $scope.admissionEncounter = $scope.visit.getAdmissionEncounter();
                        $scope.dischargeEncounter = $scope.visit.getDischargeEncounter();
                    });
                }
            });

            if($scope.patientUuid) {
                bedService.getAssignedBedForPatient($scope.patientUuid).then(function(bedDetails){
                    $scope.bedDetails = bedDetails;
                })
            }

            $scope.getProviderDetails = function(encounter){
                return encounter && encounter.provider && encounter.provider.display || "";
            };

            $scope.getNotes = function(encounter){
                if(encounter && encounter.obs[0] && encounter.obs[0].value){
                    return encounter.obs[0].value;
                }
                return null;
            };

            $scope.showDetailsButton = function(encounter){
                return $scope.params && $scope.params.showDetailsButton && !$scope.getNotes(encounter);
            };

            $scope.toggle= function(element){
                element.show = !element.show;
            };
        };
        return {
            restrict: 'E',
            controller: controller,
            templateUrl: "../common/displaycontrols/admissiondetails/views/admissionDetails.html",
            scope: {
                params: "=",
                visitUuid: "=",
                patientUuid: "="
            }
        };
    }]);

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.PatientProfile = Bahmni.Common.DisplayControl.PatientProfile || {};


angular.module('bahmni.common.displaycontrol.patientprofile', []);
'use strict';

angular.module('bahmni.common.displaycontrol.patientprofile')
    .filter('titleCase', function () {
        return function (input) {
            input = input || '';
            return input.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };
    });
'use strict';

angular.module('bahmni.common.displaycontrol.patientprofile')
.filter('booleanFilter', function() {
    return function(value) {
        if(value === true) {
            return "Yes";
        } else if(value === false) {
            return "No";
        }
        return value;
    };
});
'use strict';

angular.module('bahmni.common.displaycontrol.patientprofile')
    .directive('patientProfile', function () {
        var controller = function ($scope) {
            var patient = $scope.patient;
            $scope.getPatientGenderAndAge = function () {
                var patientGenderAndAge = [patient.genderText, patient.ageText];
                return patientGenderAndAge.join(", ");
            };
            $scope.getAddress = function () {
                var address = [];
                if ($scope.config.addressFields != undefined && $scope.config.addressFields.length != 0) {
                    $scope.config.addressFields.forEach(function (addressField) {
                        if (patient.address[addressField]) {
                            address.push(patient.address[addressField]);
                        }
                    });
                }
                else if(!_.contains($scope.config,"cityVillage")) {
                        address.push(patient.address["cityVillage"]);
                }
                return address.join(", ");
            }
        };
        return {
            restrict: 'E',
            controller: controller,
            scope: {
                patient: "=",
                config: "="
            },
            templateUrl: "../common/displaycontrols/patientprofile/views/patientProfile.html"
        };
    });

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Diagnosis = Bahmni.Common.DisplayControl.Diagnosis || {};

angular.module('bahmni.common.displaycontrol.diagnosis', []);
'use strict';

angular.module('bahmni.common.displaycontrol.diagnosis')
.filter('primaryDiagnosisFirst', function () {
    return function(diagnoses) {
        var primaryDiagnoses = _.filter(diagnoses, function(diagnosis) { return diagnosis.isPrimary(); });
        var otherDiagnoses = _.filter(diagnoses, function(diagnosis) { return !diagnosis.isPrimary(); });
        return primaryDiagnoses.concat(otherDiagnoses);
    }
});
'use strict';

angular.module('bahmni.common.displaycontrol.diagnosis')
    .directive('bahmniDiagnosis', ['diagnosisService', '$q', 'spinner',
        function (diagnosisService, $q, spinner) {

            var controller = function ($scope) {
                var getAllDiagnosis = function () {
                    return diagnosisService.getPastDiagnoses($scope.patientUuid, $scope.visitUuid).success(function (response) {
                        var diagnosisMapper = new Bahmni.DiagnosisMapper();

                        $scope.allDiagnoses = diagnosisMapper.mapDiagnoses(response);
                        var found = _.find($scope.allDiagnoses, function(diagnoses){
                            return diagnoses.diagnosisStatus !== "RULED OUT"
                        });
                        
                    });
                };
                $scope.title = $scope.config.title;
                $scope.toggle = function(diagnosis, toggleLatest) {
                    if(toggleLatest){
                        diagnosis.showDetails = false;
                        diagnosis.showLatestDetails = !diagnosis.showLatestDetails;
                    } else {
                        diagnosis.showLatestDetails = false;
                        diagnosis.showDetails = !diagnosis.showDetails;
                    }
                };
                $scope.providerName = function (diagnosis) {
                    return diagnosis.providers[0] ? diagnosis.providers[0].name : "";
                };

                var getPromises = function () {
                    return [getAllDiagnosis()];
                };

                spinner.forPromise($q.all(getPromises()));
            }
            return {
                restrict: 'E',
                controller: controller,
                templateUrl: "../common/displaycontrols/diagnosis/views/diagnosisDisplayControl.html",
                scope: {
                    patientUuid: "=",
                    config: "=",
                    visitUuid: "=",
                    showLatestDiagnosis: "@showLatestDiagnosis"
                }
            }
        }]);

'use strict';

var Bahmni = Bahmni || {};
Bahmni.ADT = Bahmni.ADT || {};

angular.module('bahmni.adt', ['bahmni.common.conceptSet', 'bahmni.common.logging']);


'use strict';

var Bahmni = Bahmni || {};
Bahmni.ADT = Bahmni.ADT || {};

Bahmni.ADT.Constants = (function() {
	return {
        patientsListUrl: "/patient/search",
        ipdDashboard: "#/patient/{{patientUuid}}/visit/{{visitUuid}}/"
	};
})();



'use strict';
Bahmni.ADT = Bahmni.ADT || {}
Bahmni.ADT.Visit = function (visit) {
    var self = this;
    angular.extend(this, visit);

    var getAllEncounters = function(encounterTypeName) {
        return _.filter(self.encounters, function(encounter) {
            return !encounter.voided && encounter.encounterType.name == encounterTypeName;
        });
    }

    var allAdmissionEncounters = getAllEncounters(Bahmni.Common.Constants.admissionEncounterTypeName);
    var allDischargeEncounters = getAllEncounters(Bahmni.Common.Constants.dischargeEncounterTypeName);

    this.isAdmitted = function() {
        return allAdmissionEncounters.length > 0 && !this.isDischarged();
    }

    this.isDischarged = function() {
        return allDischargeEncounters.length > 0;
    }

    this.getDischargeEncounter = function() {
        return allDischargeEncounters.length > 0 ? allDischargeEncounters[0] : null;
    }

    this.getAdmissionEncounter = function() {
        return allAdmissionEncounters.length > 0 ? allAdmissionEncounters[0] : null;
    }

    this.getEncounters = function(includeVoided) {
        return _.filter(this.encounters, function(encounter) {
            return includeVoided == true ? true : encounter.voided == false;
        });
    }
}
'use strict';


angular.module('adt', ['bahmni.common.patient', 'bahmni.common.patientSearch', 'bahmni.common.uiHelper', 'bahmni.common.conceptSet', 'authentication', 'bahmni.common.appFramework',
    'httpErrorInterceptor', 'bahmni.adt', 'bahmni.common.domain', 'bahmni.common.config', 'ui.router', 'bahmni.common.util', 'bahmni.common.routeErrorHandler',
    'bahmni.common.displaycontrol.dashboard', 'bahmni.common.displaycontrol.observation', 'bahmni.common.displaycontrol.disposition', 'bahmni.common.displaycontrol.admissiondetails',
    'bahmni.common.obs', 'bahmni.common.displaycontrol.patientprofile', 'bahmni.common.displaycontrol.diagnosis','RecursionHelper','ngSanitize']);
angular.module('adt').config(['$stateProvider', '$httpProvider', '$urlRouterProvider', function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/patient/search');
    var homeBackLink = {label: "Home", url: "../home/", icon: "icon-home"};
    var patientSearchBackLink = {label: "<u>P</u>atients", url: "#/patient/search", accessKey: 'p', icon: "icon-circle-arrow-left"};
    $stateProvider.state('patientsearch', {
        url: '/patient/search',
        data: {
            backLinks: [homeBackLink]
        },
        views: {
            'content': {
                templateUrl: '../common/patient-search/views/patientsList.html',
                controller: 'PatientsListController'
            },
            'additional-header':{
                templateUrl:'views/headerAdtHome.html'
            }
        },
        resolve: {
            initialization: 'initialization'
        }
    }).state('wardDetails', {
        url: '/wardList',
        data: {
                backLinks: [homeBackLink, patientSearchBackLink]
        },
        views: {
            'header': {
                templateUrl: 'views/headerAdt.html'
            },
            'content': {
                templateUrl: 'views/wardDetails.html',
                controller: 'WardDetailsController'
            }
        },
        resolve: {
            initialization: 'initialization'
        }
    })
        .state('patient', {
            url: '/patient/:patientUuid',
            data: {
                backLinks: [homeBackLink, patientSearchBackLink]
            },
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'views/headerAdt.html'
                },
                'content': {
                    template: '<ui-view/>'
                },
                'additional-header': {
                    templateUrl: '../common/patient/header/views/header.html'
                }
            },

            resolve: {
                initResolution: 'initialization',
                patientResolution: function (initResolution, $stateParams, patientInitialization) {
                    return patientInitialization($stateParams.patientUuid);
                }
            }
        })
        .state('patient.adt',{
            url: '/visit/:visitUuid',
            abstract: true,
            template: '<ui-view/>'
        })
        .state('patient.adt.action', {
            url: '/:action',
            templateUrl: 'views/dashboard.html',
            controller: 'AdtController'
        })
        .state('patient.adt.bedForExistingEncounter', {
            url: '/encounter/:encounterUuid/bed',
            templateUrl: 'views/bedManagement.html',
            controller: 'BedManagementController'
        })
        .state('patient.adt.bedForNewEncounter', {
            url: '/bed',
            templateUrl: 'views/bedManagement.html',
            controller: 'BedManagementController'
        });
}
]);
'use strict';

angular.module('bahmni.adt').factory('initialization', ['$rootScope', '$q', 'appService', 'configurations', 'authenticator', 'spinner',
    function ($rootScope, $q, appService, configurations, authenticator, spinner) {
        var getConfigs = function () {
            var config = $q.defer();
            var configNames = ['encounterConfig', 'patientConfig'];
            configurations.load(configNames).then(function () {
                $rootScope.encounterConfig = angular.extend(new EncounterConfig(), configurations.encounterConfig());
                $rootScope.patientConfig = configurations.patientConfig();
                config.resolve();
            });
            return config.promise;
        };

        var initApp = function () {
            return appService.initApp('adt', {'app': true, 'extension': true});
        };

        return spinner.forPromise(authenticator.authenticateUser().then(initApp).then(getConfigs));
    }
]);
'use strict';

angular.module('bahmni.adt').factory('patientInitialization', ['$rootScope', '$q', 'patientService', 'initialization', 'bedService', 'spinner',
    function ($rootScope, $q, patientService, initialization, bedService, spinner) {
        return function (patientUuid) {

            var getPatient = function () {
                var patientMapper = new Bahmni.PatientMapper($rootScope.patientConfig);
                var patientPromise = $q.defer();
                patientService.getPatient(patientUuid).then(function (response) {
                    $rootScope.patient = patientMapper.map(response.data);
                    patientPromise.resolve();
                });
                return patientPromise.promise;
            };

            var bedDetailsForPatient = function () {
                return bedService.setBedDetailsForPatientOnRootScope(patientUuid);
            };

            return spinner.forPromise(initialization.then(getPatient).then(bedDetailsForPatient()));
        }
    }
]);


'use strict';
var Bahmni = Bahmni || {};
Bahmni.ADT = Bahmni.ADT || {};

Bahmni.ADT.DispositionDisplayUtil = {
    getEncounterToDisplay: function(encounterConfig, visit) {
    	var rankActions = {};
    	rankActions[encounterConfig.getAdmissionEncounterTypeUuid()] = 1;
        rankActions[encounterConfig.getTransferEncounterTypeUuid()] = 2;
        rankActions[encounterConfig.getDischargeEncounterTypeUuid()] = 3;
        var max = 0;
        var encounterWithHigestRank = null;
        visit.getEncounters().forEach(function (encounter) {
            if (rankActions[encounter.encounterType.uuid] && rankActions[encounter.encounterType.uuid] > max) {
                max = rankActions[encounter.encounterType.uuid];
                encounterWithHigestRank = encounter;
            }
        });
        return encounterWithHigestRank;
    }
}
"use strict";

angular.module('bahmni.adt')
    .controller('AdtController', ['$scope', '$q', '$rootScope', 'spinner', 'dispositionService',
        'encounterService', 'bedService', 'appService', 'visitService', '$location', '$window', 'sessionService',
        'messagingService', '$anchorScroll', '$stateParams',
        function ($scope, $q, $rootScope, spinner, dispositionService, encounterService, bedService,
                  appService, visitService, $location, $window, sessionService, messagingService, $anchorScroll,
                  $stateParams) {
            var actionConfigs = {};
            var encounterConfig = $rootScope.encounterConfig;
            var locationUuid = sessionService.getLoginLocationUuid();
            $scope.adtObservations = [];

            $scope.dashboardConfig = appService.getAppDescriptor().getConfigValue('dashboard');
            $scope.getAdtConceptConfig = $scope.dashboardConfig.conceptName;

            var getDefaultVisitTypeUuid = function () {
                if ($scope.visit && $scope.visit.stopDatetime == null) {
                    return $scope.visit.visitType.uuid;
                }
                var defaultVisitTypeName = appService.getAppDescriptor().getConfigValue('defaultVisitType');
                var visitTypes = encounterConfig.getVisitTypes();
                var defaultVisitType = visitTypes.filter(function (visitType) {
                    return visitType.name === defaultVisitTypeName
                })[0];
                return defaultVisitType && defaultVisitType.uuid || null;
            };

            var defaultVisitTypeUuid = getDefaultVisitTypeUuid();
            if (defaultVisitTypeUuid == null) {
                messagingService.showMessage("error", "Please configure a default VisitType.");
            }

            var getActionCode = function (concept) {
                var mappingCode = "";
                if (concept.mappings) {
                    concept.mappings.forEach(function (mapping) {
                        var mappingSource = mapping.display.split(":")[0];
                        if (mappingSource === Bahmni.Common.Constants.emrapiConceptMappingSource) {
                            mappingCode = $.trim(mapping.display.split(":")[1]);
                        }
                    });
                }
                return mappingCode;
            };

            var getAdtActionForEncounterType = function (encounterTypeUuid) {
                var adtActionsForType = $scope.dispositionActions.filter(function (dispositionAction) {
                    var actionConfig = actionConfigs[getActionCode(dispositionAction)];
                    return actionConfig ? actionConfig.encounterTypeUuid === encounterTypeUuid : false;
                });
                return adtActionsForType.length > 0 ? adtActionsForType[0] : null;
            };

            var initializeActionConfig = function () {
                var admitActions = appService.getAppDescriptor().getExtensions("org.bahmni.adt.admit.action", "config");
                var transferActions = appService.getAppDescriptor().getExtensions("org.bahmni.adt.transfer.action", "config");
                var dischargeActions = appService.getAppDescriptor().getExtensions("org.bahmni.adt.discharge.action", "config");
                var undoDischargeActions = appService.getAppDescriptor().getExtensions("org.bahmni.adt.undo.discharge.action", "config");
                if (encounterConfig) {
                    var Constants = Bahmni.Common.Constants;
                    actionConfigs[Constants.admissionCode] = {
                        encounterTypeUuid: encounterConfig.getAdmissionEncounterTypeUuid(),
                        allowedActions: admitActions
                    };
                    actionConfigs[Constants.dischargeCode] = {
                        encounterTypeUuid: encounterConfig.getDischargeEncounterTypeUuid(),
                        allowedActions: dischargeActions
                    };
                    actionConfigs[Constants.transferCode] = {
                        encounterTypeUuid: encounterConfig.getTransferEncounterTypeUuid(),
                        allowedActions: transferActions
                    };
                    actionConfigs[Constants.undoDischargeCode] = {
                        encounterTypeUuid: encounterConfig.getDischargeEncounterTypeUuid(),
                        allowedActions: undoDischargeActions
                    };
                }
            };

            $scope.isAdmitted = function () {
                return $scope.visit && $scope.visit.isAdmitted();
            };

            $scope.isDischarged = function () {
                return $scope.visit && $scope.visit.isDischarged();
            };

            var filterAction = function (actions, actionTypes) {
                return _.filter(actions, function (action) {
                    return actionTypes.indexOf(action.name.name) >= 0;
                });
            };

            var getDispositionActions = function (actions) {

                if ($scope.isAdmitted()) {
                    return filterAction(actions, ["Discharge Patient", "Transfer Patient"]);
                } else if ($scope.isDischarged()) {
                    return filterAction(actions, ["Undo Discharge"]);
                } else {
                    return filterAction(actions, ["Admit Patient"]);
                }
            };

            var getVisit = function () {
                var visitUuid = $stateParams.visitUuid;
                if (visitUuid != 'null') {
                    return visitService.getVisit(visitUuid).then(function (response) {
                        var visit = response.data;
                        $scope.visit = new Bahmni.ADT.Visit(visit);
                    });
                } else {
                    $scope.visit = null;
                    return $q.when({id: 1, status: "Returned from service.", promiseComplete: true});
                }
            };

            var init = function () {
                initializeActionConfig();
                var defaultVisitType = appService.getAppDescriptor().getConfigValue('defaultVisitType');
                var visitTypes = encounterConfig.getVisitTypes();
                $scope.visitControl = new Bahmni.Common.VisitControl(visitTypes, defaultVisitType, visitService);

                return getVisit().then(dispositionService.getDispositionActions).then(function (response) {
                    if (response.data && response.data.results && response.data.results.length) {
                        $scope.dispositionActions = getDispositionActions(response.data.results[0].answers);
                        if ($scope.visit) {
                            $scope.currentVisitType = $scope.visit.visitType.display;
                            var encounterToDisplay = Bahmni.ADT.DispositionDisplayUtil.getEncounterToDisplay(encounterConfig, $scope.visit);
                            if (encounterToDisplay) {
                                $scope.dispositionAction = getAdtActionForEncounterType(encounterToDisplay.encounterType.uuid);
                            }
                        }
                    }
                });
            };

            $scope.$watch('dispositionAction', function () {
                var dispositionCode;
                if ($scope.dispositionAction) {
                    dispositionCode = getActionCode($scope.dispositionAction);
                }
                $scope.actions = dispositionCode ? actionConfigs[dispositionCode].allowedActions : [];
            });

            $scope.getDisplayForContinuingVisit = function () {
                //return "Continue " + $scope.currentVisitType + " Visit";
                return "Admit";
            };

            $scope.getDisplay = function (displayFunction, display) {
                if (displayFunction) {
                    return $scope.call(displayFunction);
                }
                return display;
            };

            $scope.startNewVisit = function (visitTypeUuid) {
                if ($scope.visit) {
                    visitService.endVisit($scope.visit.visitId).then(function () {
                        $scope.admit(visitTypeUuid);
                    });
                } else {
                    $scope.admit(visitTypeUuid);
                }
            };

            $scope.cancel = function () {
                $location.url(Bahmni.ADT.Constants.patientsListUrl);
            };

            $scope.call = function (functionName) {
                if (functionName) {
                    return $scope[functionName]();
                } else {
                    return true;
                }
            };

            $scope.visitExists = function () {
                return $scope.visit ? true : false;
            };

            var getEncounterData = function (encounterTypeUuid, visitTypeUuid) {
                var encounterData = {};
                encounterData.patientUuid = $scope.patient.uuid;
                encounterData.encounterTypeUuid = encounterTypeUuid;
                encounterData.visitTypeUuid = visitTypeUuid;
                encounterData.observations = $scope.adtObservations;
                encounterData.locationUuid = locationUuid;
                return encounterData;
            };

            var forwardUrl = function (response, option) {
                var appDescriptor = appService.getAppDescriptor();
                var forwardLink = appDescriptor.getConfig(option);
                forwardLink = forwardLink && forwardLink.value;

                var options = {
                    'patientUuid': $scope.patient.uuid,
                    'encounterUuid': response.encounterUuid,
                    'visitUuid': response.visitUuid
                };
                if (forwardLink) {
                    $window.location = appDescriptor.formatUrl(forwardLink, options);
                }
            };


            $scope.admit = function (visitTypeUuid) {
                var encounterData = getEncounterData($scope.encounterConfig.getAdmissionEncounterTypeUuid(), defaultVisitTypeUuid);
                encounterService.create(encounterData).success(function (response) {
                    forwardUrl(response, "onAdmissionForwardTo");
                });
            };

            $scope.transfer = function () {
                var encounterData = getEncounterData($scope.encounterConfig.getTransferEncounterTypeUuid(), defaultVisitTypeUuid);
                encounterService.create(encounterData).then(function (response) {
                    forwardUrl(response.data, "onTransferForwardTo");
                });
            };

            $scope.discharge = function () {
                var encounterData = getEncounterData($scope.encounterConfig.getDischargeEncounterTypeUuid());
                spinner.forPromise(encounterService.create(encounterData).then(function (response) {
                    return bedService.getAssignedBedForPatient($scope.patient.uuid).then(function (bedDetails) {
                        if (bedDetails) {
                            return bedService.freeBed(bedDetails.bedId).success(function () {
                                forwardUrl(response, "onDischargeForwardTo");
                            })
                        }
                        forwardUrl(response, "onDischargeForwardTo");
                    })
                }));
            };

            $scope.undoDischarge = function () {
                var encounterData = $scope.visit.getDischargeEncounter();
                spinner.forPromise(encounterService.delete(encounterData.uuid, "Undo Discharge")).success(function (response) {
                    var params = {
                        'encounterUuid': $scope.visit.getAdmissionEncounter().uuid,
                        'visitUuid': $scope.visit.uuid
                    };
                    forwardUrl(params, "onAdmissionForwardTo");
                });
            };

            spinner.forPromise(init());
            $anchorScroll();

        }
    ]);

'use strict';

angular.module('bahmni.adt')
    .controller('BedManagementController', ['$scope', '$rootScope', '$location', 'WardService', 'bedService', '$stateParams', 'encounterService', 'sessionService', 'messagingService', 'backlinkService', '$timeout', '$document',
        function ($scope, $rootScope, $location, wardService, bedService, $stateParams, encounterService, sessionService, messagingService, backlinkService, $timeout, $document) {
        $scope.wards = null;
        $scope.currentView = "wards";
        $scope.layout = [];
        $scope.bedLayouts = [];
        $scope.selectedBed = null;
        $scope.wardName = null;
        var maxX = 1;
        var maxY = 1;
        var minX = 1;
        var minY = 1;
        var currentWardUuid = null;
        var encounterUuid = $stateParams.encounterUuid;
        var locationUuid = sessionService.getLoginLocationUuid();
        var visitUuid = $stateParams.visitUuid;

        var init = function () {
            $('.bed-info').hide();
            if ($rootScope.bedDetails && $rootScope.bedDetails.wardUuid) {
                $scope.showWardLayout($rootScope.bedDetails.wardUuid, $rootScope.bedDetails.wardName);
            } else {
                $scope.showWardList();
            }

            $document.bind('click', function () {
                $scope.hideBedInfoPopUp();
            });
        };


            $scope.$on('$stateChangeSuccess', function (event, state, params, fromState, fromParams) {
                backlinkService.addUrl({ image: $scope.patient.image, url: "#/patient/" + $scope.patient.uuid + "/visit/" + visitUuid + "/", title: "Back to patient dashboard"});
            });

        $scope.hideBedInfoPopUp = function () {
            $scope.selectedBed = null;
            $scope.$apply();
        };

        $scope.showWardLayout = function (wardUuid, wardName) {
            currentWardUuid = wardUuid;
            $scope.wardName = wardName
            $scope.layout = [];
            $scope.bedLayouts = [];
            $scope.selectedBed = null;
            maxX = maxY = minX = minY = 1;
            $scope.currentView = "wardLayout";
            getBedsForWard(wardUuid);
        };

        $scope.setBedDetails = function (cell) {
            $('.bed-info').hide();
            $scope.selectedBed = cell;
            $scope.$apply();
            if (!cell.empty) {
                $('.bed-info').show();
            }
        };

        $scope.showWardList = function () {
            $scope.currentView = "wards";
            loadAllWards();
        };

        var assignBedToPatient = function(bed, encUuid) {
            bedService.assignBed(bed.bed.bedId, $scope.patient.uuid, encUuid).success(function (result) {
                $rootScope.bed = bed.bed;
                $scope.layout = [];
                bedService.setBedDetailsForPatientOnRootScope($scope.patient.uuid);
                getBedsForWard(currentWardUuid);
                $scope.confirmationMessage = "Bed " + bed.bed.bedNumber + " is assigned successfully";
                $('.bed-info').hide();
            });
        };

        var showAssignmentError = function(errorMsg) {
            messagingService.showMessage('error', errorMsg);
            $('.bed-info').hide();
        };

        var clearAssignmentError = function() {
            $('.bed-info').hide();
        };


        var createTransferEncounterAndAssignBed = function(bed) {
            var encounterData = {};
            encounterData.patientUuid = $scope.patient.uuid;
            encounterData.locationUuid = locationUuid;
            encounterData.encounterTypeUuid = $rootScope.encounterConfig.encounterTypes['TRANSFER'];
            encounterService.create(encounterData).success(function(encounter) {
                encounterUuid = encounter.encounterUuid;
                assignBedToPatient(bed, encounterUuid);
            }).error(function(error) {
                showAssignmentError("An error occurred while tranferring the patient.");
            });
        };

        var checkEncounterBeforeBedAssignment = function(bed, assignmentType) {
            var encounterTypeUuid = $rootScope.encounterConfig.encounterTypes[assignmentType];
            encounterService.identifyEncounterForType($scope.patient.uuid, encounterTypeUuid).then(
                function(encounter) {
                    if (encounter) {
                        encounterUuid = encounter.uuid;
                        assignBedToPatient(bed, encounterUuid);
                    } else if (assignmentType == 'TRANSFER') {
                        createTransferEncounterAndAssignBed(bed);
                    } else {
                        showAssignmentError("There is no appropriate encounter for " + assignmentType);
                    }
                },
                function(errorMsg) {
                    showAssignmentError(errorMsg);
                }
            );
        };

        $scope.assignBed = function (bed) {
            clearAssignmentError();
            var assignmentType = $rootScope.bedDetails ? 'TRANSFER' : 'ADMISSION';
            if (encounterUuid) {
                assignBedToPatient(bed, encounterUuid);
            } else {
                checkEncounterBeforeBedAssignment(bed, assignmentType);
            }
        };

        $scope.getCurrentBed = function () {
            return $rootScope.bedDetails;
        };

        $scope.fetchBedInfo = function (cell, rowIndex, columnIndex) {
            if (!cell.available && !cell.empty) {
                return bedService.getBedInfo(cell.bed.bedId).success(function (data) {
                    $scope.layout[rowIndex][columnIndex].patientInfo = {
                        "name": data.patient.person.personName.givenName + " " + data.patient.person.personName.familyName,
                        "identifier": data.patient.identifiers[0].identifier,
                        "gender": data.patient.person.gender
                    }
                })
            }
            return null;
        };

        var loadAllWards = function () {
            currentWardUuid = null;
            wardService.getWardsList().success(function (wardsList) {
                $scope.wards = wardsList.results;
            });
            $scope.confirmationMessage = null;
        };

        var getBedsForWard = function (wardUuid) {
            wardService.bedsForWard(wardUuid).success(function (result) {
                $scope.bedLayouts = result.bedLayouts;
                createLayoutGrid();
            });
        };

        var createLayoutGrid = function () {
            findMaxYMaxX();
            var bedLayout;
            var rowLayout = [];
            for (var i = minX; i <= maxX; i++) {
                rowLayout = [];
                for (var j = minY; j <= maxY; j++) {
                    bedLayout = getBedLayoutWithCoordinates(i, j);
                    rowLayout.push({
                        empty: isEmpty(bedLayout),
                        available: isAvailable(bedLayout),
                        bed: {
                            bedId: bedLayout != null && bedLayout.bedId,
                            bedNumber: bedLayout != null && bedLayout.bedNumber,
                            bedType: bedLayout != null && bedLayout.bedType != null && bedLayout.bedType.displayName,
                        }
                    })
                }
                $scope.layout.push(rowLayout);
            }
        };

        var isEmpty = function (bedLayout) {
            return bedLayout == null || bedLayout.bedId == null;
        };

        var isAvailable = function (bedLayout) {
            if (bedLayout == null) {
                return false;
            }
            return bedLayout.status === "AVAILABLE";
        };

        var getBedLayoutWithCoordinates = function (rowNumber, columnNumber) {
            for (var i = 0, len = $scope.bedLayouts.length; i < len; i++) {
                if ($scope.bedLayouts[i].rowNumber === rowNumber && $scope.bedLayouts[i].columnNumber === columnNumber) {
                    return $scope.bedLayouts[i];
                }
            }
            return null;
        };

        var findMaxYMaxX = function () {
            for (var i = 0; i < $scope.bedLayouts.length; i++) {
                var bedLayout = $scope.bedLayouts[i];
                if (bedLayout.rowNumber > maxX) {
                    maxX = bedLayout.rowNumber;
                }
                if (bedLayout.columnNumber > maxY) {
                    maxY = bedLayout.columnNumber;
                }
            }
        };

        init();

    }]).directive('bedAssignmentDialog', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                elem.bind('click', function (e) {
                    scope.setBedDetails(scope.cell);
                    var leftpos = $(elem).offset().left - 132;
                    var toppos = $(elem).offset().top;
                    $(".bed-info").css('left', leftpos);
                    $(".bed-info").css('top', toppos);
                    e.stopPropagation();
                });
            }
        };
    });

'use strict';

angular.module('bahmni.adt')
    .controller('WardDetailsController', ['$scope', 'WardService',
        function ($scope, wardService) {
            $scope.wards = null;
            $scope.ward = null;
            var params = {
                q: "emrapi.sqlGet.wardsListDetails",
                v: "full"
            };
            var init = function () {
                loadAllWards();
            };

            var loadAllWards = function () {
                wardService.getWardsList().success(function (wardsList) {
                    $scope.wards = wardsList.results;
                });
            };

            $scope.toggle = function (ward) {
                $scope.ward = ward;
                ward.showDetails = !ward.showDetails && $scope.showDetailsButton(ward);
            };
            $scope.showDetailsButton = function (ward) {
                return ward.occupiedBeds > 0;
            };
            $scope.getParams = function (ward) {
                params.location_name = $scope.ward.ward.childLocations[0].display;
                return params;
            };

            init();

        }]);

'use strict';

Bahmni.ADT.WardDetails = {};


Bahmni.ADT.WardDetails.create = function(details) {
    var detailsMap = {};
    var attributesToCopy = ["Bed", "Name", "Id", "Name", "Age", "District", "Village", "Admission By", "Admission Time", "Disposition By", "Disposition Time", "ADT Notes"];
    var diagnosisProperties = ["Diagnosis", "Diagnosis Certainty", "Diagnosis Order", "Diagnosis Status", "Diagnosis Provider", "Diagnosis Datetime"];
    var hiddenAttributesToCopy = ["Patient Uuid", "Visit Uuid"];

    var copyProperties = function(newObject, oldObject, properties) {
        properties.forEach(function(property){
            newObject[property] = oldObject[property];
        });
        return newObject;
    };

    var removeDuplicateRuledOutDiagnosis = function(rows) {
        rows.forEach(function(row){
            var ruledOutDiagnoses = _.pluck(_.filter(row.Diagnosis, {'ruledOut': true}), 'Diagnosis');
            _.remove(row.Diagnosis, function(diagnosisObj) {
                return _.contains(ruledOutDiagnoses, diagnosisObj.Diagnosis) && !diagnosisObj.ruledOut
            });
        });
        return rows;
    };

    details.forEach(function(detail) {
        detailsMap[detail.Id] = detailsMap[detail.Id] || copyProperties({}, detail, attributesToCopy);
        detailsMap[detail.Id].Diagnosis = detailsMap[detail.Id].Diagnosis || [];
        if(detail.Diagnosis != null) {
            var diagnosis = copyProperties({}, detail, diagnosisProperties);
            diagnosis.ruledOut = diagnosis["Diagnosis Status"] == "Ruled Out Diagnosis";
            detailsMap[detail.Id].Diagnosis.push(diagnosis);
        }
        var hiddenProperties = copyProperties({}, detail, hiddenAttributesToCopy);
        detailsMap[detail.Id].hiddenAttributes = detailsMap[detail.Id].hiddenAttributes || {};
        detailsMap[detail.Id].hiddenAttributes.patientUuid = hiddenProperties["Patient Uuid"];
        detailsMap[detail.Id].hiddenAttributes.visitUuid = hiddenProperties["Visit Uuid"];
    });

    return removeDuplicateRuledOutDiagnosis(_.values(detailsMap));
};

'use strict';

angular.module('bahmni.adt')
    .directive('tableDetails',['QueryService','spinner','$q','$window','$stateParams','appService', function (queryService, spinner, $q, $window, $stateParams, appService) {
        var controller = function ($scope) {

            $scope.gotoPatientDashboard = function(patientUuid, visitUuid){
                var options = $.extend({}, $stateParams);
                $.extend(options, { patientUuid: patientUuid, visitUuid: visitUuid || null});
                $window.location = appService.getAppDescriptor().formatUrl(Bahmni.ADT.Constants.ipdDashboard, options, true);
            };

            var getTableDetails = function() {
                var details = $q.defer();
                queryService.getResponseFromQuery($scope.params).then(function (response) {
                    $scope.tableDetails = Bahmni.ADT.WardDetails.create(response.data);
                    $scope.tableHeadings = $scope.tableDetails.length > 0 ? Object.keys($scope.tableDetails[0]) : [];
                    details.resolve();
                });
                return details.promise;
            };
            spinner.forPromise(getTableDetails());
        };
        return {
            restrict: 'E',
            controller: controller,
            scope: {
               params:"="
            },
            templateUrl: "tableDetails/views/tableDetails.html"
        };
    }]);

'use strict';

angular.module('bahmni.adt')
    .service('WardService', ['$http', function ($http) {

        this.bedsForWard = function (uuid) {
            return $http.get("/openmrs/ws/rest/v1/admissionLocation/" + uuid, {
                method: "GET",
                params: {v: "full"},
                withCredentials: true
            });
        };

        this.getWardsList = function () {
            return $http.get("/openmrs/ws/rest/v1/admissionLocation");
        };
    }]);

'use strict';

angular.module('bahmni.adt')
    .service('QueryService', ['$http', function ($http) {

        this.getResponseFromQuery = function(params){
            return $http.get("/openmrs/ws/rest/v1/bahmnicore/sql" , {
                method: "GET",
                params: params,
                withCredentials: true
            });
        }
    }]);