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
Modernizr.addTest('ios', function(){
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false
});

Modernizr.addTest('windowOS', function(){
    return navigator.appVersion.indexOf("Win")!=-1 ? true : false
});
$(function(){
	if (Modernizr.ios) {
		//This fix is needed when we use fastclick.js on ipad
		$(document).on("click", "label[for]", function(event) {
			var $inputElement = $('input#' + $(this).attr('for'));
			var elementType = $inputElement.attr('type')
			if(elementType === 'radio') {
				$inputElement.prop('checked', true)
			} else if(elementType === 'checkbox') {
				$inputElement.prop('checked', !$inputElement.prop('checked'))
			} else {
				$inputElement.focus();
			}
		});
	}
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
angular.module('bahmni.common.patient')
.filter('age', function() {
	return function(age) {
		if(age.years) return age.years + " y";
		if(age.months) return age.months + " m";
		return age.days + " d";
	};
});
angular.module('bahmni.common.patient')
.filter('dateToAge', function($filter) {
	return function(birthDate, referenceDate) {
		var DateUtil = Bahmni.Common.Util.DateUtil;
		referenceDate = referenceDate || DateUtil.now();
		var age = DateUtil.diffInYearsMonthsDays(birthDate, referenceDate);
		return $filter('age')(age);
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
Bahmni.Common.Domain.ProviderMapper = function () {
	this.map = function (openMrsProvider) {
        if(!openMrsProvider) return null;
        return {
            uuid: openMrsProvider.uuid,
            name: openMrsProvider.preferredName.display
        }
    };
};
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
Bahmni.Common.Domain.ObservationMapper = function () {
    this.map = function (openMrsObs) {
        var conceptMapper = new Bahmni.Common.Domain.ConceptMapper();
        var groupMembers = openMrsObs.groupMembers || [];
        return {
            uuid: openMrsObs.uuid,
            concept: conceptMapper.map(openMrsObs.concept),
            value: openMrsObs.value,
            voided: openMrsObs.voided,
            voidedReason: openMrsObs.voidedReason,
            observationDateTime: openMrsObs.obsDatetime,
            orderUuid: openMrsObs.orderUuid,
            groupMembers: groupMembers.map(this.map)
        }
    };
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
(function(){
	Bahmni.Common.Domain.ObservationFilter = function () {
		var self = this;

		var voidExistingObservationWithOutValue = function(observations) {
			observations.forEach(function(observation){
				voidExistingObservationWithOutValue(observation.groupMembers);
				observation.voided = observation.voided || observation.canBeVoided();

                if (observation.voided)
                    voidAllChildren(observation);
			});
		};

        var voidAllChildren = function(voidedObservation) {
            voidedObservation.groupMembers.forEach(function(childWithVoidedParent) {
                childWithVoidedParent.voided = true;

                voidAllChildren(childWithVoidedParent);
            })
        };

		var removeNewObservationsWithoutValue = function(observations) {
			observations.forEach(function(observation){
				observation.groupMembers = removeNewObservationsWithoutValue(observation.groupMembers);
			});
			return observations.filter(function(observation) {
				return observation.isExisting() || observation.hasValue() || observation.hasMemberWithValue();
			});
		};

		self.filter = function(observations) {
			var wrappedObservations = observations.map(Observation.wrap);
            var filteredObservations = removeNewObservationsWithoutValue(wrappedObservations);
			voidExistingObservationWithOutValue(filteredObservations);
			return filteredObservations;
		}
	};

	var Observation = function(observationData) {
		angular.extend(this, observationData);

		this.isNew = function() {
			return !this.uuid;
		};

		this.isExisting = function() {
			return !this.isNew();
		};

		this.hasValue = function() {
			return this.value !== undefined && this.value !== null && this.value !== '';
		};

		this.hasMemberWithValue = function() {
			return this.groupMembers.some(function(groupMember){
				return groupMember.hasValue() || groupMember.hasMemberWithValue();
			})
		};

		this.isGroup = function() {
			return this.groupMembers.length > 0;
		};

		this.isLeaf = function() {
			return !this.isGroup();
		};

		this.isGroupWithOnlyVoidedMembers = function() {
			return this.isGroup() && this.groupMembers.every(function(groupMember) {
				return groupMember.voided;
			})
		};

		this.isLeafNodeWithOutValue = function() {
			return this.isLeaf() && !this.hasValue();
		};

		this.canBeVoided = function() {
			return this.isExisting() && (this.isLeafNodeWithOutValue() || this.isGroupWithOnlyVoidedMembers());
		}
	};

	Observation.wrap = function(observationData) {
		var observation = new Observation(observationData);
		observation.groupMembers = observation.groupMembers ? observation.groupMembers.map(Observation.wrap) : [];
		return observation;
	}
})();


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
'use strict';

angular.module('bahmni.common.uiHelper')
    .factory('printer', ['$rootScope', '$compile', '$http', '$timeout','$q', function ($rootScope, $compile, $http, $timeout, $q) {
        var printHtml = function (html) {
            var deferred = $q.defer();
            var hiddenFrame = $('<iframe style="display: none"></iframe>').appendTo('body')[0];
            hiddenFrame.contentWindow.printAndRemove = function() {
                hiddenFrame.contentWindow.print();
                $(hiddenFrame).remove();
            };
            var htmlContent = "<!doctype html>"+
                        "<html>"+
                            '<body onload="printAndRemove();">' +
                                html +
                            '</body>'+
                        "</html>";
            var doc = hiddenFrame.contentWindow.document.open("text/html", "replace");
            doc.write(htmlContent);
            deferred.resolve();
            doc.close();
            return deferred.promise;
        };

        var openNewWindow = function (html) {
            var newWindow = window.open("printTest.html");
            newWindow.addEventListener('load', function(){ 
                $(newWindow.document.body).html(html);
            }, false);
        };

        var print = function (templateUrl, data) {
            $http.get(templateUrl).success(function(template){
                var printScope = $rootScope.$new()
                angular.extend(printScope, data);
                var element = $compile($('<div>' + template + '</div>'))(printScope);
                var waitForRenderAndPrint = function() {
                    if(printScope.$$phase || $http.pendingRequests.length) {
                        $timeout(waitForRenderAndPrint);
                    } else {
                        // Replace printHtml with openNewWindow for debugging
                        printHtml(element.html());
                        printScope.$destroy();
                    }
                };
                waitForRenderAndPrint();
            });
        };

        var printFromScope = function (templateUrl, scope) {
            $rootScope.isBeingPrinted = true;
            $http.get(templateUrl).success(function(template){
                var printScope = scope;
                var element = $compile($('<div>' + template + '</div>'))(printScope);
                var waitForRenderAndPrint = function() {
                    if (printScope.$$phase || $http.pendingRequests.length) {
                        $timeout(waitForRenderAndPrint);
                    } else {
                       printHtml(element.html()).then(function() {
                           $rootScope.isBeingPrinted = false;
                       });

                    }
                };
                waitForRenderAndPrint();
            });
        };
        return {
            print: print,
            printFromScope:printFromScope
        }
}]);

'use strict';

angular.module('bahmni.common.uiHelper')
    .directive('nonBlank', function () {
        return function ($scope, element, attrs) {
            var addNonBlankAttrs = function () {
                if (!attrs.attrPattern) {
                    element.attr({'required': 'required', "pattern": '^.*[^\\s]+.*'});
                } else {
                    element.attr({'required': 'required', "pattern": $scope[attrs.attrPattern]});
                }
            };

            var removeNonBlankAttrs = function () {
                element.removeAttr('required').removeAttr('pattern');
            };

            if (!attrs.nonBlank) return addNonBlankAttrs(element);

            $scope.$watch(attrs.nonBlank, function (value) {
                return value ? addNonBlankAttrs() : removeNonBlankAttrs();
            });
        }
    })
    .directive('datepicker', function () {
        var link = function ($scope, element, attrs, ngModel) {
            var today = new Date();
            element.datepicker({
                changeYear: true,
                changeMonth: true,
                maxDate: today,
                minDate: "-120y",
                yearRange: 'c-120:c',
                dateFormat: 'dd-mm-yy',
                onSelect: function (dateText) {
                    $scope.$apply(function () {
                        ngModel.$setViewValue(dateText);
                    });
                }
            });
        };

        return {
            require: 'ngModel',
            link: link
        }
    })
    .directive('myAutocomplete', function ($parse) {
        var link = function (scope, element, attrs, ngModelCtrl) {
            var ngModel = $parse(attrs.ngModel);
            var source = scope.source();
            var responseMap = scope.responseMap();
            var onSelect = scope.onSelect();

            element.autocomplete({
                autofocus: true,
                minLength: 2,
                source: function (request, response) {
                    source(attrs.id, request.term, attrs.itemType).success(function (data) {
                        var results = responseMap ? responseMap(data) : data;
                        response(results);
                    });
                },
                select: function (event, ui) {
                    scope.$apply(function (scope) {
                        ngModelCtrl.$setViewValue(ui.item.value);
                        scope.$eval(attrs.ngChange);
                        if (onSelect != null) {
                            onSelect(ui.item);
                        }
                    });
                    return true;
                },
                search: function (event) {
                    var searchTerm = $.trim(element.val());
                    if (searchTerm.length < 2) {
                        event.preventDefault();
                    }
                }
            });
        };
        return {
            link: link,
            require: 'ngModel',
            scope: {
                source: '&',
                responseMap: '&',
                onSelect: '&'
            }
        }
    })
    .directive('bmForm', function () {
        var link = function (scope, elem, attrs) {
            setTimeout(function () {
                $(elem).unbind('submit').submit(function (e) {
                    var formScope = scope.$parent;
                    var formName = attrs.name;
                    e.preventDefault();
                    if(scope.autofillable) $(elem).find('input').trigger('change');
                    if(formScope[formName].$valid) {
                        formScope.$apply(attrs.ngSubmit);
                        $(elem).removeClass('submitted-with-error');
                    } else {
                        $(elem).addClass('submitted-with-error');
                    }
                });
            }, 0);
        }
        return {
            link: link,
            require: 'form',
            scope: {
               autofillable: "=" 
            }
        };
    });
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
.directive('conceptAutocomplete', function ($parse, $http) {
    var link = function (scope, element, attrs, ngModelCtrl) {
        var source =  function(request) {
            return $http.get(Bahmni.Common.Constants.conceptUrl, { params: {q: request.term, memberOf: scope.conceptSetUuid, answerTo: scope.codedConceptName, v: "custom:(uuid,name)"}});
        };
        var minLength = scope.minLength || 2;

        element.autocomplete({
            autofocus: true,
            minLength: minLength,
            source: function (request, response) {
                source({elementId: attrs.id, term: request.term, elementType: attrs.type}).then(function (resp) {
                    var results = resp.data.results.map(function (concept) {
                        //todo : get rid of either 'value' or 'name' fields
                        return {'value': concept.name.name, 'concept': concept, uuid: concept.uuid,name:concept.name.name };
                    });
                    response(results);
                });
            },
            select: function (event, ui) {
                scope.$apply(function (scope) {
                    ngModelCtrl.$setViewValue(ui.item);
                    scope.$eval(attrs.ngChange);
                    if(scope.blurOnSelect) element.blur();
                });
                return true;
            },
            search: function (event) {
                var searchTerm = $.trim(element.val());
                if (searchTerm.length < minLength) {
                    event.preventDefault();
                }
            }
        });
    }
    return {
        link: link,
        require: 'ngModel',
        scope: {
            conceptSetUuid: '=',
            codedConceptName: '=',
            minLength: '=',
            blurOnSelect: '='
        }
    }
});
angular.module('bahmni.common.uiHelper')
    .directive('datetimepicker', function () {
        var link = function ($scope) {
            var getSelectedDateStr = function() {
                return $scope.selectedDate != null ? moment($scope.selectedDate).format("YYYY-MM-DD"): "";
            };

            var getSelectedTimeStr = function() {
                return $scope.selectedTime != null ? moment($scope.selectedTime).format("HH:mm") : "";
            };

            var valueNotFilled = function() {
                return $scope.selectedDate == null && $scope.selectedTime == null;
            };

            var valueCompletelyFilled = function() {
                return ($scope.selectedDate != null && $scope.selectedTime != null);
            };

            $scope.updateModel = function() {
                if (valueCompletelyFilled()) {
                    $scope.model =  getSelectedDateStr() + " " + getSelectedTimeStr();
                } else if (!$scope.isValid()) {
                    $scope.model = "Invalid Datetime";
                } else {
                    $scope.model = "";
                }
            };

            $scope.isValid = function() {
                return valueNotFilled() || valueCompletelyFilled();
            };

            if($scope.model != null) {
                var date = moment($scope.model).toDate();
                $scope.selectedDate = date;
                $scope.selectedTime = date;
                $scope.updateModel();
            }
        };

        return {
            restrict: 'E',
            link: link,
            scope: {
                model: '=',
                showTime: '=',
                illegalValue: '='
            },
            template:
                "<span>" +
                    "<input type='date' ng-change='updateModel()' ng-model='selectedDate' ng-required='!isValid() || illegalValue'>" +
                    "<input type='time' ng-change='updateModel()' ng-model='selectedTime' ng-required='!isValid() || illegalValue'>" +
                "</span>"
        }
    });

angular.module('bahmni.common.uiHelper')
.directive('toggle', function() {
	var link = function($scope, element, attrs) {
		$scope.$watch("toggle", function(value) {
			$(element).toggleClass('active', value)
		});
            $(element).click(function () {
                $scope.$apply(function () {
                    $scope.toggle = !$scope.toggle
                });
            });
        };

	return {
		scope: {
		  toggle: "="
		},
		link: link
	}
});

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
'use strict';

angular.module('bahmni.common.uiHelper')
    .directive('ngConfirmClick', function () {
        return {
            link: function (scope, element, attr) {
                var msg = attr.confirmMessage || "Are you sure?";
                var clickAction = attr.ngConfirmClick;
                element.bind('click', function () {
                    if (window.confirm(msg)) {
                        scope.$apply(clickAction);
                    }
                });
            }
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
.filter('days', function () {
    return function(startDate, endDate) {
    	return Bahmni.Common.Util.DateUtil.diffInDays(startDate, endDate);
    }
}).filter('bahmniDate', function() {
    return function (longDate) {
        return Bahmni.Common.Util.DateUtil.parseLongDatetime(longDate);
    }
});
angular.module('bahmni.common.uiHelper').filter('reverse', function() {
    return function(items) {
        return items && items.slice().reverse();
    };
});
angular.module('bahmni.common.uiHelper')
.filter('thumbnail', function() {
	return function(url) {
	    if(url){
	        return Bahmni.Common.Constants.documentsPath + '/' + url.replace(/(.*)\.(.*)$/, "$1_thumbnail.$2") || null;
	    }
	};
});
angular.module('bahmni.common.uiHelper')
.filter('formatDecimalValues', function() {
	return function(value) {
	    return value ? value.toString().replace(/.0(\s+)/g, "$1") : null;
	};
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
'use strict';

angular.module('bahmni.common.uiHelper')
    .service('stateChangeSpinner', ['$rootScope', 'spinner', function ($rootScope, spinner) {
    	var showSpinner = function(event, toState) { toState.spinnerToken = spinner.show() };
    	var hideSpinner = function(event, toState) { spinner.hide(toState.spinnerToken) };

        this.activate = function(level, message) {
            $rootScope.$on('$stateChangeStart', showSpinner);
            $rootScope.$on('$stateChangeSuccess', hideSpinner);
            $rootScope.$on('$stateChangeError', hideSpinner);
        };
    }]);
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

angular.module('bahmni.common.uiHelper').directive('dateConverter', ['$filter', function($filter) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelController) {
            var DateUtil = Bahmni.Common.Util.DateUtil;
            ngModelController.$parsers.push(function(date) {
                return DateUtil.parse(date);
            });

            ngModelController.$formatters.push(function(date) {
                return DateUtil.parse(DateUtil.getDateWithoutTime(date));
            });
        }
    };
}]);
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
Bahmni.ConceptSet = Bahmni.ConceptSet || {};

angular.module('bahmni.common.conceptSet', ['bahmni.common.uiHelper', 'ui.select2', 'pasvaz.bindonce', 'ngSanitize']);
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

angular.module('bahmni.common.conceptSet')
    .controller('ConceptSetGroupController', ['$scope', 'appService', 'contextChangeHandler', 'spinner',
        'conceptSetService', '$rootScope', 'sessionService', 'encounterService', 'treatmentConfig', 'messagingService',
        'retrospectiveEntryService', 'userService', 'conceptSetUiConfigService', '$timeout',
        function ($scope, appService, contextChangeHandler, spinner, conceptSetService, $rootScope, sessionService, encounterService, treatmentConfig, messagingService, retrospectiveEntryService, userService, conceptSetUiConfigService, $timeout) {

            var conceptSetUIConfig = conceptSetUiConfigService.getConfig();
            $scope.togglePref = function (conceptSet, conceptName) {
                $rootScope.currentUser.toggleFavoriteObsTemplate(conceptName);
                spinner.forPromise(userService.savePreferences());
            };

            $scope.validationHandler = new Bahmni.ConceptSet.ConceptSetGroupValidationHandler($scope.conceptSets);

            $scope.getNormalized = function (conceptName) {
                return conceptName.replace(/['\.\s\(\)\/,\\]+/g, "_");
            };

            $scope.showPreviousButton = function(conceptSetName) {
                return conceptSetUIConfig[conceptSetName] && conceptSetUIConfig[conceptSetName].showPreviousButton;
            };

            $scope.showPrevious = function(conceptSetName){
                event.stopPropagation();
                $timeout(function() {
                    $scope.$broadcast('event:showPrevious' + conceptSetName);
                });
            };

            $scope.computeField = function (conceptSet) {
                event.stopPropagation();
                $scope.consultation.saveHandler.fire();
                var encounterData = new Bahmni.Clinical.EncounterTransactionMapper().map(angular.copy($scope.consultation), $scope.patient, sessionService.getLoginLocationUuid(),
                    retrospectiveEntryService.getRetrospectiveEntry());
                encounterData = encounterService.buildEncounter(encounterData);
                encounterData.drugOrders = [];

                var conceptSetData = {name: conceptSet.conceptName, uuid: conceptSet.uuid};
                var data = {encounterModifierObservations: encounterData.observations, drugOrders: encounterData.drugOrders, conceptSetData: conceptSetData, patientUuid: encounterData.patientUuid, encounterDateTime: encounterData.encounterDateTime};

                spinner.forPromise(conceptSetService.getComputedValue(data)).then(function (response) {
                    response = response.data;
                    copyValues($scope.consultation.observations, response.encounterModifierObservations);
                    var drugOrderAppConfig = appService.getAppDescriptor().getConfigValue("drugOrder") || {};
                    $scope.consultation.newlyAddedTreatments = $scope.consultation.newlyAddedTreatments || [];
                    response.drugOrders.forEach(function (drugOrder) {
                        $scope.consultation.newlyAddedTreatments.push(Bahmni.Clinical.DrugOrderViewModel.createFromContract(drugOrder, drugOrderAppConfig, treatmentConfig));
                    });
                });
            };
            var copyValues = function (existingObservations, modifiedObservations) {
                existingObservations.forEach(function (observation, index) {
                    if (observation.groupMembers && observation.groupMembers.length > 0) {
                        copyValues(observation.groupMembers, modifiedObservations[index].groupMembers);
                    } else {
                        observation.value = modifiedObservations[index].value;
                    }
                });
            };

            contextChangeHandler.add($scope.validationHandler.validate);
        }])
    .directive('conceptSetGroup', function () {
        return {
            restrict: 'EA',
            scope: {
                conceptSetGroupExtensionId: "=",
                observations: "=",
                allTemplates: "=",
                context: "=",
                autoScrollEnabled: "=",
                patient: "=",
                consultation: "="

            },
            controller: 'ConceptSetGroupController',
            templateUrl: '../common/concept-set/views/conceptSetGroup.html'

        }
    });
angular.module('bahmni.common.conceptSet')
    .directive('duration', function () {

        var link = function ($scope, element, attrs, ngModelController) {
            var setValue = function () {
                if ($scope.unitValue && $scope.measureValue) {
                    var value = $scope.unitValue * $scope.measureValue;
                    ngModelController.$setViewValue(value);
                } else {
                    ngModelController.$setViewValue(undefined);
                }

            };

            $scope.$watch('measureValue', setValue);
            $scope.$watch('unitValue', setValue);

            $scope.$watch('disabled', function (value) {
                if (value) {
                    $scope.unitValue = undefined;
                    $scope.measureValue = undefined;
                    $scope.hours = undefined;
                }
            });
        };

        var controller = function ($scope) {
            var valueAndUnit = Bahmni.Common.Util.DateUtil.convertToUnits($scope.hours);
            $scope.units = valueAndUnit["allUnits"];
            $scope.measureValue = valueAndUnit["value"];
            $scope.unitValue = valueAndUnit["unitValueInMinutes"];
            var durations = Object.keys($scope.units).reverse();
            $scope.displayUnits = durations.map(function(duration){
                return {"name": duration, "value": $scope.units[duration]};
            });

        };

        return {
            restrict: 'E',
            require: 'ngModel',
            controller: controller,
            scope: {
                hours: "=ngModel",
                illegalValue: "=",
                disabled: "="
            },
            link: link,
            template: '<span><input type="number" min="0" class="duration-value" ng-class="{\'illegalValue\': illegalValue}" ng-model=\'measureValue\' ng-disabled="disabled"/></span>' +
                '<span><select ng-model=\'unitValue\' class="duration-unit" ng-class="{\'illegalValue\': illegalValue}" ng-options="displayUnit.value as displayUnit.name for displayUnit in displayUnits" ng-disabled="disabled"><option value=""></option>>' +
                '</select></span>'
        }
    });
'use strict';

angular.module('bahmni.common.conceptSet')
    .directive('integer', function () {
        var link = function (scope, element, attrs) {
            var keyCode = [8, 9, 13, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
                104, 105, 167, 168, 169, 190, 110];
            element.bind("keydown", function (event) {
                if ($.inArray(event.which, keyCode) == -1) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onlyNumber);
                        event.preventDefault();
                    });
                    event.preventDefault();
                }
            });
        };

        return {
            link: link
        }
    });

Bahmni.ConceptSet.ConceptSetGroupValidationHandler = function(conceptSetSections){
    var validations = [];

    this.add = function(validation) {
        validations.push(validation);
    };

    this.validate = function() {
        var allconceptSetSectionsValid = true;
        validations.forEach(function(validation, index){
            var isValid = validation();
            allconceptSetSectionsValid = allconceptSetSectionsValid && isValid;
        });
        if(!allconceptSetSectionsValid) {
            conceptSetSections.filter(_.property('isLoaded')).forEach(function(conceptSetSection){ conceptSetSection.show(); });
        }
        return {allow: allconceptSetSectionsValid};
    };
};
Bahmni.ConceptSet.ConceptSetSection = function (extensions, user, config, observations, conceptSet) {
    
    var self = this;

    var init = function () {
        self.observations = observations;
        self.options = extensions.extensionParams || {};
        self.conceptName = conceptSet.name ? conceptSet.name.name : self.options.conceptName;
        var conceptName = _.find(conceptSet.names, {conceptNameType: "SHORT"}) || _.find(conceptSet.names, {conceptNameType: "FULLY_SPECIFIED"});
        conceptName = conceptName ? conceptName.name : conceptName;
        self.label = conceptName || conceptSet.name || self.options.conceptName;
        self.isLoaded = self.isOpen;
        self.uuid = conceptSet.uuid;
        self.alwaysShow = user.isFavouriteObsTemplate(self.conceptName);
    };

    var getShowIfFunction = function () {
        if (!self.showIfFunction) {
            var showIfFunctionStrings = self.options.showIf || ["return true;"];
            self.showIfFunction = new Function("context", showIfFunctionStrings.join('\n'));
        }
        return self.showIfFunction;
    };

    var atLeastOneValueSet = function (observation) {
        if (observation.groupMembers && observation.groupMembers.length > 0) {
            return observation.groupMembers.some(function (groupMember) {
                return atLeastOneValueSet(groupMember);
            })
        } else {
            return observation.value;
        }
    };
    
    self.isAvailable = function (context) {
        return getShowIfFunction()(context || {});
    };

    self.show = function () {
        self.isOpen = true;
        self.isLoaded = true;
    };

    self.hide = function () {
        self.isOpen = false;
    };

    self.getObservationsForConceptSection = function () {
        return self.observations.filter(function (observation) {
            return observation.concept.name === self.conceptName;
        });
    };
    self.hasSomeValue = function () {
        var observations = self.getObservationsForConceptSection();
        return _.some(observations, function (observation) {
            return atLeastOneValueSet(observation);
        })
    };

    self.showComputeButton = function (){
        return config.computeDrugs === true ? true : false;
    };

    self.toggle = function () {
        self.added = !self.added;
        if (self.added) {
            self.show();
        }
    };

    self.toggleDisplay = function() {
        if(self.isOpen) {
            self.hide();
        } else {
            self.show();
        }
    };

    self.canToggle = function () {
        return !self.hasSomeValue();
    };

    Object.defineProperty(self, "isOpen", {
        get: function () {
            if (self.open === undefined) {
                self.open = self.hasSomeValue();
            }
            return self.open;
        },
        set: function (value) {
            self.open = value;
        }
    });

    Object.defineProperty(self, "isAdded", {
        get: function () {
            if (self.added === undefined) {
                if (self.options.default) {
                    self.added = true;
                } else {
                    self.added = self.hasSomeValue();
                }
            }
            return self.added;
        },
        set: function (value) {
            self.added = value;
        }
    });

    init();
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

angular.module('bahmni.common.conceptSet')
    .directive('imageUpload', ['$rootScope', 'visitDocumentService', 'spinner', function ($rootScope, visitDocumentService, spinner) {

        var link = function (scope, element) {
            element.bind("change", function () {
                var file = element[0].files[0];
                var reader = new FileReader();
                reader.onload = function (event) {
                    var image = event.target.result;
                    spinner.forPromise(visitDocumentService.saveImage(image, scope.patientUuid, Bahmni.Common.Constants.consultationEncounterName).then(function(response) {
                        scope.url = response.data;
                        element.val(null);
                    }));
                };
                reader.readAsDataURL(file);
            });
        };

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                url:"=ngModel",
                patientUuid: "="
            },
            link: link
        }
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

angular.module('bahmni.common.uiHelper').directive('autoScroll', function ($location,$anchorScroll, $timeout) {
    const heightOfNavigationBar = 55;
    return {
        scope:{
            autoScrollEnabled:"="
        },
        link:function(scope,element,attrs){
            $timeout(function() {
                if(scope.autoScrollEnabled){
                    $('body').animate({
                        scrollTop:  $("#"+attrs.autoScroll).offset().top - heightOfNavigationBar
                    }, 500);
                }
            });
            scope.$on('$destroy', function(){
                $timeout.cancel();
                $('body').animate({
                    scrollTop: -1*heightOfNavigationBar
                }, 0);
            })
        }
    }
})
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
// Tip from http://stackoverflow.com/a/20786262/69362
var debugUiRouter = function($rootScope) {
//	var $rootScope = angular.element(document.getElementById("debug")).injector().get('$rootScope');

	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
	  console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
	});

	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
	  console.log('$stateChangeError - fired when an error occurs during transition.');
	  console.log(arguments);
	});

	$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
	  console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
	});

	$rootScope.$on('$viewContentLoaded',function(event){
	  console.log('$viewContentLoaded - fired after dom rendered',event);
	});

	$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
	  console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
	  console.log(unfoundState, fromState, fromParams);
	});

	// $rootScope.$on('$viewContentLoading',function(event, viewConfig){
	//   // runs on individual scopes, so putting it in "run" doesn't work.
	//   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
	// });
};
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};

angular.module('bahmni.common.displaycontrol', []);
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.Observation = Bahmni.Common.DisplayControl.Observation || {};

angular.module('bahmni.common.displaycontrol.observation', []);
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
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.PivotTable = Bahmni.Common.DisplayControl.PivotTable || {};


angular.module('bahmni.common.displaycontrol', []);
angular.module('bahmni.common.displaycontrol.pivottable', []);
'use strict';
angular.module('bahmni.common.displaycontrol.pivottable').directive('pivotTable', ['$filter','spinner','pivotTableService',
    function ($filter,spinner,pivotTableService) {

        return {
            scope: {
                patientUuid: "=",
                diseaseName: "=",
                displayName: "=",
                config: "=",
                visitUuid:"="
            },
            link: function (scope) {

                if(!scope.config) return;

                scope.groupBy = scope.config.groupBy || "visits";
                scope.groupByEncounters = scope.groupBy === "encounters";
                scope.groupByVisits = scope.groupBy === "visits";
                
                scope.getOnlyDate = function(startdate) {
                    return moment(startdate).format("DD MMM YY");
                };

                scope.getOnlyTime = function(startDate) {
                    return moment(startDate).format("hh:mm A");
                };

                scope.isLonger = function(value){
                   return value ? value.length > 13 : false;
                };

                scope.getColumnValue = function(value){
                    return scope.isLonger(value) ? value.substring(0,10)+"..." : value;
                };

                var pivotDataPromise = pivotTableService.getPivotTableFor(scope.patientUuid,scope.config, scope.visitUuid );
                spinner.forPromise(pivotDataPromise);
                pivotDataPromise.success(function (data) {
                    scope.result = data;
                    scope.hasData = !_.isEmpty(scope.result.tabularData);
                })
            },
            templateUrl: '../common/displaycontrols/pivottable/views/pivotTable.html'
        }
}]);
'use strict';

angular.module('bahmni.common.displaycontrol.pivottable')
    .service('pivotTableService', ['$http', function ($http) {

        this.getPivotTableFor = function (patientUuid, diseaseSummaryConfig, visitUuid){
            return $http.get(Bahmni.Common.Constants.diseaseSummaryPivotUrl, {
                params: {
                    patientUuid: patientUuid,
                    visit: visitUuid,
                    numberOfVisits: diseaseSummaryConfig["numberOfVisits"],
                    obsConcepts: diseaseSummaryConfig["obsConcepts"],
                    drugConcepts: diseaseSummaryConfig["drugConcepts"],
                    labConcepts: diseaseSummaryConfig["labConcepts"],
                    groupBy: diseaseSummaryConfig["groupBy"]
                }
            });
        }

    }]);
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
Bahmni.Clinical = Bahmni.Clinical || {};
Bahmni.Clinical.DisplayControl = Bahmni.Clinical.DisplayControl || {};

