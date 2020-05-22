import * as pool from "../../../../connectors/pool";

// import userSelectionFilters from "../../InvMenu/userSelection/userSelectionFilters";

import {
  dateAndTimeSqlQuery,
  arrayToSqlQuery,
  arrayToJsonSqlQuery,
  objectToJsonSqlQuery,
  sqlIntervalSqlQuery,
  sqlIntervalGroupSqlQuery
} from "../../../functions/sqlFunctions";

/******************************************************************** */

export async function dashboardInboundGroupsReport(userSelection) {
  // DEFINE VARIABLES
  let result = {
    total: [],
    detail: []
  };

  /* DETAIL ********************************* */
  let queryDetail = `
  SET STATEMENT max_statement_time=50 FOR
    SELECT
      ${detailFields(userSelection)}
    FROM
      ${query(userSelection)}
  `;


  try {
    result.detail = await pool.destinyReports.query(queryDetail);
  } catch (error) {
    result.detail = { errorDetail: error };
  }

  /* TOTAL ********************************* */
  let queryTotal = `
  SET STATEMENT max_statement_time=50 FOR
    SELECT
      ${totalFields(userSelection)}
    FROM
      (${queryDetail}) AS detail
    `;

  try {
    result.total = await pool.destinyReports.query(queryTotal);
  } catch (error) {
    result.total = { errorTotal: error };
  }

  return result;
}

// TOTAL FIELDS
function totalFields(userSelection) {
  let group_name = userSelection.groupBy.name;

  return `
  now() AS now
  ,'${group_name}' as group_name
  ,'${group_name}' as group_json_id
  ,'${group_name}' as group_item_name

  ,'' as day_name
  ,'' as week_day

  ,'' AS start_date
  ,'' AS start_time
  ,'' AS end_time

   ,${process.env.CDR_SERVICE_IDEAL_TIME} AS idealResponseTime

  ,SUM(inboundReceived) AS inboundReceived

  ,SUM(inboundAbandoned) AS inboundAbandoned

  ,SUM(inboundAttended) AS inboundAttended

  ,SUM(inboundShort) AS inboundShort

  ,SUM(inboundBeforeTime) AS inboundBeforeTime

  ,SUM(inboundAfterTime) AS inboundAfterTime

  ,SUM(inboundHungAgent) AS inboundHungAgent

  ,SUM(inboundBeforeTime)/SUM(inboundReceived) AS inboundServiceLevel

  ,SUM(inboundAttended)/SUM(inboundReceived) AS inboundAttentionLevel

  ,SUM(inboundAbandoned)/SUM(inboundReceived) AS inboundAbandonLevel

  ,SUM(operation_seconds) AS operation_seconds

  ,SEC_TO_TIME(SUM(operation_seconds)) AS operation_time

  ,SUM(wait_seconds) AS wait_seconds

  ,SEC_TO_TIME(SUM(wait_seconds)) AS wait_time

  ,SUM(operation_seconds)/SUM(inboundAttended) AS inboundTmo

  ,SUM(wait_time_recieve)/SUM(inboundAttended) AS inboundAsa`;
}

