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
'use strict';

angular.module('bahmni.common.config')
    .directive('showIfPrivilege', function ($rootScope) {
        return{
            scope : {
                showIfPrivilege :"@"
            },
            link : function(scope,element,attr){
                if($rootScope.currentUser) {
                    var requiredPrivilege = _.find($rootScope.currentUser.privileges, function (privilege) {
                        return scope.showIfPrivilege === privilege.name;
                    });
                    if (!requiredPrivilege) {
                        element.hide()
                    }
                }
            }
        }
    });


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
'use strict';

angular.module('bahmni.common.domain')
  .service('visitDocumentService', ['$http', function ($http) {
    this.save = function (visitDocument) {
        var url = "/openmrs/ws/rest/v1/bahmnicore/visitDocument";
          return $http.post(url, visitDocument);
    };
    this.saveImage = function (image, patientUuid, encounterTypeName) {
        var format = image.split(";base64")[0].split("data:image/")[1];
        var url = "/openmrs/ws/rest/v1/bahmnicore/visitDocument/uploadImage";
        return $http.post(url, {
            image: image.replace(/data:image\/.*;base64/, ""),
            format: format,
            patientUuid: patientUuid,
            encounterTypeName: encounterTypeName
        }, {
            withCredentials: true,
            headers: {"Accept": "text/plain", "Content-Type": "application/json"}
        });
    };
}]);
Bahmni.Common.Domain.ProviderMapper = function () {
	this.map = function (openMrsProvider) {
        if(!openMrsProvider) return null;
        return {
            uuid: openMrsProvider.uuid,
            name: openMrsProvider.preferredName.display
        }
    };
};
angular.module('bahmni.common.gallery', []);
angular.module('bahmni.common.gallery')
    .directive('bmGalleryPane', ['$rootScope', '$document', 'observationsService', 'encounterService', 'spinner', 'configurations',
        function ($rootScope, $document, observationsService, encounterService, spinner, configurations) {

        var $body = $document.find('body');

        $rootScope.$on('$stateChangeStart', function () {
            close();
        });

        var link = function ($scope, element) {
            $scope.galleryElement = element;
            $body.prepend($scope.galleryElement).addClass('gallery-open');

            KeyboardJS.on('right', function () {
                $scope.$apply(function () {
                    $scope.showNext();
                });
            });
            KeyboardJS.on('left', function () {
                $scope.$apply(function () {
                    $scope.showPrev();
                });
            });
        };

        function close() {
            $('body #gallery-pane').remove();
            $body.removeClass('gallery-open');
            KeyboardJS.clear('right');
            KeyboardJS.clear('left');
        }

        var controller = function ($scope) {
            $scope.imageIndex = $scope.imagePosition.index ? $scope.imagePosition.index : 0;
            $scope.albumTag = $scope.imagePosition.tag ? $scope.imagePosition.tag : 'defaultTag';
            $scope.showImpression = false;

            $scope.isActive = function (index, tag) {
                return $scope.imageIndex == index && $scope.albumTag == tag;
            };

            var getAlbumIndex = function () {
                return _.findIndex($scope.albums, function (album) {
                    return album.tag == $scope.albumTag;
                });
            };

            $scope.showPrev = function () {
                var albumIndex = getAlbumIndex();
                if ($scope.imageIndex > 0) {
                    --$scope.imageIndex;
                }
                else {
                    if (albumIndex == 0) {
                        albumIndex = $scope.albums.length;
                    }
                    var previousAlbum = $scope.albums[albumIndex - 1];
                    if (previousAlbum.images.length == 0) {
                        $scope.showPrev(albumIndex - 1);
                    }
                    $scope.albumTag = previousAlbum.tag;
                    $scope.imageIndex = previousAlbum.images.length - 1;
                }
            };

            $scope.showNext = function () {
                var albumIndex = getAlbumIndex();
                if ($scope.imageIndex < $scope.albums[albumIndex].images.length - 1) {
                    ++$scope.imageIndex;
                } else {
                    if (albumIndex == $scope.albums.length - 1) {
                        albumIndex = -1;
                    }
                    var nextAlbum = $scope.albums[albumIndex + 1];
                    if (nextAlbum.images.length == 0) {
                        $scope.showNext(albumIndex + 1);
                    }
                    $scope.albumTag = nextAlbum.tag;
                    $scope.imageIndex = 0;
                }
            };

            $scope.getTotalLength = function () {
                var totalLength = 0;
                angular.forEach($scope.albums, function (album) {
                    totalLength += album.images.length;
                });
                return totalLength;
            };

            $scope.getCurrentIndex = function () {
                var currentIndex = 1;
                for (var i = 0; i < getAlbumIndex(); i++) {
                    currentIndex += $scope.albums[i].images.length;
                }
                return currentIndex + parseInt($scope.imageIndex);
            };

            $scope.close = function () {
                close($scope);
            };

            $scope.toggleImpression = function () {
                $scope.showImpression = !$scope.showImpression;
            };

            $scope.hasObsRelationship = function (image) {
                return image.sourceObs && image.sourceObs.length > 0;
            };

            $scope.saveImpression = function (image) {
                var bahmniEncounterTransaction = mapBahmniEncounterTransaction(image);
                spinner.forPromise(encounterService.create(bahmniEncounterTransaction).then(function () {
                    constructNewSourceObs(image);
                    fetchObsRelationship(image);
                }));
            };

            var init = function () {
                if ($scope.accessImpression) {
                    $scope.albums.forEach(function (album) {
                        album.images.forEach(function (image) {
                            fetchObsRelationship(image);
                            constructNewSourceObs(image);
                        })
                    })
                }
            };

            var fetchObsRelationship = function (image) {
                observationsService.getObsRelationship(image.uuid).then(function (response) {
                    image.sourceObs = response.data;
                });
            };

            var constructNewSourceObs = function (image) {
                image.newSourceObs = $scope.newSourceObs && $scope.newSourceObs.targetObsRelation.targetObs.uuid === image.uuid ? $scope.targetObs : {
                    value: "",
                    concept: {
                        uuid: configurations.impressionConcept().uuid
                    },
                    targetObsRelation: {
                        relationshipType: Bahmni.Common.Constants.qualifiedByRelationshipType,
                        targetObs: {
                            uuid: image.uuid
                        }
                    }
                };
            };

            var mapBahmniEncounterTransaction = function (image) {
                return {
                    patientUuid: $scope.patient.uuid,
                    encounterTypeUuid: configurations.encounterConfig().getConsultationEncounterTypeUuid(),
                    observations: [image.newSourceObs]
                };
            };

            init();
        };

        return {
            link: link,
            controller: controller,
            templateUrl: '../common/gallery/views/gallery.html'
        }
    }]);

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