angular.module('bahmni.clinical', ['bahmni.common.config', 'bahmni.common.domain',
    'bahmni.common.conceptSet', 'bahmni.common.uiHelper', 'bahmni.common.gallery', 'bahmni.common.logging']);
Bahmni.Clinical.ImageObservation = (function (observation, concept, provider) {
    this.concept = concept;
    this.imageObservation = observation;
    this.dateTime = observation.observationDateTime;
    this.provider = provider; 
});

Bahmni.Clinical.ImageObservation.prototype = {
};

'use strict';

//Holds a single instance of result
//Use Bahmni.Clinical.LabResult
Bahmni.Clinical.Result = (function () {
    var Result = function (options) {
        angular.extend(this, options);
        this.isSummary = false;
    };

    Result.prototype = {
        isOnOrderDate: function(date) {
            return Bahmni.Common.Util.DateUtil.isSameDate(this.orderDate, date);
        }
    };

    var matchingObservations = function (observations, conceptName) {
            var result = observations.filter(function (observation) {
                return observation.concept.name === conceptName;
            });
            return result;
        },
        valueOf = function (observations, conceptName) {
            var result = matchingObservations(observations, conceptName);
            return result[0] && result[0].value;
        },
        getRealObs = function (observations) {
            var invalidConcepts = ["LAB_ABNORMAL", "LAB_MINNORMAL", "LAB_MAXNORMAL", "LAB_NOTES", "REFERRED_OUT", "LAB_REPORT"];
            return observations.filter(function (observation) {
                return invalidConcepts.indexOf(observation.concept.name) < 0;
            })[0];
        },
        latestMatchingObservationValue = function (observations, conceptName) {
            var matchingObs = matchingObservations(observations, conceptName);
            var sortedObservations = _.sortBy(matchingObs, 'observationDateTime').reverse();
            return sortedObservations[0] && sortedObservations[0].value;
        },
        getLabReportUrl = function(observations){
            return valueOf(observations, "LAB_REPORT") ? Bahmni.Common.Constants.labResultUploadedFileNameUrl + valueOf(observations, "LAB_REPORT") : null
        };

    Result.create = function (parentConcept, observations) {
        var realObs = getRealObs(observations);
        var resultData = {
            concept: parentConcept,
            isAbnormal: valueOf(observations, "LAB_ABNORMAL") === true,
            minNormal: valueOf(observations, "LAB_MINNORMAL"),
            maxNormal: valueOf(observations, "LAB_MAXNORMAL"),
            units: realObs && realObs.concept.units || null,
            notes: latestMatchingObservationValue(observations, "LAB_NOTES"),
            referredOut: matchingObservations(observations, "REFERRED_OUT").length > 0,
            labReport: getLabReportUrl(observations)

        }
        if (realObs) {
            resultData.value = realObs.value;
            resultData.concept = realObs.concept;
            resultData.observationDateTime = realObs.observationDateTime;
            resultData.providerName = realObs.provider? realObs.provider.name : "";
        }
        return new Result(resultData);

    };

    return Result;

})();
'use strict';

Bahmni.Clinical.Test = (function () {
    var Test = function (options) {
        angular.extend(this, options);
        this.results = this.results || [];
    };

    Test.create = function (obs) {
        var results = obs.groupMembers.map(function (groupMember) { return Bahmni.Clinical.Result.create(obs.concept, groupMember.groupMembers); });
        return new Test({concept: obs.concept, orderDate: obs.observationDateTime, results: results});
    };

    Test.prototype = {
       hasMultipleResults: function() {
            return this.results.length > 1;
       },

       hasPendingResults: function() {
            return this.results.length === 0;
       },

       hasResults: function() {
            return !this.hasPendingResults();
       },

       getMinNormal: function() {
            return this.hasResults() ? this.results[0].minNormal : undefined;
       },

       getMaxNormal: function() {
            return this.hasResults() ? this.results[0].maxNormal : undefined;
       },

       getUnits: function() {
            return this.concept.units;
       },

       getDisplayList: function() {
            var displayList = [];
            if (this.hasMultipleResults() || this.hasPendingResults()) {
                displayList.push({ name: this.concept.name, units: this.concept.units, isSummary: true, hasResults: this.hasResults() });
                displayList.push({ name: "", isSummary: true, hasResults: this.hasResults() });
            }
            return displayList.concat(this.results);
        }
    }

    return Test;
})();

'use strict';

Bahmni.Clinical.Panel = (function () {
    var Panel = function (options) {
        angular.extend(this, options);
    };

    Panel.create = function (concept, observations) {
        var tests = _.flatten(observations, 'groupMembers').map(Bahmni.Clinical.Test.create);
        return new Panel({ concept: concept, tests: tests });
    };

    Panel.prototype = {
        getDisplayList: function()     {
            var displayList = [];
            displayList.push({ name: this.concept.name, isSummary: true, hasResults: true });
            this.tests.forEach(function(test) { displayList = displayList.concat(test.getDisplayList()); });
            displayList.push({ name: "", isSummary: true, hasResults: false });
            return displayList;
        },
        hasResults: function() {
            return this.tests.length > 0;
        }
    }

    return Panel;
})();

'use strict';

Bahmni.Clinical.LabOrder = (function () {
    var LabOrder = function (data) {
        angular.extend(this, data);
        this.orderDate = data.dateCreated;
    };

    var createOrderable = function (order) {
        if (order.concept.set) {
            return Bahmni.Clinical.Panel.create(order.concept, order.observations);
        } else {
            if (order.observations.length === 0) return new Bahmni.Clinical.Test({concept: order.concept});
            return Bahmni.Clinical.Test.create(order.observations[0]);
        }
    };

    LabOrder.prototype = {
        isPanel: function() {
            return this.concept.set;
        },
        getOrderableType: function() {
            return this.concept.set ? "Panel" : "Test" ;
        },
        getDisplayList: function () {
            var self = this;
            var displayList = this.orderable.getDisplayList();
            displayList.forEach(function(item) { item.orderDate = self.orderDate; });
            return displayList;
        }
    };

    LabOrder.create = function (order) {
        return new LabOrder({concept: order.concept, orderable: createOrderable(order), dateCreated: order.dateCreated, accessionUuid: order.accessionUuid});
    };

    return LabOrder;
})();
'use strict';

Bahmni.Clinical.ResultGrouper = function(){};

Bahmni.Clinical.ResultGrouper.prototype.group = function(inputArray, groupKeyFunction, nameForGroupedValue, nameForKey) {
    var result = [];
    var arrayInObjectForm = {};
    nameForKey = nameForKey || 'key';
    nameForGroupedValue = nameForGroupedValue || "values";

    inputArray.forEach(function (obj) {
        if (arrayInObjectForm[groupKeyFunction(obj)]) {
            arrayInObjectForm[groupKeyFunction(obj)].values.push(obj);
        } else {
            arrayInObjectForm[groupKeyFunction(obj)] = {values: [obj]};
        }
    });
    angular.forEach(arrayInObjectForm, function (item, key) {
        var group = {};
        group[nameForKey] = key;
        group[nameForGroupedValue] = item.values;
        result.push(group);
    });
    return result;
};
'use strict';

Bahmni.Clinical.DrugOrder = (function () {
    var DateUtil = Bahmni.Common.Util.DateUtil;

    var DrugOrder = function (drugOrderData) {
        angular.extend(this, drugOrderData);
    };

    DrugOrder.create = function (drugOrderData) {
        return new DrugOrder(drugOrderData);
    };

    DrugOrder.createFromUIObject = function (drugOrderData) {
        var dateUtil = Bahmni.Common.Util.DateUtil;
        var getDosingInstructions = function(drugOrderData) {
            var dosingInstructions = {};
            dosingInstructions.instructions = drugOrderData.instructions && drugOrderData.instructions;
            dosingInstructions.additionalInstructions = drugOrderData.additionalInstructions;
            if (drugOrderData.frequencyType === Bahmni.Clinical.Constants.dosingTypes.variable) {
                dosingInstructions.morningDose = drugOrderData.variableDosingType.morningDose;
                dosingInstructions.afternoonDose = drugOrderData.variableDosingType.afternoonDose;
                dosingInstructions.eveningDose = drugOrderData.variableDosingType.eveningDose;
            }
            return JSON.stringify(dosingInstructions);
        };

        var frequency = drugOrderData.isUniformDosingType() && !drugOrderData.isCurrentDosingTypeEmpty() && drugOrderData.uniformDosingType.frequency;

        var route = drugOrderData.route;

        var drugOrder = new DrugOrder({
                careSetting: "Outpatient",
                drug: drugOrderData.drug,
                orderType: "Drug Order",
                dosingInstructionType: Bahmni.Clinical.Constants.flexibleDosingInstructionsClass,
                dosingInstructions: {
                    dose: drugOrderData.uniformDosingType.dose,
                    doseUnits: drugOrderData.doseUnits,
                    route: route,
                    frequency: frequency,
                    asNeeded: drugOrderData.asNeeded,
                    administrationInstructions: getDosingInstructions(drugOrderData),
                    quantity: drugOrderData.quantity,
                    quantityUnits: drugOrderData.quantityUnit,
                    numberOfRefills: 0},
                duration: drugOrderData.duration,
                durationUnits: drugOrderData.durationUnit,
                scheduledDate: dateUtil.parse(drugOrderData.scheduledDate),
                autoExpireDate: dateUtil.parse(drugOrderData.autoExpireDate),
                previousOrderUuid: drugOrderData.previousOrderUuid,
                action: drugOrderData.action
            }
        );
        if (!drugOrder.dosingInstructions.quantityUnits) {
            drugOrder.dosingInstructions.quantityUnits = "Unit(s)";
        } 
        return drugOrder;
    };

    DrugOrder.prototype = {
        isActiveOnDate: function (date) {
            return date >= DateUtil.getDate(this.effectiveStartDate) && date <= DateUtil.getDate(this.effectiveStopDate);
        },

        getStatusOnDate: function (date) {
            if(DateUtil.isSameDate(this.dateStopped, date))
                return 'stopped';
            return this.isActiveOnDate(date) ? 'active' : 'inactive';
        },

        isActive: function () {
            return this.isActiveOnDate(DateUtil.today());
        }
    };

    return DrugOrder;
})();
Bahmni.Clinical.DrugOrderViewModel = function (appConfig, config, proto, encounterDate) {
    angular.copy(proto, this);

    var allowedQuantityUnits = ["Tablet(s)","Capsule(s)"];
    var DateUtil = Bahmni.Common.Util.DateUtil;
    var self = this;
    var config = config || {};
    var appConfig = appConfig || {};
    var drugFormDefaults = appConfig.drugFormDefaults || {};
    var durationUnits = config.durationUnits || [];
    var now = DateUtil.now();

    var today = function() {
        return DateUtil.parse(self.encounterDate);
    };

    Object.defineProperty(this, 'effectiveStartDate', {
        get: function () {
            return self._effectiveStartDate;
        },
        set : function(value){
            self._effectiveStartDate = value;

            if(DateUtil.parse(value) > today()) {
                self.scheduledDate = self._effectiveStartDate;
            } else {
                self.scheduledDate = null;
            }
        },
        enumerable: true
    });

    Object.defineProperty(this, 'doseUnits', {
        enumerable: true,
        get: function() {
            if(this.isUniformDosingType()) {
                return this.uniformDosingType.doseUnits;
            } else if(this.isVariableDosingType()) {
                return this.variableDosingType.doseUnits;
            }
            return null;
        },
        set: function(value) {
            if(this.isUniformDosingType()) {
                this.uniformDosingType.doseUnits = value;
            } else if(this.isVariableDosingType()) {
                this.variableDosingType.doseUnits = value;
            }
        }
    });

    var getDosingType = function() {
        return self.isUniformDosingType() ? self.uniformDosingType : self.variableDosingType;
    };

    this.encounterDate = encounterDate ? encounterDate : now;
    this.asNeeded = this.asNeeded || false;
    this.route = this.route || undefined;
    this.durationUnit = this.durationUnit || appConfig.defaultDurationUnit;
    this.instructions = this.instructions || appConfig.defaultInstructions;
    this.effectiveStartDate = this.effectiveStartDate || this.encounterDate;
    this.autoExpireDate = this.autoExpireDate || undefined;
    this.frequencyType = this.frequencyType || Bahmni.Clinical.Constants.dosingTypes.uniform;
    this.uniformDosingType = this.uniformDosingType || {};
    this.variableDosingType = this.variableDosingType || {};
    this.durationInDays = this.durationInDays || 0;
    this.isDiscontinuedAllowed = this.isDiscontinuedAllowed || true;
    this.isEditAllowed = this.isEditAllowed || true;
    this.quantityEnteredViaEdit = this.quantityEnteredViaEdit || false;
    this.quantityEnteredManually = this.quantityEnteredManually || false;
    this.isBeingEdited = this.isBeingEdited || false;
    this.orderAttributes = [];

    this.overlappingScheduledWith = function(otherDrugOrder){

        var dateUtil = Bahmni.Common.Util.DateUtil;
        if (otherDrugOrder.effectiveStopDate == null && this.effectiveStopDate == null) {
            return true;
        }

        if (otherDrugOrder.effectiveStopDate == null) {
            return dateUtil.diffInSeconds(this.effectiveStopDate, otherDrugOrder.effectiveStartDate) >-1;
        }

        if (this.effectiveStopDate == null) {
            return (dateUtil.diffInSeconds(this.effectiveStartDate, otherDrugOrder.effectiveStartDate) >-1) && (dateUtil.diffInSeconds(this.effectiveStartDate, otherDrugOrder.effectiveStopDate) <1);
        }

        return (dateUtil.diffInSeconds(this.effectiveStartDate, otherDrugOrder.effectiveStopDate) <= 0 && dateUtil.diffInSeconds(this.effectiveStopDate, otherDrugOrder.effectiveStartDate) > -1);
    };

    var simpleDoseAndFrequency = function () {
        var uniformDosingType = self.uniformDosingType;
        var doseAndUnits = blankIfFalsy(uniformDosingType.dose) + " " + blankIfFalsy(self.doseUnits);
        return addDelimiter(blankIfFalsy(doseAndUnits), ", ") +
            addDelimiter(blankIfFalsy(uniformDosingType.frequency), ", ");
    };

    var numberBasedDoseAndFrequency = function () {
        var variableDosingType = self.variableDosingType;
        var variableDosingString = addDelimiter((variableDosingType.morningDose || 0) + "-" + (variableDosingType.afternoonDose || 0) + "-" + (variableDosingType.eveningDose || 0), " ");
        return addDelimiter((variableDosingString + blankIfFalsy(self.doseUnits)).trim(), ", ")
    };

    var asNeeded = function (asNeeded) {
        return asNeeded ? "SOS" : '';
    };

    var blankIfFalsy = function (value) {
        return value ? value.toString().trim() : "";
    };

    var getDoseAndFrequency = function () {
        return self.frequencyType === Bahmni.Clinical.Constants.dosingTypes.uniform ? simpleDoseAndFrequency() : numberBasedDoseAndFrequency();
    };

    var addDelimiter = function (item, delimiter) {
        return item && item.length > 0 ? item + delimiter : item;
    };

    var getInstructions = function () {
        if (self.instructions !== Bahmni.Clinical.Constants.asDirectedInstruction) {
            return self.instructions;
        }
        return undefined;
    };

    var getOtherDescription = function(withRoute, withDuration){
        var otherDescription = addDelimiter(blankIfFalsy(getInstructions()), ", ") +
            addDelimiter(blankIfFalsy(asNeeded(self.asNeeded)), ', ');
        if(withRoute){
            otherDescription = otherDescription + addDelimiter(blankIfFalsy(self.route), " - ");
        }else{
            otherDescription = otherDescription.substring(0, otherDescription.length - 2);
            otherDescription = addDelimiter(blankIfFalsy(otherDescription), " - ");
        }
        if(withDuration){
            otherDescription = otherDescription + addDelimiter(blankIfFalsy(self.duration), " ") + addDelimiter(blankIfFalsy(self.durationUnit), ", ")
        }
        otherDescription = otherDescription.substring(0, otherDescription.length - 2);
        return otherDescription;
    };

    var constructDrugNameDisplay = function (drug, drugForm) {
        return {
            label: drug.name + " (" + drugForm + ")",
            value: drug.name + " (" + drugForm + ")",
            drug: drug
        };
    };

    this.getDoseInformation = function(){
        return getDoseAndFrequency();
    };

    this.getDisplayName = function(){
        return constructDrugNameDisplay(this.drug, this.drug.form).label;
    };

    this.getDrugName = function(){
        return constructDrugNameDisplay(self.drug, self.drug.form).value
    };

    this.getDescription = function () {
        return addDelimiter(blankIfFalsy(getDoseAndFrequency()), " ") +
            getOtherDescription(true, true);
    };

    this.getDescriptionWithoutRoute = function(){
        return addDelimiter(blankIfFalsy(getDoseAndFrequency()), " ") +
            getOtherDescription(false, true);
    };

    this.getDescriptionWithoutRouteAndDuration = function(){
        var otherDescription = getOtherDescription(false, false);
        var description = addDelimiter(blankIfFalsy(getDoseAndFrequency()), " ");
        return otherDescription? description + otherDescription: description.substring(0, description.length - 2);
    };

    this.getDescriptionWithoutDuration = function(){
        var otherDescription = getOtherDescription(true, false);
        var description = addDelimiter(blankIfFalsy(getDoseAndFrequency()), " ");
        return otherDescription? description + otherDescription: description.substring(0, description.length - 2);
    };

    this.getDescriptionWithQuantity = function(){
        return addDelimiter(blankIfFalsy(self.getDescription()), "(") +
        addDelimiter(blankIfFalsy(self.quantity), " ") +
        addDelimiter(blankIfFalsy(self.quantityUnit), ")")
    };

    var getFrequencyPerDay = function(){
        var frequency = self.isUniformDosingType() && _.find(config.frequencies, function(frequency){
            return self.uniformDosingType.frequency && (frequency.name === self.uniformDosingType.frequency);
        });

        return frequency && frequency.frequencyPerDay;
    };

    var findAnElement = function(array, element){
        var found = _.find(array, function (arrayElement) {
            return arrayElement.name === element;
        });

        return found ? element : undefined;
    };

    var getDoseUnits = function (doseUnit) {
        return findAnElement(config.doseUnits, doseUnit);
    };

    var getRoute = function (route) {
        return findAnElement(config.routes, route);
    };

    this.changeDrug = function(drug) {
        this.drug = drug;
        if(!drug) return;
        var defaults = drugFormDefaults[this.drug.form];
        if(defaults) {
            this.doseUnits = getDoseUnits(defaults.doseUnits);
            this.route = getRoute(defaults.route);
        }
    };

    this.calculateDurationUnit = function () {
        if (self.frequencyType === Bahmni.Clinical.Constants.dosingTypes.uniform && self.uniformDosingType.frequency != null) {
            var defaultDurationUnitMap = appConfig.frequencyDefaultDurationUnitsMap || [];

            defaultDurationUnitMap.forEach(function(range) {
                var minFrequency = eval(range.minFrequency);
                var maxFrequency = eval(range.maxFrequency);
                if ((minFrequency == null || minFrequency < getFrequencyPerDay()) &&
                    (maxFrequency == null || getFrequencyPerDay() <= maxFrequency)) {
                    self.durationUnit = range.defaultDurationUnit;
                }
            });
        }
    };

    this.setFrequencyType = function (type) {
        self.frequencyType = type;
        if (self.frequencyType === Bahmni.Clinical.Constants.dosingTypes.variable) {
            self.uniformDosingType = {};
        } else {
            self.variableDosingType = {};
        }
    };

    this.isCurrentDosingTypeEmpty = function () {
        var dosingType = getDosingType();
        return _.every(dosingType, function (element) { return element == null; });
    };

    this.isVariableDosingType = function () {
        return self.isFrequencyType(Bahmni.Clinical.Constants.dosingTypes.variable);
    };

    this.isUniformDosingType = function () {
        return self.isFrequencyType(Bahmni.Clinical.Constants.dosingTypes.uniform);
    };

    this.isFrequencyType = function (type) {
        return self.frequencyType === type;
    };

    this.setQuantityEnteredManually = function () {
        self.quantityEnteredManually = true;
    };

    this.calculateDurationInDays = function () {
        var durationUnitFromConfig = _.find(durationUnits, function(unit) {
            return unit.name === self.durationUnit;
        });
        self.durationInDays = self.duration * (durationUnitFromConfig && durationUnitFromConfig.factor || 1);
    };

    var inAllowedQuantityUnits = function(doseUnit){
        return allowedQuantityUnits.indexOf(doseUnit) != -1;
    };

    var quantityUnitsFrom = function(doseUnit){
        return inAllowedQuantityUnits(doseUnit) ? doseUnit: "Unit(s)";
    };

    var modifyForReverseSyncIfRequired = function(drugOrder) {
        if (drugOrder.reverseSynced) {
            drugOrder.uniformDosingType = {};
            drugOrder.quantity = undefined;
            drugOrder.quantityUnit = undefined;
            drugOrder.doseUnits = undefined;

            drugOrder.changeDrug(drugOrder.drug);
        }
    };

    this.calculateQuantityAndUnit = function () {
        self.calculateDurationInDays();
        if (!self.quantityEnteredManually && !self.quantityEnteredViaEdit) {
            if (self.frequencyType === Bahmni.Clinical.Constants.dosingTypes.uniform) {
                self.quantity = self.uniformDosingType.dose * (self.uniformDosingType.frequency ? getFrequencyPerDay() : 0) * self.durationInDays;
            } else if (self.frequencyType == Bahmni.Clinical.Constants.dosingTypes.variable) {
                var dose = self.variableDosingType;
                self.quantity = (dose.morningDose + dose.afternoonDose + dose.eveningDose) * self.durationInDays;
            }

            if(self.quantity % 1 != 0){
                self.quantity = self.quantity - ( self.quantity % 1 ) + 1;
            }
        }
        self.quantityEnteredViaEdit = false;
        self.quantityUnit = quantityUnitsFrom(self.doseUnits);
    };

    this.isStopped = function () {
        return !!self.dateStopped;
    };

    this.isScheduled = function(){
        return !self.isDiscontinuedOrStopped() && self.scheduledDate && self.scheduledDate > today();
    };

    this.isActive = function(){
        return !self.isDiscontinuedOrStopped() && (self.effectiveStopDate == null || self.effectiveStopDate >= today());
    };

    this.discontinued = function(){
        return self.action === Bahmni.Clinical.Constants.orderActions.discontinue;
    };

    this.isDiscontinuedOrStopped = function(){
        return self.isStopped() || self.discontinued();
    };

    var defaultQuantityUnit = function(drugOrder) {
        if (!drugOrder.quantityUnit) {
            drugOrder.quantityUnit = "Unit(s)";
        }
    };

    this.getSpanDetails = function () {
        var valueString = '';
        _.forEach(this.span, function (value, key, obj) {
            valueString += value + " " + key + " + ";
        });
        return valueString.substring(0, valueString.length - 3);
    };

    this.getDurationAndDurationUnits = function () {
        return addDelimiter(blankIfFalsy(self.duration), " ") +
        blankIfFalsy(self.durationUnit)
    };

    this.refill = function (existingOrderStopDate) {
        var newDrugOrder = new Bahmni.Clinical.DrugOrderViewModel(appConfig, config, this);
        newDrugOrder.previousOrderUuid = undefined;
        newDrugOrder.action = Bahmni.Clinical.Constants.orderActions.new;
        newDrugOrder.uuid = undefined;
        newDrugOrder.dateActivated = undefined;
        var oldEffectiveStopDate = existingOrderStopDate ? new Date(existingOrderStopDate): new Date(self.effectiveStopDate);
        newDrugOrder.effectiveStartDate = oldEffectiveStopDate >= today() ? DateUtil.addSeconds(oldEffectiveStopDate, 1) : today();
        newDrugOrder.calculateDurationInDays();
        newDrugOrder.effectiveStopDate = DateUtil.addDays(DateUtil.parse(newDrugOrder.effectiveStartDate), newDrugOrder.durationInDays);
        modifyForReverseSyncIfRequired(newDrugOrder);
        defaultQuantityUnit(newDrugOrder);

        return newDrugOrder;
    };

    this.revise = function () {
        var newDrugOrder = new Bahmni.Clinical.DrugOrderViewModel(appConfig, config, this);

        newDrugOrder.previousOrderUuid = self.uuid;
        self.calculateDurationInDays();
        newDrugOrder.previousOrderDurationInDays = self.durationInDays;
        newDrugOrder.action = Bahmni.Clinical.Constants.orderActions.revise;
        newDrugOrder.uuid = undefined;
        newDrugOrder.dateActivated = undefined;
        newDrugOrder.drugNameDisplay = constructDrugNameDisplay(self.drug, self.drug.form).value;
        //this field is just a flag that you turn on when revising the first time. It is turned off at the first
        //call of calculateQuantityAndUnit(). Bad code. Needs change.
        newDrugOrder.quantityEnteredViaEdit = true;
        newDrugOrder.isBeingEdited = true;

        if (newDrugOrder.effectiveStartDate <= today()) {
            newDrugOrder.effectiveStartDate = today();
        }

        modifyForReverseSyncIfRequired(newDrugOrder);
        defaultQuantityUnit(newDrugOrder);


        return newDrugOrder;
    };

    this.cloneForEdit = function (index, appConfig, config) {
        var editableDrugOrder = new Bahmni.Clinical.DrugOrderViewModel(appConfig, config, this);
        editableDrugOrder.currentIndex = index;
        editableDrugOrder.isBeingEdited = true;
        editableDrugOrder.quantityEnteredViaEdit = true;
        defaultQuantityUnit(editableDrugOrder);
        return editableDrugOrder;
    };

    var validateUniformDosingType = function () {
        if (self.uniformDosingType.frequency) {
            if (self.uniformDosingType.dose && self.uniformDosingType.doseUnits && self.uniformDosingType.dose > 0) {
                return true;
            } else if (self.uniformDosingType.dose == undefined && !self.uniformDosingType.doseUnits) {
                return true;
            }
            return false
        }
        return false;
    };

    var validateVariableDosingType = function(){
        return !(self.variableDosingType.morningDose == undefined ||
            self.variableDosingType.afternoonDose == undefined ||
            self.variableDosingType.eveningDose == undefined ||
            self.variableDosingType.doseUnits == undefined);
    };

    this.validate = function(arg){
        if(self.isUniformDosingType()){
            return validateUniformDosingType();
        }else if(self.isVariableDosingType()){
            return validateVariableDosingType();
        }
        return false;
    };

    this.loadOrderAttributes = function(drugOrderResponse){
        if(config && config.orderAttributes){
            var findOrderAttribute= function(drugOrder,orderAttribute) {
                return _.find(drugOrder.orderAttributes, function (drugOrderAttribute) {
                    return orderAttribute.name === drugOrderAttribute.name;
                });
            };

            config.orderAttributes.forEach(function(orderAttributeInConfig){
                var orderAttributeInDrugOrder = findOrderAttribute(drugOrderResponse,orderAttributeInConfig);
                var existingOrderAttribute = findOrderAttribute(self,orderAttributeInConfig);
                var orderAttribute = existingOrderAttribute || {};
                orderAttribute.name= orderAttributeInConfig.name;
                orderAttribute.shortName= orderAttributeInConfig.shortName;
                orderAttribute.conceptUuid= orderAttributeInConfig.uuid;
                orderAttribute.value= orderAttributeInDrugOrder && orderAttributeInDrugOrder.value === "true";
                orderAttribute.obsUuid= orderAttributeInDrugOrder ? orderAttributeInDrugOrder.obsUuid : undefined;
                orderAttribute.encounterUuid = orderAttributeInDrugOrder ? orderAttributeInDrugOrder.encounterUuid : undefined;
                if(!existingOrderAttribute){
                    self.orderAttributes.push(orderAttribute);
                }
            });
        }
    };


    this.getOrderAttributesAsObs = function(){
        if(self.orderAttributes){
            var orderAttributesWithValues = self.orderAttributes.filter(function(orderAttribute){ return orderAttribute.value || orderAttribute.obsUuid});
            return orderAttributesWithValues.map(function(orderAttribute){
                return {
                    uuid : orderAttribute.obsUuid,
                    value: orderAttribute.value ? true:false,
                    orderUuid: self.uuid,
                    concept: {uuid:orderAttribute.conceptUuid }
                }
            });
        }
    };

    this.loadOrderAttributes({});
};

Bahmni.Clinical.DrugOrderViewModel.createFromContract = function (drugOrderResponse, appConfig, config) {
    var DateUtil = Bahmni.Common.Util.DateUtil;
    var administrationInstructions = JSON.parse(drugOrderResponse.dosingInstructions.administrationInstructions) || {};
    var viewModel = new Bahmni.Clinical.DrugOrderViewModel(appConfig, config);
    viewModel.asNeeded = drugOrderResponse.dosingInstructions.asNeeded;
    viewModel.route = drugOrderResponse.dosingInstructions.route;

    if (drugOrderResponse.effectiveStartDate) {
        viewModel.effectiveStartDate = DateUtil.parse(drugOrderResponse.effectiveStartDate);
    }
    viewModel.effectiveStopDate = drugOrderResponse.effectiveStopDate;
    viewModel.durationUnit = drugOrderResponse.durationUnits;
    viewModel.scheduledDate = drugOrderResponse.effectiveStartDate;
    viewModel.duration = drugOrderResponse.duration;
    if (drugOrderResponse.dosingInstructions.frequency || drugOrderResponse.dosingInstructions.dose) {
        viewModel.frequencyType = Bahmni.Clinical.Constants.dosingTypes.uniform;
        viewModel.uniformDosingType = {
            dose: drugOrderResponse.dosingInstructions.dose,
            doseUnits: drugOrderResponse.dosingInstructions.doseUnits,
            frequency: drugOrderResponse.dosingInstructions.frequency
        }
    } else if(administrationInstructions.morningDose || administrationInstructions.afternoonDose || administrationInstructions.eveningDose){
        viewModel.frequencyType = Bahmni.Clinical.Constants.dosingTypes.variable;
        viewModel.variableDosingType = {
            morningDose: administrationInstructions.morningDose,
            afternoonDose: administrationInstructions.afternoonDose,
            eveningDose: administrationInstructions.eveningDose,
            doseUnits: drugOrderResponse.dosingInstructions.doseUnits
        }
    } else {
        viewModel.frequencyType = Bahmni.Clinical.Constants.dosingTypes.uniform;
        viewModel.reverseSynced = true;
        viewModel.uniformDosingType = {
            dose: parseFloat(administrationInstructions.dose),
            doseUnits: administrationInstructions.doseUnits
        }
    }
    viewModel.instructions = administrationInstructions.instructions;
    viewModel.additionalInstructions = administrationInstructions.additionalInstructions;
    viewModel.quantity = drugOrderResponse.dosingInstructions.quantity;
    viewModel.quantityUnit = drugOrderResponse.dosingInstructions.quantityUnits;
    viewModel.drug = drugOrderResponse.drug;
    viewModel.provider = drugOrderResponse.provider;
    viewModel.action = drugOrderResponse.action;
    viewModel.dateStopped = drugOrderResponse.dateStopped;
    viewModel.uuid = drugOrderResponse.uuid;
    viewModel.previousOrderUuid = drugOrderResponse.previousOrderUuid;
    viewModel.dateActivated = drugOrderResponse.dateActivated;
    viewModel.encounterUuid = drugOrderResponse.encounterUuid;
    viewModel.orderNumber = drugOrderResponse.orderNumber && parseInt(drugOrderResponse.orderNumber.replace("ORD-", ""));
    viewModel.drugNameDisplay = drugOrderResponse.drug.name + " (" + drugOrderResponse.drug.form + ")";
    config ? viewModel.loadOrderAttributes(drugOrderResponse) : viewModel.orderAttributes = drugOrderResponse.orderAttributes;
    viewModel.visit = drugOrderResponse.visit;
    viewModel.voided = drugOrderResponse.voided;
    return viewModel;
};

