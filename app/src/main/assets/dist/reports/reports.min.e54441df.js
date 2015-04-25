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

String.prototype.format = function() {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);
    }
    return content;
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
Bahmni.Reports = Bahmni.Reports || {};

angular.module('bahmni.reports', ['ui.router', 'bahmni.common.config', 'bahmni.common.uiHelper',
    'bahmni.common.domain', 'authentication', 'bahmni.common.appFramework', 'bahmni.common.routeErrorHandler',
    'httpErrorInterceptor', 'pasvaz.bindonce', 'infinite-scroll', 'bahmni.common.util', 'ngSanitize']);
'use strict';

angular.module('bahmni.reports').factory('initialization',
    ['authenticator', 'appService', 'spinner', 'configurations',
        function (authenticator, appService, spinner, configurations) {

            var loadConfigPromise = function () {
                return configurations.load([]);
            };

            var initApp = function () {
                return appService.initApp('reports', {'app': true, 'extension': true }, null, ["reports"]);
            };

            return spinner.forPromise(authenticator.authenticateUser().then(initApp).then(loadConfigPromise));
        }
    ]
);

'use strict';

angular.module('bahmni.reports')
    .service('reportService', function () {
        var generateReport = function (report) {
            var url = Bahmni.Common.Constants.reportsUrl;
            url = (url + "?name={0}&startDate={1}&endDate={2}&responseType={3}").
                    format(report.name, report.startDate, report.stopDate, report.responseType);
            window.open(url);
       };

        return {
            generateReport: generateReport
        };
    });

'use strict';

angular.module('bahmni.reports')
    .controller('DashboardController', ['$scope', 'appService', 'reportService', function ($scope, appService, reportService) {

        appService.loadConfig('reports').then(function (response) {
            $scope.reports = response.data;
        });

        $scope.default = {};

        $scope.setDefault = function (item) {
            $scope.reports.forEach(function (report) {
                report[item] = $scope.default[item];
            })
        };

        $scope.runReport = function (report) {
            report.startDate = Bahmni.Common.Util.DateUtil.getDateWithoutTime(report.startDate).toString();
            report.stopDate = Bahmni.Common.Util.DateUtil.getDateWithoutTime(report.stopDate).toString();
            reportService.generateReport(report);
        };
    }]);

'use strict';

angular
    .module('bahmni.reports')
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    'additional-header': {
                        templateUrl: 'views/dashboardHeader.html'
                    },
                    'content': {
                        templateUrl: 'views/dashboard.html',
                        controller: 'DashboardController'
                    }
                },
                data: {
                    backLinks: [
                        {label: "Home", url: "../home/", icon: "icon-home"}
                    ]
                },
                resolve: {
                    initialization: 'initialization'
                }
            });
    }]).run(function ($rootScope, $templateCache) {
//                debugUiRouter($rootScope);
//        Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', function () {
                $templateCache.removeAll();
            }
        );
    });