angular.module('bahmni.common.uiHelper').filter('reverse', function() {
    return function(items) {
        return items && items.slice().reverse();
    };
});
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
.directive('bahmniAutocomplete', function ($parse) {
    var link = function (scope, element, attrs, ngModelCtrl) {
        var source = scope.source();
        var responseMap = scope.responseMap();
        var onSelect = scope.onSelect();
        var minLength = scope.minLength || 2;
        var formElement = element[0];
        var validationMessage = scope.validationMessage || 'Please select a value from auto complete';

        var validateIfNeeded = function(value){
           if(!scope.strictSelect) return;
            scope.isInvalid = (value !== scope.selectedValue);
        }

        element.autocomplete({
            autofocus: true,
            minLength: minLength,
            source: function (request, response) {
                source({elementId: attrs.id, term: request.term, elementType: attrs.type}).then(function (data) {
                    var results = responseMap ? responseMap(data) : data ;
                    response(results);
                });
            },
            select: function (event, ui) {
                scope.selectedValue = ui.item.value;
                if(onSelect != null) {
                    onSelect(ui.item);
                }
                ngModelCtrl.$setViewValue(ui.item.value);
                validateIfNeeded(ui.item.value);
                if(scope.blurOnSelect) element.blur();
                scope.$apply();
                return true;
            },
            search: function (event, ui) {
                if(scope.onEdit != null){
                    scope.onEdit(ui.item);
                }
                var searchTerm = $.trim(element.val());
                validateIfNeeded(searchTerm);
                if (searchTerm.length < minLength) {
                    event.preventDefault();
                }
            }
        });

        $(element).on('change', function() { validateIfNeeded($(element).val()); })

        scope.$watch('isInvalid', function(){
            ngModelCtrl.$setValidity('selection', !scope.isInvalid);
            formElement.setCustomValidity(scope.isInvalid ? validationMessage : '');
        });
    };

    return {
        link: link,
        require: 'ngModel',
        scope: {
            source: '&',
            responseMap: '&',
            onSelect: '&',
            onEdit: '&?',
            minLength: '=',
            blurOnSelect: '=',
            strictSelect: '=',
            validationMessage: '@',
            isInvalid: "="
        }
    }
});
angular.module('bahmni.common.uiHelper')
    .directive('datepicker', function ($parse) {
        var link = function ($scope, element, attrs, ngModel) {
            $(function(){
                var today = new Date();
                element.datepicker({
                    changeYear: true,
                    changeMonth: true,
                    maxDate: today,
                    dateFormat: 'dd/mm/yy',
                    onSelect: function (dateText) {
                        $scope.$apply(function (scope) {
                            ngModel.$setViewValue(dateText);
                        });
                    }
                });
            })
        }
        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
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
angular.module('bahmni.common.uiHelper')
    .directive('bmGallery', ['$location', '$rootScope', '$compile', function ($location, $rootScope, $compile) {

        var controller = function ($scope) {
            $scope.albums = [];
            $scope.imagePosition = {
                tag: undefined,
                index: 0
            };
            this.image = function (record) {
                var provider = record.provider;
                return {
                    src: Bahmni.Common.Constants.documentsPath + '/' + record.imageObservation.value,
                    title: record.concept.name,
                    desc: record.imageObservation.comment,
                    date: record.imageObservation.observationDateTime,
                    uuid: record.imageObservation.uuid,
                    providerName: provider ? provider.name : null
                };
            };

            this.addImageObservation = function (record, tag) {
                return this.addImage(this.image(record), tag);
            };

            this.addImage = function (image, tag, tagOrder) {
                var matchedAlbum = getMatchingAlbum(tag);
                if (!matchedAlbum) {
                    var newAlbum = {};
                    newAlbum.tag = tag;
                    newAlbum.images = [image];
                    $scope.albums.splice(tagOrder, 0, newAlbum);
                }else{
                    matchedAlbum.images.push(image);
                }
                return $scope.albums[0].images.length - 1;
            };

            var getMatchingAlbum = function(tag) {
                return _.find($scope.albums, function (album) {
                    return album.tag == tag;
                });
            };

            this.removeImage = function (image, tag, index) {
                var matchedAlbum = getMatchingAlbum(tag);

                if(matchedAlbum)  {
                    matchedAlbum.images && matchedAlbum.images.splice(index, 1);
                }
            };

            this.setIndex = function (tag, index) {
                $scope.imagePosition.tag = tag;
                $scope.imagePosition.index = index;
            };

            this.open = function () {
                $compile("<div bm-gallery-pane id='gallery-pane'></div>")($scope);
            };
        };

        return {
            controller: controller,
            scope: {
                patient: "=",
                accessImpression: "="
            }
        }
    }])
    .directive('bmGalleryItem', function () {
        var link = function ($scope, element, attrs, imageGalleryController) {
            var image = {
                src: $scope.image.encodedValue,
                title: $scope.image.concept ? $scope.image.concept.name : "",
                date: $scope.image.obsDatetime,
                uuid: $scope.image.obsUuid,
                providerName: $scope.image.provider ? $scope.image.provider.name : ""
            };
            imageGalleryController.addImage(image, $scope.visitUuid, $scope.visitOrder);

            element.click(function (e) {
                e.stopPropagation();
                imageGalleryController.setIndex($scope.visitUuid, $scope.index);
                imageGalleryController.open();
            });

            element.on('$destroy', function () {
                imageGalleryController.removeImage(image, $scope.visitUuid, $scope.index);
            });
        };
        return {
            link: link,
            scope: {
                image: '=',
                index: "@",
                visitUuid: "=",
                visitOrder: "@"
            },
            require: '^bmGallery'
        };
    })
    .directive('bmImageObservationGalleryItem', function () {
        var link = function (scope, element, attrs, imageGalleryController) {
            scope.imageIndex = imageGalleryController.addImageObservation(scope.observation, 'defaultTag');
            element.click(function (e) {
                e.stopPropagation();
                imageGalleryController.setIndex('defaultTag', scope.imageIndex);
                imageGalleryController.open();
            });
        };
        return {
            link: link,
            scope: {
                observation: '='
            },
            require: '^bmGallery'
        };
    })
    .directive('bmObservationGalleryItem', function () {
        var link = function (scope, element, attrs, imageGalleryController) {
            scope.imageObservation = new Bahmni.Clinical.ImageObservation(scope.observation, scope.observation.concept, scope.observation.provider);
            scope.imageIndex = imageGalleryController.addImageObservation(scope.imageObservation, 'defaultTag');
            element.click(function (e) {
                e.stopPropagation();
                imageGalleryController.setIndex('defaultTag', scope.imageIndex);
                imageGalleryController.open();
            });
        };
        return {
            link: link,
            scope: {
                observation: '='
            },
            require: '^bmGallery'
        };
    })
    .directive("bmImageObservationGalleryItems", function () {
        var link = function (scope, elem, attrs, imageGalleryController) {
            angular.forEach(scope.list, function (record) {
                imageGalleryController.addImageObservation(record, 'defaultTag');
            });

            $(elem).click(function () {
                imageGalleryController.open();
            });
        };
        return {
            link: link,
            scope: {
                list: "="
            },
            require: '^bmGallery'
        }
    })
    .directive("bmLazyImageObservationGalleryItems", function () {
        var link = function (scope, elem, attrs, imageGalleryController) {
            scope.promise.then(function (response) {
                angular.forEach(response, function (record) {
                    var index = imageGalleryController.addImageObservation(record, 'defaultTag');
                    if (scope.currentObservation && scope.currentObservation.imageObservation.uuid == record.imageObservation.uuid) {
                        imageGalleryController.setIndex('defaultTag', index);
                    }
                });

                $(elem).click(function () {
                    imageGalleryController.open();
                });
            });
        };
        return {
            link: link,
            scope: {
                promise: "=",
                currentObservation: "=?index"
            },
            require: '^bmGallery'
        }
    });
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

Bahmni.Common.DocumentImage = function(data){
    angular.extend(this, data);
    this.title = this.getTitle();
    this.thumbnail = this.getThumbnail();
};

Bahmni.Common.DocumentImage.prototype = {
    getTitle: function() {
        var titleComponents = [];
        if(this.concept) {
            titleComponents.push(this.concept.name);
        }        
        if(this.obsDatetime) {
            titleComponents.push(moment(this.obsDatetime).format(Bahmni.Common.Constants.dateDisplayFormat));
        }
        return titleComponents.join(', ');
    },

    getThumbnail: function() {
        var src = this.src || this.encodedValue;
        return src && src.replace(/(.*)\.(.*)$/, "$1_thumbnail.$2") || null;
    }
};
'use strict';

angular.module('documentupload', ['ui.router', 'bahmni.common.config', 'opd.documentupload', 'bahmni.common.patient', 
    'authentication', 'bahmni.common.appFramework', 'ngDialog', 'httpErrorInterceptor', 'bahmni.common.domain', 
    'bahmni.common.uiHelper', 'ngSanitize', 'bahmni.common.patientSearch', 'bahmni.common.util', 'bahmni.common.routeErrorHandler']);
angular.module('documentupload').config(['$stateProvider', '$httpProvider', '$urlRouterProvider', 
        function ($stateProvider, $httpProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/search');
        $stateProvider.state('search', {
                url:'/search',
                data: {
                    backLinks: [{label: "Home", url: "../home/", icon: "icon-home"}]
                },
                views: {
                    'content': {
                        templateUrl: '../common/patient-search/views/patientsList.html',
                        controller: 'PatientsListController'
                    },
                    'additional-header': { 
                        templateUrl: '../common/ui-helper/header.html' 
                    }
                },
                resolve: {
                    initialization: 'initialization'
                }
            })
            .state('upload', {
                url: '/patient/:patientUuid/document',
                data: {
                    backLinks: [{label: "Patients", url: "#/search", icon: "icon-circle-arrow-left"}]
                },
                views: {
                    'content': {
                        templateUrl: 'views/documentUpload.html',
                        controller: 'DocumentController'
                    },
                    'additional-header': { 
                        templateUrl: 'views/patientHeader.html' 
                    }
                },
                resolve: {
                    initialization: 'initialization'
                }
            })
            .state('error', {
                url: '/error',
                views: {
                    'content': {
                        templateUrl: '../common/ui-helper/error.html'
                    }
                }
            });

        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
    }]).run(['backlinkService', function (backlinkService) {
        FastClick.attach(document.body);

        backlinkService.addBackUrl();
    }]);

'use strict';

var Bahmni = Bahmni || {};
Bahmni.DocumentUpload = Bahmni.DocumentUpload || {};

angular.module('opd.documentupload', ['bahmni.common.patient', 'bahmni.common.config', 'bahmni.common.domain', 
    'bahmni.common.gallery', 'bahmni.common.logging']);


'use strict';

angular.module('opd.documentupload').factory('initialization',
    ['$rootScope', '$q', '$window', '$location', 'configurationService', 'authenticator', 'appService','spinner',
        function ($rootScope, $q, $window, $location, configurationService, authenticator, appService, spinner) {

            var initializationPromise = $q.defer();
            var url = purl(decodeURIComponent($window.location));
            $rootScope.appConfig = url.param();


            var getConsultationConfigs = function () {
                var configNames = ['encounterConfig'];
                return configurationService.getConfigurations(configNames).then(function (configurations) {
                    $rootScope.encounterConfig = angular.extend(new EncounterConfig(), configurations.encounterConfig);
                });
            };

            var validate = function() {
                var deferrable = $q.defer();
                var throwValidationError = function(errorMessage) {
                    $rootScope.error = errorMessage;
                    initializationPromise.reject();
                    deferrable.reject();
                };

                if($rootScope.appConfig.encounterType == null) {
                    throwValidationError("encounterType should be configured in config");
                } else if($rootScope.encounterConfig.getEncounterTypeUuid($rootScope.appConfig.encounterType) == null) {
                    throwValidationError("Configured encounterType does not exist");
                }

                deferrable.resolve();
                return deferrable;
            };

            var initApp = function() {
                return appService.initApp('documentUpload', {'app': true, 'extension' : true}, $rootScope.appConfig.encounterType);
            };

            $rootScope.$on("$stateChangeError", function() {
                $location.path("/error");
            });

            authenticator.authenticateUser().then(initApp).then(getConsultationConfigs).then(validate).then(function () {
                initializationPromise.resolve();
            });


            return spinner.forPromise(initializationPromise.promise);
        }] 
);

var Bahmni = Bahmni || {};
Bahmni.DocumentUpload = Bahmni.DocumentUpload || {};

Bahmni.DocumentUpload.Constants = (function () {
    return {
        visitRepresentation: "custom:(uuid,startDatetime,stopDatetime,visitType,patient)"
    };
})();



Bahmni.DocumentUpload.Visit = function () {
    var DocumentImage = Bahmni.Common.DocumentImage;
    this.startDatetime = "";
    this.stopDatetime = "";
    this.visitType = null;
    this.uuid = null;
    this.changed = false;
    this.images = [];
    var androidDateFormat = "YYYY-MM-DD hh:mm:ss";

    this._sortSavedImages = function(savedImages) {
        savedImages.sort(function(image1,image2){
            return image1.id - image2.id;
        });
        return savedImages;
    };

    this.initSavedImages = function (encounters) {
        this.images = [];
        var providerMapper = new Bahmni.Common.Domain.ProviderMapper();

        var savedImages = this.images;
        encounters.forEach(function (encounter) {
            encounter.obs && encounter.obs.forEach(function (observation) {
                observation.groupMembers && observation.groupMembers.forEach(function (member) {
                        var conceptName = observation.concept.name.name;
                        savedImages.push(new DocumentImage({
                            id:member.id,
                            encodedValue: Bahmni.Common.Constants.documentsPath + '/' + member.value,
                            obsUuid: observation.uuid,
                            obsDatetime: member.obsDatetime,
                            visitUuid: encounter.visit.uuid,
                            encounterUuid: encounter.uuid,
                            provider: providerMapper.map(encounter.provider),
                            concept: {uuid: observation.concept.uuid, editableName: conceptName, name: conceptName}}));
                });
            });
        });
        this.images = this._sortSavedImages(savedImages);
    };

    this.isNew = function () {
        return this.uuid == null;
    };

    this.hasImages = function () {
        return this.images.length > 0;
    };

    this.startDate = function () {
        if(!this.isNew()) return moment(this.startDatetime).toDate();
        return this.parseDate(this.startDatetime);
    };

    this.endDate = function () {
       return this.stopDatetime ? this.parseDate(this.stopDatetime) : undefined;
    };

    this.parseDate = function (date) {
        if(date instanceof Date) return date;
        var dateFormat = (date && date.indexOf('-') !== -1) ? androidDateFormat : Bahmni.Common.Constants.dateFormat;
        return  moment(date, dateFormat).toDate();
    };

    this.addImage = function (image) {
        var savedImage = null;
        var alreadyPresent = this.images.filter(function (img) {
            return img.encodedValue === image;
        });
        if (alreadyPresent.length == 0) {
            savedImage = new DocumentImage({"encodedValue": image, "new": true});
            this.images.push(savedImage);
        }
        this.markAsUpdated();
        return savedImage;
    };

    this.markAsUpdated = function () {
        this.changed = this.images.some(function(image) { return image.changed || !image.obsUuid || image.voided; });
    };

    this.isSaved = function(image){
        return image.obsUuid ? true : false;
    };
    
    this.removeImage = function(image){
       if(this.isSaved(image)){
           this.toggleVoidingOfImage(image);
       }else{
           this.removeNewAddedImage(image);
       }
    };

    this.removeNewAddedImage = function (image) {
        var i = this.images.indexOf(image);
        this.images.splice(i, 1);
        this.markAsUpdated();
    };

    this.toggleVoidingOfImage = function (image) {
        image.voided = !image.voided;
        this.markAsUpdated();
    };

    this.hasErrors = function(){
        var imageHasError = _.find(this.images, function (image) {
            return !image.voided && (!image.concept || !image.concept.editableName || !image.concept.uuid);
        });

        return imageHasError ? true : false;
    };

    this.hasVisitType = function(){
        return this.visitType && this.visitType.uuid ? true : false;
    }
};

angular.module('opd.documentupload')
    .directive('fileUpload', [function () {

        var link = function (scope, element) {
            element.bind("change", function () {
                var file = element[0].files[0];
                var reader = new FileReader();
                reader.onload = function (event) {
                    scope.onSelect()(event.target.result, scope.visit);
                };
                reader.readAsDataURL(file);
            });
        };

        return {
            restrict: 'A',
            scope: {
                'visit': '=',
                'onSelect':'&'
            },
            link: link
        }
    }]);


angular.module('opd.documentupload')
    .directive('dateValidator', function () {
        var DateUtil = Bahmni.Common.Util.DateUtil;

        var isVisitDateFromFuture = function(visitDate){
            if (!visitDate.startDatetime && !visitDate.stopDatetime)
                return false;
            return (DateUtil.getDate(visitDate.startDatetime) > new Date() || (DateUtil.getDate(visitDate.stopDatetime) > new Date()));
        };

        var isStartDateBeforeEndDate = function(visitDate){
            if (!visitDate.startDatetime || !visitDate.stopDatetime)
                return true;
            return (DateUtil.getDate(visitDate.startDatetime) <= DateUtil.getDate(visitDate.stopDatetime));
        };


        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                function validate() {
                    ngModel.$setValidity("overlap", scope.isNewVisitDateValid());
                    ngModel.$setValidity("future", !isVisitDateFromFuture(scope.newVisit));
                    ngModel.$setValidity("dateSequence", isStartDateBeforeEndDate(scope.newVisit));

                }
                scope.$watch(attrs.ngModel, validate);
                scope.$watch(attrs.dependentModel, validate);
            }
        }
    });