(function(){
	var DateUtil = Bahmni.Common.Util.DateUtil;
	Bahmni.Clinical.DrugSchedule = function(fromDate, toDate, drugOrders) {
        this.fromDate = fromDate;
		this.toDate = toDate;
		this.drugOrders = drugOrders;
		this.days = this.getDays();
		this.drugs = this.getDrugs();
	};

	Bahmni.Clinical.DrugSchedule.prototype = {
		getDays: function() {
			return DateUtil.createDays(this.fromDate, this.toDate);
		},

		getDrugs: function() {
			var drugOrders = this.drugOrders.map(Bahmni.Clinical.DrugOrder.create);
			return drugOrders.reduce(function(drugs, drugOrder){
						var drug = drugs.filter(function(drug) { return drug.name === drugOrder.drug.name && drug.uuid === drugOrder.drug.uuid; } )[0];
						if(drug) { drug.orders.push(drugOrder); }
						else { drugs.push(new Drug(drugOrder.drug.name, [drugOrder])); }
						return drugs;
					}, []);
		},

		hasDrugOrders: function() {
			return this.drugOrders.length > 0;
		}
	};

	Bahmni.Clinical.DrugSchedule.create = function(fromDate, toDate, drugOrders) {
		var drugOrdersDuringIpd = drugOrders.filter(function(drugOrder){
            var orderStartDate = DateUtil.parse(drugOrder.effectiveStartDate);
            var orderStopDate = DateUtil.parse(drugOrder.effectiveStopDate);
            return orderStartDate < toDate && orderStopDate >=fromDate;
		});
		return new this(fromDate, toDate, drugOrdersDuringIpd);
	};

	var Drug = function(name, orders) {
		this.name = name;
		this.orders = orders || [];
	};

	Drug.prototype = {
		isActiveOnDate: function(date) {
			return this.orders.some(function(order) { return order.isActiveOnDate(date); });
		},

		getStatusOnDate: function(date) {
			var activeDrugOrders = _.filter(this.orders, function(order) { return order.isActiveOnDate(date); });
			if(activeDrugOrders.length == 0) return 'inactive';
			if(_.all(activeDrugOrders, function(order) { return order.getStatusOnDate(date) === 'stopped'}))
			 return 'stopped';
			return 'active';
		},

		isActive: function() {
			return this.orders.some(function(order) { return order.isActive(); });
		}
	}

	Bahmni.Clinical.DrugSchedule.Drug = Drug;
})();




'use strict';

Bahmni.Clinical.Visit = (function () {
    var DateUtil = Bahmni.Common.Util.DateUtil;

    var Visit = function (encounters, consultationNotes, otherInvestigations, observations, labOrders, encounterConfig, allTestsAndPanelsConceptSet, visitUuid, conceptSetUIConfig, encounterDate) {
        this.uuid = visitUuid;
        this.encounters = encounters;
        this.consultationNotes = consultationNotes;
        this.otherInvestigations = otherInvestigations;
        this.observations = observations;
        this.visitDiagnoses = Bahmni.Clinical.VisitDiagnosis.create(encounters);
        this.dispositions = this.getDispositions(encounters);
        this.labOrders = labOrders;
        this.encounterConfig = encounterConfig;
        this.radiologyOrders = Bahmni.Clinical.VisitDocumentUploadOrders.create(encounters, encounterConfig.getRadiologyEncounterTypeUuid());
        this.patientFileOrders = Bahmni.Clinical.VisitDocumentUploadOrders.create(encounters, encounterConfig.getPatientDocumentEncounterTypeUuid());
        this.patientFileOrders.orders = this.hasPatientFiles() ? this.patientFileOrders.orders.reverse() : [];
        this.drugOrders = Bahmni.Clinical.VisitDrugOrder.create(encounters, this.getAdmissionDate(), this.getToDate());
        this.startDate = this.encounters.length ? _.last(this.encounters).encounterDateTime : null;

        var orderGroup = new Bahmni.Clinical.OrdersMapper();
        this.otherInvestigationGroups = orderGroup.group(otherInvestigations);

        var resultGrouper = new Bahmni.Clinical.ResultGrouper();
        var observationGroupingFunction = function (obs) {
            return Bahmni.Common.Util.DateUtil.getDateWithoutHours(obs.observationDateTime);
        };
        this.consultationNoteGroups = resultGrouper.group(consultationNotes, observationGroupingFunction, 'obs', 'date');
        this.observationGroups = resultGrouper.group(observations, observationGroupingFunction, 'obs', 'date')


        var observationSubGroupingFunction = function (obs) {
            if (!obs.concept.set) return "Others";
            return obs.concept.shortName || obs.concept.name;
        };

        this.observationGroups.forEach(function (observationGroup, index) {
            observationGroup.subGroups = resultGrouper.group(observationGroup.obs, observationSubGroupingFunction, 'obs', 'conceptName');
            if (index === 0) observationGroup.isOpen = true;
            observationGroup.subGroups.forEach(function (subGroup) {
                subGroup.obs = new Bahmni.ConceptSet.ObservationMapper().getObservationsForView(subGroup.obs, conceptSetUIConfig);
            });
        });

        this.labTestOrderObsMap = this.getLabOrdersGroupedByAccession();
        this.admissionDate = this.getAdmissionDate();
        this.visitEndDate = this.getDischargeDispositionEncounterDate() || this.getDischargeDate() || DateUtil.now();
        this.tabularResults = Bahmni.Clinical.TabularLabResults.create(labOrders, this.startDate, this.visitEndDate, allTestsAndPanelsConceptSet);
        this.showLabInvestigations = this.admissionDate ? false : true;
        this.showTreatmentSection = this.admissionDate ? false : true;
        this.showInvestigationsChart = this.admissionDate && this.tabularResults.hasOrderables();
    };

    Visit.prototype = {
        hasDrugOrders: function () {
            return (this.drugOrders && this.drugOrders.orders && this.drugOrders.orders.length > 0);
        },

        hasOtherInvestigations: function () {
            return this.otherInvestigations.length > 0;
        },

        hasObservations: function () {
            return this.observations.length > 0;
        },

        hasConsultationNotes: function () {
            return this.consultationNotes.length > 0;
        },
        hasLabTests: function () {
            return this.labTestOrderObsMap.length > 0;
        },
        hasRadiologyOrders: function () {
            return this.radiologyOrders && this.radiologyOrders.orders.length > 0;
        },
        hasPatientFiles: function () {
            return this.patientFileOrders && this.patientFileOrders.orders && this.patientFileOrders.orders.length > 0;
        },
        hasData: function () {
            return this.hasDrugOrders()
                || this.hasObservations()
                || this.hasConsultationNotes()
                || this.hasLabTests()
                || this.hasOtherInvestigations()
                || this.hasDiagnosis()
                || this.hasDisposition()
                || this.hasRadiologyOrders()
                || this.hasPatientFiles();
        },
        isPrimaryOrder: function (order) {
            return order === 'PRIMARY';
        },
        hasDiagnosis: function () {
            return this.visitDiagnoses.diagnoses.length > 0;
        },
        getDiagnoses: function () {
            return this.visitDiagnoses.diagnoses;
        },
        hasDisposition: function () {
            return this.dispositions.length > 0;
        },
        numberOfDosageDaysForDrugOrder: function (drugOrder) {
            return Bahmni.Common.Util.DateUtil.diffInDays(DateUtil.parse(drugOrder.effectiveStartDate), DateUtil.parse(drugOrder.effectiveStopDate));
        },
        hasEncounters: function () {
            return this.encounters.length > 0;
        },
        getRadiologyOrders: function () {
            return this.radiologyOrders.orders;
        },
        getPatientFileOrder: function () {
            return this.patientFileOrders.orders[0];
        },
        _getAdmissionEncounter: function () {
            var self = this;
            return this.encounters.filter(function (encounter) {
                return encounter.encounterTypeUuid === self.encounterConfig.getAdmissionEncounterTypeUuid();
            })[0];
        },
        hasAdmissionEncounter: function () {
            return this._getAdmissionEncounter() ? true : false;
        },
        getAdmissionDate: function () {
            var admissionEncounter = this._getAdmissionEncounter();
            return admissionEncounter ? DateUtil.parse(admissionEncounter.encounterDateTime) : null;
        },
        _getDischargeEncounter: function () {
            var self = this;
            return this.encounters.filter(function (encounter) {
                return encounter.encounterTypeUuid === self.encounterConfig.getDischargeEncounterTypeUuid();
            })[0];
        },
        getDischargeDate: function () {
            var dischargeEncounter = this._getDischargeEncounter();
            return dischargeEncounter ? DateUtil.parse(dischargeEncounter.encounterDateTime) : null;
        },
        hasIPDDrugOrders: function () {
            return this.drugOrders.hasIPDDrugSchedule();
        },
        getIPDDrugOrders: function () {
            return this.drugOrders;
        },
        getIPDDrugs: function () {
            return this.drugOrders.getIPDDrugs();
        },
        _getEncounterWithDisposition: function (dispositionCode) {
            return this.encounters.filter(function (encounter) {
                return encounter.disposition && encounter.disposition.code === dispositionCode;
            })[0];
        },
        getDischargeDispositionEncounterDate: function () {
            var dischargeDispositionEncounter = this._getEncounterWithDisposition(Bahmni.Common.Constants.dischargeCode);
            return dischargeDispositionEncounter ? DateUtil.parse(dischargeDispositionEncounter.encounterDateTime) : null;
        },
        getLabOrdersGroupedByAccession: function () {
            var orderGroup = new Bahmni.Clinical.OrdersMapper();
            var accessionNotesMapper = new Bahmni.Clinical.AccessionNotesMapper(this.encounterConfig);
            var accessions = orderGroup.group(this.labOrders, 'accessionUuid');
            accessions.forEach(function (accession) {
                accession.displayList = accession.orders.reduce(function (accessionDisplayList, order) {
                    return accessionDisplayList.concat(order.getDisplayList());
                }, []);
            });

            accessionNotesMapper.map(this.encounters, accessions);

            function mapEncounterDateTime(encounters, accessions) {
                accessions.forEach(function (accession) {
                    encounters.forEach(function (encounter) {
                        if (encounter.encounterUuid === accession.accessionUuid) {
                            accession.encounterDateTime = encounter.encounterDateTime;
                        }
                    });
                });
            }

            mapEncounterDateTime(this.encounters, accessions);

            return _.sortBy(accessions, function (accession) {
                return accession.encounterDateTime;
            }).reverse();
        },
        toggleLabInvestigation: function () {
            this.showLabInvestigations = !this.showLabInvestigations;
        },
        toggleTreatmentSection: function () {
            this.showTreatmentSection = !this.showTreatmentSection;
        },
        getWeightAndBMIObservations: function () {
            var isObservationForRegistration = function (obs) {
                return obs.concept && (obs.concept.name === Bahmni.Common.Constants.weightConceptName || obs.concept.name === Bahmni.Common.Constants.bmiConceptName || obs.concept.name === Bahmni.Common.Constants.bmiStatusConceptName) ? true : false;
            };
            return this.observations.filter(isObservationForRegistration);
        },

        getWeightForCurrentVisit: function () {
            var isObservationForNutritionalValue = this.observations.filter(function (obs) {
                return obs.concept && (obs.concept.name === Bahmni.Common.Constants.nutritionalConceptName);
            });
            var nutritionalGroupMembers = isObservationForNutritionalValue.length > 0 ? isObservationForNutritionalValue[0].groupMembers : [];
            return nutritionalGroupMembers.filter(function (groupMember) {
                return groupMember.concept.name.toUpperCase() === Bahmni.Common.Constants.weightConceptName;
            });
        },

        getDrugOrderGroups: function () {
            return this.drugOrders.getDrugOrderGroups();
        },
        atleastOneResultPerDay: function (day) {
            var atleastOneResultForDay = false;
            this.tabularResults.getOrderables().forEach(function (test) {
                if (!test.concept.set) {
                    test.results.forEach(function (result) {
                        if (result.isOnOrderDate(day.date)) {
                            atleastOneResultForDay = true;
                        }
                    })
                }
            });
            return atleastOneResultForDay;
        },
        atleastOneDrugForDay: function (day) {
            var atleastOneDrugForDay = false;
            this.getIPDDrugs().forEach(function (drug) {
                if (drug.isActiveOnDate(day.date)) {
                    atleastOneDrugForDay = true;
                }
            });
            return atleastOneDrugForDay;
        },
        getToDate: function () {
            return this.getDischargeDispositionEncounterDate() || this.getDischargeDate() || DateUtil.now();
        },
        getDispositions: function (encounterTransactions) {
            var dispositions = [];
            angular.forEach(encounterTransactions, function (encounterTransaction) {
                if (encounterTransaction.disposition) {
                    encounterTransaction.disposition.provider = encounterTransaction.providers[0];
                    dispositions.push(encounterTransaction.disposition);
                }
            });
            return dispositions;
        },
        expandOrCollapse: function (observationGroup) {
            observationGroup.isOpen = !observationGroup.isOpen;
        }

    };


    Visit.create = function (encounterTransactions, consultationNoteConcept, labOrderNoteConcept, encounterConfig, allTestAndPanelsConcept, obsIgnoreList, visitUuid, conceptSetUIConfig, encounterDate) {
        var ordersMapper = new Bahmni.Clinical.OrdersMapper(),
            isLabTests = function (order) {
                var labTestOrderTypeUuid = encounterConfig.orderTypes[Bahmni.Clinical.Constants.labOrderType];
                return order.orderTypeUuid === labTestOrderTypeUuid;
            },
            isNonLabTests = function (order) {
                return !isLabTests(order);
            },
            conceptMatches = function (observation, concepts) {
                return concepts.some(function (concept) {
                    return observation.concept.uuid === concept.uuid;
                });
            },
            isConsultationNote = function (observation) {
                return conceptMatches(observation, [consultationNoteConcept])
            },
            isOtherObservation = function (observation) {
                return !conceptMatches(observation, [consultationNoteConcept, labOrderNoteConcept])
            },
            doesNotHaveOrder = function (obs) {
                return !obs.orderUuid;
            };


        var removeUnwantedObs = function (observation) {
            return !obsIgnoreList.some(function (ignoredObsName) {
                return ignoredObsName === observation.concept.name;
            });
        };
        var invalidEncounterTypeUuids = [encounterConfig.getPatientDocumentEncounterTypeUuid(), encounterConfig.getRadiologyEncounterTypeUuid()];
        var allObs = new Bahmni.Clinical.EncounterTransactionToObsMapper().map(encounterTransactions, invalidEncounterTypeUuids, conceptSetUIConfig).filter(removeUnwantedObs);
        var testOrders = ordersMapper.map(encounterTransactions, 'testOrders', allTestAndPanelsConcept);
        var otherInvestigations = testOrders.filter(isNonLabTests);
        var labOrders = testOrders.filter(isLabTests).map(Bahmni.Clinical.LabOrder.create);

        var consultationNotes = allObs.filter(isConsultationNote);
        var observations = allObs.filter(isOtherObservation).filter(doesNotHaveOrder);


        return new this(encounterTransactions, consultationNotes, otherInvestigations, observations, labOrders, encounterConfig, allTestAndPanelsConcept, visitUuid, conceptSetUIConfig, encounterDate);
    };

    return Visit;
})();

'use strict';

Bahmni.Clinical.VisitDiagnosis = (function () {

    var VisitDiagnosis = function (diagnoses) {
        this.diagnoses = diagnoses;
    };
    VisitDiagnosis.prototype = {
        isConfirmedDiagnosis: function (certainity) {
            return certainity === 'CONFIRMED';
        }
    };

    VisitDiagnosis.create = function (encounterTransactions) {
        var diagnosisMapper = new Bahmni.DiagnosisMapper();
        var diagnoses = _.flatten(encounterTransactions, 'bahmniDiagnoses').map(diagnosisMapper.mapDiagnosis)
        diagnoses = _.uniq(diagnoses, function (diagnosis) {
            return diagnosis.getDisplayName();
        });
        return new this(diagnoses);
    };


    return VisitDiagnosis;
})();
'use strict';

Bahmni.Clinical.VisitTabConfig = function (tabs) {
    var self = this;
    this.tabs = tabs;

    var addDefaultDashboard = function (){
        self.openTabs = [_.find(self.tabs, function (tab) {
            return tab.default;
        })];
    };

    var addDisplayByDefaultDashboards = function(){
        self.openTabs = self.openTabs.concat( _.filter(self.tabs, function (tab) {
            return tab.displayByDefault
        }));
    };

    var init = function(){
        addDefaultDashboard();
        addDisplayByDefaultDashboards();
    }();

    this.getDefaultTab = function () {
        return _.find(this.tabs, function (tab) {
            return tab.default;
        })
    };

    this.currentTab = this.getDefaultTab();

    this.getTab = function (title) {
        return _.find(this.tabs, function (tab) {
            return tab.title === title;
        })
    };

    this.setVisitUuidsAndPatientUuidToTheSections = function (visitUuids, patientUuid) {
        _.each(this.tabs, function (tab) {
            _.each(tab.sections, function(section){
                section.config.visitUuids = visitUuids;
                section.config.patientUuid = patientUuid;
            });
        });
    };

    this.switchTab = function (tab) {
        this.currentTab = tab;

        if (findOpenTab(tab)) {
            this.openTabs.push(tab);
        }

    };

    this.closeTab = function (tab) {
        _.remove(this.openTabs, {'title': tab.title});
        this.switchTab(this.getDefaultTab());
    };

    var findOpenTab = function (tab) {
        return !_.findWhere(self.openTabs, {'title': tab.title});
    };


    this.getUnOpenedTabs = function () {
        return _.filter(this.tabs, function (tab) {
            return findOpenTab(tab);
        })
    };

    this.isCurrentTab = function (tab) {
        return this.currentTab && this.currentTab.title === tab.title;
    };

    this.showPrint = function () {
        return !_.isEmpty(this.currentTab.printing);
    };
    this.getPrintConfigForCurrentVisit = function() {
        return this.currentTab.printing;
    }
};
'use strict';

Bahmni.Clinical.VisitDocumentUploadOrders = (function () {

    var VisitDocumentUploadOrders = function (orders) {
        this.orders = orders;
    };

    var getDocumentUploadOrders = function (encounterTransactions, encounterTypeUuid) {
        var documentUploadObservations = [];
        encounterTransactions.forEach(function (encounterTransaction) {
            if (encounterTransaction.encounterTypeUuid == encounterTypeUuid) {
                encounterTransaction.observations.forEach(function (observation) {
                    observation.groupMembers.forEach(function (member) {
                        if (member.concept.name === Bahmni.Common.Constants.documentsConceptName) {
                            var imageObservation = new Bahmni.Clinical.ImageObservation(member, observation.concept, encounterTransaction.providers[0]);
                            documentUploadObservations.push(imageObservation);
                        }
                    });
                });
            }
        });
        return documentUploadObservations;
    };

    VisitDocumentUploadOrders.create = function (encounterTransactions, encounterTypeUuid) {
        var documentUploadOrders = getDocumentUploadOrders(encounterTransactions, encounterTypeUuid);
        return new this(documentUploadOrders);
    };

    return VisitDocumentUploadOrders;
})();
'use strict';

Bahmni.Clinical.VisitDrugOrder = (function () {

    var VisitDrugOrder = function (orders, ipdOrders, orderGroup) {
        this.orders = orders;
        this.ipdDrugSchedule = ipdOrders;
        this.orderGroup = orderGroup;
    };

    VisitDrugOrder.prototype = {
        hasIPDDrugSchedule: function () {
            return this.ipdDrugSchedule && this.ipdDrugSchedule.hasDrugOrders();
        },
        getDrugOrderGroups: function () {
            return this.orderGroup;
        },
        getIPDDrugs: function () {
            return this.ipdDrugSchedule.drugs;
        }
    };


    VisitDrugOrder.create = function (encounterTransactions, admissionDate, dischargeDate) {
        var nameToSort = function (drugOrder) {
            return drugOrder.drug.name;
        };

        var drugOrders = new Bahmni.Clinical.OrdersMapper(nameToSort).map(encounterTransactions, 'drugOrders');

        var prescribedDrugOrders = [];
        drugOrders.forEach(function (drugOrder) {
            prescribedDrugOrders.push(Bahmni.Clinical.DrugOrderViewModel.createFromContract(drugOrder))
        });

        return this.createFromDrugOrders(prescribedDrugOrders, admissionDate, dischargeDate);
    };

    VisitDrugOrder.createFromDrugOrders = function (drugOrders, admissionDate, dischargeDate) {
        drugOrders = _.filter(drugOrders, function (drugOrder) {
            return !drugOrder.voided && drugOrder.action !== Bahmni.Clinical.Constants.orderActions.discontinue;
        });

        drugOrders = _.filter(drugOrders, function (drugOrder) {
            return !_.some(drugOrders, function (otherDrugOrder) {
                return otherDrugOrder.action === Bahmni.Clinical.Constants.orderActions.revise && otherDrugOrder.encounterUuid === drugOrder.encounterUuid && otherDrugOrder.previousOrderUuid === drugOrder.uuid
            });
        });

        var ipdOrders = null;
        if (admissionDate) {
            ipdOrders = Bahmni.Clinical.DrugSchedule.create(admissionDate, dischargeDate, drugOrders);
        }
        var orderGroup = new Bahmni.Clinical.OrdersMapper().group(drugOrders, 'date');
        return new this(drugOrders, ipdOrders, orderGroup);
    };

    return VisitDrugOrder;
})();
var dischargeSummary = function(){
	var getObservationByName = function(observations, name){
		for (var i = 0; i < observations.length; i++) {
			var observation = observations[i];
			if(observation.concept.name === name) return observation;
			var observationMember = getObservationByName(observation.groupMembers, name);
			if(observationMember) return observationMember;
		};
	};

	Bahmni.Clinical.DischargeSummary = function(patient, visit){
		this.patient = patient;
		this.visit = visit;
	};

	Bahmni.Clinical.DischargeSummary.prototype = {
		getObservationValue: function(name) { 
			var observation = getObservationByName(this.visit.observations, name);
			return observation ? observation.value : null;
		},

		getFinalDiagnoses: function() {
			return this.visit.visitDiagnoses.diagnoses.filter(function(diagnosis) { return !diagnosis.revised; });
		},

		getTreatmentReceived: function() {
			return this.visit.getIPDDrugOrders().ipdDrugSchedule.drugOrders;
		},
		
		getTreatmentAdviced: function() {
			var DateUtil = Bahmni.Common.Util.DateUtil;
			var dischargeDate = this.visit.getDischargeDispositionEncounterDate();
			if(!dischargeDate) return [];
			return this.visit.drugOrders.orders.filter(function(drugOrder) {
				return DateUtil.parse(drugOrder.startDate) >= dischargeDate;
			});
		},

		getLatestLabOrders: function() {
			return Bahmni.Clinical.OrdersUtil.latest(this.visit.labOrders);
		},

		getLatestRadiologyOrders: function() {
			return Bahmni.Clinical.OrdersUtil.latest(this.visit.radiologyOrders.orders);
		}
	}
};
dischargeSummary();
'use strict';

Bahmni.Clinical.TabularLabResults = (function () {
    var DateUtil = Bahmni.Common.Util.DateUtil;
    var TabularLabResults = function (startDate, endDate, orderables, visitDays) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.visitDays = visitDays;
        this.orderables = orderables;

        this.getDays = function () {
            return this.visitDays;
        };

        this.getOrderables = function () {
            return this.orderables;
        };

        this.hasOrderables = function () {
            return this.orderables.length > 0;
        };
    };

    var flattenOrderables = function(orderables){
        return orderables.reduce(function(flatOrderables, orderable){
            flatOrderables.push(orderable);
            if(orderable.concept.set){ flatOrderables.push.apply(flatOrderables, orderable.tests); }
            return flatOrderables;
        }, []);
    };

    function getUniqueTests(topLevelTests) {
        var testsGroupedByName = _.groupBy(topLevelTests, function (test) {return test.concept.name;});
        return _.map(testsGroupedByName, function (tests) {
            return new Bahmni.Clinical.Test({concept: tests[0].concept, results: _.flatten(tests, 'results')})
        });
    }

    function getUniquePanels(allPanels) {
        var panelsGroupedByName = _.groupBy(allPanels, function (panel) { return panel.concept.name });
        return _.map(panelsGroupedByName, function (panels) {
            return new Bahmni.Clinical.Panel({concept: panels[0].concept, tests: _.flatten(panels, 'tests')})
        });
    }

    var getOrderables = function(labOrders, sortedConceptSet){
        var topLevelTests = labOrders.filter(function(order) { return order.getOrderableType() === "Test"}).map(function(order) { return order.orderable; });
        var allPanels = labOrders.filter(function(order) { return order.getOrderableType() === "Panel"}).map(function(order) { return order.orderable; });
        var uniquePanels = getUniquePanels(allPanels);
        uniquePanels.forEach(function(panel){
            var testsBelongingToThisPanel = topLevelTests.filter(function(test) {
                return panel.tests.some(function(testFromPanel){ return testFromPanel.concept.name === test.concept.name });
            });
            panel.tests = getUniqueTests(panel.tests.concat(testsBelongingToThisPanel));
            panel.tests = sortedConceptSet.sort(panel.tests);
            panel.tests.forEach(function(test) { test.belongsToPanel = true; });
            testsBelongingToThisPanel.forEach(function(test){ _.pull(topLevelTests, test); })
        });
        var uniqueTests = getUniqueTests(topLevelTests);
        var allOrderables = uniqueTests.concat(uniquePanels);
        return sortedConceptSet.sort(allOrderables);
    };

    var sortResultsInOrderables = function(orderables){
        orderables.forEach(function(orderable){
            if(!orderable.concept.set){
                orderable.results = _.sortBy(orderable.results, function(result){
                    return result.orderDate;
                });
            }else{
                orderable.tests.forEach(function(test){
                    test.results = _.sortBy(test.results, function(result){
                        return result.orderDate;
                    });
                });
            }
        });
        return orderables;
    };

    TabularLabResults.create = function (labOrders, startDate, endDate, allTestsAndPanelsConceptSet) {
        var sortedConceptSet = new Bahmni.Clinical.ConceptWeightBasedSorter(allTestsAndPanelsConceptSet);
        var orderables = getOrderables(labOrders, sortedConceptSet);
        var visitDays = DateUtil.createDays(startDate, endDate);
        var flatOrderables = flattenOrderables(orderables);
        var sortedOrderables = sortResultsInOrderables(flatOrderables);
        return new TabularLabResults(startDate, endDate, sortedOrderables, visitDays);
    };

    return TabularLabResults;
})();
'use strict';

Bahmni.Clinical.ConceptWeightBasedSorter = function(allTestAndPanelsConcept) {
	var sortedConcepts = allTestAndPanelsConcept ? allTestAndPanelsConcept.setMembers : [];
    var sortedNames = sortedConcepts.map(function(concept) {return concept.name.name;});

	this.sort = function(conceptHolders, nameToSort) {
        if(!conceptHolders) return [];
        conceptHolders.forEach(function(conceptHolder){
            var index = sortedNames.indexOf(nameToSort ? nameToSort(conceptHolder) : conceptHolder.concept.name);
            conceptHolder.sortWeight = index === -1 ? 999 : index;
		});
		return _.sortBy(conceptHolders, 'sortWeight');
	};

    this.sortTestResults = function(labOrderResults) {
        if(!labOrderResults) return [];
        labOrderResults.forEach(function(labOrderResult){
            var index = sortedNames.indexOf(labOrderResult.orderName || labOrderResult.testName);
            labOrderResult.sortWeight = index === -1 ? 999 : index;
            if(labOrderResult.isPanel) {
                labOrderResult.tests.forEach(function(test) {
                    var index = sortedNames.indexOf(test.testName);
                    test.sortWeight = index === -1 ? 999 : index;
                })
                labOrderResult.tests = _.sortBy(labOrderResult.tests, 'sortWeight');
            }
        });
        return _.sortBy(labOrderResults, 'sortWeight');
    };
};

'use strict';

Bahmni.Clinical.OrdersUtil = (function () {
    var DateUtil = Bahmni.Common.Util.DateUtil;

    var containsOlderOrder = function (orders, orderToCheck) {
        return orders.some(function (order) {
            return order.concept.name === orderToCheck.concept.name && DateUtil.parse(order.dateCreated) > DateUtil.parse(orderToCheck.dateCreated);
        });
    };

    var OrdersUtil = {
        latest: function (orders) {
            var clonedOrders = [];
            orders.forEach(function (order) {
                if (!containsOlderOrder(orders, order)) {
                     clonedOrders.push(order);
                }
            });
            return clonedOrders;
        }
    }

    return OrdersUtil;
})();



