"use strict";
// INBOUND
import * as dashboardInboundIndicators from "../queries/InvDashboard/dashboardInbound/dashboardInboundIndicators";
import * as dashboardInboundIndicatorsRealTime from "../queries/InvDashboard/dashboardInbound/dashboardInboundIndicatorsRealTime";
import * as dashboardInboundDailyByInterval from "../queries/InvDashboard/dashboardInbound/dashboardInboundDailyByInterval";
import * as dashboardInboundGroups from "../queries/InvDashboard/dashboardInbound/dashboardInboundGroups";

import * as dashboardInboundList from "../queries/InvDashboard/dashboardInbound/dashboardInboundList";
import * as dashboardInboundListCallEntry from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-callentry";
import * as dashboardInboundListCurrentCalls from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentCalls";
import * as dashboardInboundListCurrentAgents from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentAgents";
import * as dashboardInboundListCurrentBreaks from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentBreaks";
import * as dashboardInboundListAuditAgents from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditAgents";
import * as dashboardInboundListAuditBreaks from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditBreaks";
import * as dashboardInboundListPlanAgents from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-planAgents";


import * as dashboardInboundListCallEntryRealTime from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-callentryRealTime";
import * as dashboardInboundListCurrentCallsRealTime from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentCallsRealTime";
import * as dashboardInboundListCurrentAgentsRealTime from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentAgentsRealTime";
import * as dashboardInboundListCurrentBreaksRealTime from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-currentBreaksRealTime";
import * as dashboardInboundListAuditAgentsRealTime from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditAgentsRealTime";
import * as dashboardInboundListAuditBreaksRealTime from "../queries/InvDashboard/dashboardInbound/dashboard-inbound-list/dashboard-inbound-list-auditBreaksRealTime";

// AGENTS
import * as dashboardAgentsIndicators from "../queries/InvDashboard/dashboardAgents/dashboardAgentsIndicators";
import * as dashboardAgentsList from "../queries/InvDashboard/dashboardAgents/dashboardAgentsList";

// OUTBOUND
import * as dashboardOutboundIndicators from "../queries/InvDashboard/dashboardOutbound/dashboardOutboundindicators";
import * as dashboardOutboundIndicatorsRealTime from "../queries/InvDashboard/dashboardOutbound/dashboardOutboundindicatorsRealTime";
import * as dashboardOutboundDailyByInterval from "../queries/InvDashboard/dashboardOutbound/dashboardOutboundDailyByInterval";
import * as dashboardOutboundListCdr from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-cdr";
import * as dashboardOutboundListCurrentCalls from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-currentCalls";
import * as dashboardOutboundListCurrentAgents from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-currentAgents";
import * as dashboardOutboundListCurrentBreaks from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-currentBreaks";
import * as dashboardOutboundListAuditAgents from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-auditAgents";
import * as dashboardOutboundListAuditBreaks from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-auditBreaks";
import * as dashboardOutboundListPlanAgents from "../queries/InvDashboard/dashboardOutbound/dashboard-outbound-list/dashboard-outbound-list-planAgents";

// AUTOMATIC
import * as automaticsIndicators from "../queries/InvDashboard/automatics/automaticsIndicators";



// import * as inboundTest from '../queries/InvDashboard/inbound/inboundTest';