'use strict';

angular.module('opd.documentupload')
    .controller('DocumentController', ['$scope', '$stateParams', 'visitService', 'patientService', 'encounterService', 'spinner', 'visitDocumentService', '$rootScope', '$http', '$q', '$timeout', 'sessionService', '$anchorScroll',
        function ($scope, $stateParams, visitService, patientService, encounterService, spinner, visitDocumentService, $rootScope, $http, $q, $timeout, sessionService, $anchorScroll) {
            var encounterTypeUuid;
            var topLevelConceptUuid;
            var customVisitParams = Bahmni.DocumentUpload.Constants.visitRepresentation;
            var DateUtil = Bahmni.Common.Util.DateUtil;
            var patientMapper = new Bahmni.PatientMapper($rootScope.patientConfig);
            var activeEncounter = {};
            var locationUuid = sessionService.getLoginLocationUuid();

            $scope.visits = [];
            $scope.toggleGallery = true;
            $scope.conceptNameInvalid = false;

            var setOrientationWarning = function() {
                $scope.orientation_warning = (window.orientation && (window.orientation < 0 || window.orientation > 90));
            };
            setOrientationWarning();
            var onOrientationChange = function() {
                $scope.$apply(setOrientationWarning);
            };
            window.addEventListener('orientationchange', onOrientationChange);
            $scope.$on('$destroy', function(){
                window.removeEventListener('orientationchange', onOrientationChange);
            });

            var initNewVisit = function () {
                $scope.newVisit = new Bahmni.DocumentUpload.Visit();
                $scope.currentVisit = $scope.newVisit;
            };

            var createVisit = function (visit) {
                var newVisit = angular.extend(new Bahmni.DocumentUpload.Visit(), visit);
                return newVisit;
            };

            var getVisitTypes = function () {
                return visitService.getVisitType().then(function (response) {
                    $scope.visitTypes = response.data.results;
                })
            };

            var getPatient = function () {
                return patientService.getPatient($stateParams.patientUuid).success(function (openMRSPatient) {
                    $rootScope.patient = patientMapper.map(openMRSPatient);
                });
            };

            var getVisitStartStopDateTime = function (visit) {
                return { "startDatetime": DateUtil.getDate(visit.startDatetime), "stopDatetime": DateUtil.getDate(visit.stopDatetime)}
            };

            var compareVisitStartWithExistingStop = function (newVisitStart, existingVisit) {
                if(newVisitStart >= existingVisit.startDatetime && DateUtil.isInvalid(existingVisit.stopDatetime)) return true;
                return (newVisitStart <= existingVisit.stopDatetime || DateUtil.isSameDate(newVisitStart, existingVisit.stopDatetime));
            };

            var compareVisitStopWithExistingStart = function (newVisitStop, existingVisitStart) {
                return (newVisitStop >= existingVisitStart || DateUtil.isSameDate(newVisitStop, existingVisitStart));
            };

            var isVisitInSameRange = function (newVisitWithoutTime, existingVisit) {
                if (DateUtil.isInvalid(existingVisit.stopDatetime)) {
                    return (compareVisitStartWithExistingStop(newVisitWithoutTime.startDatetime, existingVisit) ||
                        compareVisitStopWithExistingStart(newVisitWithoutTime.stopDatetime, existingVisit.startDatetime));
                }
                else {
                    return (compareVisitStartWithExistingStop(newVisitWithoutTime.startDatetime, existingVisit) &&
                        compareVisitStopWithExistingStart(newVisitWithoutTime.stopDatetime, existingVisit.startDatetime));
                }


            };

            $scope.isNewVisitDateValid = function(){
                var filterExistingVisitsInSameDateRange = function (existingVisit) {
                    return isVisitInSameRange(newVisitWithoutTime, existingVisit);
                };
                var newVisitWithoutTime = Object();
                newVisitWithoutTime.startDatetime = DateUtil.getDate($scope.newVisit.startDatetime);
                newVisitWithoutTime.stopDatetime = $scope.newVisit.stopDatetime ? DateUtil.getDate($scope.newVisit.stopDatetime) : newVisitWithoutTime.startDatetime;
                var visitStartStopDateTime = $scope.visits.map(getVisitStartStopDateTime);
                var existingVisitsInSameRange = visitStartStopDateTime.filter(filterExistingVisitsInSameDateRange);
                $scope.isDateValid = existingVisitsInSameRange.length == 0;
                return existingVisitsInSameRange.length == 0;
            };

            var getVisits = function () {
                return visitService.search({patient: $rootScope.patient.uuid, v: customVisitParams, includeInactive: true}).then(function (response) {
                    var visits = response.data.results;
                    if (visits.length > 0) {
                        if (!visits[0].stopDatetime){
                            $scope.currentVisit = visits[0];
                        } else {
                            $scope.currentVisit = null;
                        }
                    }
                    visits.forEach(function (visit) {
                        $scope.visits.push(createVisit(visit));
                    });
                });
            };

            var getEncountersForVisits = function () {
                return encounterService.getEncountersForEncounterType($rootScope.patient.uuid, encounterTypeUuid).success(function (encounters) {
                    $scope.visits.forEach(function (visit) {
                        var visitEncounters = encounters.results.filter(function(a) {return(a.visit.uuid==visit.uuid)});
                        visit.initSavedImages(visitEncounters);
                    });
                });
            };

            var setDefaultConcept = function(topLevelConcept) {
                if (topLevelConcept.setMembers.length == 1) {
                    var concept = topLevelConcept.setMembers[0];
                    $scope.defaultConcept = {'concept':{uuid:concept.uuid, name:concept.name.name, editableName:concept.name.name}, 'value':concept.name.name};
                }else if($rootScope.appConfig.defaultOption){
                    var concept = topLevelConcept.setMembers.filter(function(member){
                        return member.name.name == $rootScope.appConfig.defaultOption;
                    })[0];
                    $scope.defaultConcept = {'concept':{uuid:concept.uuid, name:concept.name.name, editableName:concept.name.name}, 'value':concept.name.name};
                }
            };

            var getTopLevelConcept = function () {
                if($rootScope.appConfig.topLevelConcept == null ) {
                    topLevelConceptUuid = null;
                    return $q.when({});
                }
                return $http.get(Bahmni.Common.Constants.conceptUrl,
                    {
                        params:{
                            name:$rootScope.appConfig.topLevelConcept,
                            v:"custom:(uuid,setMembers:(uuid,name:(name)))"
                        }
                }).then(function (response) {
                        var topLevelConcept = response.data.results[0];
                        topLevelConceptUuid = topLevelConcept ? topLevelConcept.uuid : null;
                        setDefaultConcept(topLevelConcept);
                    });
            };

            var sortVisits = function() {
                $scope.visits.sort(function(a, b) {
                        var date1 = DateUtil.parse(a.startDatetime);
                        var date2 = DateUtil.parse(b.startDatetime);
                        return date2.getTime() - date1.getTime();
                    });
            };

            var getActiveEncounter = function() {
                var currentProviderUuid = $rootScope.currentProvider ? $rootScope.currentProvider.uuid : null;
                return encounterService.activeEncounter({
                    patientUuid : $stateParams.patientUuid,
                    encounterTypeUuid : encounterTypeUuid,
                    providerUuid: currentProviderUuid,
                    includeAll :  Bahmni.Common.Constants.includeAllObservations,
                    locationUuid : locationUuid
                }).then(function (encounterTransactionResponse) {
                    activeEncounter = encounterTransactionResponse.data;
                });
            };

            var init = function () {
                encounterTypeUuid = $scope.encounterConfig.getEncounterTypeUuid($rootScope.appConfig.encounterType);
                initNewVisit();
                var deferrables = $q.defer();
                var promises = [];
                promises.push(getVisitTypes());
                promises.push(getActiveEncounter());
                promises.push(getPatient().then(getVisits).then(getEncountersForVisits));
                promises.push(getTopLevelConcept());
                $q.all(promises).then(function () {
                    deferrables.resolve();
                });
                return deferrables.promise;
            };
            spinner.forPromise(init());

            $scope.getConcepts = function(request){
                return $http.get(Bahmni.Common.Constants.conceptUrl, { params: {q: request.term, memberOf: topLevelConceptUuid, v: "custom:(uuid,name)"}}).then(function(result) {
                    return result.data.results;
                });
            };

            $scope.getDataResults = function(results){
                return results.map(function (concept) {
                    return {'concept': {uuid: concept.uuid, name: concept.name.name, editableName: concept.name.name}, 'value': concept.name.name}
                });
            };

            $scope.onSelect = function(image, visit){
                $scope.toggleGallery=false;
                spinner.forPromise(visitDocumentService.saveImage(image, $rootScope.patient.uuid, $rootScope.appConfig.encounterType).then(function(response) {
                    var imageUrl = Bahmni.Common.Constants.documentsPath + '/' + response.data;
                    var savedImage = visit.addImage(imageUrl);
                    $scope.setConceptOnImage(savedImage, $scope.defaultConcept);
                    $scope.toggleGallery=true;
                }));
            };

            $scope.setConceptOnImage = function (image, selectedItem) {
                if (selectedItem) {
                    image.concept = Object.create(selectedItem.concept);
                    image.changed = true;
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }
            };

            $scope.onEditConcept = function(image){
                image.concept.name = undefined;
                image.concept.uuid = undefined;
            };

            $scope.onConceptSelected = function(image){
                return function(selectedItem){
                    $scope.setConceptOnImage(image, selectedItem);
                }
            };

            $scope.resetCurrentVisit = function (visit) {
                $scope.currentVisit = ($scope.isCurrentVisit(visit)) ? $scope.newVisit : visit;
            };

            $scope.isCurrentVisit = function (visit) {
                return $scope.currentVisit && $scope.currentVisit.uuid === visit.uuid;
            };

            var getEncounterStartDateTime = function (visit) {
                return visit.endDate() ? visit.startDate() : null;
            };

            var createVisitDocument = function (visit) {
                var visitDocument = {};
                visitDocument.patientUuid = $scope.patient.uuid;
                visitDocument.visitTypeUuid = visit.visitType.uuid;
                visitDocument.visitStartDate = visit.startDate();
                visitDocument.visitEndDate = visit.endDate();
                visitDocument.encounterTypeUuid = encounterTypeUuid;
                visitDocument.encounterDateTime = getEncounterStartDateTime(visit);
                visitDocument.providerUuid = $rootScope.currentProvider.uuid;
                visitDocument.visitUuid = visit.uuid;
                visitDocument.locationUuid = locationUuid;
                visitDocument.documents = [];

                visit.images.forEach(function (image) {
                    var imageUrl = image.encodedValue.replace(Bahmni.Common.Constants.documentsPath + "/", "");
                    if(!visit.isSaved(image)) {
                        visitDocument.documents.push({testUuid: image.concept.uuid, image: imageUrl, obsDateTime: getEncounterStartDateTime(visit)})
                    } else if (image.changed == true || image.voided == true) {
                        visitDocument.documents.push({testUuid: image.concept.uuid, image: imageUrl, voided: image.voided, obsUuid: image.obsUuid});
                    }
                });

                return visitDocument;
            };

            function flashSuccessMessage() {
                $scope.success = true;
                $timeout(function () {
                    $scope.success = false;
                }, 2000);
            }

            $scope.setDefaultEndDate = function(newVisit) {
                if(!newVisit.stopDatetime){
                    var date = newVisit.endDate() ? DateUtil.parse(newVisit.endDate()) : new Date();
                    $scope.newVisit.stopDatetime = date;
                }
            };

            var isObsByCurrentProvider = function (obs) {
                return obs.provider && $rootScope.currentUser.person.uuid === obs.provider.uuid;
            };

            $scope.canDeleteImage = function(obs){
                return isObsByCurrentProvider(obs) || obs.new;
            };

            var updateVisit = function(visit, encounters){
                var visitEncounters = encounters.filter(function(encounter){ return visit.uuid === encounter.visit.uuid; });
                visit.initSavedImages(visitEncounters);
                visit.changed = false;
                $scope.currentVisit = visit;
                sortVisits();
                flashSuccessMessage();
            };

            $scope.save = function (existingVisit) {
                $scope.toggleGallery=false;
                var visitDocument;
                if ($scope.isNewVisitDateValid()) {
                    visitDocument = createVisitDocument(existingVisit);
                }

                spinner.forPromise(visitDocumentService.save(visitDocument).then(function (response) {
                    return encounterService.getEncountersForEncounterType($scope.patient.uuid, encounterTypeUuid).then(function(encounterResponse){
                        var savedVisit = $scope.visits[$scope.visits.indexOf(existingVisit)];
                        if(!savedVisit){
                            visitService.getVisit(response.data.visitUuid, customVisitParams).then(function(visitResponse){
                                var newVisit = createVisit(visitResponse.data);
                                existingVisit = $scope.visits.push(newVisit);
                                initNewVisit();
                                updateVisit(newVisit, encounterResponse.data.results);
                                $scope.toggleGallery = true;
                            });
                        }else{
                            updateVisit(savedVisit, encounterResponse.data.results)
                            $scope.toggleGallery = true;
                        }
                        getActiveEncounter();
                    });
                }));
            };

            $anchorScroll();
        }
    ]);