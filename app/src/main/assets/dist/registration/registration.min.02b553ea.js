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

angular.module('bahmni.common.uiHelper', ['ngClipboard']);

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
    .directive('focusMe',

    function ($timeout, $parse) {
        return {
            link: function (scope, element, attrs) {
                var model = $parse(attrs.focusMe);
                scope.$watch(model, function(value) {
                    if (value === true) {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    }
);
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
angular.module('bahmni.common.photoCapture', []);
'use strict';

angular.module('bahmni.common.photoCapture')
    .directive('capturePhoto', ['$parse', '$window',function factory($parse, $window) {
        var link = function(scope, iElement, iAttrs) {
            var activeStream,
                dialogElement = iElement.find(".photoCaptureDialog"),
                video = dialogElement.find("video")[0],
                canvas = dialogElement.find("canvas")[0],
                confirmImageButton = dialogElement.find(".confirmImage"),
                streaming = false,
                dialogOpen = false;
             var context = canvas.getContext("2d");
             var pixelRatio = window.devicePixelRatio;
             context.scale(pixelRatio, pixelRatio);

            scope.launchPhotoCapturePopup = function () {
                if(dialogOpen) {
                    alert("Please allow access to web camera and wait for photo capture dialog to be launched");
                    return;
                }
                dialogOpen = true;
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                if (navigator.getUserMedia) {
                    navigator.getUserMedia(
                        {video: true, audio: false},
                        function (localMediaStream) {
                            video.src = $window.URL.createObjectURL(localMediaStream);
                            activeStream = localMediaStream;
                            dialogElement.dialog('open');
                        },
                        function () {
                            alert("Could not get access to web camera. Please allow access to web camera");
                        }
                    );
                } else {
                    alert('Photo capture is not supported in your browser. Please use chrome');
                }
            };

            var closeDialog = function(){
                dialogElement.dialog('close');
            }

            var onConfirmationSuccess = function(image){
                var ngModel = $parse(iAttrs.ngModel);
                ngModel.assign(scope, image);
                closeDialog();
            }    

            scope.confirmImage = function () {
                var dataURL = canvas.toDataURL("image/jpeg");
                var image = dataURL;
                if(iAttrs.capturePhoto) {
                    var onConfirmationPromise = scope[iAttrs.capturePhoto](image);
                    onConfirmationPromise.then(function(){
                        onConfirmationSuccess(image);
                    }, function(response){
                        alert("Failed to save image. Please try again later");
                    });
                } else {
                    onConfirmationSuccess(image);
                }

            };

            scope.clickImage = function () {
                var sourceX = 0;
                var sourceY = 0;
                var destX = 0;
                var destY = 0;

                if (canvas.width > canvas.height) {
                    var stretchRatio = ( video.videoWidth / canvas.width );
                    var sourceWidth = video.videoWidth;
                    var sourceHeight = Math.floor(canvas.height * stretchRatio);
                    sourceY = Math.floor((video.videoHeight - sourceHeight)/2);
                } else {
                    var stretchRatio = ( video.videoHeight / canvas.height );
                    var sourceWidth = Math.floor(canvas.width * stretchRatio);
                    var sourceHeight = video.videoHeight;
                    sourceX = Math.floor((video.videoWidth - sourceWidth)/2);
                }
                var destWidth = Math.floor(canvas.width / pixelRatio);
                var destHeight = Math.floor(canvas.height / pixelRatio);
                context.drawImage(video, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
                confirmImageButton.prop('disabled', false);
                confirmImageButton.focus();
            };

            dialogElement.dialog({autoOpen: false, height: 300, width: 500, modal: true,
                close: function(){
                    dialogOpen = false;
                    if (activeStream) {
                        activeStream.stop();
                    }
                }
            });

            iElement.bind("$destroy", function() {
                dialogElement.dialog("destroy");
            });
        }


        var directiveDefinitionObject = {
            templateUrl: '../common/photo-capture/views/photo.html',
            restrict: 'A',
            scope: true,
            link: link
        };
        return directiveDefinitionObject;
    }]);

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
angular.module('bahmni.common.patient', []);

angular.module('bahmni.common.patient')
.filter('age', function() {
	return function(age) {
		if(age.years) return age.years + " y";
		if(age.months) return age.months + " m";
		return age.days + " d";
	};
});
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

angular.module('bahmni.common.conceptSet')
    .directive('latestObs', function () {
        var controller = function ($scope, observationsService, $q, spinner) {
            var init = function () {
                spinner.forPromise(observationsService.fetch($scope.patientUuid, $scope.conceptNames, "latest").then(function (response) {
                    var observations = new Bahmni.Common.Obs.ObservationMapper().map(response.data, []);
                    $scope.observations = _.sortBy(observations, 'sortWeight');
                }));
            };
            init();
        };


        return {
            restrict: 'E',
            controller: controller,
            templateUrl: '../common/concept-set/views/latestObs.html',
            scope: {
                patientUuid: "=",
                conceptNames: "="
            }
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

angular.module('bahmni.common.uiHelper')
.filter('thumbnail', function() {
	return function(url) {
	    if(url){
	        return Bahmni.Common.Constants.documentsPath + '/' + url.replace(/(.*)\.(.*)$/, "$1_thumbnail.$2") || null;
	    }
	};
});
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

angular.module('bahmni.registration', ['ui.router', 'bahmni.common.config', 'bahmni.common.domain', 'bahmni.common.util', 
    'bahmni.common.uiHelper', 'bahmni.common.conceptSet','infinite-scroll', 'bahmni.common.patient', 
    'bahmni.common.logging']);
'use strict';

angular
    .module('registration', ['ui.router', 'bahmni.registration', 'authentication', 'bahmni.common.config', 'bahmni.common.appFramework', 
        'httpErrorInterceptor', 'bahmni.common.photoCapture', 'bahmni.common.obs', 'bahmni.common.displaycontrol.observation', 
        'bahmni.common.routeErrorHandler', 'bahmni.common.displaycontrol.pivottable','RecursionHelper','ngSanitize'])
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
        $urlRouterProvider.otherwise('/search');
        $stateProvider
            .state('search', {
                url: '/search',
                reloadOnSearch: false,
                views: {
                    'layout': { templateUrl: 'views/layout.html', controller: 'SearchPatientController'},
                    'content@search': { templateUrl: 'views/search.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('newpatient', {
                url: '/patient/new',
                views: {
                    'layout': { templateUrl: 'views/layout.html', controller: 'CreatePatientController'},
                    'content@newpatient': { templateUrl: 'views/newpatient.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('patient', {
                url: '/patient/:patientUuid',
                abstract: true,
                views: {
                    'layout': { template: '<div ui-view="layout"></div>' }
                },
                resolve: {initialization: 'initialization'}
            })
            .state('patient.edit', {
                url: '?serverError',
                views: {
                    'layout': { templateUrl: 'views/layout.html', controller: 'EditPatientController'},
                    'content@patient.edit': { templateUrl: 'views/editpatient.html'},
                    'headerExtension@patient.edit': {template: '<div print-options></div>'}
                }
            })
            .state('patient.visit', {
                url: '/visit',
                views: {
                    'layout': { templateUrl: 'views/layout.html', controller: 'VisitController'},
                    'content@patient.visit': { templateUrl: 'views/visit.html'},
                    'headerExtension@patient.visit': {template: '<div print-options></div>'}
                }
            })
            .state('patient.print', {
                url: '/print',
                views: {
                    'layout': { templateUrl: 'views/layout.html', controller: 'PrintController'},
                    'content@patient.print': { templateUrl: 'views/print.html'}
                }
            })
            .state('patient.printSticker', {
                url: '/printSticker',
                views: {
                    'layout': { templateUrl: 'views/layout.html'},
                    'content@patient.printSticker': { templateUrl: 'views/notimplemented.html'}
                }
            });
    }]).run(function ($rootScope, $templateCache) {
        //Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', function () {
                $templateCache.removeAll();
            }
        )
    });
'use strict';

angular.module('bahmni.registration').factory('initialization',
    ['$rootScope', '$q', 'configurations', 'authenticator', 'appService', 'spinner', 'Preferences',
    function ($rootScope, $q, configurations, authenticator, appService, spinner, preferences) {
        var getConfigs = function() {
            var configNames = ['encounterConfig', 'patientAttributesConfig', 'identifierSourceConfig', 'addressLevels'];
            return configurations.load(configNames).then(function () {
                var mandatoryPersonAttributes = appService.getAppDescriptor().getConfigValue("mandatoryPersonAttributes");
                var patientAttributeTypes = new Bahmni.Registration.PatientAttributeTypeMapper().mapFromOpenmrsPatientAttributeTypes(configurations.patientAttributesConfig(), mandatoryPersonAttributes);
                appendFieldValidation(patientAttributeTypes);
                $rootScope.regEncounterConfiguration = angular.extend(new Bahmni.Registration.RegistrationEncounterConfig(), configurations.encounterConfig());
                $rootScope.encounterConfig = angular.extend(new EncounterConfig(), configurations.encounterConfig());
                $rootScope.patientConfiguration = new Bahmni.Registration.PatientConfig(patientAttributeTypes.personAttributeTypes, configurations.identifierSourceConfig(), appService.getAppDescriptor().getConfigValue("additionalPatientInformation"));

                $rootScope.addressLevels = configurations.addressLevels();
            });
        };

        var appendFieldValidation = function(patientAttributeTypes) {
            var fieldValidation = appService.getAppDescriptor().getConfigValue("fieldValidation");
            if(!fieldValidation) return;

            angular.forEach(patientAttributeTypes.personAttributeTypes, function(value){
                if(fieldValidation[value.name]){
                    value.pattern = fieldValidation[value.name].pattern;
                    value.patternErrorMessage = fieldValidation[value.name].errorMessage;
                }
            });
        };

        var initApp = function() {
            return appService.initApp('registration', {'app': true, 'extension' : true });
        };

        var getIdentifierPrefix = function() {
            preferences.identifierPrefix = appService.getAppDescriptor().getConfigValue("defaultIdentifierPrefix");
        };

        var initAppConfigs = function(){
            $rootScope.registration = $rootScope.registration ||{};
            getIdentifierPrefix();
        };
        return spinner.forPromise(authenticator.authenticateUser().then(initApp).then(getConfigs).then(initAppConfigs));
    }]
);
'use strict';

var defaults = {
    maxAutocompleteResults : 20
};

var Bahmni = Bahmni || {};
Bahmni.Registration = Bahmni.Registration || {};

Bahmni.Registration.Constants = {
    patientIdentifierTypeName: "Bahmni Id",
    openmrsUrl: "/openmrs",
    registrationEncounterType: "REG",
    baseOpenMRSRESTURL: "/openmrs/ws/rest/v1",
    patientImageURL: "/patient_images/",
    bahmniRESTBaseURL: "/openmrs/ws/rest/v1/bahmnicore",
    emrApiRESTBaseURL: "/openmrs/ws/rest/emrapi",
    emrApiEncounterUrl: "/openmrs/ws/rest/emrapi/encounter",
    webServiceRestBaseURL: "/openmrs/ws/rest/v1",
    allAddressFileds: ["uuid", "preferred", "address1", "address2", "address3", "address4", "address5", "address6", "cityVillage", "countyDistrict", "stateProvince", "postalCode", "country", "latitude", "longitude"]
};


'use strict';

angular.module('bahmni.registration')
    .directive('addressFields', function () {
        var template = '<section class="form-field-inline" ng-repeat="addressLevels in addressLevelsChunks">' +
            '<article class="form-field" ng-repeat="addressLevel in addressLevels">' +
            '<div class="field-attribute">' +
            '<label for="{{addressLevel.addressField}}">{{addressLevel.name}}<span class="asterick" ng-show="addressLevel.required">*</span></label>' +
            '</div>' +
            '<div class="field-value">' +
            '<input type="text" id="{{addressLevel.addressField}}" non-blank="addressLevel.required" ng-model="address[addressLevel.addressField]" placeholder="{{addressLevel.name}}"' +
            'bahmni-autocomplete source="getAddressEntryList(addressLevel.addressField)" response-map="getAddressDataResults" on-select="addressFieldSelected(addressLevel.addressField)" ng-change="clearFields(addressLevel.addressField)"' +
            '>' +
            '</div>' +
            '</article>' +
            '</section>';
        return {
            restrict: 'AE',
            template: template,
            controller: 'AddressFieldsDirectiveController',
            scope: {
                address: '=',
                addressLevels: '='
            }
        };
    })
    .controller('AddressFieldsDirectiveController', function ($scope, addressAttributeService) {
        var addressLevelsCloneInDescendingOrder = $scope.addressLevels.slice(0).reverse()
        $scope.addressLevelsChunks = Bahmni.Common.Util.ArrayUtil.chunk(addressLevelsCloneInDescendingOrder, 2)
        var addressLevelsNamesInDescendingOrder = addressLevelsCloneInDescendingOrder.map(function (addressLevel) {
            return addressLevel.addressField;
        });
        var autocompletedFields = [];
        $scope.addressFieldSelected = function (fieldName) {
            return function (addressFieldItem) {
                var parentFields = addressLevelsNamesInDescendingOrder.slice(addressLevelsNamesInDescendingOrder.indexOf(fieldName) + 1);
                var parent = addressFieldItem.addressField.parent;
                parentFields.forEach(function (parentField) {
                    if (!parent) return;
                    $scope.address[parentField] = parent.name;
                    parent = parent.parent;
                });
                autocompletedFields = [];
                autocompletedFields.push(fieldName);
                autocompletedFields = autocompletedFields.concat(parentFields);
            }
        };

        $scope.getAddressEntryList = function (field) {
            return function (searchAttrs) {
                return addressAttributeService.search(field, searchAttrs.term);
            };
        };

        var getNextAvailableParentName = function (addressField) {
            var parent = addressField.parent;
            while (parent) {
                if (parent.name) return parent.name;
                else parent = parent.parent;
            }
        };

        $scope.getAddressDataResults = function (data) {
            return data.data.map(function (addressField) {
                var parentName = getNextAvailableParentName(addressField);
                return {
                    'value': addressField.name,
                    'label': addressField.name + ( parentName ? ", " + parentName : "" ),
                    addressField: addressField
                }
            });
        };
        $scope.clearFields = function (fieldName) {
            if(_.contains(autocompletedFields, fieldName)) {
                var childFields = autocompletedFields.slice(0, autocompletedFields.indexOf(fieldName));
                childFields.forEach(function (childField) {
                    $scope.address[childField] = "";
                });
            }
        };
    });

'use strict';

angular.module('bahmni.registration')
    .directive('printOptions', ['$rootScope','registrationCardPrinter', 'spinner', 'appService',
     function ($rootScope, registrationCardPrinter, spinner, appService) {
        var controller = function($scope) {
            $scope.printOptions = appService.getAppDescriptor().getConfigValue("printOptions");
            $scope.defaultPrint = $scope.printOptions && $scope.printOptions[0];

            var mapRegistrationObservations = function () {
                var obs = {};
                $scope.observations = $scope.observations || [];
                var getValue = function(observation) {
                    obs[observation.concept.name] = observation.value;
                    observation.groupMembers.forEach(getValue);
                };

                $scope.observations.forEach(getValue);
                return obs;
            };

            $scope.print = function(option){
                return registrationCardPrinter.print(option.templateUrl, $scope.patient, mapRegistrationObservations(), $scope.encounterDateTime);
            };

            $scope.buttonText = function(option) {
                return option && option.label;
            }
        }

        return {
            restrict: 'A',
            templateUrl: 'views/printOptions.html',
            controller: controller
        }
    }]);

'use strict';

angular.module('bahmni.registration')
    .directive('patternValidate', function () {
        var link = function(scope, element, attrs) {
            var elementData = scope.attribute;
            if(elementData.pattern) {
                element.attr("pattern", elementData.pattern);
                element.attr("title", elementData.patternErrorMessage);
                element.attr("type", "text");
            }
        };
        return {
            restrict: 'A',
            link: link
        }
    });
'use strict';

angular.module('bahmni.registration')
    .controller('NavigationController', ['$scope', '$rootScope', '$location', 'sessionService', '$window', 'appService', '$sce',
        function ($scope, $rootScope, $location, sessionService, $window, appService, $sce) {

        $scope.extensions = appService.getAppDescriptor().getExtensions("org.bahmni.registration.navigation", "link");

        $scope.goTo = function(url) {
            $location.url(url);
        };

        $scope.htmlLabel = function(label){
            return $sce.trustAsHtml(label);
        }

        $scope.logout = function () {
            $rootScope.errorMessage = null;
            sessionService.destroy().then(
                function() {
                    $window.location = "../home/";
                }
            );
        };
    }]);

'use strict';

angular.module('bahmni.registration')
    .controller('SearchPatientController', ['$rootScope', '$scope', '$location', '$window', 'spinner', 'patientService', 'appService', 'Preferences',
        function ($rootScope, $scope, $location, $window, spinner, patientService, appService, preferences) {
            $scope.identifierSources = $rootScope.patientConfiguration.identifierSources;
            $scope.results = [];
            var searching = false;
            $scope.villageAttribute = _.find($rootScope.addressLevels, function(addressLevel){
                return addressLevel.addressField === "cityVillage";
            });
            var hasSearchParameters = function () {
                return $scope.searchParameters.name.trim().length > 0
                    || $scope.searchParameters.village.trim().length > 0
                    || $scope.searchParameters.localName.trim().length > 0;
            };

            var searchBasedOnQueryParameters = function (offset) {
                $scope.searchParameters.village = $location.search().village || '';
                $scope.searchParameters.name = $location.search().name || '';
                $scope.searchParameters.localName = $location.search().localName || '';
                var identifierPrefix = $location.search().identifierPrefix;
                if (!identifierPrefix || identifierPrefix.length === 0) {
                    identifierPrefix = preferences.identifierPrefix;
                }
                $scope.identifierSources.forEach(function (identifierSource) {
                    if (identifierPrefix === identifierSource.prefix) {
                        $scope.searchParameters.identifierPrefix = identifierSource;
                    }
                });
                $scope.searchParameters.identifierPrefix = $scope.searchParameters.identifierPrefix || $scope.identifierSources[0];

                $scope.searchParameters.registrationNumber = $location.search().registrationNumber || "";
                if (hasSearchParameters()) {
                    var searchPromise = patientService.search(
                        $scope.searchParameters.name, $scope.searchParameters.village, $scope.searchParameters.localName, offset, $scope.localNameAttributes);
                    searching = true;
                    searchPromise['finally'](function () {
                        searching = false;
                    });
                    return searchPromise;
                }
            };

            var mapLocalName = function(data){
                if($scope.localNameAttributes){
                    data.pageOfResults.map(function(result){
                        if(result.localName){
                            result.localName.split(" ").forEach(
                                function(name){
                                    var parts = name.split(":");
                                    result[parts[0]] = parts[1];
                                });
                            $scope.localNameAttributes.forEach(function(attribute){
                                result.localNameDisplay = result.localNameDisplay
                                    ? result.localNameDisplay + " " + (result[attribute] || "") : result[attribute];
                            });
                        }
                    });
                }
            };

            var showSearchResults = function (searchPromise) {
                $scope.noMoreResultsPresent = false;
                if (searchPromise) {
                    searchPromise.success(function (data) {
                        mapLocalName(data);
                        $scope.results = data.pageOfResults;
                        $scope.noResultsMessage = $scope.results.length === 0 ? "No results found" : null;
                    });
                }
            };

            var setLocalNameSearchAttributes = function () {
                $scope.localNameAttributes = appService.getAppDescriptor().getConfigValue("localNameAttributesToDisplay");
                $scope.showLocalNameSearch = appService.getAppDescriptor().getConfigValue("localNameSearch") || false;
                $scope.localNameSearchLabel = appService.getAppDescriptor().getConfigValue("localNameLabel") || false;
                $scope.localNameSearchPlaceholder = appService.getAppDescriptor().getConfigValue("localNamePlaceholder") || false;
                if (!$scope.localNameAttributes) {
                    $scope.showLocalNameSearch = false;
                }
            };

            var initialize = function () {
                $scope.searchParameters = {};
                $scope.searchActions = appService.getAppDescriptor().getExtensions("org.bahmni.registration.patient.search.result.action");
                setLocalNameSearchAttributes();
            };

            var identifyParams = function (querystring) {
                querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');
                var params = {}, pair, d = decodeURIComponent;
                for (var i = querystring.length - 1; i >= 0; i--) {
                    pair = querystring[i].split('=');
                    params[d(pair[0])] = d(pair[1]);
                }
                return params;
            };

            initialize();

            $scope.disableSearchButton = function () {
                return !$scope.searchParameters.name && !$scope.searchParameters.village && !$scope.searchParameters.localName;
            };

            $scope.$watch(function () {
                return $location.search();
            }, function () {
                showSearchResults(searchBasedOnQueryParameters(0))
            });

            $scope.searchById = function () {
                if (!$scope.searchParameters.registrationNumber) return;
                $scope.results = [];
                var patientIdentifier = $scope.searchParameters.identifierPrefix.prefix + $scope.searchParameters.registrationNumber;
                preferences.identifierPrefix = $scope.searchParameters.identifierPrefix.prefix;
                $location.search({identifierPrefix: $scope.searchParameters.identifierPrefix.prefix, registrationNumber: $scope.searchParameters.registrationNumber});
                var searchPromise = patientService.search(patientIdentifier).success(function (data) {
                    mapLocalName(data);
                    if (data.pageOfResults.length === 1) {
                        var patient = data.pageOfResults[0];
                        var forwardUrl = appService.getAppDescriptor().getConfigValue("searchByIdForwardUrl") || "/patient/{{patientUuid}}";
                        $location.url(appService.getAppDescriptor().formatUrl(forwardUrl, {'patientUuid': patient.uuid}));
                    } else if (data.pageOfResults.length > 1) {
                        $scope.results = data.pageOfResults;
                    } else {
                        $scope.noResultsMessage = "Could not find patient with identifier " + patientIdentifier + ". Please verify the patient ID entered or create a new patient record with this ID."
                    }
                });
                spinner.forPromise(searchPromise);
            };

            $scope.loadingMoreResults = function () {
                return searching && !$scope.noMoreResultsPresent;
            };

            $scope.searchByVillageAndNameAndLocalName = function () {
                var queryParams = {};
                 $scope.results = [];
                if ($scope.searchParameters.name) {
                    queryParams.name = $scope.searchParameters.name;
                }
                if ($scope.searchParameters.village) {
                    queryParams.village = $scope.searchParameters.village;
                }
                if ($scope.searchParameters.localName && $scope.showLocalNameSearch) {
                    queryParams.localName = $scope.searchParameters.localName;
                }
                $location.search(queryParams);
            };

            $scope.resultsPresent = function () {
                return angular.isDefined($scope.results) && $scope.results.length > 0;
            };

            $scope.editPatientUrl = function (url, options) {
                var temp = url;
                for (var key in options) {
                    temp = temp.replace("{{" + key + "}}", options[key]);
                }
                return temp;
            };

            $scope.nextPage = function () {
                if ($scope.nextPageLoading) {
                    return;
                }
                $scope.nextPageLoading = true;
                var promise = searchBasedOnQueryParameters($scope.results.length);
                if (promise) {
                    promise.success(function (data) {
                        data.pageOfResults.forEach(function (result) {
                            $scope.results.push(result)
                        });
                        $scope.noMoreResultsPresent = (data.pageOfResults.length === 0);
                        $scope.nextPageLoading = false;
                    });
                    promise.error(function () {
                        $scope.nextPageLoading = false;
                    });
                }
            };

            $scope.forPatient = function (patient) {
                $scope.selectedPatient = patient;
                return $scope;
            };

            $scope.doExtensionAction = function (extension) {
                var forwardTo = appService.getAppDescriptor().formatUrl(extension.url, { 'patientUuid': $scope.selectedPatient.uuid });
                if (extension.label === 'Print') {
                    var params = identifyParams(forwardTo);
                    if (params.launch === 'dialog') {
                        var firstChar = forwardTo.charAt(0);
                        var prefix = firstChar === "/" ? "#" : "#/";
                        var hiddenFrame = $("#printPatientFrame")[0];
                        hiddenFrame.src = prefix + forwardTo;
                        hiddenFrame.contentWindow.print();
                    } else {
                        $location.url(forwardTo);
                    }
                } else {
                    $location.url(forwardTo);
                }
            };

            $scope.extensionActionText = function (extension) {
                return extension.label;
            }
        }]);

'use strict';

angular.module('bahmni.registration')
    .controller('PatientCommonController', ['$scope', '$rootScope', '$http', 'patientAttributeService', 'addressAttributeService', 'appService',
        function ($scope, $rootScope, $http, patientAttributeService, addressAttributeService, appService) {

            var autoCompleteFields = appService.getAppDescriptor().getConfigValue("autoCompleteFields", []);
            var showCasteSameAsLastNameCheckbox = appService.getAppDescriptor().getConfigValue("showCasteSameAsLastNameCheckbox");
            $scope.showMiddleName = appService.getAppDescriptor().getConfigValue("showMiddleName");

            $scope.isAutoComplete = function (fieldName) {
                return autoCompleteFields.indexOf(fieldName) > -1;
            };

            $scope.showCasteSameAsLastName = function() {
                var personAttributeHasCaste = (_.find($rootScope.patientConfiguration.personAttributeTypes, {name: 'caste'}) != null);
                return showCasteSameAsLastNameCheckbox && personAttributeHasCaste;
            };

            $scope.setCasteAsLastName = function () {
                if ($scope.patient.sameAsLastName) {
                    $scope.patient.caste = $scope.patient.familyName;
                }
            };

            $scope.getAutoCompleteList = function (attributeName, query, type) {
                return patientAttributeService.search(attributeName, query, type);
            };

            $scope.getDataResults = function (data) {
                return  data.resultList.results;
            };

            $scope.$watch('patient.familyName', function () {
                if ($scope.patient.sameAsLastName) {
                    $scope.patient.caste = $scope.patient.familyName;
                }
            });

            $scope.$watch('patient.caste', function () {
                if ($scope.patient.sameAsLastName && ($scope.patient.familyName !== $scope.patient.caste)) {
                    $scope.patient.sameAsLastName = false;
                }
            });
        }])


'use strict';

angular.module('bahmni.registration')
    .controller('CreatePatientController', ['$scope', '$rootScope', '$state', 'patientService', 
        'encounterService','$location', 'Preferences', 'patient', '$window', 'spinner', 'appService', 'sessionService',
    function ($scope, $rootScope, $state, patientService, encounterService, $location, preferences, patientModel,
              $window, spinner, appService, sessionService) {
        var dateUtil = Bahmni.Common.Util.DateUtil;
        var createActionsConfig = [];
        var defaultActions = ["save", "startVisit"];
        var defaultVisitType = appService.getAppDescriptor().getConfigValue('defaultVisitType');
        var locationUuid = sessionService.getLoginLocationUuid();
        var regEncounterTypeUuid = $rootScope.regEncounterConfiguration.encounterTypes[Bahmni.Registration.Constants.registrationEncounterType];
        $scope.identifierPattern = appService.getAppDescriptor().getConfigValue('identifierPattern');
        $scope.identifierPatternDescription = appService.getAppDescriptor().getConfigValue('identifierPatternDescription') || "";
        var configValueForEnterId = appService.getAppDescriptor().getConfigValue('showEnterID');
        $scope.showEnterID = configValueForEnterId === null ? true : configValueForEnterId;

        var identifyEditActions = function() {
            createActionsConfig = appService.getAppDescriptor().getExtensions("org.bahmni.registration.patient.create.action", "config");
            var createActions = createActionsConfig.filter(function(config) {
                if (config.extensionParams) {
                    return config.extensionParams.action ? defaultActions.indexOf(config.extensionParams.action) > -1 : false;
                } else {
                    return false;
                }
            });
            $scope.createActions = createActions;
        };

        (function () {
            $scope.patient = patientModel.create();
            $scope.identifierSources = $rootScope.patientConfiguration.identifierSources;
            var identifierPrefix = $scope.identifierSources.filter(function (identifierSource) {
                return identifierSource.prefix === preferences.identifierPrefix;
            });
            $scope.patient.identifierPrefix = identifierPrefix[0] || $scope.identifierSources[0];
            $scope.hasOldIdentifier = preferences.hasOldIdentifier;
            identifyEditActions();
        })();

        $scope.visitControl = new Bahmni.Common.VisitControl($rootScope.regEncounterConfiguration.getVistTypesAsArray(), defaultVisitType, encounterService);
        $scope.visitControl.onStartVisit = function() {
            $scope.setSubmitSource('startVisit');
        };

        $scope.setSubmitSource = function (source) {
            $scope.submitSource = source;
        };

        var setPreferences = function () {
            preferences.identifierPrefix = $scope.patient.identifierPrefix.prefix;
            preferences.hasOldIdentifier = $scope.hasOldIdentifier;
        };

        var successCallback = function (patientProfileData) {
            $scope.patient.uuid = patientProfileData.patient.uuid;
            $scope.patient.identifier = patientProfileData.patient.identifiers[0].identifier;
            $scope.patient.name = patientProfileData.patient.person.names[0].display;
            $scope.patient.isNew = true;
            $scope.patient.registrationDate = dateUtil.now();
        };

        var createEncounterObject = function() {
            var encounter = { locationUuid : locationUuid, providers: [], encounterTypeUuid: regEncounterTypeUuid};
            if ($rootScope.currentProvider && $rootScope.currentProvider.uuid) {
                encounter.providers.push( { "uuid" : $rootScope.currentProvider.uuid, newpatient: 'true'} );
            }
            return encounter;
        };

        var onCreateVisitFailure = function() {
            $state.go('patient.edit', {patientUuid: $scope.patient.uuid});
        }

        var createVisit = function (patientProfileData) {
            return $scope.visitControl.createVisit(patientProfileData.patient.uuid, createEncounterObject()).success(function () {
                var patientUrl = $location.absUrl().replace("new", patientProfileData.patient.uuid);
                $scope.patient.registrationDate = dateUtil.now();
                $window.history.pushState(null, null, patientUrl);
                goToActionUrl($scope.submitSource, patientProfileData, {newpatient: 'true'});
            }).error(onCreateVisitFailure);
        }

        var followUpAction = function(patientProfileData) {
            if($scope.submitSource === 'startVisit') {
                return spinner.forPromise(createVisit(patientProfileData));
            } else {
                goToActionUrl($scope.submitSource, patientProfileData);
            }
        };

        var goToActionUrl = function(actionName, patientProfileData, queryParams) {
            if ($scope.createActions) {
                var matchedExtensions = $scope.createActions.filter(function(extension) {
                    return extension.extensionParams && extension.extensionParams.action === actionName;
                });
                if (matchedExtensions.length > 0) {
                    var extensionParams = matchedExtensions[0].extensionParams;
                    if (extensionParams && extensionParams.forwardUrl) {
                        var fwdUrl = appService.getAppDescriptor().formatUrl(extensionParams.forwardUrl, {'patientUuid' : patientProfileData.patient.uuid} );
                        if(!queryParams) {
                            $location.url(fwdUrl);
                        }
                        $location.url(fwdUrl).search(queryParams);
                    }
                }
            }
        };

        $scope.create = function () {
            setPreferences();
            if (!$scope.patient.identifier) {
                spinner.forPromise(patientService.generateIdentifier($scope.patient).then(function (response) {
                    $scope.patient.identifier = response.data;
                    return patientService.create($scope.patient).success(successCallback).success(followUpAction);
                }));
            } else {
                spinner.forPromise(patientService.create($scope.patient).success(successCallback).success(followUpAction));
            }
        };

    }]);

'use strict';

angular.module('bahmni.registration')
    .controller('EditPatientController', ['$scope', '$rootScope', 'patientService', 'encounterService', 'visitService','$location', 'Preferences', '$stateParams', 'openmrsPatientMapper', '$window', '$q','spinner', 'appService', 'sessionService', 'messagingService',
        function ($scope, $rootScope, patientService, encounterService, visitService,$location, preferences, $stateParams, patientMapper, $window, $q, spinner, appService, sessionService, messagingService) {
            var uuid;
            var editActionsConfig = [];
            var defaultActions = ["save", "print"];
            var defaultVisitType = appService.getAppDescriptor().getConfigValue('defaultVisitType');
            var locationUuid = sessionService.getLoginLocationUuid();
            var regEncounterTypeUuid = $rootScope.regEncounterConfiguration.encounterTypes[Bahmni.Registration.Constants.registrationEncounterType];
            var registration_Consultation_Privilege = Bahmni.Common.Constants.registartionConsultationPrivilege;

            var identifyEditActions = function() {
                editActionsConfig = appService.getAppDescriptor().getExtensions("org.bahmni.registration.patient.edit.action", "config");
                var editActions = editActionsConfig.filter(function(config) {
                    if (config.extensionParams) {
                        return config.extensionParams.action ? defaultActions.indexOf(config.extensionParams.action) > -1 : false;
                    } else {
                        return false;
                    }
                });
                $scope.editActions = editActions;
            };

            $scope.patient = {};
            (function () {
                uuid = $stateParams.patientUuid;
                var getPatientPromise = patientService.get(uuid).success(function (openmrsPatient) {
                    $scope.openMRSPatient = openmrsPatient;
                    $scope.patient = patientMapper.map(openmrsPatient);
                    $scope.patient.isNew = $stateParams.newpatient;

                    var showOrHideAdditionalPatientInformation = function(){
                        var additionalPatientInfoConfig = appService.getAppDescriptor().getConfigValue("additionalPatientInformation");
                        angular.forEach(additionalPatientInfoConfig, function(attribute){
                            if($scope.patient[attribute.name]){
                                $scope.displayAdditionalInformation = true;
                            }
                        });
                    };
                    showOrHideAdditionalPatientInformation();

                });

                var isRegistrationConsultationPrivilege = _.find($rootScope.currentUser.privileges, function (privilege) {
                    return registration_Consultation_Privilege === privilege.name;
                });
                var searchActiveVisitsPromise = visitService.search({patient: uuid, includeInactive: false, v: "custom:(uuid)"}).success(function(data){
                    $scope.hasActiveVisit = data.results.length > 0;
                    var actionName = isRegistrationConsultationPrivilege ? "enterConsultation" : ($scope.hasActiveVisit ? "enterVisitDetails" : "startVisit");
                    defaultActions.push(actionName);
                    identifyEditActions();
                });

                var isDigitized = encounterService.getDigitized(uuid);
                isDigitized.success(function(data) {
                    var encountersWithObservations = data.results.filter(function (encounter) {
                        return encounter.obs.length > 0
                    });
                    $scope.isDigitized = encountersWithObservations.length > 0;
                });

                spinner.forPromise($q.all([getPatientPromise, searchActiveVisitsPromise, isDigitized]));
            })();

            $scope.visitControl = new Bahmni.Common.VisitControl($rootScope.regEncounterConfiguration.getVistTypesAsArray(), defaultVisitType, encounterService);
            $scope.visitControl.onStartVisit = function() {
                $scope.setSubmitSource('startVisit');
            };

            $scope.setSubmitSource = function (source) {
                $scope.submitSource = source;
            };

            var goToVisitPage = function(patientData) {
                $scope.patient.uuid = patientData.patient.uuid;
                $scope.patient.name = patientData.patient.person.names[0].display;
                $location.path("/patient/" + patientData.patient.uuid + "/visit");
            };

            var goToConsultationPage = function(patientData) {
                $scope.patient.uuid = patientData.patient.uuid;
                $scope.patient.name = patientData.patient.person.names[0].display;
                $window.location.href = "../clinical/#/patient/" + patientData.patient.uuid + "/concept-set-group/observations";
            };

            var createEncounterObject = function() {
                var encounter = {locationUuid: locationUuid, providers: [], encounterTypeUuid: regEncounterTypeUuid};
                if ($rootScope.currentProvider && $rootScope.currentProvider.uuid) {
                    encounter.providers.push( { "uuid" : $rootScope.currentProvider.uuid } );
                }
                return encounter;
            };

            var createVisit = function(patientProfileData){
                return $scope.visitControl.createVisit(patientProfileData.patient.uuid, createEncounterObject()).success(function() {
                    $scope.patient.uuid = patientProfileData.patient.uuid;
                    $scope.patient.name = patientProfileData.patient.person.names[0].display;
                    goToActionUrl("startVisit", patientProfileData);
                });
            };

            var goToActionUrl = function(actionName, patientProfileData) {
                if ($scope.editActions) {
                    var matchedExtensions = $scope.editActions.filter(function(extension) {
                        return extension.extensionParams && extension.extensionParams.action === actionName;
                    });
                    if (matchedExtensions.length > 0) {
                        var extensionParams = matchedExtensions[0].extensionParams;
                        if (extensionParams && extensionParams.forwardUrl) {
                            var fwdUrl = appService.getAppDescriptor().formatUrl(extensionParams.forwardUrl, {'patientUuid' : patientProfileData.patient.uuid} );
                            $location.url(fwdUrl);
                        }
                    }
                }
            };
            
            $scope.update = function () {
                var patientUpdatePromise = patientService.update($scope.patient, $scope.openMRSPatient).success(function (patientProfileData) {
                    var submitSource = $scope.submitSource;
                    $scope.submitSource = null;
                    switch(submitSource) {
                        case 'startVisit':
                            return createVisit(patientProfileData);                        
                        case 'enterVisitDetails':
                            return goToVisitPage(patientProfileData);
                        case 'enterConsultation':
                            return goToConsultationPage(patientProfileData);
                        case 'save': messagingService.showMessage("info", "Saved");
                        default:
                            return goToActionUrl(submitSource, patientProfileData);
                    }
                });
                spinner.forPromise(patientUpdatePromise);
            };

            $scope.showBackButton = function () {
                return $stateParams.newpatient;
            };

            $scope.back = function () {
                $window.history.back();
            };

        }]);
'use strict';

angular.module('bahmni.registration')
    .controller('VisitController', ['$scope', '$rootScope', '$state', 'patientService', 'encounterService', '$stateParams', 'spinner', '$timeout', '$q', 'appService', 'openmrsPatientMapper', 'contextChangeHandler', 'messagingService', 'sessionService',
        function ($scope, $rootScope, $state, patientService, encounterService, $stateParams, spinner, $timeout, $q, appService, patientMapper, contextChangeHandler, messagingService, sessionService) {
            var patientUuid = $stateParams.patientUuid;
            var extensions = appService.getAppDescriptor().getExtensions("org.bahmni.registration.conceptSetGroup.observations", "config");
            var locationUuid = sessionService.getLoginLocationUuid();
            $scope.conceptSets = extensions.map(function (extension) {
                return new Bahmni.ConceptSet.ConceptSetSection(extension, $rootScope.currentUser, {}, [], {});
            });
            $scope.availableConceptSets = $scope.conceptSets.filter(function (conceptSet) {
                return conceptSet.isAvailable($scope.context);
            });
            var regEncounterTypeUuid = $rootScope.regEncounterConfiguration.encounterTypes[Bahmni.Registration.Constants.registrationEncounterType];

            var getPatient = function () {
                return patientService.get(patientUuid).success(function (openMRSPatient) {
                    $scope.patient = patientMapper.map(openMRSPatient);
                    $scope.patient.name = openMRSPatient.person.names[0].display;
                    $scope.patient.uuid = openMRSPatient.uuid;
                })
            };

            var getActiveEncounter = function () {
                return encounterService.activeEncounter({
                    "patientUuid": patientUuid,
                    "providerUuid": $scope.currentProvider.uuid,
                    "includeAll": false,
                    locationUuid: locationUuid,
                    encounterTypeUuid: regEncounterTypeUuid
                })
                    .success(function (data) {
                        $scope.encounterDateTime = data.encounterDateTime;
                        $scope.visitTypeUuid = data.visitTypeUuid;
                        $scope.observations = data.observations;
                    });
            };

            $scope.hideFields = appService.getAppDescriptor().getConfigValue("hideFields");

            $scope.back = function () {
                $state.go('patient.edit');
            };

            $scope.updatePatientImage = function (image) {
                var updateImagePromise = patientService.updateImage($scope.patient.uuid, image.replace("data:image/jpeg;base64,", ""));
                spinner.forPromise(updateImagePromise);
                return updateImagePromise;
            };

            var save = function () {
                $scope.encounter = {
                    patientUuid: $scope.patient.uuid,
                    locationUuid: locationUuid,
                    encounterTypeUuid: regEncounterTypeUuid
                };

                $scope.encounter.observations = $scope.observations;
                $scope.encounter.observations = new Bahmni.Common.Domain.ObservationFilter().filter($scope.encounter.observations);

                var createPromise = encounterService.create($scope.encounter);
                spinner.forPromise(createPromise);
                return createPromise;
            };

            var validate = function () {
                var deferred = $q.defer();
                var contxChange = contextChangeHandler.execute();
                var allowContextChange = contxChange["allow"];
                if (!allowContextChange) {
                    var errorMessage = contxChange["errorMessage"] ? contxChange["errorMessage"]: "Please correct errors in the form. Information not saved";
                    messagingService.showMessage('formError', errorMessage);
                    deferred.reject("Some fields are not valid");
                    return deferred.promise;
                }
                else {
                    deferred.resolve();
                    return deferred.promise;
                }
            };

            var reload = function () {
                $state.transitionTo($state.current, $state.params, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                messagingService.showMessage('info', 'Saved');
            };

            $scope.submit = function () {
                return validate().then(save).then(reload);
            };

            $scope.today = function () {
                return new Date();
            };

            $scope.disableFormSubmitOnEnter = function () {
                $('.visit-patient').find('input').keypress(function (e) {
                    if (e.which === 13) // Enter key = keycode 13
                    {
                        return false;
                    }
                });
            };

            var getConceptSet = function () {
                var visitType = $scope.encounterConfig.getVisitTypeByUuid($scope.visitTypeUuid);
                $scope.context = {visitType: visitType, patient: $scope.patient};
            };

            spinner.forPromise($q.all([getPatient(), getActiveEncounter()]).then(getConceptSet));
        }]);

'use strict';

angular.module('bahmni.registration')
    .controller('PrintController', ['$scope', '$stateParams', 'spinner', 'patientService', 'openmrsPatientMapper',
     function ($scope, $stateParams, spinner, patientService, openmrsPatientMapper) {
        var patientUuid = $stateParams.patientUuid;
        $scope.patient = {};
        (function () {
            var getPatientPromise = patientService.get(patientUuid).success(function (openmrsPatient) {
                $scope.patient = openmrsPatientMapper.map(openmrsPatient);
                $scope.patient.isNew = $stateParams.newpatient;
            });
            spinner.forPromise(getPatientPromise);
        })();
    }]);

'use strict';

angular.module('bahmni.registration')
    .factory('patientService', ['$http', '$rootScope', function ($http, $rootScope) {
        var openmrsUrl = Bahmni.Registration.Constants.openmrsUrl;
        var baseOpenMRSRESTURL = Bahmni.Registration.Constants.baseOpenMRSRESTURL;

        var search = function (query, village, localName, offset, localNameAttributes) {
            offset = offset || 0;
            return $http.get(openmrsUrl + "/ws/rest/v1/bahmnicore/patient", {
                method: "GET",
                params: {q: query, s: "byIdOrNameOrVillage", 'city_village': village, 'local_name': localName, startIndex: offset, patientAttributes: localNameAttributes}     ,
                withCredentials: true
            });
        };

        var get = function (uuid) {
            return $http.get(openmrsUrl + "/ws/rest/v1/patient/" + uuid, {
                method: "GET",
                params: {v: "full"},
                withCredentials: true
            });
        };

        var generateIdentifier = function (patient) {
            var idgenJson = {"identifierSourceName": patient.identifierPrefix.prefix};
            return $http.post(openmrsUrl + "/ws/rest/v1/idgen", idgenJson, {
                withCredentials: true,
                headers: {"Accept": "text/plain", "Content-Type": "application/json"}
            });
        };

        var create = function (patient) {
            var patientJson = new Bahmni.Registration.CreatePatientRequestMapper(moment()).mapFromPatient($rootScope.patientConfiguration.personAttributeTypes, patient);
            return $http.post(baseOpenMRSRESTURL + "/patientprofile", patientJson, {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        var update = function (patient, openMRSPatient) {
            var patientJson = new Bahmni.Registration.UpdatePatientRequestMapper(moment()).mapFromPatient($rootScope.patientConfiguration.personAttributeTypes, openMRSPatient, patient);
            return $http.post(baseOpenMRSRESTURL + "/patientprofile/" + openMRSPatient.uuid, patientJson, {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        var updateImage = function (uuid, image) {
            var updateImageUrl = baseOpenMRSRESTURL + "/personimage/";
            var imageRequest = {
                "person": {
                    "uuid": uuid
                },
                "base64EncodedImage": image
            };
            return $http.post(updateImageUrl, imageRequest, {
                withCredentials: true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        return {
            search: search,
            create: create,
            generateIdentifier: generateIdentifier,
            update: update,
            get: get,
            updateImage: updateImage
        };
    }]);

'use strict';

angular.module('bahmni.registration')
    .factory('visitService', ['$http', function ($http) {
    
    var search = function(parameters) {
        return $http.get(Bahmni.Registration.Constants.webServiceRestBaseURL + '/visit', {
            params: parameters,
            withCredentials: true
        });
    };

    return {
        search: search
    };
}]);
'use strict';

angular.module('bahmni.registration')
    .factory('patientAttributeService', ['$http', function ($http) {

    var urlMap;

    var init = function(){
        urlMap = {
            "personName" : "/ws/rest/v1/bahmnicore/unique/personname",
            "personAttribute" : "/ws/rest/v1/bahmnicore/unique/personattribute"
        }
    };
    init();

    var search = function(fieldName, query, type){
        var url = Bahmni.Registration.Constants.openmrsUrl + urlMap[type];
        var queryWithoutTrailingSpaces = query.trimLeft();

        return $http.get(url, {
            method: "GET",
            params: {q: queryWithoutTrailingSpaces, key: fieldName },
            withCredentials: true
        });
    };

    return{
        search : search
    };
}]);

'use strict';

angular.module('bahmni.registration')
    .factory('addressAttributeService', ['$http', function ($http) {
        var search = function(fieldName, query){
            var url = Bahmni.Registration.Constants.openmrsUrl + "/module/addresshierarchy/ajax/getPossibleAddressHierarchyEntriesWithParents.form";

            return $http.get(url, {
                method: "GET",
                params: {searchString: query, addressField: fieldName ,limit: defaults.maxAutocompleteResults},
                withCredentials: true
            });
        }

        return{
            search : search
        };
    }]);
'use strict';

angular.module('bahmni.registration')
    .factory('registrationCardPrinter', ['printer', 'appService', function (printer, appService) {
        var print = function(templatePath, patient, obs, encounterDateTime) {
            templatePath = templatePath || "views/nolayoutfound.html";
            printer.print(templatePath, {patient: patient, today: new Date(), obs: obs || {}, encounterDateTime: encounterDateTime });
        };

        return {
            print: print
        };
    }]);

'use strict';

Bahmni.Registration.PatientAttributeTypeMapper = (function () {

    function PatientAttributeTypeMapper() {
    }

    PatientAttributeTypeMapper.prototype.mapFromOpenmrsPatientAttributeTypes = function (mrspatientAttributeTypes, mandatoryPersonAttributes) {
        var patientAttributeTypes = [];
        angular.forEach(mrspatientAttributeTypes, function(mrsAttributeType) {

            var isRequired = function(){
                var element = _.find(mandatoryPersonAttributes, function (mandatoryPersonAttribute) {
                    return mandatoryPersonAttribute == mrsAttributeType.name
                });
                return element ? true : false;
            };

            var attributeType = {
                uuid: mrsAttributeType.uuid,
                sortWeight: mrsAttributeType.sortWeight,
                name: mrsAttributeType.name,
                description: mrsAttributeType.description,
                format: mrsAttributeType.format,
                answers: [],
                required: isRequired()
            };
            if (mrsAttributeType.concept && mrsAttributeType.concept.answers) {
                angular.forEach(mrsAttributeType.concept.answers, function(mrsAnswer) {
                    attributeType.answers.push({
                        description: mrsAnswer.display,
                        conceptId: mrsAnswer.uuid
                    });
                });
            }
            patientAttributeTypes.push(attributeType);
        });
        return {
            personAttributeTypes : patientAttributeTypes
        };
    };

    return PatientAttributeTypeMapper;
})();

'use strict';

angular.module('bahmni.registration').factory('openmrsPatientMapper', ['patient', '$rootScope', 'age',
    function (patientModel, $rootScope, age) {
        var whereAttributeTypeExists = function (attribute) {
                return $rootScope.patientConfiguration.get(attribute.attributeType.uuid);
            },
            addAttributeToPatient = function (patient, attribute) {
                var attributeType = $rootScope.patientConfiguration.get(attribute.attributeType.uuid);
                if (attributeType) {
                    if (attributeType.format === "org.openmrs.Concept" && attribute.value) {
                        patient[attributeType.name] = attribute.value.uuid;
                    } else {
                        patient[attributeType.name] = attribute.value;
                    }
                }
            },
            mapAttributes = function (patient, attributes) {
                attributes.filter(whereAttributeTypeExists).forEach(function (attribute) {
                    addAttributeToPatient(patient, attribute);

                });
            },
            pad = function (number) {
                return number > 9 ? number.toString() : "0" + number.toString();
            },
            parseDate = function (dateStr) {
                return dateStr ? new Date(dateStr.substr(0, 10)) : dateStr;
            },
            getDateStr = function (date) {
                return date ? pad(date.getDate()) + "-" + pad(date.getMonth() + 1) + "-" + date.getFullYear() : "";
            },
            mapAddress = function (preferredAddress) {
                return preferredAddress || {};
            },
            map = function (openmrsPatient) {
                var patient = patientModel.create(),
                    birthdate = parseDate(openmrsPatient.person.birthdate);
                patient.givenName = openmrsPatient.person.preferredName.givenName;
                patient.middleName = openmrsPatient.person.preferredName.middleName;
                patient.familyName = openmrsPatient.person.preferredName.familyName;
                patient.birthdate = openmrsPatient.person.birthdateEstimated || !birthdate ? "" : getDateStr(birthdate);
                patient.age = birthdate ? age.fromBirthDate(parseDate(openmrsPatient.person.birthdate)) : null;
                patient.gender = openmrsPatient.person.gender;
                patient.address = mapAddress(openmrsPatient.person.preferredAddress);
                patient.identifier = openmrsPatient.identifiers[0].identifier;
                patient.image = Bahmni.Registration.Constants.patientImageURL + openmrsPatient.uuid + ".jpeg?q=" + new Date().toISOString();
                patient.registrationDate = parseDate(openmrsPatient.person.auditInfo.dateCreated);
                mapAttributes(patient, openmrsPatient.person.attributes);
                return patient;
            };

        return {
            map: map
        };
    }]);
'use strict';

Bahmni.Registration.CreatePatientRequestMapper = (function () {
    function CreatePatientRequestMapper(currentDate) {
        this.currentDate = currentDate;
    }

    CreatePatientRequestMapper.prototype.mapFromPatient = function (patientAttributeTypes, patient) {
        var constants = Bahmni.Registration.Constants;
        var openMRSPatient = {
            patient: {
                person: {
                    names: [
                        {
                            givenName: patient.givenName,
                            middleName: patient.middleName,
                            familyName: patient.familyName,
                            "preferred": false
                        }
                    ],
                    addresses: [_.pick(patient.address, constants.allAddressFileds) ],
                    birthdate: this.getBirthdate(patient.birthdate, patient.age),
                    birthdateEstimated: patient.birthdate === undefined,
                    gender: patient.gender,
                    personDateCreated: patient.registrationDate,
                    attributes: this.getMrsAttributes(patient, patientAttributeTypes)
                },
                identifiers: [
                    {
                        identifier: patient.identifier,
                        "identifierType": {
                           "name": constants.patientIdentifierTypeName
                        },
                        "preferred": true,
                        "voided": false
                    }
                ]

            }
        };

        this.setImage(patient, openMRSPatient);
        return  openMRSPatient;
    };

    CreatePatientRequestMapper.prototype.setImage = function (patient, openMRSPatient) {
        if (patient.getImageData()) {
            openMRSPatient.image = patient.getImageData()
        }
    };

    CreatePatientRequestMapper.prototype.getMrsAttributes = function (patient, patientAttributeTypes) {
        return patientAttributeTypes.map(function (result) {
            var attribute = {
                attributeType: { 
                    uuid: result.uuid
                }
            };
            setAttributeValue(result, attribute, patient[result.name]);
            return  attribute
        })
    };

    var setAttributeValue = function (attributeType, attr, value) {
        if (attributeType.format === "org.openmrs.Concept") {
            attr.hydratedObject = value;
        } else if(value === "" || value === null || value === undefined) {
            attr.voided = true;
        } else {
            attr.value = value.toString();
        }
    };

    CreatePatientRequestMapper.prototype.getBirthdate = function (birthdate, age) {
        var mnt;
        if (birthdate !== undefined) {
            mnt = moment(birthdate, 'DD-MM-YYYY');
        } else if (age !== undefined) {
            mnt = moment(this.currentDate).subtract('years', age.years).subtract('months', age.months).subtract('days', age.days);
        }
        return mnt.format('YYYY-MM-DD');
    };

    return CreatePatientRequestMapper;
})();
'use strict';

Bahmni.Registration.UpdatePatientRequestMapper = (function () {
    var UpdatePatientRequestMapper = function (currentDate) {
        this.currentDate = currentDate;
    };

    UpdatePatientRequestMapper.prototype.currentDate = undefined;
    
    UpdatePatientRequestMapper.prototype.mapFromPatient = function (patientAttributeTypes, openMRSPatient, patient) {        
        var openMRSPatientProfile = {
            patient: {
                person: {
                    names: [
                        {
                            uuid: openMRSPatient.person.names[0].uuid,
                            givenName: patient.givenName,
                            middleName: patient.middleName,
                            familyName: patient.familyName,
                            "preferred": true
                        }
                    ],
                    addresses: [_.pick(patient.address, Bahmni.Registration.Constants.allAddressFileds)],
                    birthdate: this.getBirthdate(patient.birthdate, patient.age),
                    birthdateEstimated: patient.birthdate === undefined || patient.birthdate === "",
                    gender: patient.gender,
                    attributes: this.getMrsAttributes(openMRSPatient, patient, patientAttributeTypes)
                }
            }
        };

        this.setImage(patient, openMRSPatientProfile);
        return  openMRSPatientProfile;
    };

    UpdatePatientRequestMapper.prototype.setImage = function (patient, openMRSPatient) {
        if (patient.getImageData()) {
            openMRSPatient.image = patient.getImageData()
        }
    };

    UpdatePatientRequestMapper.prototype.getMrsAttributes = function (openMRSPatient, patient, patientAttributeTypes) {
        var attributes = [];
        patientAttributeTypes.forEach(function (attributeType) {
            var attr = {
                attributeType: {
                    uuid: attributeType.uuid
                }
            };
            var savedAttribute = openMRSPatient.person.attributes.filter(function (attribute) {
                return attributeType.uuid === attribute.attributeType.uuid;
            })[0];

            if (savedAttribute) {
                attr.uuid = savedAttribute.uuid;
                setAttributeValue(attributeType, attr, patient[savedAttribute.attributeType.display]);
            } else {
                setAttributeValue(attributeType, attr, patient[attributeType.name]);
            }
            attributes.push(attr);
        });
        return attributes;
    };    

    var setAttributeValue = function (attributeType, attr, value) {
        if (attributeType.format === "org.openmrs.Concept") {
            attr.hydratedObject = value;
        } else if(value === "" || value === null || value === undefined) {
            attr.voided = true;
        } else {
            attr.value = value.toString();
        }
    };

    UpdatePatientRequestMapper.prototype.getBirthdate = function (birthdate, age) {
        var mnt;
        if (birthdate !== undefined && birthdate !== "") {
            mnt = moment(birthdate, 'DD-MM-YYYY');
        } else if (age !== undefined) {
            mnt = moment(this.currentDate).subtract('years', age.years).subtract('months', age.months).subtract('days', age.days);
        }
        return mnt.format('YYYY-MM-DD');
    };

    return UpdatePatientRequestMapper;
})();
'use strict';

angular.module('bahmni.registration')
    .factory('age', [function () {
        var dateUtil = Bahmni.Common.Util.DateUtil;

        var fromBirthDate = function (birthDate) {
            var today = dateUtil.now();
            var period = dateUtil.diffInYearsMonthsDays(birthDate, today)
            return create(period.years, period.months, period.days);
        }

        var create = function (years, months, days) {
            var isEmpty = function () {
                return !(this.years || this.months || this.days);
            }

            return {
                years: years,
                months: months,
                days: days,
                isEmpty: isEmpty
            };
        }

        return {
            fromBirthDate: fromBirthDate,
            create: create
        }
    }]
);
'use strict';

angular.module('bahmni.registration')
    .factory('patient', ['age', function (age) {
        var create = function () {
            var calculateAge = function () {
                if (this.birthdate) {
                    var birthDate = new Date(this.birthdate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
                    this.age = age.fromBirthDate(birthDate);
                }
                else {
                    this.age = age.create(null, null, null);
                }
            };

            var generateIdentifier = function () {
                if (this.registrationNumber && this.registrationNumber.length > 0) {
                    this.identifier = this.identifierPrefix.name + this.registrationNumber;
                }
                return this.identifier
            };

            var clearRegistrationNumber = function () {
                this.registrationNumber = null;
                this.identifier = null;
            };

            var fullNameLocal = function () {
                var givenNameLocal = this.givenNameLocal || "";
                var middleNameLocal = this.middleNameLocal || "";
                var familyNameLocal = this.familyNameLocal || "";
                return (givenNameLocal.trim() + " " + (middleNameLocal ? middleNameLocal + " " : "" ) + familyNameLocal.trim()).trim();
            };

            var getImageData = function () {
                return this.image && this.image.indexOf('data') === 0 ? this.image.replace("data:image/jpeg;base64,", "") : null;
            };

            return {
                address: {},
                age: age.create(),
                calculateAge: calculateAge,
                identifierPrefix: {},
                generateIdentifier: generateIdentifier,
                clearRegistrationNumber: clearRegistrationNumber,
                image: '../images/blank-user.gif',
                fullNameLocal: fullNameLocal,
                getImageData: getImageData
            };
        };

        return {
            create: create
        }
    }]);

'use strict';

angular.module('bahmni.registration')
    .factory('Preferences', ['$http', '$rootScope', function() {
      return {
          hasOldIdentifier: false
      };
}]);
'use strict';

Bahmni.Registration.RegistrationObservations = (function () {
    var ObservationData = (function () {
        function ObservationData(uuid, concept, value) {
            this.uuid = uuid;
            this.concept = concept;
            this.value = value;
        }

        return ObservationData;
    })();

    var RegistrationObservations = function(regObservations, isNewPatient, encounterConfig) {
        this.observations = regObservations.map(function (obs) {
            return new ObservationData(obs.uuid, obs.concept, obs.value)
        });
        addRequiredConceptObservations(this.observations, encounterConfig.conceptData);
    };

    RegistrationObservations.prototype.updateObservations = function (updatedObservations) {
        this.observations.forEach(function (observationData) {
            var newObservationValue = updatedObservations[observationData.concept.name];
            if(!newObservationValue && observationData.value){
                observationData.voided = true;
            }else if(newObservationValue){
                observationData.value = newObservationValue;
            }
        });

        var obsToSave = this.observations.filter(function(obs){
            return obs.value || obs.voided;
        });

        return obsToSave;
    };

    var addRequiredConceptObservations = function (observations, configuredEncounterConcepts) {
        Object.getOwnPropertyNames(configuredEncounterConcepts).forEach(function (configuredConceptName) {
            var configuredConcept = configuredEncounterConcepts[configuredConceptName];
            var filteredObservation = observations.filter(function (observation) {
                return observation.concept.uuid === configuredConcept.uuid
            });
            if (filteredObservation.length === 0) {
                observations.push(new ObservationData(null, {uuid: configuredConcept.uuid, name: configuredConceptName}, null));
            }
        });
    };

    return RegistrationObservations;
})();
'use strict';

Bahmni.Registration.RegistrationEncounterConfig = (function() {
  function RegistrationEncounterConfig(conceptData, encounterTypes, visitTypes) {
    this.conceptData = conceptData;
    this.encounterTypes = encounterTypes;
    this.visitTypes = visitTypes;
  }

  RegistrationEncounterConfig.prototype = {
    getVistTypesAsArray: function() {
      var visitTypesArray = [];
      for(var name in this.visitTypes) {
          visitTypesArray.push({name: name, uuid: this.visitTypes[name]});
      }
      return visitTypesArray;
    }
  }

  return RegistrationEncounterConfig;
})();
'use strict';

Bahmni.Registration.PatientConfig = (function () {

    function PatientConfig(patientAttributeTypes, identifierSources, additionalPatientInformation ) {
        this.personAttributeTypes = patientAttributeTypes;
        this.identifierSources = identifierSources;
        var additionalAttributes = [];
        //Avoiding multiple calls from angular code. Side effect of the way angular does dirty check. [Shruti/ Sush]
        if ( !this.attributeRows && this.personAttributeTypes) {
            var attributes = this.personAttributeTypes.filter(function (item) {
                var find = _.find(additionalPatientInformation, function (attribute) {
                        if(attribute.name === item.name){
                            if(attribute.display){
                                additionalAttributes.push(item);
                            }
                            return true;
                        }
                        return false;
                    }
                );
                return item.name !== "healthCenter" && item.name !== "givenNameLocal" && item.name !== "middleNameLocal" && item.name !== "familyNameLocal" && (find ? false : true);
            });
            this.attributeRows = this.splitAsRows(attributes);
            this.additionalAttributesTypes = additionalAttributes;
        }
    }

    PatientConfig.prototype = {
        get: function (attributeUuid) {
            return this.personAttributeTypes.filter(function (item) {
                return item.uuid === attributeUuid
            })[0];
        },

        customAttributeRows: function () {
            return this.attributeRows;
        },

        additionalAttributes : function(){
            return this.additionalAttributesTypes;
        },

        splitAsRows: function (attributes) {
            var attributeRows = [];
            var row = [];
            for (var i in attributes) {
                row.push(attributes[i]);
                if (i !== 0 && (i % 2) !== 0) {
                    attributeRows.push(row);
                    row = [];
                }
            }
            if (row.length > 0) {
                attributeRows.push(row);
            }

            return attributeRows;
        },

        heathCentreAttribute: function () {
            return this.personAttributeTypes.filter(function (item) {
                return item.name === "healthCenter";
            })[0];
        },

        local: function () {
            var givenName = this.personAttributeTypes.filter(function (item) {
                return item.name === "givenNameLocal";
            })[0];
            var middleName = this.personAttributeTypes.filter(function (item) {
                return item.name === "middleNameLocal";
            })[0];
            var familyName = this.personAttributeTypes.filter(function (item) {
                return item.name === "familyNameLocal";
            })[0];

            if (givenName && middleName && familyName) {
                return { "showNameField": true, "labelForNameField": givenName.description, "placeholderForGivenName": givenName.description, "placeholderForMiddleName": middleName.description, "placeholderForFamilyName": familyName.description};
            }
            return {"showNameField": false}
        }

    };
    return PatientConfig;

})();