Bahmni.Clinical.AccessionNotesMapper = function(encounterConfig) {

    var isValidationEncounter = function (encounterTransaction) {
        return encounterTransaction.encounterTypeUuid === encounterConfig.getValidationEncounterTypeUuid();
    };

	var addAccessionNote = function(accessions, accessionNote){
	    var accession = accessions.filter(function (accession) { return accession.accessionUuid === accessionNote.accessionUuid })[0];
	    if (accession) {
	        accession.accessionNotes = accession.accessionNotes || [];
	        accession.accessionNotes.push(accessionNote);
	    }
    };

    this.map = function(encounters, accessions){
        var validationEncounters = encounters.filter(isValidationEncounter);
        var accessionNotes = _.flatten(validationEncounters, 'accessionNotes');
        accessionNotes.forEach(function (accessionNote) { addAccessionNote(accessions, accessionNote); });
        accessions.forEach(function(){
            accessions.accessionNotes = _.sortBy(accessions.accessionNotes, 'dateTime').reverse(); 
        });
        return accessions;
    };
};
'use strict';

Bahmni.Clinical.EncounterTransactionToObsMapper = function () {

    this.map = function (encounterTransactions, invalidEncounterTypes,conceptSetUIConfig) {
        var allObs,
            validObservation = function (observation) {
                if (observation.voided) return false;
                if (!isObservationAgroup(observation)) return true;
                return isObservationAgroup(observation) && observation.groupMembers.some(validObservation);
            },
            setProvider = function (provider) {
                var setProviderToObservation = function (observation) {
                    observation.provider = provider;
                    angular.forEach(observation.groupMembers, setProviderToObservation);
                };
                return setProviderToObservation;
            },
            setProviderToObservations = function (observations, provider) {
                var setProviderFunction = setProvider(provider);
                angular.forEach(observations, function (observation) {
                    setProviderFunction(observation);
                });
            },
            createMultiSelectObs = function(obsList){
                if(conceptSetUIConfig){
                    obsList.forEach(function(obs){
                        createMultiSelectObs(obs.groupMembers);
                    });
                    new Bahmni.ConceptSet.MultiSelectObservations(conceptSetUIConfig).map(obsList);
                }
            },
            flatten = function (transactions, item) {
                return transactions.reduce(function (result, transaction) {
                    setProviderToObservations(transaction[item], transaction.providers[0]);
                    createMultiSelectObs(transaction.observations);
                    return result.concat(transaction[item]);
                }, []);
            },
            isObservationAgroup = function (observation) {
                return observation.groupMembers && observation.groupMembers.length > 0;
            },
            removeInvalidGroupMembers = function (observation) {
                angular.forEach(observation.groupMembers, removeInvalidGroupMembers);
                if (observation.groupMembers)
                    observation.groupMembers = observation.groupMembers.filter(validObservation);
            },
            removeInvalidEncounterTypes = function (encounterTransaction) {
                return invalidEncounterTypes.indexOf(encounterTransaction.encounterTypeUuid) === -1;
            };

        encounterTransactions = encounterTransactions.filter(removeInvalidEncounterTypes);
        allObs = flatten(encounterTransactions, 'observations').filter(validObservation);
        allObs.forEach(removeInvalidGroupMembers);
        return allObs;

    };
};
Bahmni.Clinical.PatientFileObservationsMapper = function () {
    var DateUtil = Bahmni.Common.Util.DateUtil;

    this.map = function (encounters) {
        var conceptMapper = new Bahmni.Common.Domain.ConceptMapper();
        var observationMapper = new Bahmni.Common.Domain.ObservationMapper();
        var providerMapper = new Bahmni.Common.Domain.ProviderMapper();
        var patientFileRecords = [];
        encounters.forEach(function (encounter) {
            var visitUuid = encounter.visit && encounter.visit.uuid;
            encounter.obs.forEach(function (parentObservation) {
                parentObservation.groupMembers.forEach(function (member) {
                    patientFileRecords.push({
                        id: member.id,
                        concept: conceptMapper.map(parentObservation.concept),
                        imageObservation: observationMapper.map(member),
                        visitUuid: visitUuid,
                        provider: providerMapper.map(encounter.provider)
                    });
                })
            })
        });
        patientFileRecords.sort(function (record1, record2) {
            return record1.imageObservation.observationDateTime !==  record2.imageObservation.observationDateTime ?
                DateUtil.parse(record1.imageObservation.observationDateTime) -  DateUtil.parse(record2.imageObservation.observationDateTime):
                record1.id - record2.id;
        });
        return patientFileRecords;
    };
};
'use strict';

Bahmni.Clinical.OrdersMapper = function(nameToSort){
    this.nameToSort = nameToSort;
};

Bahmni.Clinical.OrdersMapper.prototype.group = function(orders, groupingParameter) {
    var getGroupingFunction = function (groupingParameter) {
        if (groupingParameter == 'date') {
            return function (order) {
                if(order.startDate){
                    return Bahmni.Common.Util.DateUtil.getDate(order.startDate);
                }else{
                    return Bahmni.Common.Util.DateUtil.getDate(order.effectiveStartDate);
                }
            };
        }
        return function (order) {
            return order[groupingParameter];
        }
    };

    groupingParameter = groupingParameter || 'date';
    var groupingFunction = getGroupingFunction(groupingParameter);
    var groupedOrders = new Bahmni.Clinical.ResultGrouper().group(orders, groupingFunction, 'orders', groupingParameter);
    if(groupingParameter === 'date'){
        return groupedOrders.map(function(order) {
            return {
                date: Bahmni.Common.Util.DateUtil.parse(order.date),
                orders: _.sortBy(order.orders, 'orderNumber')
            };
        }).sort(function(first, second) { return first.date < second.date ? 1: -1; });
    }
    return groupedOrders.map(function (order) {
        var returnObj = {};
        returnObj[groupingParameter] = order[groupingParameter];
        returnObj['orders'] = order.orders;
        return returnObj;
    });
};

Bahmni.Clinical.OrdersMapper.prototype.create = function (encounterTransactions, ordersName, filterFunction, groupingParameter, allTestAndPanels) {
    filterFunction = filterFunction || function() {return true; };
    var filteredOrders = this.map(encounterTransactions, ordersName, allTestAndPanels).filter(filterFunction);
    return this.group(filteredOrders, groupingParameter);
};

Bahmni.Clinical.OrdersMapper.prototype.map = function (encounterTransactions, ordersName, allTestAndPanels) {
    var allTestsPanelsConcept = new Bahmni.Clinical.ConceptWeightBasedSorter(allTestAndPanels);
    var orderObservationsMapper = new Bahmni.Clinical.OrderObservationsMapper();
    var setOrderProvider = function (encounter) {
        encounter[ordersName].forEach(function(order) {
            order.provider = encounter.providers[0];
            order.accessionUuid = encounter.encounterUuid;
            order.encounterUuid = encounter.encounterUuid;
            order.visitUuid = encounter.visitUuid;
        });
    };
    encounterTransactions.forEach(setOrderProvider);
    var flattenedOrders = _.flatten(encounterTransactions, ordersName);

    var ordersWithoutVoidedOrders = flattenedOrders.filter(function(order){
        return !order.voided;
    });

    var allObservations = _.flatten(encounterTransactions, 'observations');
    orderObservationsMapper.map(allObservations, ordersWithoutVoidedOrders);
    var sortedOrders = allTestsPanelsConcept.sort(ordersWithoutVoidedOrders, this.nameToSort);
    sortedOrders.forEach(function(order) {
        order.observations.forEach(function(obs){
            obs.groupMembers = allTestsPanelsConcept.sort(obs.groupMembers);
        });
    });
    return  sortedOrders;
};
Bahmni.Clinical.OrderObservationsMapper = function () {
};

Bahmni.Clinical.OrderObservationsMapper.prototype.map = function (observations, orders) {
    var makeCommentsAsAdditionalObs = function (observation) {
            angular.forEach(observation.groupMembers, makeCommentsAsAdditionalObs);
            if (observation.groupMembers) {
                var additionalObs = [];
                var testObservation = [];
                angular.forEach(observation.groupMembers, function (obs) {
                    if (obs.concept.name === Bahmni.Clinical.Constants.commentConceptName) {
                        additionalObs.push(obs);
                    }
                    else {
                        testObservation.push(obs);
                    }
                });
                observation.groupMembers = testObservation;
                if (observation.groupMembers[0] && additionalObs.length > 0) {
                    observation.groupMembers[0].additionalObs = additionalObs;
                }
            }
        },
        getObservationForOrderIfExist = function (observations, testOrder, obs) {
            angular.forEach(observations, function (observation) {
                if (testOrder.uuid === observation.orderUuid) {
                    makeCommentsAsAdditionalObs(observation);
                    obs.push(observation);
                } else if (observation.orderUuid == null && observation.groupMembers.length > 0) {
                    getObservationForOrderIfExist(observation.groupMembers, testOrder, obs);
                }
            });
        },
        mapTestOrderWithObs = function (observations, testOrder) {
            var orderObservations = [];
            getObservationForOrderIfExist(observations, testOrder, orderObservations);
            testOrder.observations = orderObservations;
        };

    orders.forEach(function (order) { mapTestOrderWithObs(observations, order); });
};

'use strict';

