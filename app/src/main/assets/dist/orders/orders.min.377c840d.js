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

'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.Domain = Bahmni.Common.Domain || {};

angular.module('bahmni.common.domain', []);
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
angular.module('bahmni.common.uiHelper', ['ngClipboard']);

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

angular.module('orders', ['ui.router', 'bahmni.orders', 'bahmni.common.domain','authentication', 'bahmni.common.appFramework', 'httpErrorInterceptor','bahmni.common.patient', 'bahmni.common.uiHelper']);
angular.module('orders').config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {
        $stateProvider.state('order', {
    		url: '/patient/:patientUuid/:orderType',
    		templateUrl: 'views/pendingOrders.html',
    		controller: 'PendingOrdersController',
    		resolve: {
    			initialization: function(initialization, $stateParams){
			        return initialization($stateParams.appContext, $stateParams.patientUuid);
    			}
    		}
       	});
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
}]).run(['backlinkService', function (backlinkService) {
    backlinkService.addUrl({label: "Patient Search", url: "../clinical/#/patient/search"});
}]);


'use strict';

angular.module('bahmni.orders', []);
'use strict';

angular.module('bahmni.orders').factory('initialization', ['$rootScope', '$q', 'configurationService', 'authenticator', 'patientService', 'spinner',
    function ($rootScope, $q, configurationService, authenticator, patientService, spinner) {
        return function(appContext, patientUuid) {

            var patientMapper = new Bahmni.PatientMapper($rootScope.patientConfig);

            var initializationPromise = $q.defer();
            var getConfigs = function () {
                var configurationsPromises = $q.defer();
                configurationService.getConfigurations(['radiologyObservationConfig','encounterConfig']).then(function (configurations) {
                    $rootScope.encounterTypes = configurations.encounterConfig.encounterTypes;
                    $rootScope.orderTypes = configurations.encounterConfig.orderTypes;
                    $rootScope.radiologyObservationConcept = configurations.radiologyObservationConfig.results[0];
                    configurationsPromises.resolve();
                });
                return configurationsPromises.promise;
            };

            var getPatient = function(patientUuid) {
                var patientDeferrable = $q.defer();
                patientService.getPatient(patientUuid).then(function (openMRSPatientResponse) {
                    $rootScope.patient = patientMapper.map(openMRSPatientResponse.data);
                    patientDeferrable.resolve();
                });
                return patientDeferrable.promise;
            };

            authenticator.authenticateUser().then(function () {
                getConfigs().then(function () {
                     getPatient(patientUuid).then(function(){
                         initializationPromise.resolve();
                     })
                });
            });

            return spinner.forPromise(initializationPromise.promise);
        };
    }]
);    
'use strict';

angular.module('bahmni.orders')
    .factory('PendingOrderService', ['$http', function ($http) {

    var getOrders = function (patientUuid, orderTypeUuid) {
        return $http.get("/openmrs/ws/rest/v1/order", {
            params:{
                patientUuid:patientUuid,
                orderTypeUuid:orderTypeUuid,
                s:'pendingOrders',
                v:'custom:(uuid,creator:(person,uuid),dateCreated,concept:(name,uuid),encounter:(uuid,provider,encounterType,visit:(uuid)))'},
            withCredentials:true
        });
    } ;

    var saveOrderResult = function(encounterTransaction){
        return $http.post(Bahmni.Common.Constants.emrEncounterUrl, encounterTransaction, {
            withCredentials:true
        });
    };

    return {
        getOrders:getOrders,
        saveOrderResult:saveOrderResult
    };
}]);

"use strict";

angular.module('bahmni.orders')
    .controller('PendingOrdersController', ['$scope','$rootScope', '$stateParams', 'PendingOrderService','$q', 'spinner', function ($scope, $rootScope, $stateParams, pendingOrderService, $q, spinner) {

    	$scope.getOrders = function (patientUuid, orderTypeUuid) {
    		pendingOrderService.getOrders(patientUuid, orderTypeUuid).success(function(response){
    			return response.results;
    		});
    	};

        var constructEncounterTransactionObject = function(order){
            var orderUuid = order.uuid;
            var visitUuid = order.encounter.visit.uuid;
            var patientUuid = $stateParams.patientUuid;
            var encounterTypeUuid = $scope.encounterTypes[Bahmni.Common.Constants.investigationEncounterType];
            var resultConceptUuid = order.concept.uuid;
            var resultValue = order.resultText;

            var encounterTransaction = {
                visitUuid : visitUuid,
                encounterTypeUuid : encounterTypeUuid,
                patientUuid:patientUuid,
                observations:[
                    {
                        concept:{
                            uuid : resultConceptUuid
                        },
                        value:resultValue,
                        orderUuid:orderUuid
                    }
                ]
            };
            return encounterTransaction;
        };


        $scope.toggleResultsEntry = function(toggleOrderUuid){
            $scope.resultsEntry[toggleOrderUuid] = $scope.resultsEntry[toggleOrderUuid]?false:true;
        }

        $scope.saveResult = function(order){
            var encounterTransactionObj = constructEncounterTransactionObject(order);
            pendingOrderService.saveOrderResult(encounterTransactionObj).success(function() {
                init();
            });


        };
        
        var getResults = function() {
            var patientUuid = $stateParams.patientUuid;
            $scope.resultsEntry = {};
            $rootScope.availableBoards = [
                { name: 'Pending Orders', url: ''}
            ];
            $rootScope.currentBoard = $scope.availableBoards[0];
            var nonLabOrderTypes = [];
            Object.keys($rootScope.orderTypes).forEach(function(orderTypeKey) {
                if (orderTypeKey != "Drug Order" && orderTypeKey != "Lab Order") {
                    nonLabOrderTypes[orderTypeKey] = $rootScope.orderTypes[orderTypeKey]
                }
            });
            var getOrdersPromises ={};
            for(var key in nonLabOrderTypes) {
                getOrdersPromises[key] = pendingOrderService.getOrders(patientUuid, nonLabOrderTypes[key])
            }
            return $q.all(getOrdersPromises);
        };

        var init = function() {
            $scope.orders = {};
            spinner.forPromise(getResults().then(function(results){
                for(var key in results) {
                    $scope.orders[key] = results[key];
                }
            }));
        }

        init();        
}]);