module.exports = function(InvDashboard) {
  //******************************************************************************************************* */
  //******************************************************************************************************* */

  //**********************INBOUND INDICATORS**********************/

  InvDashboard.dashboardInboundIndicators = async function(userSelection) {
    return dashboardInboundIndicators.dashboardInboundIndicators(userSelection);
  };

  InvDashboard.remoteMethod("dashboardInboundIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND INDICATORS REAL TIME**********************/

  InvDashboard.dashboardInboundIndicatorsRealTime = async function(userSelection) {
    return dashboardInboundIndicatorsRealTime.dashboardInboundIndicatorsRealTime(userSelection);
  };

  InvDashboard.remoteMethod("dashboardInboundIndicatorsRealTime", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND INTERVAL**********************/

  InvDashboard.dashboardInboundDailyByIntervalReport = async function(
    userSelection
  ) {
    return dashboardInboundDailyByInterval.dashboardInboundDailyByIntervalReport(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundDailyByIntervalReport", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND GROUPS**********************/

  InvDashboard.dashboardInboundGroupsReport = async function(userSelection) {
    return dashboardInboundGroups.dashboardInboundGroupsReport(userSelection);
  };

  InvDashboard.remoteMethod("dashboardInboundGroupsReport", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST**********************/

  InvDashboard.dashboardInboundList = async function(userSelection) {
    return dashboardInboundList.dashboardInboundList(userSelection);
  };

  InvDashboard.remoteMethod("dashboardInboundList", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CALL ENTRY **********************/

  InvDashboard.dashboardInboundListCallEntry = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCallEntry.dashboardInboundListCallEntry(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCallEntry", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST AUDIT-AGENTS**********************/

  InvDashboard.dashboardInboundListAuditAgents = async function(dashboardSelection) {
    return dashboardInboundListAuditAgents.dashboardInboundListAuditAgents(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListAuditAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST AUDIT-BREAKS**********************/

  InvDashboard.dashboardInboundListAuditBreaks = async function(dashboardSelection) {
    return dashboardInboundListAuditBreaks.dashboardInboundListAuditBreaks(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListAuditBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST PLAN-AGENTS**********************/

  InvDashboard.dashboardInboundListPlanAgents = async function(userSelection) {
    return dashboardInboundListPlanAgents.dashboardInboundListPlanAgents(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListPlanAgents", {
    accepts: {
      arg: "userSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CURRENT CALLS**********************/

  InvDashboard.dashboardInboundListCurrentCalls = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCurrentCalls.dashboardInboundListCurrentCalls(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCurrentCalls", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CURRENT AGENTS**********************/

  InvDashboard.dashboardInboundListCurrentAgents = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCurrentAgents.dashboardInboundListCurrentAgents(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCurrentAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CURRENT BREAKS**********************/

  InvDashboard.dashboardInboundListCurrentBreaks = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCurrentBreaks.dashboardInboundListCurrentBreaks(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCurrentBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CALL ENTRY REAL TIME **********************/

  InvDashboard.dashboardInboundListCallEntryRealTime = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCallEntryRealTime.dashboardInboundListCallEntryRealTime(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCallEntryRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST AUDIT-AGENTS REAL TIME**********************/

  InvDashboard.dashboardInboundListAuditAgentsRealTime = async function(dashboardSelection) {
    return dashboardInboundListAuditAgentsRealTime.dashboardInboundListAuditAgentsRealTime(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListAuditAgentsRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST AUDIT-BREAKS REAL TIME**********************/

  InvDashboard.dashboardInboundListAuditBreaksRealTime = async function(dashboardSelection) {
    return dashboardInboundListAuditBreaksRealTime.dashboardInboundListAuditBreaksRealTime(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListAuditBreaksRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CURRENT CALLS REAL TIME**********************/

  InvDashboard.dashboardInboundListCurrentCallsRealTime = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCurrentCallsRealTime.dashboardInboundListCurrentCallsRealTime(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCurrentCallsRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CURRENT AGENTS REAL TIME**********************/

  InvDashboard.dashboardInboundListCurrentCallsRealTime = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCurrentCallsRealTime.dashboardInboundListCurrentCallsRealTime(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCurrentCallsRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************INBOUND LIST CURRENT BREAKS REAL TIME**********************/

  InvDashboard.dashboardInboundListCurrentBreaksRealTime = async function(
    dashboardSelection
  ) {
    return dashboardInboundListCurrentBreaksRealTime.dashboardInboundListCurrentBreaksRealTime(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardInboundListCurrentBreaksRealTime", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //******************************************************************************************************* */
  //******************************************************************************************************* */

  //**********************AGENTS INDICATORS**********************/

  InvDashboard.dashboardAgentsIndicators = async function(userSelection) {
    return dashboardAgentsIndicators.dashboardAgentsIndicators(userSelection);
  };

  InvDashboard.remoteMethod("dashboardAgentsIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************AGENTS LIST**********************/

  InvDashboard.dashboardAgentsList = async function(userSelection) {
    return dashboardAgentsList.dashboardAgentsList(userSelection);
  };

  InvDashboard.remoteMethod("dashboardAgentsList", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************AUTOMATIC INDICATORS**********************/

  InvDashboard.dashboardAutomaticIndicators = async function(userSelection) {
    return dashboardAutomaticIndicators.dashboardAutomaticIndicators(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardAutomaticIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //******************************************************************************************************* */
  //******************************************************************************************************* */

  //**********************OUTBOUND INDICATORS**********************/

  InvDashboard.dashboardOutboundIndicators = async function(userSelection) {
    return dashboardOutboundIndicators.dashboardOutboundIndicators(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundIndicators", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND INDICATORS REAL TIME**********************/

  InvDashboard.dashboardOutboundIndicatorsRealTime = async function(userSelection) {
    return dashboardOutboundIndicatorsRealTime.dashboardOutboundIndicatorsRealTime(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundIndicatorsRealTime", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND LIST CDR **********************/

  InvDashboard.dashboardOutboundListCdr = async function(dashboardSelection) {
    return dashboardOutboundListCdr.dashboardOutboundListCdrFunction(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListCdr", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND LIST CURRENT CALLS**********************/

  InvDashboard.dashboardOutboundListCurrentCalls = async function(
    dashboardSelection
  ) {
    return dashboardOutboundListCurrentCalls.dashboardOutboundListCurrentCallsFunction(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListCurrentCalls", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of current calls"]
  });

  //**********************OUTBOUND LIST CURRENT AGENTS**********************/

  InvDashboard.dashboardOutboundListCurrentAgents = async function(
    dashboardSelection
  ) {
    return dashboardOutboundListCurrentAgents.dashboardOutboundListCurrentAgentsFunction(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListCurrentAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND LIST CURRENT BREAKS**********************/

  InvDashboard.dashboardOutboundListCurrentBreaks = async function(
    dashboardSelection
  ) {
    return dashboardOutboundListCurrentBreaks.dashboardOutboundListCurrentBreaksFunction(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListCurrentBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND LIST AUDIT-AGENTS**********************/

  InvDashboard.dashboardOutboundListAuditAgents = async function(dashboardSelection) {
    return dashboardOutboundListAuditAgents.dashboardOutboundListAuditAgents(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListAuditAgents", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });


  //**********************OUTBOUND LIST AUDIT-BREAKS**********************/

  InvDashboard.dashboardOutboundListAuditBreaks = async function(dashboardSelection) {
    return dashboardOutboundListAuditBreaks.dashboardOutboundListAuditBreaks(
      dashboardSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListAuditBreaks", {
    accepts: {
      arg: "dashboardSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND LIST PLAN-AGENTS**********************/

  InvDashboard.dashboardOutboundListPlanAgents = async function(userSelection) {
    return dashboardOutboundListPlanAgents.dashboardOutboundListPlanAgents(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundListPlanAgents", {
    accepts: {
      arg: "userSelection",
      type: "any",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  //**********************OUTBOUND INTERVAL**********************/

  InvDashboard.dashboardOutboundDailyByInterval = async function(
    userSelection
  ) {
    return dashboardOutboundDailyByInterval.dashboardOutboundDailyByInterval(
      userSelection
    );
  };

  InvDashboard.remoteMethod("dashboardOutboundDailyByInterval", {
    accepts: {
      arg: "userSelection",
      type: "UserSelection",
      http: { source: "body" }
    },
    returns: { type: "array", root: "true" },
    description: ["List of abandoned calls"]
  });

  
  

  //*****************************************************************************************************
};