angular.module('bahmni.clinical')
    .factory('TreatmentService', ['$http', '$q', function ($http, $q) {

        var createDrugOrder = function (drugOrder) {
            return Bahmni.Clinical.DrugOrder.create(drugOrder);
        };

        var createDrugOrderViewModel = function (drugOrder) {
            return Bahmni.Clinical.DrugOrderViewModel.createFromContract(drugOrder, {}, undefined);
        };

        var getActiveDrugOrdersFromServer = function (patientUuid) {
            return $http.get(Bahmni.Common.Constants.bahmniDrugOrderUrl + "/active", {
                params: { patientUuid: patientUuid  },
                withCredentials: true
            });
        };

        var getPrescribedAndActiveDrugOrders = function (patientUuid, numberOfVisits, getOtherActive, visitUuids) {
            return $http.get(Bahmni.Common.Constants.bahmniDrugOrderUrl + "/prescribedAndActive", {
                params: { patientUuid: patientUuid, numberOfVisits: numberOfVisits, getOtherActive: getOtherActive, visitUuids: visitUuids},
                withCredentials: true
            }).success(function(response){
                for(var key in response){
                    response[key] = response[key].map(createDrugOrder);
                    response[key] = response[key].map(createDrugOrderViewModel);
                }
            });
        };

        var getConfig = function () {
            return $http.get(Bahmni.Common.Constants.bahmniDrugOrderUrl + "/config", {
                withCredentials: true
            });
        };

        var getActiveDrugOrders = function (patientUuid) {
            var deferred = $q.defer();
            getActiveDrugOrdersFromServer(patientUuid).success(function (response) {
                var activeDrugOrders = response.map(createDrugOrder);
                deferred.resolve(activeDrugOrders);
            });
            return deferred.promise;
        };

        var getPrescribedDrugOrders = function(patientUuid, includeActiveVisit, numberOfVisits) {
            var deferred = $q.defer();
            $http.get(Bahmni.Common.Constants.bahmniDrugOrderUrl, {
                method: "GET",
                params: { patientUuid: patientUuid, numberOfVisits: numberOfVisits, includeActiveVisit: includeActiveVisit},
                withCredentials: true
            }).success(function (response) {
                var activeDrugOrders = response.map(createDrugOrder);
                deferred.resolve(activeDrugOrders);
            });
            return deferred.promise;
        };
        return {
            getActiveDrugOrders: getActiveDrugOrders,
            getConfig: getConfig,
            getPrescribedDrugOrders: getPrescribedDrugOrders,
            getPrescribedAndActiveDrugOrders: getPrescribedAndActiveDrugOrders
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
    .service('visitTabConfig', ['$q', 'appService', function ($q, appService) {
        var self = this;

        var mandatoryConfigPromise = function() {
            return appService.loadMandatoryConfig(Bahmni.Clinical.Constants.mandatoryVisitConfigUrl);
        };

        var configPromise = function() {
            return appService.loadConfig('visit');
        };

        this.load = function () {
            return $q.all([mandatoryConfigPromise(), configPromise()]).then(function(results) {
                var configs = _.flatten(_.map(results, function(result) {return result.data}));
                angular.extend(self, new Bahmni.Clinical.VisitTabConfig(configs));
            });
        }
    }]);
'use strict';

angular.module('bahmni.clinical')
    .factory('visitActionsService', ['printer', 'clinicalAppConfigService', function(printer, clinicalAppConfigService) {
        var printConfig = clinicalAppConfigService.getPrintConfig();
        return {
            printPrescription: function (patient, visit, visitDate) {
                printer.print('common/views/prescriptionPrint.html', {visit: visit, patient: patient, visitDate: visitDate});
            }
        };
    }]);

'use strict';

angular.module('bahmni.clinical')
    .service('clinicalAppConfigService', ['appService', 'urlHelper', function (appService, urlHelper) {

        this.getTreatmentActionLink = function () {
            return appService.getAppDescriptor().getExtensions("org.bahmni.clinical.treatment.links", "link") || [];
        };

        this.getDrugOrderConfig = function () {
            return appService.getAppDescriptor().getConfigValue("drugOrder") || {};
        };

        this.getAllConceptsConfig = function () {
            return appService.getAppDescriptor().getConfigValue("conceptSetUI") || {};
        };

        this.getConceptConfig = function (name) {
            var config = appService.getAppDescriptor().getConfigValue("conceptSetUI") || {};
            return config[name];
        };

        this.getObsIgnoreList = function () {
            var baseObsIgnoreList = [Bahmni.Common.Constants.impressionConcept]
            var configuredObsIgnoreList = appService.getAppDescriptor().getConfigValue("obsIgnoreList") || [];
            return baseObsIgnoreList.concat(configuredObsIgnoreList);
        };

        this.getAllConsultationBoards = function () {
            return appService.getAppDescriptor().getExtensions("org.bahmni.clinical.consultation.board", "link");
        };

        this.getAllConceptSetExtensions = function (conceptSetGroupName) {
            return appService.getAppDescriptor().getExtensions("org.bahmni.clinical.conceptSetGroup." + conceptSetGroupName, "config")
        };

        this.getOtherInvestigationsMap = function () {
            return appService.getAppDescriptor().getConfig("otherInvestigationsMap");
        };

        this.getVisitPageConfig = function (configSection) {
            var visitSection = appService.getAppDescriptor().getConfigValue("visitPage") || {};
            return configSection? visitSection[configSection] : visitSection;
        };

        this.getVisitConfig = function(){
            return appService.getAppDescriptor().getConfigForPage("visit");
        };

        this.getPrintConfig = function () {
            return appService.getAppDescriptor().getConfigValue("printConfig") || {};
        };

        this.getConsultationBoardLink = function () {
            var allBoards = this.getAllConsultationBoards();
            var defaultBoard = _.find(allBoards, 'default');
            if (defaultBoard) {
                return urlHelper.getPatientUrl() + "/" + defaultBoard.url
            }
            return urlHelper.getConsultationUrl();
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
    .directive('visitPaginator', ['$state', function ($state) {
        var link = function ($scope) {
            var visits = _.clone($scope.visits).reverse();
            
            var visitIndex = _.findIndex(visits, function(visitHistoryEntry) {
                return $scope.currentVisit != null && visitHistoryEntry.uuid === $scope.currentVisit.uuid;
            });

            $scope.visitHistoryEntry = visits[visitIndex];

            $scope.shouldBeShown = function () {
                return $state.is('patient.visit');
            };

            $scope.hasNext = function () {
                return visitIndex != -1 && visitIndex < (visits.length - 1);
            };

            $scope.hasPrevious = function () {
                return visitIndex > 0;
            };

            $scope.next = function () {
                if ($scope.hasNext() && $scope.nextFn) {
                    $scope.nextFn()(visits[visitIndex+1].uuid);
                }
            };

            $scope.previous = function () {
                if ($scope.hasPrevious() && $scope.previousFn) {
                    $scope.previousFn()(visits[visitIndex-1].uuid);
                }
            };
        };

        return {
            restrict: 'EA',
            scope: {
                currentVisit: "=",
                visits: "=",
                nextFn: "&",
                previousFn: "&",
                visitSummary: "="
            },
            link: link,
            templateUrl: 'common/views/visitPagination.html'
        }
    }])
;
'use strict';

angular.module('bahmni.clinical')
    .controller('VisitHeaderController', ['$rootScope', '$scope', '$state', 'clinicalAppConfigService', 'patientContext', 'visitHistory', 'visitTabConfig', 'contextChangeHandler', '$location',
        function ($rootScope, $scope, $state, clinicalAppConfigService, patientContext, visitHistory, visitTabConfig, contextChangeHandler, $location) {
            $scope.patient = patientContext.patient;
            $scope.visitHistory = visitHistory;
            $scope.consultationBoardLink = clinicalAppConfigService.getConsultationBoardLink();
            $scope.showControlPanel = false;
            $scope.visitTabConfig = visitTabConfig;

            $scope.switchTab = function (tab) {
                $scope.visitTabConfig.switchTab(tab);
                $rootScope.$broadcast('event:clearVisitBoard', tab);
            };

            $scope.gotoPatientDashboard = function () {
                if(contextChangeHandler.execute()["allow"]) {
                    $location.path("/patient/" + patientContext.patient.uuid + "/dashboard");
                }
            };

            $scope.closeTab = function (tab) {
                $scope.visitTabConfig.closeTab(tab);
                $rootScope.$broadcast("event:clearVisitBoard", tab);
            };

            $scope.print = function () {
                $rootScope.$broadcast("event:printVisitTab", $scope.visitTabConfig.currentTab);
            };

            $scope.showPrint = function(){
                return visitTabConfig.showPrint();
            }
        }]);

'use strict';

angular.module('bahmni.clinical')
    .controller('VisitController', ['$scope', '$state', 'encounterService', 'clinicalAppConfigService', 'configurations', 'visitSummary','$timeout', 'printer','visitTabConfig', 'visitHistory', '$stateParams',
        function ($scope, $state, encounterService, clinicalAppConfigService, configurations, visitSummary, $timeout, printer, visitTabConfig, visitHistory, $stateParams) {
            var encounterTypeUuid = configurations.encounterConfig().getPatientDocumentEncounterTypeUuid();
            $scope.documentsPromise = encounterService.getEncountersForEncounterType($scope.patient.uuid, encounterTypeUuid).then(function (response) {
                return new Bahmni.Clinical.PatientFileObservationsMapper().map(response.data.results);
            });

            $scope.currentVisitUrl = $state.current.views.content.templateUrl;
            $scope.visitHistory = visitHistory; // required as this visit needs to be overridden when viewing past visits
            $scope.visitSummary = visitSummary;
            $scope.visitTabConfig = visitTabConfig;
            $scope.showTrends = true;
            $scope.patientUuid = $stateParams.patientUuid;
            $scope.visitUuid = $stateParams.visitUuid;

            $scope.isNumeric = function (value) {
                return $.isNumeric(value);
            };

            $scope.toggle = function (item) {
                item.show = !item.show
            };
            $scope.isEmpty = function (notes) {
                if (notes) {
                    return notes.trim().length < 2;
                }
                return true;
            };

            $scope.testResultClass = function (line) {
                var style = {};
                if ($scope.pendingResults(line)) {
                    style["pending-result"] = true;
                }
                if (line.isSummary) {
                    style["header"] = true;
                }
                return style;
            };

            $scope.pendingResults = function (line) {
                return line.isSummary && !line.hasResults && line.name !== "";
            };

            $scope.displayDate = function (date) {
                return moment(date).format("DD-MMM-YY");
            };

            $scope.$on("event:printVisitTab", function (event) {
                printer.printFromScope("common/views/visitTabPrint.html",$scope);
            });

            $scope.$on("event:clearVisitBoard", function (event, tab) {
                $scope.clearBoard = true;
                $timeout(function(){
                    $scope.clearBoard = false;
                });
            });

            $scope.loadVisit = function (visitUuid) {
                $state.go('patient.visit', {visitUuid: visitUuid});
            };
            
            var init = function(){
                $scope.visitTabConfig.setVisitUuidsAndPatientUuidToTheSections([$scope.visitUuid], $scope.patientUuid);
                $scope.visitTabConfig.switchTab($scope.visitTabConfig.getDefaultTab());
            };
            init();
        }]);

'use strict';

angular.module('bahmni.clinical')
    .controller('PatientListHeaderController', ['$scope',
        function ($scope) {
            var DateUtil = Bahmni.Common.Util.DateUtil;
            $scope.today = DateUtil.getDateWithoutTime(DateUtil.addDays(DateUtil.today(), 1));
            $scope.retrospectivePrivilege = Bahmni.Common.Constants.retrospectivePrivilege;
        }]);


'use strict';

Bahmni.Clinical.ObservationTemplate = function (concept, visitStartDate, observations) {
    var obsTemplate = {
        name: concept.name,
        conceptClass: concept.conceptClass,
        label: concept.shortName || concept.name,
        visitStartDate: visitStartDate,
        encounters: []
    };

    var groupedObservations = _.groupBy(observations, function (observation) {
        return observation.encounterDateTime;
    });

    var encounterDates = _.sortBy(Object.keys(groupedObservations), function (a) {
        return -a;
    });

    angular.forEach(encounterDates, function (encounterDate) {
        var newEncounter = {
            encounterDateTime: encounterDate,
            observations: groupedObservations[encounterDate]
        };
        obsTemplate.encounters.push(newEncounter);
    });
    return obsTemplate;
};
'use strict';

Bahmni.Clinical.DiseaseTemplate = function (concept, obsTemplates) {

    var diseaseTemplate = {
        name: concept.name,
        label: concept.shortName || concept.name,
        obsTemplates: obsTemplates || []
    };

    diseaseTemplate.notEmpty = function () {
        return diseaseTemplate.obsTemplates && diseaseTemplate.obsTemplates.length > 0;
    };

    return diseaseTemplate;
};

'use strict';

Bahmni.Clinical.ClinicalDashboardConfig = function (config) {

    var self = this;
    this.dashboards = config;
    this.openDashboards = [];

    this._getDefaultDashboard = function () {
        return _.find(this.dashboards, function (dashboard) {
            return dashboard.default;
        });
    };

    this.findOpenDashboard = function (dashboard) {
        return !_.findWhere(this.openDashboards, {'dashboardName': dashboard.dashboardName});
    };

    this.getUnOpenedDashboards = function () {
        return _.filter(this.dashboards, function (dashboard) {
            return self.findOpenDashboard(dashboard);
        })
    };

    this.getCurrentDashboard = function () {
        return this.currentDashboard;
    };

    this.switchDashboard = function (dashboard) {
        this.currentDashboard = dashboard;

        if (this.findOpenDashboard(dashboard)) {
            this.openDashboards.push(dashboard);
        }
    };

    var addDisplayByDefaultDashboards = function(){
        self.openDashboards = self.openDashboards.concat( _.filter(self.dashboards, function (tab) {
            return tab.displayByDefault
        }));
    };

    this.init = function () {
        self.switchDashboard(self._getDefaultDashboard());
        addDisplayByDefaultDashboards();
    }();

    this.getDiseaseTemplateSections = function () {
        return _.rest(this.currentDashboard.sections, function (section) {
            return section.name !== "diseaseTemplate";
        });
    };

    this.closeDashboard = function (dashboard) {
        _.remove(this.openDashboards, {'dashboardName': dashboard.dashboardName});
        this.switchDashboard(this._getDefaultDashboard());
    };

    this.isCurrentDashboard = function (dashboard) {
        return this.currentDashboard && this.currentDashboard.dashboardName === dashboard.dashboardName;
    };

    this.showTabs = function () {
        return this.dashboards.length > 1;
    };

    this.showPrint = function () {
        return !_.isEmpty(this.currentDashboard.printing);
    };

    this.getPrintConfigForCurrentDashboard = function () {
        return this.getCurrentDashboard().printing;
    }
};
'use strict';

Bahmni.Clinical.RadiologyRecordsMapper = function () {
    var DateUtil = Bahmni.Common.Util.DateUtil;

    var sortByDateTimeOrId = function (record1, record2) {
        return record2.imageObservation.observationDateTime !==  record1.imageObservation.observationDateTime ?
            DateUtil.parse(record2.imageObservation.observationDateTime) -  DateUtil.parse(record1.imageObservation.observationDateTime):
            record2.id - record1.id;
    };

    this.map = function (records) {
        records = records.sort(sortByDateTimeOrId);
        return Bahmni.Common.Util.ArrayUtil.groupByPreservingOrder(records, function(record){ return record.concept.name; },'conceptName', 'records');
    };
};
'use strict';

Bahmni.Clinical.DiseaseTemplateMapper = function (diseaseTemplateResponse, allConceptsConfig) {
    var allObsTemplates = [];

    var isGrid = function(obsTemplate) {
        return allConceptsConfig[obsTemplate.concept.name] && allConceptsConfig[obsTemplate.concept.name].grid;
    };

    if (diseaseTemplateResponse.observationTemplates && diseaseTemplateResponse.observationTemplates.length > 0) {
        diseaseTemplateResponse.observationTemplates.forEach(function (obsTemplate) {
            var observations = [];
            var observationTemplate;
            if(isGrid(obsTemplate)) {
                obsTemplate.value = new Bahmni.Common.Obs.ObservationMapper().getGridObservationDisplayValue(obsTemplate);
                observationTemplate = new Bahmni.Clinical.ObservationTemplate(obsTemplate.concept, obsTemplate.visitStartDate, observations);
                observationTemplate.value = obsTemplate.value;
            }
            else {
                if (obsTemplate.bahmniObservations.length > 0 ) {
                    observations = new Bahmni.Common.Obs.ObservationMapper().map(obsTemplate.bahmniObservations, allConceptsConfig);
                }
                observationTemplate = new Bahmni.Clinical.ObservationTemplate(obsTemplate.concept, obsTemplate.visitStartDate, observations);
            }
            allObsTemplates.push(observationTemplate);
        });
    }
    return Bahmni.Clinical.DiseaseTemplate(diseaseTemplateResponse.concept, allObsTemplates);
};

'use strict';

angular.module('bahmni.clinical')
    .service('diseaseTemplateService', ['$http', '$q', 'clinicalAppConfigService', function ($http, $q, clinicalAppConfigService) {

        this.getLatestDiseaseTemplates = function (patientUuid, diseaseTemplates) {
            var url = Bahmni.Common.Constants.diseaseTemplateUrl;
            var deferred = $q.defer();
            $http.post(url, {"patientUuid": patientUuid, "diseaseTemplateConfigList": diseaseTemplates},  {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            }).then(function (response) {
                    var diseaseTemplates = mapDiseaseTemplates(response.data, clinicalAppConfigService.getAllConceptsConfig());
                    deferred.resolve(diseaseTemplates);
                });
            return deferred.promise;
        };

        this.getAllDiseaseTemplateObs = function (patientUuid, diseaseName) {
            var url = Bahmni.Common.Constants.AllDiseaseTemplateUrl;

            var deferred = $q.defer();
            $http.get(url, {
                params: {patientUuid: patientUuid, diseaseName: diseaseName}
            }).then(function (diseaseTemplateResponse) {
                    var diseaseTemplates = mapDiseaseTemplates([diseaseTemplateResponse.data], clinicalAppConfigService.getAllConceptsConfig());
                    deferred.resolve(diseaseTemplates[0]);
                });
            return deferred.promise;
        };

        var mapDiseaseTemplates = function (diseaseTemplates, allConceptsConfig) {
            var mappedDiseaseTemplates = [];
            diseaseTemplates.forEach(function (diseaseTemplate) {
                mappedDiseaseTemplates.push(new Bahmni.Clinical.DiseaseTemplateMapper(diseaseTemplate, allConceptsConfig))
            });
            return mappedDiseaseTemplates;
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
    .service('clinicalDashboardConfig', ['appService', function (appService) {
        var self = this;

        this.load = function() {
            return appService.loadConfig('dashboard').then(function (response) {
                angular.extend(self, new Bahmni.Clinical.ClinicalDashboardConfig(response.data));
            });
        }

    }]);
'use strict';

angular.module('bahmni.clinical')
    .directive('diseaseTemplate', function () {

        var controller = function ($scope) {

            $scope.dateTimeDisplayConfig = function (obsTemplate) {
                var showDate = false;
                var showTime = false;
                if (obsTemplate.conceptClass === Bahmni.Clinical.Constants.caseIntakeConceptClass) {
                    if ($scope.showDateTimeForIntake) {
                        showDate = true;
                        showTime = true;
                    }
                } else {
                    if ($scope.showTimeForProgress)
                        showTime = true;
                }
                return {
                    showDate: showDate,
                    showTime: showTime
                }
            };

            $scope.isIntakeTemplate = function (obsTemplate) {
                return obsTemplate.conceptClass === Bahmni.Clinical.Constants.caseIntakeConceptClass;
            }
        };

        return {
            restrict: 'E',
            controller: controller,
            scope: {
                diseaseTemplate: "=template",
                config: "=",
                patient: "=",
                showDateTimeForIntake: "=",
                showTimeForProgress: "="
            },
            templateUrl: "dashboard/views/diseaseTemplate.html"
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .directive('recentPatients', function () {

        var controller = function ($rootScope, $scope, $state) {
            var recentlyViewedPatients = $rootScope.currentUser.recentlyViewedPatients;
            var patientIndex = _.findIndex(recentlyViewedPatients, function(patientHistoryEntry) {
                return patientHistoryEntry.uuid === $scope.patient.uuid;
            });

            $scope.hasNext = function () {
                return patientIndex != 0;
            };

            $scope.hasPrevious = function () {
                return patientIndex >= 0 && recentlyViewedPatients.length-1 != patientIndex;
            };

            $scope.next = function () {
                if ($scope.hasNext()) {
                    $scope.goToDashboard(recentlyViewedPatients[patientIndex-1].uuid);
                }
            };

            $scope.previous = function () {
                if ($scope.hasPrevious()) {
                    $scope.goToDashboard(recentlyViewedPatients[patientIndex+1].uuid);
                }
            };

            $scope.goToDashboard = function(patientUuid){
                $state.go('patient.dashboard', {patientUuid: patientUuid});
            };
        };

        return {
            restrict: 'E',
            controller: controller,
            replacet: true,
            templateUrl: "dashboard/views/recentPatients.html"
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .controller('DashboardHeaderController', ['$window', '$scope', 'clinicalAppConfigService', 'patientContext', 'visitHistory', 'clinicalDashboardConfig',
        function ($window, $scope, clinicalAppConfigService, patientContext, visitHistory, clinicalDashboardConfig) {

            $scope.patient = patientContext.patient;
            $scope.visitHistory = visitHistory;

            $scope.consultationBoardLink = clinicalAppConfigService.getConsultationBoardLink();
            $scope.showControlPanel = false;
            $scope.clinicalDashboardConfig = clinicalDashboardConfig;

            $scope.openConsultationInNewTab = function () {
                $window.open('#' + $scope.consultationBoardLink, '_blank');
            };

            $scope.showDashboard = function (dashboard) {
                if (!clinicalDashboardConfig.isCurrentDashboard(dashboard)) {
                    $scope.$parent.$parent.$broadcast("event:switchDashboard", dashboard);
                }
            };

            $scope.printDashboard = function () {
                $scope.$parent.$parent.$broadcast("event:printDashboard", clinicalDashboardConfig.getCurrentDashboard().printing);
            };

            $scope.closeDashboard = function (dashboard) {
                clinicalDashboardConfig.closeDashboard(dashboard);
                $scope.$parent.$parent.$broadcast("event:switchDashboard", clinicalDashboardConfig.getCurrentDashboard());
            };

        }]);

'use strict';
angular.module('bahmni.clinical')
    .controller('DiseaseTemplateController', ['$scope',
        function ($scope) {
            var patient = $scope.patient;
            $scope.showDateTimeForIntake = false;
            $scope.showTimeForProgress = true;
            $scope.dialogData = {
                "diseaseTemplateName": $scope.section.templateName,
                "patient": patient,
                "section": $scope.section
            };
            $scope.getDiseaseTemplateSection = function (diseaseName) {
                return _.find($scope.diseaseTemplates, function (diseaseTemplate) {
                    return diseaseTemplate.name === diseaseName;
                });
            };
        }]);
'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardTreatmentController', ['$scope', 'ngDialog',
        function ($scope, ngDialog) {

            var treatmentConfigParams = $scope.dashboard.getSectionByName("treatment") || {};
            var patientUuidparams = {"patientUuid": $scope.patient.uuid};

            $scope.dashboardParams = {};
            $scope.allTreatmentDetails = {};

            _.extend($scope.dashboardParams, treatmentConfigParams.dashboardParams || {}, patientUuidparams);
            _.extend($scope.allTreatmentDetails, treatmentConfigParams.allTreatmentDetails || {}, patientUuidparams);

            $scope.openSummaryDialog = function () {
                ngDialog.open({
                    template: 'dashboard/views/dashboardSections/treatmentSummary.html',
                    params: $scope.allTreatmentDetails,
                    className: "ngdialog-theme-flat ngdialog-theme-custom",
                    scope: $scope
                });
            };
            $scope.$on('ngDialog.closing', function (e, $dialog) {
                $("body").removeClass('ngdialog-open');
            });

        }]);
'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardLabOrdersController', ['$scope', '$stateParams',
        function ($scope, $stateParams) {
            $scope.dashboardParams = $scope.dashboard.getSectionByName("labOrders").dashboardParams || {};
            $scope.dashboardParams.patientUuid = $stateParams.patientUuid;

            $scope.dialogData = {
                "patient": $scope.patient,
                "allLabDetails": $scope.dashboard.getSectionByName("labOrders").allLabDetails || {}
            };
        }]);
'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardLabSummaryController', ['$scope', '$stateParams',
        function ($scope, $stateParams) {

            $scope.allLabDetails = $scope.ngDialogData.allLabDetails;
            $scope.allLabDetails.patientUuid = $stateParams.patientUuid;

            $scope.patient = $scope.ngDialogData.patient;

        }]);
angular.module('bahmni.clinical')
    .controller('PatientDashboardRadiologyController', ['$scope', '$stateParams', 'encounterService', 'spinner', 'configurations', 
        function ($scope, $stateParams, encounterService, spinner, configurations) {
        var encounterTypeUuid = configurations.encounterConfig().getRadiologyEncounterTypeUuid();

        spinner.forPromise(encounterService.getEncountersForEncounterType($stateParams.patientUuid, encounterTypeUuid).then(function (response) {
            $scope.radiologyRecords = new Bahmni.Clinical.PatientFileObservationsMapper().map(response.data.results);
            $scope.radiologyRecordGroups = new Bahmni.Clinical.RadiologyRecordsMapper().map($scope.radiologyRecords);
        }));

        $scope.isRecordForCurrentVisit = function(records){
            return _.some(records,function(record){
                return $scope.visitHistory.activeVisit && $scope.visitHistory.activeVisit.uuid === record.visitUuid;
            });
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardAllDiseaseTemplateController', ['$scope', 'diseaseTemplateService', 'spinner', 
        function ($scope, diseaseTemplateService, spinner) {
        var init = function () {
            $scope.diseaseName = $scope.ngDialogData.diseaseTemplateName;
            $scope.patient= $scope.ngDialogData.patient;
            $scope.section= $scope.ngDialogData.section;
            $scope.showDateTimeForIntake = true;
            $scope.showTimeForProgress = true;
            
            return diseaseTemplateService.getAllDiseaseTemplateObs($scope.patient.uuid, $scope.diseaseName).then(function (diseaseTemplate) {
                $scope.diseaseTemplate = diseaseTemplate;
            });
        };

        spinner.forPromise(init());
    }]);

'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardController', ['$scope', 'clinicalAppConfigService', 'diseaseTemplateService', 'clinicalDashboardConfig', 'printer', '$state', 'spinner',
        function ($scope, clinicalAppConfigService, diseaseTemplateService, clinicalDashboardConfig, printer, $state, spinner) {

            $scope.activeVisit = $scope.visitHistory.activeVisit;
            $scope.activeVisitData = {};
            $scope.obsIgnoreList = clinicalAppConfigService.getObsIgnoreList();
            $scope.clinicalDashboardConfig = clinicalDashboardConfig;

            $scope.$on("event:switchDashboard", function (event, dashboard) {
                $scope.init(dashboard);
            });

            $scope.$on("event:printDashboard", function (event) {
                printer.printFromScope("dashboard/views/dashboardPrint.html", $scope);
            });

            $scope.init = function (dashboard) {
                clinicalDashboardConfig.switchDashboard(dashboard);
                return diseaseTemplateService.getLatestDiseaseTemplates($scope.patient.uuid, clinicalDashboardConfig.getDiseaseTemplateSections())
                    .then(function (diseaseTemplates) {
                        $scope.diseaseTemplates = diseaseTemplates;
                        $scope.currentDashboardTemplateUrl = $state.current.views.content.templateUrl;
                    });
            };

            spinner.forPromise($scope.init(clinicalDashboardConfig.getCurrentDashboard()));
        }]);

'use strict';
angular.module('bahmni.clinical')
    .controller('PatientDashboardVisitsController', ['$scope', '$stateParams',
        function ($scope, $stateParams) {

            $scope.noOfVisits = $scope.visitHistory.visits.length;
            $scope.dialogData = {
                "noOfVisits": $scope.noOfVisits,
                "patient": $scope.patient,
                "sectionConfig": $scope.dashboard.getSectionByName("visits")
            };

            $scope.dashboardParams = $scope.dashboard.getSectionByName("visits").dashboardParams || {};
            $scope.patientUuid = $stateParams.patientUuid;

        }]);
'use strict';

angular.module('bahmni.clinical')
    .controller('PatientDashboardAllVisitsController', ['$scope', '$state', '$stateParams',
        function ($scope, $state, $stateParams) {
            $scope.patient = $scope.ngDialogData.patient;
            $scope.noOfVisits = $scope.ngDialogData.noOfVisits;
            var sectionConfig = $scope.ngDialogData.sectionConfig;

            var defaultParams = {
                maximumNoOfVisits: $scope.noOfVisits ? $scope.noOfVisits : 0
            };

            $scope.params = angular.extend(defaultParams, $scope.params);
            $scope.params = angular.extend(sectionConfig, $scope.params);
            $scope.patientUuid = $stateParams.patientUuid;

        }]);
'use strict';

Bahmni.Clinical.Error = function () {

    var messages = Bahmni.Common.Constants.serverErrorMessages;

    var findClientMessage = function(message) {
        var result = _.find(messages, function (listItem) {
            return listItem.serverMessage === message
        });
        return result && result.clientMessage || message;
    };

    var translate = function (error) {
        if (error && error.data && error.data.error && error.data.error.message) {
            return findClientMessage(error.data.error.message);
        }
        return null;
    };

    return {
        translate: translate
    }
}();

Bahmni.Clinical.LabResult = function(name, value, alert, lowNormal, highNormal, unit, notes, members) {
    this.name = name;
    this.value = value;
    this.alert = alert;
    this.unit = unit;
    this.highNormal = highNormal;
    this.lowNormal = lowNormal;
    this.notes = notes || [];
    this.members = members;
}

Bahmni.Clinical.LabResult.prototype = {
    isPanel: function() {
        return this.members.length > 0;
    },

    hasNotes: function() {
        return this.notes.length > 0;
    },

    isAbnormal: function() {
        return this.alert == "A" || this.alert == "B";
    },

    range: function() {
        return (this.lowNormal && this.highNormal) ? "" + this.lowNormal + " - " + this.highNormal : null
    }
}
Bahmni.Clinical.DrugSearchResult = function(drug, searchString) {
    this.getValue = function() {
        return drug.dosageForm ? drug.name + " (" + drug.dosageForm.display + ")" : drug.name;
    };

    this.getLabel = function(){
        var matchingName = drug.name.search(new RegExp(searchString, "i")) === -1 ? _.find(_.map(drug.concept.names, 'name'), function(name){ return name.search(new RegExp(searchString, "i")) !== -1 }) : null;
        return matchingName ? matchingName + " => " + this.getValue() : this.getValue();
    }
};

Bahmni.Clinical.VisitHistoryEntry = (function(){
	var DateUtil = Bahmni.Common.Util.DateUtil;
	
	var VisitHistoryEntry = function(visitData) {
	    angular.extend(this, visitData);
	};

	VisitHistoryEntry.prototype = {
	    isActive: function() {
	    	return this.stopDatetime === null;
	    },

	    isOneDayVisit: function() {
	    	if(this.isActive()) return true;
	    	var startDateString = moment(this.startDatetime).format("YYYYMMDD");
	    	var stopDateString = moment(this.stopDatetime).format("YYYYMMDD");
	        return startDateString === stopDateString;
	    },

	    hasEncounters: function() {
	    	return this.encounters && this.encounters.length;
	    }
	};

	return VisitHistoryEntry;	
})();


Bahmni.Clinical.Category = function(name, tests) {
    this.name = name;
    this.tests = tests;
    this.filteredTests = tests;
    
    this.filter = function(filterFunction) {
        this.filteredTests = tests.filter(filterFunction);
    };

    this.hasTests = function() {
        return this.filteredTests.length > 0;
    }
};

Bahmni.Clinical.Selectable = function(data, selectableChildren, onSelectionChange) {
    angular.extend(this, data);
    var selectionSources = [];
    var children = selectableChildren || [];
    onSelectionChange = onSelectionChange || angular.noop;

    this.isSelected = function() {
        return selectionSources.length > 0;
    }

    this.isSelectedFromSelf = function() {
        return selectionSources.indexOf(this) !== -1;
    }

    this.isSelectedFromOtherSource = function() {
        return this.isSelected() && !this.isSelectedFromSelf();
    }

    this.addChild = function(selectable) {
        children.push(selectable);
    }

    this.getChildrenCount = function() {
        return children.length;                
    } 
    
    this.toggle = function(selectionSource) {
        this.isSelected() ? this.unselect(selectionSource) : this.select(selectionSource);
    }

    this.select = function(selectionSource) {
        selectionSource = selectionSource || this;
        if(selectionSources.indexOf(selectionSource) === -1) {
            selectionSources.push(selectionSource);  
            angular.forEach(children, function(child){ 
                child.unselect(child); 
                child.select(selectionSource); 
            });
            onSelectionChange(this); 
        }
    }        

    this.unselect = function(selectionSource) {
        selectionSource = selectionSource || this;
        var index = selectionSources.indexOf(selectionSource)
        if(index !== -1) {
            selectionSources.splice(index, 1);
            angular.forEach(children, function(child){ child.unselect(selectionSource); });
            onSelectionChange(this);
        }
    }        
}
'use strict';

angular.module('bahmni.clinical')
  .service('urlHelper', ['$stateParams', function ($stateParams) {
    this.getPatientUrl = function () {
    	return '/patient/' + $stateParams.patientUuid;
    };

	this.getConsultationUrl = function() {
		return this.getPatientUrl() + '/consultation';
	};

    this.getVisitUrl = function(visitUuid) {
    	return this.getPatientUrl() + '/visit/' + visitUuid;
    }
}]);
Bahmni.Clinical.DispostionActionMapper = function() {
    var getMappingCode = function(concept){
        var mappingCode="";
        if(concept.mappings){
            concept.mappings.forEach(function(mapping){
                var mappingSource = mapping.display.split(":")[0];
                if(mappingSource === Bahmni.Common.Constants.emrapiConceptMappingSource){
                    mappingCode = $.trim(mapping.display.split(":")[1]);
                }
            });
        }
        return mappingCode;
    };


	this.map = function(dispositionActions) {
		return dispositionActions.map(function(dispositionAction){
			return {name: dispositionAction.name.name, code: getMappingCode(dispositionAction) };
		});
	}
}
Bahmni.LabResultsMapper = function () {
    this.map = function (encounterTransaction) {
        return getLabResults(getLabResultObs(encounterTransaction));
    };

    var getLabResults = function (observations) {
        return observations.map(function (obs) {
            var notes = getNotes(obs);
            //TODO:Need be revisited after the results structure in the encountertransaction contract is finalized
            var resultValue = obs.value; //getResultValue(obs);
            var members = isLeaf(obs) ? [] : getLabResults(obs.groupMembers);
            return new Bahmni.Clinical.LabResult(obs.concept.name, resultValue, obs.comments, null, null, null, notes, members);
        });
    };

    var isLeaf = function (obs) {
        //return notes.length > 0 || resultValue;
        return obs.groupMembers.length === 0 || obs.groupMembers[0].concept.name === "COMMENTS";
    }

    var getNotes = function (obs) {
        var notes = [];
        obs.groupMembers = obs.groupMembers || [];
        obs.groupMembers.forEach(function (member) {
            if (member.concept.name == "COMMENTS") {
                notes.push(member.value);
            }
        });
        return notes;
    };

    var getLabResultObs = function (encounterTransaction) {
        var labResultObs;
        encounterTransaction.observations.forEach(function (observation) {
            if (observation.concept.name == Bahmni.Clinical.Constants.labConceptSetName) {
                labResultObs = observation.groupMembers;
            }
            ;
        });
        return labResultObs || [];
    };
}

Bahmni.ConsultationMapper = function (dosageFrequencies, dosageInstructions, consultationNoteConcept, labOrderNoteConcept) {
    this.map = function (encounterTransaction) {
        var encounterUuid = encounterTransaction.encounterUuid;
        var specialObservationConceptUuids = [consultationNoteConcept.uuid, labOrderNoteConcept.uuid];
        var investigations = encounterTransaction.testOrders.filter(function(testOrder) { return !testOrder.voided });
        var labResults = new Bahmni.LabResultsMapper().map(encounterTransaction);
        var nonVoidedDrugOrders = encounterTransaction.drugOrders.filter(function (order) {
            return !order.voided && order.action != Bahmni.Clinical.Constants.orderActions.discontinue;
        });
        nonVoidedDrugOrders = _.filter(nonVoidedDrugOrders, function(drugOrder){
            return !_.some(nonVoidedDrugOrders, function(otherDrugOrder){ return otherDrugOrder.action === Bahmni.Clinical.Constants.orderActions.revise && otherDrugOrder.encounterUuid === drugOrder.encounterUuid && otherDrugOrder.previousOrderUuid === drugOrder.uuid });
        });

        var treatmentDrugs = nonVoidedDrugOrders.map(function(drugOrder){
            return Bahmni.Clinical.DrugOrderViewModel.createFromContract(drugOrder);
        });
        var consultationNote = mapSpecialObservation(encounterTransaction.observations, consultationNoteConcept);

        var labOrderNote = mapSpecialObservation(encounterTransaction.observations, labOrderNoteConcept);

        var observations = encounterTransaction.observations.filter(function(observation){
            return !observation.voided && specialObservationConceptUuids.indexOf(observation.concept.uuid) === -1;
        });
        return {
            visitUuid: encounterTransaction.visitUuid,
            visitTypeUuid: encounterTransaction.visitTypeUuid,
            encounterUuid: encounterUuid,
            investigations: investigations,
            treatmentDrugs: treatmentDrugs,
            newlyAddedDiagnoses: [],
            labResults: labResults,
            consultationNote: consultationNote || emptyObservation(consultationNoteConcept),
            labOrderNote: labOrderNote || emptyObservation(labOrderNoteConcept),
            observations: observations,
            disposition: encounterTransaction.disposition,
            encounterDateTime: encounterTransaction.encounterDateTime
        };
    };

    var emptyObservation = function(concept) {
        return { concept: { uuid: concept.uuid }};
    };
    
    var mapSpecialObservation = function(encounterObservations, specialConcept) {
        var observation = emptyObservation(specialConcept);
        var obsFromEncounter = encounterObservations.filter(function(obs) {
            return (obs.concept && obs.concept.uuid === specialConcept.uuid) && !obs.voided;
        })[0];
        if(obsFromEncounter) {
            observation.value = obsFromEncounter.value;
            observation.uuid = obsFromEncounter.uuid;
            observation.observationDateTime = obsFromEncounter.observationDateTime;
        }
        return observation;
    };


};

Bahmni.LabConceptsMapper = (function(){
    var LabConceptsMapper = function() { };

    var forConcptClass = function(conceptClassName) {
        return function(concept) { return concept.conceptClass.name === conceptClassName };
    }

    var assignDepartmentToTests = function(tests, departmentConceptSet) {
        var departmentConcepts = departmentConceptSet ? departmentConceptSet.setMembers : [];
        angular.forEach(departmentConcepts, function(departmentConcept) {
            var department = { name: departmentConcept.name.name };
            angular.forEach(departmentConcept.setMembers, function(testConcept){
                var test = tests.filter(function(test){ return test.uuid === testConcept.uuid })[0];
                if(test) test.department = department;
            });
        });
    }

    var createTest = function(concept, sample, panels) {
        return {
                uuid: concept.uuid,
                name: concept.name.name,
                sample: sample,
                panels: panels,
                set: false,
                orderTypeName: Bahmni.Clinical.Constants.labOrderType
            };
    }

    var createPanel = function(concept, sample) {
        return {
                uuid: concept.uuid,
                name: concept.name.name,
                sample: sample,
                set: true,
                orderTypeName: Bahmni.Clinical.Constants.labOrderType
        };
    }

    var mapPanelTests = function(sample, tests, panelConcept) {
        var panel = createPanel(panelConcept, sample);
        var testConcepts = panelConcept.setMembers.filter(forConcptClass(Bahmni.Clinical.Constants.testConceptName));
        angular.forEach(testConcepts, function(testConcept){
            var test = tests.filter(function(test){ return test.uuid === testConcept.uuid; })[0];
            if(test) {
                test.panels.push(panel);
            } else {
                tests.push(createTest(testConcept, sample, [panel]));
            }
        });
    }

    LabConceptsMapper.prototype = {
        map: function(labConceptSet, departmentConceptSet) {
            if(!labConceptSet) return [];
            var tests = [];
            var sampleConcepts = labConceptSet.setMembers
            angular.forEach(sampleConcepts, function(sampleConcept) {
                var sample = {uuid : sampleConcept.uuid, name : sampleConcept.name.name }
                var panelConcepts = sampleConcept.setMembers.filter(forConcptClass(Bahmni.Clinical.Constants.labSetConceptName));
                var testConcepts = sampleConcept.setMembers.filter(forConcptClass(Bahmni.Clinical.Constants.testConceptName));
                angular.forEach(panelConcepts, function(panelConcept){
                    mapPanelTests(sample, tests, panelConcept);
                });
                angular.forEach(testConcepts, function(testConcept){
                    var test = tests.filter(function(test){ return test.uuid === testConcept.uuid; })[0];
                    if(!test) {
                        tests.push(createTest(testConcept, sample, []));
                    }
                });
            });
            assignDepartmentToTests(tests, departmentConceptSet);
            return tests;
        }
    }

    return LabConceptsMapper;
})();

 

'use strict';

Bahmni.Clinical.EncounterTransactionMapper = function () {

    var addEditedDiagnoses = function (consultation, diagnosisList) {
        consultation.pastDiagnoses && consultation.pastDiagnoses.forEach(function (diagnosis) {
            if (diagnosis.isDirty) {
                diagnosis.diagnosisDateTime = null;
                diagnosisList.push(diagnosis);
            }
        });
        consultation.savedDiagnosesFromCurrentEncounter && consultation.savedDiagnosesFromCurrentEncounter.forEach(function (diagnosis) {
            if (diagnosis.isDirty) {
                diagnosis.diagnosisDateTime = null;
                diagnosisList.push(diagnosis);
            }
        });
    };

    this.map = function (consultation, patient, locationUuid, retrospectiveEntry) {
        var encounterData = {};
        encounterData.locationUuid = locationUuid;
        encounterData.patientUuid = patient.uuid;

        if (retrospectiveEntry.isRetrospective) {
            encounterData.encounterDateTime = Bahmni.Common.Util.DateUtil.getDateWithoutHours(retrospectiveEntry.encounterDate);
            encounterData.visitType = "OPD";
        }

        if (consultation.newlyAddedDiagnoses && consultation.newlyAddedDiagnoses.length > 0) {
            encounterData.bahmniDiagnoses = consultation.newlyAddedDiagnoses.map(function (diagnosis) {
                return {
                    codedAnswer: { uuid: !diagnosis.isNonCodedAnswer ? diagnosis.codedAnswer.uuid : undefined},
                    freeTextAnswer: diagnosis.isNonCodedAnswer ? diagnosis.codedAnswer.name : undefined,
                    order: diagnosis.order,
                    certainty: diagnosis.certainty,
                    existingObs: null,
                    diagnosisDateTime: null,
                    diagnosisStatusConcept: diagnosis.diagnosisStatusConcept,
                    voided: diagnosis.voided,
                    comments: diagnosis.comments
                }
            });
        } else {
            encounterData.bahmniDiagnoses = [];
        }
        addEditedDiagnoses(consultation, encounterData.bahmniDiagnoses);

        encounterData.testOrders = consultation.investigations.map(function (investigation) {
            return { uuid: investigation.uuid, concept: {uuid: investigation.concept.uuid }, orderTypeUuid: investigation.orderTypeUuid, voided: investigation.voided || false};
        });

        consultation.drugOrders = [];
        var newlyAddedTreatments = consultation.newlyAddedTreatments;
        newlyAddedTreatments && newlyAddedTreatments.forEach(function (treatment) {
            consultation.drugOrders.push(Bahmni.Clinical.DrugOrder.createFromUIObject(treatment));
        });
        if(consultation.removableDrugs) {
            consultation.drugOrders = consultation.drugOrders.concat(consultation.removableDrugs);
        }

        encounterData.drugOrders = consultation.drugOrders;

        encounterData.disposition = consultation.disposition;

        var addObservationsToEncounter = function () {
            encounterData.observations = consultation.observations || [];

            if (consultation.consultationNote) {
                encounterData.observations.push(consultation.consultationNote);
            }
            if (consultation.labOrderNote) {
                encounterData.observations.push(consultation.labOrderNote);
            }
            if(!_.isEmpty(consultation.drugOrdersWithUpdatedOrderAttributes)){
                var orderAttributes = _.values(consultation.drugOrdersWithUpdatedOrderAttributes).map(function(drugOrder){
                    return drugOrder.getOrderAttributesAsObs();
                });
                encounterData.observations = encounterData.observations.concat(_.flatten(orderAttributes,true));
            }
        };

        addObservationsToEncounter();

        return encounterData;
    };
};
Bahmni.OtherInvestigationsConceptsMapper = (function(){
	var OtherInvestigationsConceptsMapper = function(orderTypesMap) {
		this.orderTypesMap = orderTypesMap;
	};

	var assignCategoriesToTests = function(tests, categoryConceptSet){
	    var categoryConcepts = categoryConceptSet ? categoryConceptSet.setMembers : [];
		angular.forEach(categoryConcepts, function(categoryConcept) {
			var category = { name: categoryConcept.name.name };
			angular.forEach(categoryConcept.setMembers, function(testConcept){
		    	var test = tests.filter(function(test){ return test.uuid === testConcept.uuid })[0];
		    	if(test) {
		    		test.category = category;
		    	}
			});
		});
	}

	var createTest = function(concept, investigationType, orderTypesMap) {
		var orderTypeName = orderTypesMap[investigationType.name] || investigationType.name;
		return {
			uuid: concept.uuid,
			name: concept.name.name,
			type: investigationType,
			orderTypeName: orderTypeName
		};
	};
	
	OtherInvestigationsConceptsMapper.prototype = {
		map: function(otherInvestigationsConcept, categoryConceptSet) {
			var self = this;
	        if(!otherInvestigationsConcept) return [];
	        var tests = [];
	        var testTypeSets = otherInvestigationsConcept.setMembers.filter(function(concept) { return concept.set; });
	        angular.forEach(testTypeSets, function(concept) {
	            var type = {uuid : concept.uuid, name : concept.name.name }
	            var testConcepts = concept.setMembers.filter(function(concept) { return concept.conceptClass.name === Bahmni.Clinical.Constants.testConceptName});
	            angular.forEach(testConcepts, function(testConcept){
	                tests.push(createTest(testConcept, type, self.orderTypesMap));
	            });
	        });
	        assignCategoriesToTests(tests, categoryConceptSet);
			return tests;
		}
	}

	return OtherInvestigationsConceptsMapper;
})();


'use strict';

angular.module('bahmni.clinical')
    .service('patientVisitHistoryService', ['visitService', function (visitService) {
        this.getVisitHistory = function (patientUuid) {
            return visitService.search({patient: patientUuid, v: 'custom:(uuid,visitType,startDatetime,stopDatetime,encounters:(uuid))', includeInactive: true})
                .then(function (data) {
                    var visits = data.data.results.map(function (visitData) {
                        return new Bahmni.Clinical.VisitHistoryEntry(visitData);
                    });
                    var activeVisit = visits.filter(function (visit) {
                        return visit.isActive();
                    })[0];

                    return {"visits": visits, "activeVisit": activeVisit};
                });
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
  .service('labTestsProvider', ['$q', 'conceptSetService', function ($q, conceptSetService) {

  	this.getTests = function() {
	  	var deferer = $q.defer();
        var labConceptsPromise = conceptSetService.getConceptSetMembers({name: Bahmni.Clinical.Constants.labConceptSetName, v: "custom:(uuid,setMembers:(uuid,name,conceptClass,setMembers:(uuid,name,conceptClass,setMembers:(uuid,name,conceptClass))))"}, true);
        var departmentConceptsPromise = conceptSetService.getConceptSetMembers({name: Bahmni.Clinical.Constants.labDepartmentsConceptSetName, v: "custom:(uuid,setMembers:(uuid,name,setMembers:(uuid,name)))"}, true);
        $q.all([labConceptsPromise, departmentConceptsPromise]).then(function(results){
            var labConceptsSet = results[0].data.results[0];
            var labDepartmentsSet = results[1].data.results[0];
            var tests = new Bahmni.LabConceptsMapper().map(labConceptsSet, labDepartmentsSet);           
            deferer.resolve(tests);
        }, deferer.reject);
  		return deferer.promise;
  	}
}]);
'use strict';

angular.module('bahmni.clinical')
    .service('otherTestsProvider', ['$q', 'conceptSetService', 'clinicalAppConfigService', function ($q, conceptSetService, clinicalAppConfigService) {
    var orderTypesMapConfig = clinicalAppConfigService.getOtherInvestigationsMap();
    var orderTypesMap = orderTypesMapConfig ? orderTypesMapConfig.value : {};
    var mapper = new Bahmni.OtherInvestigationsConceptsMapper(orderTypesMap);

  	this.getTests = function() {
	  	var deferer = $q.defer();
        var otherInvestigationsConceptPromise = conceptSetService.getConceptSetMembers({name: Bahmni.Clinical.Constants.otherInvestigationsConceptSetName, v: "fullchildren"}, true);
        var categoriesConceptPromise = conceptSetService.getConceptSetMembers({name: Bahmni.Clinical.Constants.otherInvestigationCategoriesConceptSetName, v: "custom:(uuid,setMembers:(uuid,name,setMembers:(uuid,name)))"}, true);
        $q.all([otherInvestigationsConceptPromise, categoriesConceptPromise]).then(function(results){
            var otherInvestigationConcept = results[0].data.results[0];
            var labDepartmentsSet = results[1].data.results[0];
            var tests = mapper.map(otherInvestigationConcept, labDepartmentsSet);           
            deferer.resolve(tests);
        }, deferer.reject);
  		return deferer.promise;
  	}
}]);
'use strict';

Bahmni.Clinical.SaveHandler = function () {
    var callBacks = [];
    this.register = function (callback) {
        callBacks.push(callback);
    };

    this.fire = function () {
        callBacks.forEach(function (callback) {
            callback();
        });
    };

    this.reset = function () {
        callBacks = [];
    }
};
'use strict';

angular.module('bahmni.clinical')
    .factory('DrugService', ['$http', function ($http) {

        var search = function (drugName) {
            return $http.get("/openmrs/ws/rest/v1/drug",
                {
                    method: "GET",
                    params: { v: 'custom:(uuid,name,doseStrength,units,dosageForm,concept:(uuid,name,names:(name)))', q: drugName, s: "ordered" },
                    withCredentials: true
                }
            ).then(function (response) {
                    return response.data.results;
                });
        }

        return {
            search: search
        };
    }]);
'use strict';

angular.module('bahmni.clinical').factory('treatmentConfig',['TreatmentService', function (treatmentService) {
        return treatmentService.getConfig().then(function(result) {
            return  result.data;
        });
    }]
);

angular.module('bahmni.clinical')
.filter('observationValue', function ($filter) {
    return function(obs) {
        return new Bahmni.Common.Domain.ObservationValueMapper().map(obs);
    }
});
angular.module('bahmni.clinical')
    .directive('buttonsRadio', function () {
        return {
            restrict:'E',
            scope:{ model:'=', options:'=', dirtyCheckFlag:'=' },
            link:function(scope, element, attrs){
                if(attrs.dirtyCheckFlag){
                  scope.hasDirtyFlag = true;
              }
            },
            controller:function ($scope) {
                $scope.activate = function (option) {
                    if ($scope.model === option) {
                        $scope.model = undefined;
                    } else {
                        $scope.model = option;
                    }
                    if ($scope.hasDirtyFlag) {
                        $scope.dirtyCheckFlag = true;
                    }
                };
            },
            template:"<button type='button' class='btn' " +
                "ng-class='{active: option == model}'" +
                "ng-repeat='option in options' " +
                "ng-click='activate(option)'><span></span>{{option}} " +
                "</button>"
        };
    });
angular.module('bahmni.clinical')
    .directive('diagnosisAutoComplete', function ($parse) {
        var link = function (scope, element, attrs) {
            var ngModel = $parse(attrs.ngModel);
            var source = scope.source();
            var responseMap = scope.responseMap();
            var onSelect = scope.onSelect();

            element.autocomplete({
                autofocus: true,
                minLength: 2,
                source: function (request, response) {
                    source(request.term).success(function (data) {
                        var results = responseMap ? responseMap(data) : data;
                        response(results);
                    });
                },
                select: function (event, ui) {
                    scope.$apply(function () {
                        ngModel.assign(scope, ui.item.value);
                        if (onSelect) {
                            onSelect(scope.index, ui.item.lookup);
                        }
                        scope.$eval(attrs.ngChange);
                    });
                    return true;
                },
                search: function (event) {
                    var searchTerm = $.trim(element.val());
                    if (searchTerm.length < 2) {
                        event.preventDefault();
                    }
                }
            });
        };
        return {
            link: link,
            require: 'ngModel',
            scope: {
                source: '&',
                responseMap: '&',
                onSelect: '&',
                index: '='
            }
        }
    });
angular.module('bahmni.clinical')
.controller('InvestigationsSelectorController', function($scope, spinner, configurations) {
    var Selectable = Bahmni.Clinical.Selectable;
    var Category = Bahmni.Clinical.Category;
    $scope.selectablePanels = [];
    $scope.selectableTests = [];

    spinner.forPromise($scope.testsProvider.getTests()).then(function(tests){
        initializeTests(tests);
        selectSelectablesBasedOnInvestigations();
        $scope.showAll();
    });

    var onSelectionChange = function(selectable) {
        if(selectable.isSelected()) {
            if(selectable.isSelectedFromSelf()) addInvestigationForSelectable(selectable);
        } else {
            removeInvestigationForSelectable(selectable);
        }
    }

    var initializeTests = function(tests) {
        var categories = $scope.categories = [];
        var selectablePanels = $scope.selectablePanels = [];
        var selectableTests = $scope.selectableTests = []
        var filters = $scope.filters = [];
        angular.forEach(tests, function(test){
            var selectableTest = new Selectable(test, [], onSelectionChange);            
            selectableTests.push(selectableTest);
            var categoryData = test[$scope.categoryColumn] || {name: "Other"};
            var category = categories.filter(function(category) { return category.name === categoryData.name })[0];
            category ? category.tests.push(selectableTest) : categories.push(new Category(categoryData.name, [selectableTest]));
            
            angular.forEach(test.panels, function(testPanel){
                var selectablePanel = selectablePanels.filter(function(panel){ return panel.name === testPanel.name })[0];
                if(selectablePanel) {
                    selectablePanel.addChild(selectableTest)
                } else {
                    selectablePanel = new Selectable(testPanel, [selectableTest], onSelectionChange);
                    selectablePanels.push(selectablePanel)                    
                }
            });

            var filter = test[$scope.filterColumn];
            if(filters.indexOf(filter) === -1) filters.push(filter);
        });
    };

    var selectSelectablesBasedOnInvestigations = function() {
        var selectables = $scope.allSelectables();
        var currentInvestigations = $scope.investigations.filter(function(investigation){ return !investigation.voided; })
        angular.forEach(currentInvestigations, function(investigation){
            var selectable = findSelectableForInvestigation(selectables, investigation);
            if(selectable) selectable.select();
        });
    }
    
    var findSelectableForInvestigation = function(selectables, investigation) {
        return selectables.filter(function(selectableConcept){ return selectableConcept.uuid === investigation.concept.uuid; })[0];
    }
    
    var createInvestigationFromSelectable = function(selectable) {
        return {
            concept: {uuid: selectable.uuid, name: selectable.name, set: selectable.set },
            orderTypeUuid:  configurations.encounterConfig().orderTypes[selectable.orderTypeName],
            voided: false
        };
    }

    var addInvestigationForSelectable = function(selectable) {
        var investigation = findInvestigationForSelectable(selectable);
        if(investigation) {
            investigation.voided = false;
        } else {
            $scope.investigations.push(createInvestigationFromSelectable(selectable));
        }         
    }

    var removeInvestigationForSelectable = function(selectable) {
        var investigation = findInvestigationForSelectable(selectable);
        if(investigation) removeInvestigation(investigation);;
    }

    var removeInvestigation = function(investigation) {
        if(investigation.uuid) {
            investigation.voided = true;
        } else {
            var index = $scope.investigations.indexOf(investigation);
            $scope.investigations.splice(index, 1);
        }
    }

    var findInvestigationForSelectable = function(selectable) {
        return $scope.investigations.filter(function(investigation){ return investigation.concept.uuid === selectable.uuid })[0];
    }
    
    $scope.showAll = function() {
        $scope.filterBy(null)
    }

    var applyCurrentFilterByFilterCoulmn = function(selectable) {
        return $scope.currentFilter ? selectable[$scope.filterColumn] === $scope.currentFilter : true;
    }

    $scope.filterBy = function(filter) {
        $scope.currentFilter = filter;
        $scope.filteredPanels = $scope.selectablePanels.filter(applyCurrentFilterByFilterCoulmn);
        angular.forEach($scope.categories, function(category){
            category.filter(applyCurrentFilterByFilterCoulmn);
        });
    }
    
    $scope.hasFilter = function() {
        return !!$scope.currentFilter;
    }

    $scope.hasTests = function() {
        return $scope.selectableTests && $scope.selectableTests.length > 0;
    }

    $scope.isFilteredBy = function(filter) {
        return $scope.currentFilter === filter;
    }

    $scope.allSelectables = function() {
        return $scope.selectablePanels.concat($scope.selectableTests);
    }

    $scope.selctedSelectables = function() {
        return $scope.allSelectables().filter(function(selectable){ return selectable.isSelectedFromSelf(); });
    }
})
.directive('investigationsSelector',function(){
    return {
        restrict: 'EA',
        templateUrl: 'consultation/views/investigationsSelector.html',
        controller: 'InvestigationsSelectorController',
        require: 'ngModel',
        scope: {
            investigations: '=ngModel',
            testsProvider: "=",
            filterColumn: "@",
            filterHeader: "@",
            categoryColumn: "@"
        }
    }
});
'use strict';

angular.module('bahmni.clinical').controller('ClinicalController',
    ['$scope', 'retrospectiveEntryService', '$rootScope',
        function ($scope, retrospectiveEntryService, $rootScope) {

            $scope.retrospectiveClass = function () {
                
                return (retrospectiveEntryService.getRetrospectiveEntry() && retrospectiveEntryService.getRetrospectiveEntry().encounterDate &&
                    Bahmni.Common.Util.DateUtil.getDateWithoutTime(retrospectiveEntryService.getRetrospectiveEntry().encounterDate) 
                    < Bahmni.Common.Util.DateUtil.getDateWithoutTime(Bahmni.Common.Util.DateUtil.now()));
                
            };

            $rootScope.toggleControlPanel = function () {
                $rootScope.showControlPanel = !$rootScope.showControlPanel;
            };

            $rootScope.collapseControlPanel = function () {
                $rootScope.showControlPanel = false;
            };

        }]);

'use strict';

angular.module('bahmni.clinical')
    .controller('ConsultationSummaryController', ['$scope', 'conceptSetUiConfigService', function ($scope, conceptSetUiConfigService) {
        var geEditedDiagnosesFromPastEncounters = function () {
            var editedDiagnosesFromPastEncounters = [];
            $scope.consultation.pastDiagnoses.forEach(function (pastDiagnosis) {
                if (pastDiagnosis.isDirty && pastDiagnosis.encounterUuid !== $scope.consultation.encounterUuid) {
                    editedDiagnosesFromPastEncounters.push(pastDiagnosis);
                }
            });
            return editedDiagnosesFromPastEncounters;
        };
        $scope.editedDiagnosesFromPastEncounters = geEditedDiagnosesFromPastEncounters();

        $scope.onNoteChanged = function () {
//        TODO: Mihir, D3 : Hacky fix to update the datetime to current datetime on the server side. Ideal would be void the previous observation and create a new one.
            $scope.consultation.consultationNote.observationDateTime = null;
        };

        var groupedObservations = function(){
            var groupedObservationsArray = [];
            $scope.consultation.observations.forEach(function(observation){
                var temp =[];
                temp[0]=observation;
                var observationsByGroup={
                    "conceptSetName": observation.concept.shortName || observation.concept.name,
                    "groupMembers": new Bahmni.ConceptSet.ObservationMapper().getObservationsForView(temp, conceptSetUiConfigService.getConfig())
                };
                if(observationsByGroup.groupMembers.length){
                    groupedObservationsArray.push(observationsByGroup);
                }
            });
            return groupedObservationsArray;
        };
        $scope.groupedObservations = groupedObservations();
        $scope.disposition = $scope.consultation.disposition;
        $scope.toggle = function (item) {
            item.show = !item.show
        };

        $scope.isConsultationTabEmpty = function(){
            if (_.isEmpty($scope.consultation.newlyAddedDiagnoses) && _.isEmpty($scope.groupedObservations)
                && _.isEmpty($scope.consultation.investigations) && _.isEmpty($scope.consultation.disposition)
                && _.isEmpty($scope.consultation.treatmentDrugs) && _.isEmpty($scope.consultation.newlyAddedTreatments)
                && _.isEmpty($scope.consultation.discontinuedDrugs) && _.isEmpty($scope.consultation.savedDiagnosesFromCurrentEncounter)){
                return true;
            }
            return false;
        };
    }]);


'use strict';

angular.module('bahmni.clinical')
    .controller('DiagnosisController', ['$scope', 'diagnosisService', 'contextChangeHandler', 'spinner',
        function ($scope, diagnosisService, contextChangeHandler, spinner) {

            $scope.placeholder = "Add Diagnosis";
            $scope.hasAnswers = false;

            $scope.orderOptions = ['PRIMARY', 'SECONDARY'];
            $scope.certaintyOptions = ['CONFIRMED', 'PRESUMED'];
            $scope.diagnosisStatuses = ['RULED OUT'];

            $scope.getDiagnosis = function (searchTerm) {
                return diagnosisService.getAllFor(searchTerm);
            };

            var _canAdd = function (diagnosis) {
                var canAdd = true;
                $scope.newlyAddedDiagnoses.forEach(function (observation) {
                    if (observation.codedAnswer.uuid === diagnosis.codedAnswer.uuid) {
                        canAdd = false;
                    }
                });
                return canAdd;
            };

            $scope.addNewDiagnosis = function (index, concept) {
                var diagnosisBeingEdited = $scope.newlyAddedDiagnoses[index];
                var diagnosis = new Bahmni.Common.Domain.Diagnosis(concept, diagnosisBeingEdited.order,
                    diagnosisBeingEdited.certainty, diagnosisBeingEdited.existingObs);
                if (_canAdd(diagnosis)) {
                    $scope.newlyAddedDiagnoses.splice(index, 1, diagnosis);
                }
            };

            var addPlaceHolderDiagnosis = function () {
                var diagnosis = new Bahmni.Common.Domain.Diagnosis('');
                $scope.newlyAddedDiagnoses.push(diagnosis);
            };

            var init = function () {
                $scope.newlyAddedDiagnoses = $scope.consultation.newlyAddedDiagnoses;
                addPlaceHolderDiagnosis();
            };

            var contextChange = function () {
                var invalidnewlyAddedDiagnoses = $scope.newlyAddedDiagnoses.filter(function (diagnosis) {
                    return !$scope.isValid(diagnosis);
                });
                var invalidSavedDiagnosesFromCurrentEncounter = $scope.consultation.savedDiagnosesFromCurrentEncounter.filter(function (diagnosis) {
                    return !$scope.isValid(diagnosis);
                });
                var invalidPastDiagnoses = $scope.consultation.pastDiagnoses.filter(function (diagnosis) {
                    return !$scope.isValid(diagnosis);
                });
                return {allow: invalidnewlyAddedDiagnoses.length === 0 && invalidPastDiagnoses.length === 0 && invalidSavedDiagnosesFromCurrentEncounter.length === 0};
            };
            contextChangeHandler.add(contextChange);

            $scope.cleanOutDiagnosisList = function (data) {
                var mappedResponse = data.map(
                    function (concept) {
                        if (concept.conceptName === concept.matchedName) {
                            return {
                                'value': concept.matchedName,
                                'concept': {
                                    'name': concept.conceptName,
                                    'uuid': concept.conceptUuid
                                },
                                lookup: {
                                    'name': concept.conceptName,
                                    'uuid': concept.conceptUuid
                                }
                            }
                        }
                        return {
                            'value': concept.matchedName + "=>" + concept.conceptName,
                            'concept': {
                                'name': concept.conceptName,
                                'uuid': concept.conceptUuid
                            },
                            lookup: {
                                'name': concept.conceptName,
                                'uuid': concept.conceptUuid
                            }
                        }
                    }
                );
                return filterOutSelectedDiagnoses(mappedResponse);
            };

            var filterOutSelectedDiagnoses = function (allDiagnoses) {
                return allDiagnoses.filter(function (diagnosis) {
                    return !alreadyAddedToDiagnosis(diagnosis);
                });
            };

            var alreadyAddedToDiagnosis = function (diagnosis) {
                var isPresent = false;
                $scope.newlyAddedDiagnoses.forEach(function (d) {
                    if (d.codedAnswer.uuid == diagnosis.concept.uuid) {
                        isPresent = true;
                    }
                });
                return isPresent;
            };

            $scope.removeObservation = function (index) {
                if (index >= 0) {
                    $scope.newlyAddedDiagnoses.splice(index, 1);
                }
            };

            $scope.clearDiagnosis = function (index) {
                var diagnosisBeingEdited = $scope.newlyAddedDiagnoses[index];
                diagnosisBeingEdited.clearCodedAnswerUuid();
            };

            var reloadDiagnosesSection = function (encounterUuid) {

                return diagnosisService.getPastAndCurrentDiagnoses($scope.patient.uuid, encounterUuid).then(function (response) {
                    $scope.consultation.pastDiagnoses = response.pastDiagnoses;
                    $scope.consultation.savedDiagnosesFromCurrentEncounter = response.savedDiagnosesFromCurrentEncounter;
                });

            };


            $scope.deleteDiagnosis = function (diagnosis) {
                var obsUUid = diagnosis.existingObs != null ? diagnosis.existingObs : diagnosis.previousObs;

                spinner.forPromise(
                    diagnosisService.deleteDiagnosis(obsUUid).then(function (result) {
                        var currentUuid = $scope.consultation.savedDiagnosesFromCurrentEncounter.length > 0 ?
                            $scope.consultation.savedDiagnosesFromCurrentEncounter[0].encounterUuid : "";
                        reloadDiagnosesSection(currentUuid);
                    }))
                    .then(function () {});
            };

            var setDiagnosis = function () {
                $scope.consultation.newlyAddedDiagnoses = $scope.newlyAddedDiagnoses.filter(function (diagnosis) {
                    return !diagnosis.isEmpty();
                });
            };

            var saveDiagnosis = function () {
                setDiagnosis();
            };

            $scope.consultation.saveHandler.register(saveDiagnosis);
            $scope.consultation.postSaveHandler.register(init);

            $scope.$on('$destroy', setDiagnosis);

            $scope.processDiagnoses = function (data) {
                data.map(
                    function (concept) {
                        if (concept.conceptName === concept.matchedName) {
                            return {
                                'value': concept.matchedName,
                                'concept': concept
                            }
                        }
                        return {
                            'value': concept.matchedName + "=>" + concept.conceptName,
                            'concept': concept
                        }
                    }
                );
            };

            $scope.clearEmptyRows = function (index) {
                var iter;
                for (iter = 0; iter < $scope.newlyAddedDiagnoses.length; iter++) {
                    if ($scope.newlyAddedDiagnoses[iter].isEmpty() && iter !== index) {
                        $scope.newlyAddedDiagnoses.splice(iter, 1)
                    }
                }
                var emptyRows = $scope.newlyAddedDiagnoses.filter(function (diagnosis) {
                        return diagnosis.isEmpty();
                    }
                );
                if (emptyRows.length == 0) {
                    addPlaceHolderDiagnosis();
                }
            };

            $scope.toggle = function (item) {
                item.show = !item.show
            };

            $scope.isValid = function (diagnosis) {
                return diagnosis.isValidAnswer() && diagnosis.isValidOrder() && diagnosis.isValidCertainty();
            };

            init();

        }
    ])
;

'use strict';

angular.module('bahmni.clinical')
.controller('InvestigationController', ['$scope', 'labTestsProvider', 'otherTestsProvider', 
        function ($scope, labTestsProvider, otherTestsProvider) {

    $scope.tabs = [
        {name: 'Laboratory', testsProvider: labTestsProvider, filterColumn: "sample", filterHeader: "Sample",categoryColumn: "department"},
        {name: 'Other', testsProvider: otherTestsProvider, filterColumn: "type", filterHeader: "Investigation",categoryColumn: "category"},
    ];

    $scope.activateTab = function(tab){
        $scope.activeTab && ($scope.activeTab.klass="");
        $scope.activeTab = tab;
        $scope.activeTab.klass="active";
    }

    var findVoidedInvestigations = function() {
        var filteredInvestigation = $scope.consultation.investigations.filter(function(investigation) {
            if(investigation.voided === true){
                return true;
            }
        })
        if(filteredInvestigation.length === $scope.consultation.investigations.length) return true;
        return false;
    }
    $scope.isValidInvestigation = function() {
        if (!$scope.consultation.investigations.length > 0 || findVoidedInvestigations()) {
            $scope.noteState = false;
            if($scope.consultation.labOrderNote.uuid){
                $scope.consultation.labOrderNote.voided = true;
            }else {
                if ($scope.consultation.labOrderNote.value)
                    $scope.consultation.labOrderNote.value = null;
            }
            return false;
        } else {
            if ($scope.consultation.labOrderNote.uuid){
                $scope.noteState = true;
                $scope.consultation.labOrderNote.voided = false;
            }
            return true;
        }
    }

    $scope.activateTab($scope.tabs[0]);

    $scope.toggleNote = function() {
        $scope.noteState = $scope.noteState ? false : true;
    }


    var init = function() {
        $scope.noteState =  $scope.consultation.labOrderNote && $scope.consultation.labOrderNote.value ? true : false;
    }

    $scope.onNoteChanged = function() {
        if($scope.consultation.labOrderNote){
//        TODO: Mihir, D3 : Hacky fix to update the datetime to current datetime on the server side. Ideal would be void the previous observation and create a new one.
            $scope.consultation.labOrderNote.observationDateTime = null;
        }
    }

    init();
}]);

'use strict';

angular.module('bahmni.clinical')

    .controller('TreatmentController', ['$scope', '$rootScope', 'contextChangeHandler', 'treatmentConfig', 'DrugService', '$timeout',
        'clinicalAppConfigService','ngDialog', '$window', 'retrospectiveEntryService',
        function ($scope, $rootScope, contextChangeHandler, treatmentConfig, drugService, $timeout,
                  clinicalAppConfigService, ngDialog, $window, retrospectiveEntryService) {

            var DateUtil = Bahmni.Common.Util.DateUtil;

            $scope.treatments = $scope.consultation.newlyAddedTreatments || [];
            $scope.treatmentConfig = treatmentConfig;
            $scope.treatmentActionLinks = clinicalAppConfigService.getTreatmentActionLink();
            var drugOrderAppConfig = clinicalAppConfigService.getDrugOrderConfig();


            function markVariable(variable){
                $scope[variable] = true;
                $timeout(function () {
                    $scope[variable] = false;
                });
            }
            function markEitherVariableDrugOrUniformDrug(drug){
                if(drug.isVariableDosingType()){
                    markVariable('editDrugEntryVariableFrequency');
                }
                else {
                    markVariable('editDrugEntryUniformFrequency');
                }
            }

            markVariable("startNewDrugEntry");

            var drugOrderHistory = null;
            $scope.treatmentConfig.durationUnits = [
                {name: "Day(s)", factor: 1},
                {name: "Week(s)", factor: 7},
                {name: "Month(s)", factor: 30}
            ];

            var newTreatment = function () {

                var newTreatment = new Bahmni.Clinical.DrugOrderViewModel(drugOrderAppConfig, $scope.treatmentConfig, null, retrospectiveEntryService.getRetrospectiveEntry().encounterDate);
                newTreatment.isEditAllowed = false;
                return newTreatment;
            };

            //$scope.today = new Date();
            $scope.today = retrospectiveEntryService.getRetrospectiveEntry().encounterDate;
            $rootScope.$watch(Bahmni.Common.Constants.rootScopeRetrospectiveEntry, function(){
                $scope.today = retrospectiveEntryService.getRetrospectiveEntry().encounterDate;
            });

            $scope.treatment = $scope.consultation.incompleteTreatment || newTreatment();
            $scope.treatmentConfig.durationUnits.forEach(function (durationUnit) {
                if (_.isEqual(durationUnit, $scope.treatment.durationUnit)) {
                    $scope.treatment.durationUnit = durationUnit;
                }
            });

            var watchFunctionForQuantity = function () {
                var treatment = $scope.treatment;
                return {
                    uniformDosingType: treatment.uniformDosingType,
                    variableDosingType: treatment.variableDosingType,
                    doseUnits:treatment.doseUnits,
                    duration: treatment.duration,
                    durationUnit: treatment.durationUnit
                };
            };

            var isSameDrugBeingDiscontinuedAndOrdered = function(){
                var existingTreatment = false;
                angular.forEach($scope.consultation.discontinuedDrugs, function(drugOrder){
                    existingTreatment = _.some($scope.treatments, function (treatment) {
                        return treatment.getDrugName() === drugOrder.getDrugName();
                    }) && drugOrder.isMarkedForDiscontinue;
                });
                return existingTreatment;
            };

            var clearOtherDrugOrderActions = function(drugOrders) {
                drugOrders.forEach(function (drugOrder) {
                    drugOrder.isDiscontinuedAllowed = true;
                    drugOrder.isBeingEdited = false;
                });
            };

            $scope.$on("event:refillDrugOrder", function (event, drugOrder, alreadyActiveSimilarOrder) {
                var existingOrderStopDate = alreadyActiveSimilarOrder ? alreadyActiveSimilarOrder.effectiveStopDate : null;
                var refill = drugOrder.refill(existingOrderStopDate);
                drugOrderHistory = drugOrder;
                $scope.treatments.push(refill);
                markVariable("startNewDrugEntry");
            });

            $scope.$on("event:refillDrugOrders", function (event, drugOrders) {
                drugOrders.forEach(function (drugOrder) {
                    var refill = drugOrder.refill();
                    $scope.treatments.push(refill);
                });
            });

            $scope.$on("event:reviseDrugOrder", function (event, drugOrder, drugOrders) {
                clearOtherDrugOrderActions(drugOrders);
                drugOrder.isBeingEdited = true;
                drugOrder.isDiscontinuedAllowed = false;

                $scope.treatments.map(setIsNotBeingEdited);
                drugOrderHistory = drugOrder;
                $scope.treatment = drugOrder.revise();
                markEitherVariableDrugOrUniformDrug($scope.treatment);
                $scope.treatment.currentIndex = $scope.treatments.length + 1;
            });

            $scope.$watch(watchFunctionForQuantity, function () {
                $scope.treatment.calculateQuantityAndUnit();
            }, true);

            $scope.add = function () {
                $scope.treatment.dosingInstructionType = Bahmni.Clinical.Constants.flexibleDosingInstructionsClass;
                var newDrugOrder = $scope.treatment;
                newDrugOrder.effectiveStopDate = DateUtil.addDays(DateUtil.parse(newDrugOrder.effectiveStartDate), newDrugOrder.durationInDays);

                var unsavedNotBeingEditedOrders = $scope.treatments.filter(function(drugOrder) { return drugOrder.isBeingEdited == false});

                var existingDrugOrders = newDrugOrder.isBeingEdited ? $scope.consultation.activeAndScheduledDrugOrders.filter(function(drugOrder) { return drugOrder.uuid != newDrugOrder.previousOrderUuid}).concat(unsavedNotBeingEditedOrders) : $scope.consultation.activeAndScheduledDrugOrders.concat(unsavedNotBeingEditedOrders);

                if ($scope.treatment.isBeingEdited) {
                    $scope.treatments.splice($scope.treatment.currentIndex, 1);
                }

                var potentiallyOverlappingOrders = existingDrugOrders.filter(function (drugOrder) {
                    return (drugOrder.getDrugName() == newDrugOrder.getDrugName() && drugOrder.overlappingScheduledWith(newDrugOrder));
                });

                setEffectiveDates(newDrugOrder, potentiallyOverlappingOrders);


                var alreadyActiveSimilarOrders = existingDrugOrders.filter(function (drugOrder) {
                    return (drugOrder.getDrugName() == newDrugOrder.getDrugName() && drugOrder.overlappingScheduledWith(newDrugOrder));
                });

                if (alreadyActiveSimilarOrders.length > 0) {
                    $scope.alreadyActiveSimilarOrder = _.sortBy(potentiallyOverlappingOrders, 'effectiveStartDate').reverse()[0];
                    $scope.conflictingIndex = _.findIndex($scope.treatments, $scope.alreadyActiveSimilarOrder);
                    ngDialog.open({ template: 'consultation/views/treatmentSections/reviseRefillDrugOrderModal.html', scope: $scope});
                    $scope.popupActive = true;
                    return;
                }
                if ($scope.treatment.isBeingEdited) {
                    $scope.treatment.isBeingEdited = false;
                }
                $scope.treatments.push($scope.treatment);
                $scope.clearForm();
            };
            var setEffectiveDates = function (newDrugOrder, existingDrugOrders) {
                existingDrugOrders.forEach(function (existingDrugOrder) {
                    if (DateUtil.isSameDate(existingDrugOrder.effectiveStartDate, newDrugOrder.effectiveStopDate) && !DateUtil.isSameDate(existingDrugOrder.effectiveStopDate, newDrugOrder.effectiveStartDate)) {
                        if(!newDrugOrder.previousOrderUuid || newDrugOrder.previousOrderDurationInDays === newDrugOrder.durationInDays){
                            newDrugOrder.effectiveStopDate = DateUtil.subtractSeconds(existingDrugOrder.effectiveStartDate, 1);}
                        if(newDrugOrder.previousOrderUuid || DateUtil.isSameDate(newDrugOrder.effectiveStartDate,newDrugOrder.encounterDate)){
                            newDrugOrder.autoExpireDate = newDrugOrder.effectiveStopDate;
                        }
                    }
                    if (DateUtil.isSameDate(existingDrugOrder.effectiveStopDate, newDrugOrder.effectiveStartDate) && DateUtil.isSameDate(DateUtil.addSeconds(existingDrugOrder.effectiveStopDate, 1), newDrugOrder.effectiveStartDate)) { //compare date part only of datetime
                        if(!existingDrugOrder.uuid){
                            existingDrugOrder.effectiveStopDate = DateUtil.subtractSeconds(existingDrugOrder.effectiveStopDate, 1);
                        }
                        newDrugOrder.effectiveStartDate = DateUtil.addSeconds(existingDrugOrder.effectiveStopDate, 1);
                    }
                });
            };

            $scope.refill = function (drugOrder, alreadyActiveSimilarOrder) {
                $scope.popupActive = false;
                ngDialog.close();
                $scope.clearForm();
                $scope.$broadcast("event:refillDrugOrder", drugOrder, alreadyActiveSimilarOrder);
            };

            $scope.revise = function (drugOrder, index) {
                $scope.popupActive = false;
                ngDialog.close();
                if (drugOrder.uuid) {
                    $scope.$broadcast("event:reviseDrugOrder", drugOrder, $scope.consultation.activeAndScheduledDrugOrders);
                }
                else{
                    $scope.edit(index);
                }
            };

            $scope.toggleShowAdditionalInstructions = function (line) {
                line.showAdditionalInstructions = !line.showAdditionalInstructions;
            };

            $scope.toggleAsNeeded = function (treatment) {
                treatment.asNeeded = !treatment.asNeeded;
            };

            var clearHighlights = function(){
                $scope.treatments.map(setIsNotBeingEdited);
                drugOrderHistory ? drugOrderHistory.isBeingEdited = false : null;
                drugOrderHistory ? drugOrderHistory.isDiscontinuedAllowed = true : null;
            };

            $scope.edit = function (index) {
                clearHighlights();
                markEitherVariableDrugOrUniformDrug($scope.treatments[index]);
                $scope.treatments[index].isBeingEdited = true;
                $scope.treatment = $scope.treatments[index].cloneForEdit(index, drugOrderAppConfig, $scope.treatmentConfig);
            };

            $scope.incompleteDrugOrders = function(){
                var anyValuesFilled =  $scope.treatment.drug || $scope.treatment.uniformDosingType.dose || $scope.treatment.uniformDosingType.frequency || $scope.treatment.variableDosingType.morningDose || $scope.treatment.variableDosingType.afternoonDose || $scope.treatment.variableDosingType.eveningDose || $scope.treatment.duration || $scope.treatment.quantity
                return (anyValuesFilled && $scope.addForm.$invalid);
            };
            $scope.unaddedDrugOrders = function () {
                return $scope.addForm.$valid;
            };

            var contextChange = function () {
                var errorMessages = Bahmni.Clinical.Constants.errorMessages;
                if(isSameDrugBeingDiscontinuedAndOrdered()) {
                    return {allow: false, errorMessage: errorMessages.discontinuingAndOrderingSameDrug};
                }
                if($scope.incompleteDrugOrders()){
                    $scope.formInvalid = true;
                    return {allow: false};
                }
                if($scope.unaddedDrugOrders()){
                    return {allow: false, errorMessage: errorMessages.incompleteForm};
                }
                var valid = _.every($scope.treatments, function(drugOrder){
                    return drugOrder.validate();
                });
                if (!valid) {
                    return {allow: false, errorMessage: errorMessages.invalidItems};
                }
                $scope.consultation.newlyAddedTreatments = $scope.treatments || [];
                $scope.consultation.incompleteTreatment = $scope.treatment;
                return {allow: true};
            };

            $scope.remove = function (index) {
                $scope.treatments.splice(index, 1);
            }

            $scope.getDrugs = function (request) {
                return drugService.search(request.term);
            };

            var setIsNotBeingEdited = function (treatment) {
                treatment.isBeingEdited = false;
                return treatment;
            };

            var constructDrugNameDisplay = function (drug) {
                var drugSearchResult = new Bahmni.Clinical.DrugSearchResult(drug, $scope.treatment.drugNameDisplay);
                return {
                    label: drugSearchResult.getLabel(),
                    value: drugSearchResult.getValue(),
                    drug: drug
                };
            };

            $scope.getDataResults = function (data) {
                return data.map(constructDrugNameDisplay);
            };

            $scope.populateBackingFields = function (item) {
                $scope.treatment.changeDrug({
                    name: item.drug.name,
                    form: item.drug.dosageForm.display,
                    uuid: item.drug.uuid
                });
            };

            $scope.clearForm = function () {
                $scope.treatment = newTreatment();
                $scope.formInvalid = false;
                clearHighlights();
                markVariable("startNewDrugEntry");
            };

            $scope.openActionLink = function (extension) {
                var url = extension.url.replace("{{patient_ref}}", $scope.patient.identifier);
                $window.open(url, "_blank");
            };

            $scope.toggleTabIndexWithinModal = function(event){
                var buttonsToFocusOn = ["modal-revise-button", "modal-refill-button"];
                var focusedButton = event.target;
                focusedButton.tabIndex = 1;

                buttonsToFocusOn.splice(buttonsToFocusOn.indexOf(focusedButton.id),1);
                var otherButton = buttonsToFocusOn[0];
                $("#"+otherButton)[0].tabIndex = 2;
            };

            $scope.toggleDrugOrderAttribute = function(orderAttribute){
                orderAttribute.value = orderAttribute.value ? false : true;
            };
            contextChangeHandler.add(contextChange);

        }]);

'use strict';

angular.module('bahmni.clinical')
    .controller('DispositionController', ['$scope', '$q', 'dispositionService', 'spinner', function ($scope, $q, dispositionService, spinner) {
        var consultation = $scope.consultation;


        var getDispositionActionsPromise = function() {
            return dispositionService.getDispositionActions().then(function (response) {
                $scope.dispositionActions = new Bahmni.Clinical.DispostionActionMapper().map(response.data.results[0].answers);
                var previousDispositionNote = consultation.disposition ? consultation.disposition.additionalObs.filter(function(obs) { return !obs.voided && obs.concept.uuid === $scope.dispositionNoteConceptUuid; })[0] : null;
                $scope.dispositionNote =  previousDispositionNote || {concept: {uuid: $scope.dispositionNoteConceptUuid }};
                $scope.dispositionCode = consultation.disposition ? consultation.disposition.code : null;
            });
        };

        $scope.showWarningForEarlierDispositionNote = function(){
            return !$scope.dispositionCode && consultation.disposition;
        };

        var getDispositionNotePromise = function() {
            return dispositionService.getDispositionNoteConcept().then(function (response) {
                $scope.dispositionNoteConceptUuid = response.data.results[0].uuid;
            });
        };

        var loadDispositionActions = function() {
            return getDispositionNotePromise().then(getDispositionActionsPromise);
        };

        $scope.clearDispositionNote = function(){
            $scope.dispositionNote = {concept: {uuid: $scope.dispositionNoteConceptUuid }};
        };

        var getSelectedConceptName = function(dispositionCode){
            var selectedDispositionConceptName;
            $scope.dispositionActions.forEach(function(dispositionAction){
                if(dispositionAction.code === dispositionCode){
                    selectedDispositionConceptName = dispositionAction.name;
                }
            });
            return selectedDispositionConceptName;
        };

        var getSelectedDisposition = function(){
            if($scope.dispositionCode){
                if(!$scope.dispositionNote.value){ $scope.dispositionNote.voided = true};
                return {
                    dispositionDateTime : null,
                    additionalObs :[$scope.dispositionNote],
                    code: $scope.dispositionCode,
                    conceptName: getSelectedConceptName($scope.dispositionCode)
                };
            }
        };

        spinner.forPromise(loadDispositionActions());


        var saveDispositions = function() {
            var selectedDisposition = getSelectedDisposition();
            if(selectedDisposition) {
                consultation.disposition  =  selectedDisposition;
            } else {
                if(consultation.disposition){
                    consultation.disposition.voided = true;
                    consultation.disposition.voidReason = "Cancelled during encounter";
                }

            }
        };

        $scope.consultation.saveHandler.register(saveDispositions);

        $scope.$on('$destroy', saveDispositions);
    }]);

'use strict';

angular.module('bahmni.clinical').controller('ConsultationController',
    ['$scope', '$rootScope', '$state', '$location', 'clinicalAppConfigService', 'urlHelper', 'contextChangeHandler', 
        'spinner', 'encounterService', 'messagingService', 'sessionService', 'retrospectiveEntryService', 'patientContext', 'consultationContext',
        function ($scope, $rootScope, $state, $location, clinicalAppConfigService, urlHelper, contextChangeHandler, 
                  spinner, encounterService, messagingService, sessionService, retrospectiveEntryService, patientContext, consultationContext) {
            $scope.patient = patientContext.patient;
            $scope.consultation = consultationContext;

            $scope.availableBoards = [ ];

            $scope.showBoard = function (label) {
                $rootScope.collapseControlPanel();
                var board = findBoardByLabel(label);
                return buttonClickAction(board);
            };

            $scope.gotoPatientDashboard = function () {
                if(contextChangeHandler.execute()["allow"]) {
                    $location.path("/patient/" + patientContext.patient.uuid + "/dashboard");
                }
            };

            $scope.isLongerName = function (value) {
                return value ? value.length > 18 : false;
            };

            $scope.getShorterName = function (value) {
                return $scope.isLongerName(value) ? value.substring(0, 15) + "..." : value;
            };
            
            var setCurrentBoardBasedOnPath = function () {
                var currentPath = $location.path();
                var board = findBoardByUrl(currentPath);
                $scope.currentBoard = board || $scope.availableBoards[0];
            };

            var stringContains = function (sourceString, pattern) {
                return (sourceString.search(pattern) >= 0);
            };

            var initialize = function () {
                var appExtensions = clinicalAppConfigService.getAllConsultationBoards();
                $scope.availableBoards = $scope.availableBoards.concat(appExtensions);
                setCurrentBoardBasedOnPath();
            };

            $scope.$on('$stateChangeStart', function () {
                setCurrentBoardBasedOnPath();
            });

            var findBoardByLabel = function (label) {
                var boards = $scope.availableBoards.filter(function (board) {
                    return board.label === label;
                });
                return boards.length > 0 ? boards[0] : null;
            };

            var findBoardByUrl = function (url) {
                var boards = $scope.availableBoards.filter(function (board) {
                    return stringContains(url, board.url);
                });
                return boards.length > 0 ? boards[0] : null;
            };

            var getUrl = function (board) {
                var urlPrefix = urlHelper.getPatientUrl();
                var url = board.url ? urlPrefix + "/" + board.url : urlPrefix;
                return $location.url(url);
            };

            var contextChange = function () {
                return contextChangeHandler.execute();
            };

            var buttonClickAction = function (board) {
                if ($scope.currentBoard === board) return;

                var contextChangeResponse = contextChange();
                if (!contextChangeResponse["allow"]) {
                    var errorMessage = contextChangeResponse["errorMessage"] ? contextChangeResponse["errorMessage"]: "Please correct errors in the form. Information not saved";
                    messagingService.showMessage('formError', errorMessage);
                    return;
                }
                contextChangeHandler.reset();
                $scope.currentBoard = board;
                return getUrl(board);
            };

            $scope.save = function () {
                var contxChange = contextChange();
                var allowContextChange = contxChange["allow"];
                if (!allowContextChange) {
                    var errorMessage = contxChange["errorMessage"] ? contxChange["errorMessage"] : "Please correct errors in the form. Information not saved";
                    messagingService.showMessage('formError', errorMessage);
                    return;
                }

                var observationFilter = new Bahmni.Common.Domain.ObservationFilter();
                $scope.consultation.saveHandler.fire();
                var tempConsultation = angular.copy($scope.consultation);
                tempConsultation.observations = observationFilter.filter(tempConsultation.observations);
                tempConsultation.consultationNote = observationFilter.filter([tempConsultation.consultationNote])[0];
                tempConsultation.labOrderNote = observationFilter.filter([tempConsultation.labOrderNote])[0];

                var encounterData = new Bahmni.Clinical.EncounterTransactionMapper().map(tempConsultation, $scope.patient, sessionService.getLoginLocationUuid(), retrospectiveEntryService.getRetrospectiveEntry());

                spinner.forPromise(encounterService.create(encounterData).then(function () {
                    $state.transitionTo($state.current, $state.params, {
                        reload: true,
                        inherit: false,
                        notify: true
                    }).then(function () {
                            messagingService.showMessage('info', 'Saved');
                        });
                }).catch(function (error) {
                        var message = Bahmni.Clinical.Error.translate(error) || 'An error has occurred on the server. Information not saved.';
                        messagingService.showMessage('formError', message);
                    }));
            };

            initialize();
        }]);

angular.module('bahmni.clinical')
    .controller('ConceptSetPageController', ['$scope', '$rootScope', '$stateParams', 'conceptSetService', 'clinicalAppConfigService', 'messagingService', 'configurations',
        function ($scope, $rootScope, $stateParams, conceptSetService, clinicalAppConfigService, messagingService, configurations) {
            $scope.consultation.selectedObsTemplate = $scope.consultation.selectedObsTemplate || [];
    $scope.scrollingEnabled = false;
    var extensions = clinicalAppConfigService.getAllConceptSetExtensions($stateParams.conceptSetGroupName);
    var configs = clinicalAppConfigService.getAllConceptsConfig();
	var visitType = configurations.encounterConfig().getVisitTypeByUuid($scope.consultation.visitTypeUuid);
            $scope.context = {visitType: visitType, patient: $scope.patient};
	var numberOfLevels = 2;
    var fields = ['uuid','name', 'names'];
    var customRepresentation = Bahmni.ConceptSet.CustomRepresentationBuilder.build(fields, 'setMembers', numberOfLevels);

    if($scope.consultation.selectedObsTemplate.length == 0){
        conceptSetService.getConceptSetMembers({name:"All Observation Templates",v:"custom:"+customRepresentation}).success(function(response){
            var allTemplates = response.results[0].setMembers;
            var allConceptSections  = allTemplates.map(function(template){
                var conceptSetExtension = _.find(extensions,function(extension){
                    return extension.extensionParams.conceptName === template.name.name;
                }) || {};
                var conceptSetConfig = configs[template.name.name] || {};
                return new Bahmni.ConceptSet.ConceptSetSection(conceptSetExtension, $rootScope.currentUser, conceptSetConfig, $scope.consultation.observations, template);
            });
            $scope.consultation.selectedObsTemplate= allConceptSections.filter(function(conceptSet){
                if(conceptSet.isAvailable($scope.context)){
                    return true;
                }
            });
        });
    }

    $scope.toggleTemplate = function(template){
        $scope.scrollingEnabled = true;

        if(!template.canToggle()){
	        messagingService.showMessage("error","Templates having data cannot be unselected. Please Clear the data and try again");
        } else {
            template.toggle();
            if(template.isAdded){
                messagingService.showMessage("info",template.conceptName+" Added successfully");
            } else if(!template.isAdded){
                messagingService.showMessage("info",template.conceptName+" Removed successfully");
            }
        }
    };

}]);
'use strict';

angular.module('bahmni.clinical')
    .controller('DrugOrderHistoryController', ['$scope', '$filter', '$stateParams', 'prescribedDrugOrders',
        'treatmentConfig', 'TreatmentService', 'spinner', 'clinicalAppConfigService',
        function ($scope, $filter, $stateParams, prescribedDrugOrders, treatmentConfig, treatmentService, spinner, 
                  clinicalAppConfigService) {
            
            var DrugOrderViewModel = Bahmni.Clinical.DrugOrderViewModel;
            var DateUtil = Bahmni.Common.Util.DateUtil;
            var currentVisit = $scope.visit;
            var drugOrderAppConfig = clinicalAppConfigService.getDrugOrderConfig();
            var activeDrugOrdersList = [];
            $scope.dispensePrivilege = Bahmni.Clinical.Constants.dispensePrivilege;

            var createPrescriptionGroups = function (activeAndScheduledDrugOrders) {
                $scope.consultation.drugOrderGroups = [];

                createPrescribedDrugOrderGroups();
                createRecentDrugOrderGroup(activeAndScheduledDrugOrders);
            };

            var getRefillableDrugOrders = function(activeAndScheduledDrugOrders) {
                activeAndScheduledDrugOrders = _(activeAndScheduledDrugOrders).chain().sortBy('orderNumber').reverse().sortBy('effectiveStartDate').reverse().value();
                var refillableDrugOrders = activeAndScheduledDrugOrders;

                var previousVisitDrugOrders = _(getPreviousVisitDrugOrders()).chain().sortBy('orderNumber').reverse().sortBy('effectiveStartDate').reverse().value();
                _.each(previousVisitDrugOrders, function(previousVisitDrugOrder){
                    var isActiveOrScheduled = _.find(activeAndScheduledDrugOrders, function(activeOrScheduledDrugOrder){
                        return previousVisitDrugOrder.drug.uuid === activeOrScheduledDrugOrder.drug.uuid;
                    });
                    if(!isActiveOrScheduled){
                        refillableDrugOrders.push(previousVisitDrugOrder);
                    }
                });
                return refillableDrugOrders;
            };

            var getPreviousVisitDrugOrders = function(){
                var currentVisitIndex = _.findIndex($scope.consultation.drugOrderGroups, function(group){
                    return group.isCurrentVisit;
                });

                if($scope.consultation.drugOrderGroups[currentVisitIndex+1]) {
                    return $scope.consultation.drugOrderGroups[currentVisitIndex+1].drugOrders;
                }
                return [];
            };

            var createRecentDrugOrderGroup = function(activeAndScheduledDrugOrders){
                var refillableGroup = {
                    label: 'Recent',
                    selected: true,
                    drugOrders: getRefillableDrugOrders(activeAndScheduledDrugOrders)
                };
                $scope.consultation.drugOrderGroups.unshift(refillableGroup);
            };

            var createPrescribedDrugOrderGroups = function () {
                if (prescribedDrugOrders.length == 0) return [];
                var sortedDrugOrders = _.sortBy(prescribedDrugOrders, 'orderNumber');
                var drugOrderGroupedByDate = _.groupBy(sortedDrugOrders, function (drugOrder) {
                    return DateUtil.parse(drugOrder.visit.startDateTime);
                });

                var createDrugOrder = function(drugOrder) {
                    return DrugOrderViewModel.createFromContract(drugOrder, drugOrderAppConfig, treatmentConfig);
                };

                var drugOrderGroups = _.map(drugOrderGroupedByDate, function (drugOrders, visitStartDate) {
                    return {
                        label: $filter("date")(DateUtil.parse(visitStartDate), 'dd MMM yy'),
                        visitStartDate: DateUtil.parse(visitStartDate),
                            drugOrders: drugOrders.map(createDrugOrder),
                        isCurrentVisit: currentVisit && DateUtil.isSameDateTime(visitStartDate, currentVisit.startDate)
                    }
                });
                $scope.consultation.drugOrderGroups = $scope.consultation.drugOrderGroups.concat(drugOrderGroups);
                $scope.consultation.drugOrderGroups = _.sortBy($scope.consultation.drugOrderGroups, 'visitStartDate').reverse();
            };

            var getActiveDrugOrders = function() {
                return treatmentService.getActiveDrugOrders($stateParams.patientUuid).then(function (drugOrders) {
                    activeDrugOrdersList = drugOrders || [];
                    return activeDrugOrdersList.map(function (drugOrder) {
                        return DrugOrderViewModel.createFromContract(drugOrder, drugOrderAppConfig,treatmentConfig);
                    });
                });
            };

            var init = function () {
                $scope.consultation.removableDrugs = $scope.consultation.removableDrugs || [];
                $scope.consultation.discontinuedDrugs = $scope.consultation.discontinuedDrugs || [];
                $scope.consultation.drugOrdersWithUpdatedOrderAttributes = $scope.consultation.drugOrdersWithUpdatedOrderAttributes|| {};

                if (!$scope.consultation.drugOrderGroups) {
                    spinner.forPromise(getActiveDrugOrders().then(function(data){
                        $scope.consultation.activeAndScheduledDrugOrders = data;
                        createPrescriptionGroups(data)
                    }));
                }
            };

            $scope.toggleShowAdditionalInstructions = function (line) {
                line.showAdditionalInstructions = !line.showAdditionalInstructions;
            };

            $scope.drugOrderGroupsEmpty = function () {
                return _.isEmpty($scope.consultation.drugOrderGroups);
            };

            $scope.isDrugOrderGroupEmpty = function (drugOrders) {
                return _.isEmpty(drugOrders);
            };

            $scope.showEffectiveFromDate = function (visitStartDate, effectiveStartDate) {
                return $filter("date")(effectiveStartDate, 'dd MMM yy') !== $filter("date")(visitStartDate, 'dd MMM yy');
            };

            $scope.refill = function (drugOrder) {
                $scope.$parent.$broadcast("event:refillDrugOrder", drugOrder);
            };

            $scope.refillAll = function (drugOrders) {
                $scope.$parent.$broadcast("event:refillDrugOrders", drugOrders);
            };

            $scope.revise = function (drugOrder, drugOrders) {
                if (drugOrder.isEditAllowed) {
                    $scope.$parent.$broadcast("event:reviseDrugOrder", drugOrder, drugOrders);
                }
            };

            $scope.discontinue = function (drugOrder) {
                if (drugOrder.isDiscontinuedAllowed) {
                    drugOrder.isMarkedForDiscontinue = true;
                    drugOrder.isEditAllowed = false;
                    $scope.consultation.discontinuedDrugs.push(drugOrder);
                }
            };

            $scope.undoDiscontinue = function (drugOrder) {
                $scope.consultation.discontinuedDrugs = _.reject($scope.consultation.discontinuedDrugs, function (removableOrder) {
                    return removableOrder.uuid === drugOrder.uuid;
                });
                $scope.consultation.removableDrugs = _.reject($scope.consultation.removableDrugs, function (removableOrder) {
                    return removableOrder.previousOrderUuid === drugOrder.uuid;
                });

                drugOrder.isMarkedForDiscontinue = false;
                drugOrder.isEditAllowed = true;
            };



            var removeOrder = function (removableOrder) {
                removableOrder.action = Bahmni.Clinical.Constants.orderActions.discontinue;
                removableOrder.previousOrderUuid = removableOrder.uuid;
                removableOrder.uuid = undefined;
                removableOrder.dateActivated = null;
                $scope.consultation.removableDrugs.push(removableOrder);
            };

            var saveTreatment = function () {
                $scope.consultation.discontinuedDrugs.forEach(function (discontinuedDrug) {
                    var removableOrder = _.find(activeDrugOrdersList, function (prescribedOrder) {
                        return prescribedOrder.uuid === discontinuedDrug.uuid;
                    });
                    if (removableOrder) {
                        removeOrder(removableOrder);
                    }
                });
            };
            $scope.consultation.saveHandler.register(saveTreatment);

            $scope.shouldBeDisabled = function(drugOrder, orderAttribute){
                var hasEncounterExpired = function(){
                    return !($scope.consultation.encounterUuid === orderAttribute.encounterUuid);
                };
                var isAlreadySaved = function(){
                    return orderAttribute.obsUuid
                };
                return !drugOrder.isActive() || (isAlreadySaved() && hasEncounterExpired());
            };

            $scope.updateOrderAttribute = function(drugOrder,orderAttribute,valueToSet){
                if (!$scope.shouldBeDisabled(drugOrder,orderAttribute)) {
                    $scope.toggleDrugOrderAttribute(orderAttribute,valueToSet);
                    $scope.consultation.drugOrdersWithUpdatedOrderAttributes[drugOrder.uuid] = drugOrder;
                }
            };

            $scope.toggleDrugOrderAttribute = function(orderAttribute,valueToSet){
                    orderAttribute.value = valueToSet !== undefined ? valueToSet : !orderAttribute.value;
            };

            $scope.getOrderAttributes = function(){
                return treatmentConfig.orderAttributes;
            };

            $scope.updateAllOrderAttributesByName  = function(orderAttribute,drugOrderGroup){
                drugOrderGroup[orderAttribute.name] = drugOrderGroup[orderAttribute.name] || {};
                drugOrderGroup[orderAttribute.name].selected = drugOrderGroup[orderAttribute.name].selected? false:true;

                drugOrderGroup.drugOrders.forEach(function(drugOrder){
                    var selectedOrderAttribute = drugOrder.orderAttributes.filter(function(orderAttributeInDrugOrder){
                        return orderAttribute.name === orderAttributeInDrugOrder.name;
                    })[0];
                    $scope.updateOrderAttribute(drugOrder,selectedOrderAttribute,drugOrderGroup[orderAttribute.name].selected);
                });
            };

            $scope.allOrderAttributesOfNameSet = function(drugOrderGroup,orderAttributeName){
                var allAttributesSelected = true;
                drugOrderGroup.drugOrders.forEach(function(drugOrder){
                        var orderAttributeOfName = drugOrder.orderAttributes.filter(function(orderAttribute){
                            return orderAttributeName === orderAttribute.name;
                        })[0];
                        if(!$scope.shouldBeDisabled(drugOrder,orderAttributeOfName) && !orderAttributeOfName.value) allAttributesSelected = false;
                });
                drugOrderGroup[orderAttributeName] = drugOrderGroup[orderAttributeName] || {};
                drugOrderGroup[orderAttributeName].selected = allAttributesSelected;
            };

            $scope.canUpdateAtLeastOneOrderAttributeOfName  =function(drugOrderGroup,orderAttributeName){
                var canBeUpdated = false;
                drugOrderGroup.drugOrders.forEach(function(drugOrder){
                    var orderAttributeOfName = drugOrder.orderAttributes.filter(function(orderAttribute){
                        return orderAttributeName === orderAttribute.name;
                    })[0];
                    if(!$scope.shouldBeDisabled(drugOrder,orderAttributeOfName)) canBeUpdated = true;
                });
                return canBeUpdated;
            };

            init();
        }]);
'use strict';

angular.module('bahmni.clinical')
    .controller('LatestPrescriptionPrintController', ['$scope', 'visitActionsService', 'visitInitialization', 'messagingService',
        function ($scope, visitActionsService, visitInitialization, messagingService) {
            var print = function (visit) {
                visitActionsService.printPrescription($scope.patient, visit, visit.startDate);
                messagingService.showMessage("info", "Please close this tab.");
            };

            if ($scope.visitHistory.activeVisit) {
                visitInitialization($scope.visitHistory.activeVisit.uuid).then(function (visit) {
                    $scope.visit = visit;
                    print($scope.visit);
                });
            } else {
                messagingService.showMessage("error", "No Active visit found for this patient.");
            }
        }]);
'use strict';

Bahmni.Clinical.TabularLabOrderResults = (function () {
    var TabularLabOrderResults = function (tabularResult, accessionConfig) {
        var self = this;
        this.tabularResult = tabularResult;

        var filterData = function(list, filteredOn) {
            var indices = _.uniq(_.pluck(self.tabularResult.values, filteredOn));
            return _.filter(list, function (element) {
                return _.contains(indices, element.index)
            });
        };

        var init = function(){
            if(accessionConfig && (accessionConfig.initialAccessionCount || accessionConfig.latestAccessionCount)){
                var tabularValues = _.groupBy(self.tabularResult.values, function(value) {
                    return new Date(value.accessionDateTime);
                });

                tabularValues = _.sortBy(tabularValues, function(value) {
                    return value[0].accessionDateTime;
                });

                var initial = _.first(tabularValues, accessionConfig.initialAccessionCount || 0);
                var latest = _.last(tabularValues, accessionConfig.latestAccessionCount || 0);

                self.tabularResult.values = _.flatten(_.union(initial, latest));
                self.tabularResult.dates = filterData(self.tabularResult.dates, 'dateIndex');
                self.tabularResult.orders = filterData(self.tabularResult.orders, 'testOrderIndex');
            }
        };

        init();

        this.getDateLabels = function () {
            return this.tabularResult.dates.map(function(date) {
                date.date = moment(date.date).toDate();
                return date;  
            });
        };

        this.getTestOrderLabels = function () {
            return this.tabularResult.orders;
        };

        this.hasRange = function(testOrderLabel) {
            return testOrderLabel.minNormal && testOrderLabel.maxNormal;
        };

        this.hasOrders = function() {
            return this.tabularResult.orders.length > 0;
        };

        this.getResult = function(dateLabel, testOrderLabel) {
            var filteredResultValue = this.tabularResult.values.filter(function(value) {
                return value.dateIndex === dateLabel.index && value.testOrderIndex === testOrderLabel.index;
            });
            if(filteredResultValue.length == 0){
                filteredResultValue = [{"result" : " "}];
            }
            return filteredResultValue;
        };

        this.hasUploadedFiles = function(dateLabel, testOrderLabel) {
            return this.getResult(dateLabel, testOrderLabel).some(function(res) {
                return res.uploadedFileName;
            });
        };
    };
    return TabularLabOrderResults;
})();
'use strict';

angular.module('bahmni.clinical')
    .factory('LabOrderResultService', ['$http', '$q','configurationService', function ($http, $q,configurationService) {
    var allTestsAndPanelsConcept = {};
    configurationService.getConfigurations(['allTestsAndPanelsConcept']).then(function (configurations) {
        allTestsAndPanelsConcept = configurations.allTestsAndPanelsConcept.results[0];
    });
    var sanitizeData = function(labOrderResults) {
        labOrderResults.forEach(function(result) {
            result.accessionDateTime = Bahmni.Common.Util.DateUtil.parse(result.accessionDateTime);
            result.hasRange = result.minNormal && result.maxNormal;
        });
    };

    var transformGroupSort = function(results, initialAccessionCount, latestAccessionCount) {
        var labOrderResults = results.results;
        sanitizeData(labOrderResults);

        var accessionConfig = {
            initialAccessionCount: initialAccessionCount,
            latestAccessionCount: latestAccessionCount
        };

        var tabularResult = new Bahmni.Clinical.TabularLabOrderResults(results.tabularResult, accessionConfig);
        var accessions = _.groupBy(labOrderResults, function(labOrderResult) {
            return labOrderResult.accessionUuid;
        });
        accessions = _.sortBy(accessions, function(accession) {
            return accession[0].accessionDateTime;
        });

        if(accessionConfig.initialAccessionCount || accessionConfig.latestAccessionCount){
            var initial = _.first(accessions, accessionConfig.initialAccessionCount || 0);
            var latest = _.last(accessions, accessionConfig.latestAccessionCount || 0);

            accessions = _.union(initial, latest);
        }
        accessions.reverse();
        return {accessions: groupByPanel(accessions), tabularResult: tabularResult};
    };

    var groupByPanel = function(accessions) {
        var grouped = [];
        accessions.forEach(function(labOrders) {
            var panels = {};
            var accessionGroup = [];
            labOrders.forEach(function(labOrder) {
                if(!labOrder.panelName) {
                    labOrder.isPanel = false;
                    labOrder.orderName = labOrder.testName;
                    accessionGroup.push(labOrder);
                } else {
                    panels[labOrder.panelName] = panels[labOrder.panelName] || {accessionDateTime: labOrder.accessionDateTime, orderName: labOrder.panelName, tests: [], isPanel: true};
                    panels[labOrder.panelName].tests.push(labOrder);
                }
            });
            _.values(panels).forEach(function(val) { accessionGroup.push(val)});
            grouped.push(accessionGroup);
        });
        return grouped;
    };

    var flattened = function (accessions) {
        return accessions.map(function (results) {
            return _.flatten(results, function (result) {
                return result.isPanel === true ? [result, result.tests] : result;
            });
        });
    };

    var getAllForPatient = function (params) {
        var deferred = $q.defer();
        var paramsToBeSent = {};
        if (params.visitUuids) {
            paramsToBeSent.visitUuids = params.visitUuids;
        } else {
            if (!params.patientUuid) {
                deferred.reject('patient uuid is mandatory');
            }
            paramsToBeSent.patientUuid = params.patientUuid;
            if (params.numberOfVisits !== 0) {
                paramsToBeSent.numberOfVisits = params.numberOfVisits;
            }
        }

        $http.get(Bahmni.Common.Constants.bahmniLabOrderResultsUrl, {
            method: "GET",
            params: paramsToBeSent,
            withCredentials: true
        }).then(function (response) {
            var results = transformGroupSort(response.data, params.initialAccessionCount, params.latestAccessionCount);
            var sortedConceptSet = new Bahmni.Clinical.ConceptWeightBasedSorter(allTestsAndPanelsConcept);
            var resultObject = {
                labAccessions: flattened(results.accessions.map(sortedConceptSet.sortTestResults)),
                tabular: results.tabularResult
            };
            resultObject.tabular.tabularResult.orders = sortedConceptSet.sortTestResults(resultObject.tabular.tabularResult.orders);
            deferred.resolve(resultObject);
        });

        return deferred.promise;

    };

    return {
        getAllForPatient: getAllForPatient
    };
}]);
'use strict';

angular.module('bahmni.clinical')
    .directive('investigationTableRow', function () {
        var controller = function ($scope) {
            var urlFrom = function (fileName) {
                return Bahmni.Common.Constants.labResultUploadedFileNameUrl + fileName;
            }, defaultParams = {
                showDetailsButton: true
            };
            $scope.params = angular.extend(defaultParams, $scope.params);

            $scope.hasNotes = function () {
                return $scope.test.notes || $scope.test.showNotes ? true : false;
            };

            $scope.showTestNotes = function () {
                return $scope.hasNotes($scope.test);
            };

            $scope.test.showNotes = $scope.hasNotes();
            $scope.test.showDetailsButton = $scope.params.showDetailsButton;
            $scope.test.labReportUrl = $scope.test.uploadedFileName ? urlFrom($scope.test.uploadedFileName) : null;

            $scope.toggle = function () {
                $scope.test.showDetails = !$scope.test.showDetails;
            };

        };
        return {
            restrict: 'A',
            controller: controller,
            scope: {
                test: "=",
                params: "="
            },
            templateUrl: "displaycontrols/investigationresults/views/investigationTableRow.html"
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .directive('investigationTable', function () {
        var controller = function ($scope) {

            var defaultParams = {
                    noLabOrdersMessage: "No Lab Orders for this patient.",
                    showNormalLabResults: true,
                    showAccessionNotes: true,
                    title: "Lab Investigations"
                },
                hasAbnormalTests = function (labOrderResult) {
                    if (labOrderResult.isPanel) {
                        var hasAbnormal = false;
                        labOrderResult.tests.forEach(function (test) {
                            if (test.abnormal) {
                                hasAbnormal = true;
                                return;
                            }
                        });
                        return hasAbnormal;
                    }
                    return labOrderResult.abnormal;
                };

            $scope.params = angular.extend(defaultParams, $scope.params);

            $scope.hasLabOrders = function () {
                return $scope.accessions && $scope.accessions.length > 0;
            };

            $scope.shouldShowResults = function (labOrderResult) {
                return $scope.params.showNormalLabResults || hasAbnormalTests(labOrderResult)
            };

            $scope.toggle = function (item) {
                event.stopPropagation();
                item.show = !item.show;
            };

            $scope.getAccessionDetailsFrom = function(labOrderResults){
                var labResultLine = labOrderResults[0].isPanel?labOrderResults[0].tests[0]:labOrderResults[0];
                return {
                    accessionUuid:labResultLine.accessionUuid,
                    accessionDateTime : labResultLine.accessionDateTime,
                    accessionNotes:labResultLine.accessionNotes
                }
            };

            $scope.toggleAccession = function(labOrderResults) {
                labOrderResults.isOpen = !labOrderResults.isOpen;
            };

            $scope.showAccessionNotes = function(labOrderResults) {
                return $scope.getAccessionDetailsFrom(labOrderResults).accessionNotes && $scope.params.showAccessionNotes;
            };

            $scope.$watch('accessions', function(){
                if($scope.accessions && $scope.accessions[0])
                    $scope.accessions[0].isOpen = true
            });
        };
        return {
            restrict: 'E',
            controller: controller,
            scope: {
                accessions: "=",
                params: "="
            },
            templateUrl: "displaycontrols/investigationresults/views/investigationTable.html"
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .directive('investigationChart', function () {
        var controller = function ($scope) {
            var defaultParams = {
                noLabOrdersMessage: "No Lab Orders for this patient."
            };

            $scope.params = angular.extend(defaultParams, $scope.params);

            $scope.showChart = false;

            $scope.toggleChart = function () {
                $scope.showChart = !$scope.showChart;
            };

            $scope.getUploadedFileUrl = function (uploadedFileName) {
                return Bahmni.Common.Constants.labResultUploadedFileNameUrl + uploadedFileName;
            };
        };
        return {
            restrict: 'E',
            controller: controller,
            scope: {
                accessions: "=",
                params: "="
            },
            templateUrl: "displaycontrols/investigationresults/views/investigationChart.html"
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .directive('investigationResults', ['LabOrderResultService', 'spinner', function (labOrderResultService, spinner) {
        var controller = function ($scope) {
            var defaultParams = {
                showTable: true,
                showChart: true,
                numberOfVisits: 1
            };
            $scope.params = angular.extend(defaultParams, $scope.params);

            var params = {
                patientUuid: $scope.params.patientUuid,
                numberOfVisits: $scope.params.numberOfVisits,
                visitUuids: $scope.params.visitUuids,
                initialAccessionCount: $scope.params.initialAccessionCount,
                latestAccessionCount: $scope.params.latestAccessionCount
            };
            spinner.forPromise(labOrderResultService.getAllForPatient(params)
                .then(function (results) {
                    $scope.investigationResults = results;
                }));
        };
        return {
            restrict: 'E',
            controller: controller,
            scope: {
                params: "="
            },
            templateUrl: "displaycontrols/investigationresults/views/investigationResults.html"
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
    .directive('treatmentData', ['TreatmentService', 'spinner', function (treatmentService, spinner) {
        var controller = function ($scope) {
            var Constants = Bahmni.Clinical.Constants;
            var defaultParams = {
                showListView: true,
                showRoute: false,
                showDrugForm: false,
                numberOfVisits: 1
            };
            $scope.params = angular.extend(defaultParams, $scope.params);

            var init = function () {
                var getToDate = function () {
                    return $scope.visitSummary.stopDateTime || Bahmni.Common.Util.DateUtil.now();
                };

                return treatmentService.getPrescribedAndActiveDrugOrders($scope.params.patientUuid, $scope.params.numberOfVisits,
                    $scope.params.showOtherActive, $scope.params.visitUuids || [])
                    .then(function (response) {
                        var groupedByVisit = _.groupBy(response.data.visitDrugOrders, function (drugOrder) {
                            return drugOrder.visit.startDateTime;
                        });
                        var treatmentSections = [];

                        for (var key in groupedByVisit) {
                            var values = Bahmni.Clinical.DrugOrder.Util.mergeContinuousTreatments(groupedByVisit[key]);
                            treatmentSections.push({visitDate: key, drugOrders: values});
                        }
                        if (!_.isEmpty(response.data[Constants.otherActiveDrugOrders])) {
                            var mergedOtherActiveDrugOrders = Bahmni.Clinical.DrugOrder.Util.mergeContinuousTreatments(response.data[Constants.otherActiveDrugOrders]);
                            treatmentSections.push({
                                visitDate: Constants.otherActiveDrugOrders,
                                drugOrders: mergedOtherActiveDrugOrders
                            });
                        }
                        $scope.treatmentSections = treatmentSections;
                        if ($scope.visitSummary) {
                            $scope.ipdDrugOrders = Bahmni.Clinical.VisitDrugOrder.createFromDrugOrders(response.data.visitDrugOrders, $scope.visitSummary.startDateTime, getToDate());
                        }
                    });
            };

            spinner.forPromise(init());
        };
        return {
            restrict: 'E',
            controller: controller,
            scope: {
                params: "=",
                visitSummary: "=?"
            },
            templateUrl: "displaycontrols/treatmentData/views/treatmentData.html"
        };
    }]);
'use strict';

angular.module('bahmni.clinical')
    .directive('treatmentTable', function () {

        var controller = function ($scope) {
            $scope.isOtherActiveSection = function (dateString) {
                return dateString === Bahmni.Clinical.Constants.otherActiveDrugOrders;
            };
        };

        return {
            templateUrl: "displaycontrols/treatmentData/views/treatmentTable.html",
            scope: {
                drugOrderSections: "=",
                params: "="
            },
            controller: controller
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .directive('treatmentChart', function () {


        var controller = function ($scope) {
            $scope.atLeastOneDrugForDay = function (day) {
                var atLeastOneDrugForDay = false;
                $scope.ipdDrugOrders.getIPDDrugs().forEach(function (drug) {
                    if (drug.isActiveOnDate(day.date)) {
                        atLeastOneDrugForDay = true;
                    }
                });
                return atLeastOneDrugForDay;
            };

            $scope.getVisitStopDateTime = function(){
                return $scope.visitSummary.stopDateTime || Bahmni.Common.Util.DateUtil.now();
            };
        };


        return {
            templateUrl: "displaycontrols/treatmentData/views/treatmentChart.html",
            scope: {
                ipdDrugOrders: "=",
                visitSummary: "=",
                params: "="
            },
            controller: controller
        };
    });
'use strict';

angular.module('bahmni.clinical')
    .directive('treatmentTableRow', function () {
        var controller = function ($scope) {

            $scope.showDetails = false;

            $scope.toggle = function () {
                $scope.showDetails = !$scope.showDetails;
            };
        };
        return {
            restrict: 'A',
            controller: controller,
            scope: {
                drugOrder: "=",
                params: "="
            },
            templateUrl: "displaycontrols/treatmentData/views/treatmentTableRow.html"
        };
    });
Bahmni.Clinical.DrugOrder.Util = {
    mergeContinuousTreatments: function(continuousDrugOrders){
        var sortedDrugOrders = _.sortBy(continuousDrugOrders, 'effectiveStartDate');
        var drugOrders = [];
        sortedDrugOrders.forEach(function (drugOrder) {
            drugOrder.span = {};

            var areValuesEqual = function(value1, value2){
                if(typeof value1 == "boolean" && typeof value2 == "boolean"){
                    return value1 == value2;
                }
                return value1 == value2 || (_.isEmpty(value1) && _.isEmpty(value2));
            };

            var foundDrugOrder = _.find(drugOrders, function (existingOrder) {
                return areValuesEqual(existingOrder.drug.uuid, drugOrder.drug.uuid)
                    && areValuesEqual(existingOrder.instructions, drugOrder.instructions)
                    && areValuesEqual(existingOrder.getDoseInformation(), drugOrder.getDoseInformation())
                    && areValuesEqual(existingOrder.route, drugOrder.route)
                    && areValuesEqual(existingOrder.additionalInstructions,drugOrder.additionalInstructions)
                    && areValuesEqual(existingOrder.asNeeded, drugOrder.asNeeded)
                    && areValuesEqual(existingOrder.isDiscontinuedOrStopped(), drugOrder.isDiscontinuedOrStopped())
                    && Bahmni.Common.Util.DateUtil.diffInDaysRegardlessOfTime(new Date(existingOrder.lastStopDate), new Date(drugOrder.scheduledDate)) <= 1
            });

            if (foundDrugOrder) {
                if (foundDrugOrder.span.hasOwnProperty(drugOrder.durationUnit)) {
                    foundDrugOrder.span[drugOrder.durationUnit] += drugOrder.duration;
                } else {
                    foundDrugOrder.span[drugOrder.durationUnit] = drugOrder.duration;
                }
                foundDrugOrder.lastStopDate = drugOrder.effectiveStopDate;
            } else {
                drugOrder.span[drugOrder.durationUnit] = drugOrder.duration;
                drugOrder.lastStopDate = drugOrder.effectiveStopDate;
                drugOrders.push(drugOrder);
            }
        });
        return drugOrders;
    }
};

'use strict';

angular.module('bahmni.clinical')
    .directive('visitsTable', ['patientVisitHistoryService', 'spinner', '$state', function (patientVisitHistoryService, spinner, $state) {
        var controller = function ($scope) {
            spinner.forPromise(patientVisitHistoryService.getVisitHistory($scope.patientUuid).then(function (visitHistory) {
                $scope.visits = visitHistory.visits;
            }));
            
            $scope.openVisit = function(visit) {
                if($scope.$parent.closeThisDialog){
                    $scope.$parent.closeThisDialog("closing modal");
                }
                $state.go('patient.visit', {visitUuid: visit.uuid});
            };

            $scope.hasVisits = function () {
                return $scope.visits && $scope.visits.length > 0;
            };
            $scope.params = angular.extend(
                {
                    maximumNoOfVisits: 4,
                    title: "Visits"
                }, $scope.params);

            $scope.noVisitsMessage = "No Visits for this patient.";
        };
        return {
            restrict: 'E',
            controller: controller,
            templateUrl: "displaycontrols/allvisits/views/visitsTable.html",
            scope: {
                params: "=",
                patientUuid: "="
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

angular.module('bahmni.common.patient')
.directive('patientControlPanel', ['$q', '$rootScope', '$stateParams', '$state', 'contextChangeHandler', 'encounterService', 'configurations', 'clinicalAppConfigService',
        function($q, $rootScope, $stateParams, $state, contextChangeHandler, encounterService, configurations, clinicalAppConfigService) {
            
    var controller = function ($scope) {
        $scope.activeVisit = $scope.visitHistory.activeVisit;

        var DateUtil = Bahmni.Common.Util.DateUtil;
        $scope.retrospectivePrivilege = Bahmni.Common.Constants.retrospectivePrivilege;

        $scope.today = DateUtil.getDateWithoutTime(DateUtil.now());

        $scope.getDashboardLink = function() {
            return "#/patient/" + $scope.patient.uuid + "/dashboard";
        };

        $scope.changeContext = function($event) {
            var allowContextChange = contextChangeHandler.execute()["allow"];

            if(!allowContextChange) {
                $event.preventDefault();
                return;
            }
            $rootScope.toggleControlPanel();
        };

        $scope.isCurrentVisit = function (visit) {
            return $stateParams.visitUuid === visit.uuid;
        };

        var getLinks = function () {
            var state = $state.current.name;
            if (state.match("patient.consultation")) {
                return ([{text: "Dashboard", icon: "btn-summary dashboard-btn", href: $scope.getDashboardLink()}]);
            } else {
                var links = [];
                if ($scope.activeVisit) {
                    links.push({text: "Consultation", icon: "btn-consultation dashboard-btn", href: "#" + clinicalAppConfigService.getConsultationBoardLink()});
                }
                if (state.match("patient.dashboard")) {
                    links.push({text: "Trends", icon: "btn-trends dashboard-btn", href: "../trends/#/patients/" + $scope.patient.uuid});
                } else if (state.match("patient.visit")) {
                    links.push({text: "Dashboard", icon: "btn-summary dashboard-btn", href: "#/patient/" + $scope.patient.uuid + "/dashboard"});
                }
                return links;
            }
        };

        var getStartDateTime = function () {
            return $scope.visitHistory.visits.filter(function (visit) {
                return visit.uuid === $scope.visit.uuid;
            })[0].startDatetime;
        };

        $scope.links = getLinks();
        $rootScope.$on('$stateChangeSuccess', function() {
            $scope.links = getLinks($state.current.name);
        });

        var encounterTypeUuid =  configurations.encounterConfig().getPatientDocumentEncounterTypeUuid();
        $scope.documentsPromise = encounterService.getEncountersForEncounterType($scope.patient.uuid, encounterTypeUuid).then(function(response) {
            return new Bahmni.Clinical.PatientFileObservationsMapper().map(response.data.results);
        });
    };

    return {
        restrict: 'E',
        templateUrl: 'patientcontrolpanel/views/controlPanel.html',
        controller: controller,
        scope: {
            patient: "=",
            visitHistory: "=",
            visit: "="
        }
    };
}]);
'use strict';

angular.module('bahmni.clinical').factory('initialization',
    ['authenticator', 'appService', 'spinner', 'configurations',
        function (authenticator, appService, spinner, configurations) {

            var loadConfigPromise = function () {
                return configurations.load([
                    'patientConfig',
                    'encounterConfig',
                    'consultationNoteConfig',
                    'labOrderNotesConfig',
                    'radiologyImpressionConfig',
                    'allTestsAndPanelsConcept',
                    'dosageFrequencyConfig',
                    'dosageInstructionConfig'
                ]);
            };

            var initApp = function () {
                return appService.initApp('clinical', {'app': true, 'extension': true },null,["dashboard","visit"]);
            };

            return spinner.forPromise(authenticator.authenticateUser().then(initApp).then(loadConfigPromise));
        }
    ]
);

'use strict';

angular.module('bahmni.clinical').factory('patientInitialization',
    ['$q', 'patientService', 'configurations',
        function ($q, patientService, configurations) {

            return function (patientUuid) {
                var getPatient = function () {
                    var patientMapper = new Bahmni.PatientMapper(configurations.patientConfig());
                    return patientService.getPatient(patientUuid).then(function (openMRSPatientResponse) {
                        var patient = patientMapper.map(openMRSPatientResponse.data);
                        return {"patient": patient};
                    })
                };

                return getPatient();
            }
        }]
);

'use strict';

angular.module('bahmni.clinical').factory('visitHistoryInitialization',
    ['patientVisitHistoryService',
        function (patientVisitHistoryService) {
            return function (patientUuid) {
                return patientVisitHistoryService.getVisitHistory(patientUuid);
            }
        }
    ]
);

'use strict';

angular.module('bahmni.clinical').factory('consultationInitialization',
    ['diagnosisService', '$rootScope', 'encounterService', 'sessionService', 'configurations',
        function (diagnosisService, $rootScope, encounterService, sessionService, configurations) {
            return function (patientUuid) {

                var getActiveEncounter = function () {
                    var currentProviderUuid = $rootScope.currentProvider ? $rootScope.currentProvider.uuid : null;
                    var consultationMapper = new Bahmni.ConsultationMapper(configurations.dosageFrequencyConfig(), configurations.dosageInstructionConfig(),
                        configurations.consultationNoteConcept(), configurations.labOrderNotesConcept());
                    return encounterService.activeEncounter({
                        patientUuid: patientUuid,
                        providerUuid: currentProviderUuid,
                        includeAll: Bahmni.Common.Constants.includeAllObservations,
                        locationUuid: sessionService.getLoginLocationUuid()
                    }).then(function (encounterTransactionResponse) {
                        return consultationMapper.map(encounterTransactionResponse.data);
                    });
                };

                var getRetrospectiveEncounter = function () {
                    var currentProviderUuid = $rootScope.currentProvider ? $rootScope.currentProvider.uuid : null;
                    var consultationMapper = new Bahmni.ConsultationMapper(configurations.dosageFrequencyConfig(), configurations.dosageInstructionConfig(),
                        configurations.consultationNoteConcept(), configurations.labOrderNotesConcept());
                    var dateUtil = Bahmni.Common.Util.DateUtil;
                    var encounterDate = dateUtil.parseLongDateToServerFormat(dateUtil.getDateWithoutHours($rootScope.retrospectiveEntry.encounterDate));
                    return encounterService.find({
                        patientUuid: patientUuid,
                        providerUuid: currentProviderUuid,
                        includeAll: Bahmni.Common.Constants.includeAllObservations,
                        encounterDateTimeFrom: encounterDate,
                        encounterDateTimeTo: encounterDate
                    }).then(function (encounterTransactionResponse) {
                        return consultationMapper.map(encounterTransactionResponse.data[0]);
                    });
                };

                var getEncounter = function () {
                    if ($rootScope.retrospectiveEntry.isRetrospective) {
                        return getRetrospectiveEncounter()
                    }
                    return getActiveEncounter();
                };

                return getEncounter().then(function (consultation) {
                    return diagnosisService.getPastAndCurrentDiagnoses(patientUuid, consultation.encounterUuid).then(function (diagnosis) {
                        consultation.pastDiagnoses = diagnosis.pastDiagnoses;
                        consultation.savedDiagnosesFromCurrentEncounter = diagnosis.savedDiagnosesFromCurrentEncounter;
                        consultation.saveHandler = new Bahmni.Clinical.SaveHandler();
                        consultation.postSaveHandler = new Bahmni.Clinical.SaveHandler();
                        return consultation;
                    })
                });
            }
        }]
);

'use strict';

angular.module('bahmni.clinical').factory('visitInitialization',
    ['encounterService', 'clinicalAppConfigService', 'conceptSetUiConfigService', 'retrospectiveEntryService', 'configurations',
        function (encounterService, clinicalAppConfigService, conceptSetUiConfigService, retrospectiveEntryService, configurations) {

            return function (visitUuid) {
                var getVisit = function () {
                    return encounterService.search(visitUuid).then(function (encounterTransactionsResponse) {
                        var obsIgnoreList = clinicalAppConfigService.getObsIgnoreList();
                        return Bahmni.Clinical.Visit.create(encounterTransactionsResponse.data,
                            configurations.consultationNoteConcept(), configurations.labOrderNotesConcept(), configurations.encounterConfig(),
                            configurations.allTestsAndPanelsConcept(), obsIgnoreList, visitUuid, conceptSetUiConfigService.getConfig(), retrospectiveEntryService.getRetrospectiveEntry().encounterDate);
                    });
                };

                return getVisit();
            }
        }]
);

'use strict';

angular.module('bahmni.clinical').factory('visitSummaryInitialization',
    ['visitService',
        function (visitService) {

            return function (visitUuid) {
                var getVisit = function () {
                    return visitService.getVisitSummary(visitUuid).then(function (visitSummaryResponse) {
                        return visitSummaryResponse.data;
                    });
                };
                return getVisit();
            }
        }]
);


Bahmni.Clinical.Constants = (function () {
    var orderTypes = {
        lab: "Lab Order",
        radiology: "Radiology Order"
    };
    var dosingTypes = {
        uniform: "uniform",
        variable: "variable"
    };
    var orderActions = {
        discontinue: 'DISCONTINUE',
        new: 'NEW',
        revise: 'REVISE'
    };
    var errorMessages = {
        discontinuingAndOrderingSameDrug: "Discontinuing and ordering the same drug is not allowed. Instead, use edit",
        incompleteForm: "Please click on Add or Clear to continue",
        invalidItems: "Highlighted items in New Prescription section are incomplete. Please edit or remove them to continue"
    };
    return {
        patientsListUrl: "/patient/search",
        diagnosisObservationConceptName: "Visit Diagnoses",
        orderConceptName: "Diagnosis order",                   //TODO : should be fetched from a config
        certaintyConceptName: "Diagnosis Certainty",           //TODO : should be fetched from a config
        nonCodedDiagnosisConceptName: "Non-coded Diagnosis",       //TODO : should be fetched from a config
        codedDiagnosisConceptName: "Coded Diagnosis",      //TODO : should be fetched from a config
        orderTypes: orderTypes,
        labOrderType: "Lab Order",
        drugOrderType: "Drug Order",
        labConceptSetName: "Lab Samples",
        testConceptName: "LabTest",
        labSetConceptName: "LabSet",
        labDepartmentsConceptSetName: "Lab Departments",
        otherInvestigationsConceptSetName: "Other Investigations",
        otherInvestigationCategoriesConceptSetName: "Other Investigations Categories",
        commentConceptName: "COMMENTS",
        messageForNoLabOrders: "No lab orders.",
        messageForNoObservation: "No observations captured for this visit.",
        messageForNoActiveVisit: "No active visit.",
        dischargeSummaryConceptName: "Discharge Summary",
        flexibleDosingInstructionsClass: "org.openmrs.module.bahmniemrapi.drugorder.dosinginstructions.FlexibleDosingInstructions",
        reviseAction: 'REVISE',
        asDirectedInstruction: 'As directed',
        dosingTypes: dosingTypes,
        orderActions: orderActions,
        errorMessages: errorMessages,
        caseIntakeConceptClass:'Case Intake',
        dialog:'DIALOG',
        dashboard:'DASHBOARD',
        default:'DEFAULT',
        otherActiveDrugOrders: "Other Active DrugOrders",
        dispensePrivilege: "bahmni:clinical:dispense",
        mandatoryVisitConfigUrl: "config/visit.json"
    };
})();



'use strict';

angular.module('consultation', ['ui.router', 'bahmni.clinical', 'bahmni.common.config', 'bahmni.common.patient', 'bahmni.common.uiHelper', 'bahmni.common.patientSearch', 'bahmni.common.obs',
    'bahmni.common.domain', 'bahmni.common.conceptSet', 'authentication', 'bahmni.common.appFramework', 'bahmni.common.displaycontrol.observation',
    'bahmni.common.displaycontrol.pivottable', 'bahmni.common.displaycontrol.dashboard', 'bahmni.common.gallery',
    'bahmni.common.displaycontrol.disposition', 'bahmni.common.displaycontrol.admissiondetails', 'bahmni.common.routeErrorHandler', 'bahmni.common.displaycontrol.disposition',
    'httpErrorInterceptor', 'pasvaz.bindonce', 'infinite-scroll', 'bahmni.common.util', 'ngAnimate', 'ngDialog', 'angular-gestures',
    'bahmni.common.displaycontrol.patientprofile', 'bahmni.common.displaycontrol.diagnosis','RecursionHelper','ngSanitize']);
angular.module('consultation')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', function ($stateProvider, $httpProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/patient/search');
        var patientSearchBackLink = {label: "<u>P</u>atients", state: "patientsearch", accessKey: "p", id: "patients-link", icon: "icon-circle-arrow-left"};
        var homeBackLink = {label: "", url: "../home/", icon: "icon-home"};
        $stateProvider
            .state('patientsearch', {
                url: '/patient/search',
                views: {
                    'content': {
                        templateUrl: '../common/patient-search/views/patientsList.html',
                        controller: 'PatientsListController'
                    },
                    'additional-header': {
                        templateUrl: '../common/ui-helper/header.html',
                        controller: 'PatientListHeaderController'
                    }
                },
                data: {
                    backLinks: [homeBackLink]
                },
                resolve: {
                    initialization: 'initialization'
                }
            })
            .state('patient', {
                url: '/patient/:patientUuid',
                abstract: true,
                data: {
                    backLinks: [homeBackLink, patientSearchBackLink]
                },

                views: {
                    'additional-header': { template: '<div ui-view="additional-header"></div>' },
                    'content': {
                        template: '<div ui-view="content"></div><patient-control-panel patient="patient" visit-history="visitHistory" visit="visit" show="showControlPanel"/>',
                        controller: function ($scope, patientContext, visitHistory) {
                            $scope.patient = patientContext.patient;
                            $scope.visitHistory = visitHistory;
                        }
                    }
                },
                resolve: {
                    initialization: 'initialization',
                    patientContext: function (initialization, patientInitialization, $stateParams) {
                        return patientInitialization($stateParams.patientUuid);
                    },
                    visitHistory: function (visitHistoryInitialization, $stateParams) {
                        return visitHistoryInitialization($stateParams.patientUuid);
                    }
                }
            })
            .state('patient.dashboard', {
                url: '/dashboard',
                views: {
                    'additional-header': {
                        templateUrl: 'dashboard/views/dashboardHeader.html',
                        controller: 'DashboardHeaderController'
                    },
                    'content': {
                        templateUrl: 'dashboard/views/dashboard.html',
                        controller: 'PatientDashboardController'
                    }
                },
                resolve: {
                    dashboardInitialization: function(initialization, clinicalDashboardConfig) {
                        return clinicalDashboardConfig.load();
                    },
                    addToRecentlyViewedQueue: function($rootScope, patientContext, clinicalDashboardConfig, userService) {
                        $rootScope.currentUser.addToRecentlyViewed(patientContext.patient, clinicalDashboardConfig.currentDashboard.maxRecentlyViewedPatients || 10);
                        return userService.savePreferences();
                    }
                }
            })
            .state('patient.visit', {
                url: '/dashboard/visit/:visitUuid',
                data: {
                    backLinks: [homeBackLink, patientSearchBackLink]
                },
                views: {
                    'additional-header': {
                        templateUrl: 'common/views/visitHeader.html',
                        controller: 'VisitHeaderController'
                    },
                    'content': {
                        templateUrl: 'common/views/visit.html',
                        controller: 'VisitController'
                    }
                },
                resolve: {
                    visitSummary: function(visitSummaryInitialization, $stateParams){
                        return visitSummaryInitialization($stateParams.visitUuid);
                    },
                    visitConfigInitialization: function(initialization, visitTabConfig) {
                        return visitTabConfig.load();
                    },
                    visitContext: function (visitInitialization, visitHistory, initialization, $rootScope) {
                        if (visitHistory.activeVisit) {
                            return visitInitialization(visitHistory.activeVisit.uuid).then(function(visit) {
                                $rootScope.visit = visit;
                            });
                        }
                        return null;
                    }
                }
            })
            .state('patient.consultation', {
                url: '',
                abstract: true,
                data: {
                    backLinks: [homeBackLink, patientSearchBackLink]
                },
                views: {
                    'additional-header': {
                        templateUrl: 'consultation/views/header.html',
                        controller: 'ConsultationController'
                    },
                    'content': {
                        template: '<ui-view/>',
                        controller: function ($scope, consultationContext) {
                            $scope.consultation = consultationContext;
                        }
                    }
                },
                resolve: {
                    consultationContext: function (consultationInitialization, initialization, $stateParams) {
                        return consultationInitialization($stateParams.patientUuid);
                    }
                }
            })
            .state('patient.consultation.visit', {
                url: '/visit/:visitUuid',
                templateUrl: 'common/views/visit.html',
                controller: 'VisitController',
                resolve:{
                visitSummary: function(visitSummaryInitialization, $stateParams) {
                    return visitSummaryInitialization($stateParams.visitUuid);
                }}
            })
            .state('patient.consultation.summary', {
                url: '/consultation',
                templateUrl: 'consultation/views/consultation.html',
                controller: 'ConsultationSummaryController'
            })
            .state('patient.consultation.investigation', {
                url: '/investigation',
                templateUrl: 'consultation/views/investigations.html',
                controller: 'InvestigationController'
            })
            .state('patient.consultation.diagnosis', {
                url: '/diagnosis',
                templateUrl: 'consultation/views/diagnosis.html',
                controller: 'DiagnosisController'
            })
            .state('patient.consultation.treatment', {
                abstract: true,
                templateUrl: 'consultation/views/treatment.html'
            })
            .state('patient.consultation.treatment.page', {
                url: '/treatment',
                views: {
                    "addTreatment": {
                        controller: 'TreatmentController',
                        templateUrl: 'consultation/views/treatmentSections/addTreatment.html',
                        resolve: {
                            treatmentConfig: 'treatmentConfig'
                        }
                    },
                    "viewHistory": {
                        controller: 'DrugOrderHistoryController',
                        templateUrl: 'consultation/views/treatmentSections/drugOrderHistory.html',
                        resolve: {
                            prescribedDrugOrders: function (TreatmentService, $stateParams) {
                                return TreatmentService.getPrescribedDrugOrders($stateParams.patientUuid, true, 3);
                            },
                            treatmentConfig: 'treatmentConfig'
                        }
                    }
                }
            })
            .state('patient.consultation.disposition', {
                url: '/disposition',
                templateUrl: 'consultation/views/disposition.html',
                controller: 'DispositionController'
            })
            .state('patient.consultation.conceptSet', {
                url: '/concept-set-group/:conceptSetGroupName',
                templateUrl: 'consultation/views/conceptSet.html',
                controller: 'ConceptSetPageController'
            })
            .state('patient.consultation.notes', {
                url: '/notes',
                templateUrl: 'consultation/views/notes.html'
            })
            .state('patient.consultation.templates', {
                url: '/templates',
                templateUrl: 'views/comingSoon.html'
            })
            .state('patient.visitsummaryprint', {
                url: '/latest-prescription-print',
                views: {
                    content: {
                        controller: 'LatestPrescriptionPrintController'
                    }
                }
            });
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
    }]).run(['stateChangeSpinner', '$rootScope', function (stateChangeSpinner, $rootScope) {
//        debugUiRouter($rootScope);
        FastClick.attach(document.body);
        stateChangeSpinner.activate();

        $rootScope.$on('$stateChangeSuccess', function() {
            window.scrollTo(0,0);
        });
    }]);
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