/******************************************************* */
// DETAIL FIELDS
function detailFields(userSelection) {
  let group_name = userSelection.groupBy.name;
  let group_json_id = userSelection.groupBy.MainCallEntry_json_id;
  let group_item_name = userSelection.groupBy.inv_name;

  return `
  now() AS now

  ,'${group_name}' as group_name
  , ${group_json_id} as group_json_id
  , MAIN.${group_item_name} as group_item_name

  ,DAYNAME(callentry_date) as day_name
  ,WEEKDAY(callentry_date) + ${process.env.MONDAY_CONFIG} as week_day

  ,DATE_FORMAT(callentry_date, "%Y-%m-%d") AS start_date
  
  ,MIN(DATE_FORMAT(callentry_datetime_init, '%H:%i:%s')) AS start_time
  
  ,MAX(DATE_FORMAT(callentry_datetime_end, '%H:%i:%s')) AS end_time
  
  ,${process.env.CDR_SERVICE_IDEAL_TIME} AS idealResponseTime
  ,${process.env.CDR_SHORTCALL_TIME} AS shortTimeDef
  
  ,SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundReceived
  
  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end) AS inboundAbandoned
  
  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAttended
  
  ,SUM(case when callentry_duration_sec <= ${process.env.CDR_SHORTCALL_TIME} then 1 else 0 end) AS inboundShort
  
  ,SUM(case when (callentry_duration_sec_wait <= ${process.env.CDR_SERVICE_IDEAL_TIME} AND callentry_status = 'terminada')then 1 else 0 end) AS inboundBeforeTime

  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end) - SUM(case when (callentry_duration_sec_wait <= ${process.env.CDR_SERVICE_IDEAL_TIME} AND callentry_status = 'terminada')then 1 else 0 end) AS inboundAfterTime
  
  ,SUM(callentry_hung_agent) AS inboundHungAgent
  
  ,SUM(case when (callentry_status = 'terminada' AND callentry_duration_sec_wait <= ${process.env.CDR_SERVICE_IDEAL_TIME}) then 1 else 0 end)/
   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundServiceLevel
  
  ,SUM(case when callentry_status = 'terminada' then 1 else 0 end)/
   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAttentionLevel
  
  ,SUM(case when callentry_status = 'abandonada' then 1 else 0 end)/
   SUM(case when (callentry_status = 'abandonada' OR callentry_status = 'terminada' )then 1 else 0 end) AS inboundAbandonLevel
  
  ,SUM(callentry_duration_sec) AS operation_seconds
  
  ,SEC_TO_TIME(SUM(callentry_duration_sec)) AS operation_time
  
  ,SUM(callentry_duration_sec_wait) AS wait_seconds
  
  ,SEC_TO_TIME(SUM(callentry_duration_sec_wait)) AS wait_time
  
  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec else 0 end)/
   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundTmo
  
  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end)/
   SUM(case when callentry_status = 'terminada' then 1 else 0 end) AS inboundAsa

  ,SUM(case when callentry_status = 'terminada' then callentry_duration_sec_wait else 0 end) as wait_time_recieve

  `;
}

/********************************************************* */
// MAIN QUERY
function query(userSelection) {
  let group_json_id = userSelection.groupBy.MainCallEntry_json_id;
  let group_table = userSelection.groupBy.table;
  let group_inv_id = userSelection.groupBy.inv_id;

  return `

MainCallEntry

LEFT OUTER JOIN InvAgent as AGENT
ON callentry_agent_id = inv_agent_id

LEFT OUTER JOIN InvQueue as QUEUE
ON callentry_queue_id = inv_queue_id


LEFT OUTER JOIN ${group_table} as MAIN
ON ${group_json_id} = MAIN.${group_inv_id}


-- -----------------------------
WHERE 1

AND
QUEUE.inv_queue_type = 'inbound'

-- TIME AND DATE
${dateAndTimeSqlQuery(userSelection, "callentry_datetime_entry_queue")}
AND callentry_date is not null

-- AGENT
${arrayToSqlQuery(userSelection.agent, "callentry_agent_id")}

-- SUPERVISOR
${objectToJsonSqlQuery(
    userSelection.supervisor,
    "callentry_people_json",
    "supervisor"
  )}

-- SCHEDULE
${objectToJsonSqlQuery(userSelection.client, "callentry_time_json", "schedule")}

-- ROLE
${objectToJsonSqlQuery(userSelection.client, "callentry_people_json", "role")}

-- CLIENT
${arrayToJsonSqlQuery(
    userSelection.client,
    "callentry_operation_json",
    "client"
  )}

-- QUEUE
${arrayToSqlQuery(userSelection.queue, "callentry_queue_id")}

-- SERVICE
${arrayToJsonSqlQuery(
    userSelection.service,
    "callentry_operation_json",
    "service"
  )}

-- CAMPAIGN
${arrayToSqlQuery(userSelection.campaign, "callentry_campaign_id")}


GROUP BY group_json_id


-- ---------------------------------------------------------------
-- END
`;
}
