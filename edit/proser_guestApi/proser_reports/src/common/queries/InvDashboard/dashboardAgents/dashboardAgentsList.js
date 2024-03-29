// DASHBOARD INBOUND REPORT
/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */

// IMPORTS
import * as pool from "../../../../connectors/pool";
import {
  objectDateToTextDate,
  valueFromObject
} from "../../../functions/dateFunctions";

import {
  dateAndTimeSqlQuery,
  arrayToSqlQuery,
  arrayToJsonSqlQuery,
  sqlIntervalSqlQuery,
  sqlIntervalGroupSqlQuery
} from "../../../functions/sqlFunctions";


/******************************************************************** */
// MAIN FUNCTION
export async function dashboardAgentsList(userSelection) {
  let result = {};
  let resume_error = false;

  if(userSelection.mode.name='Actual'){
    userSelection.start_date = userSelection.current_date;
    userSelection.end_date = userSelection.end_date;
  }

  let dashboardAgentsListPlanned = await dashboardAgentsListPlannedFunction(userSelection);
  let dashboardAgentsListConnected = await dashboardAgentsListConnectedFunction(userSelection);
  let dashboardAgentsListEffective = await dashboardAgentsListEffectiveFunction(userSelection);
  
  
  result = {
    dashboardAgentsListPlanned,
    dashboardAgentsListConnected,
    dashboardAgentsListEffective
   
  };

  return result;
}

/**************************************** */
// Agents Planned List
async function dashboardAgentsListPlannedFunction(userSelection) {
  let result = [
    {
      now: "",
      agentsPlannedTotal: null
    }
  ];
  let resume_error = false;
  let query = `
  -- agentsPlannedTotalFunction ----------
-- FIELDS
SELECT

  'CONSTRUCCION' as agentsPlannedList

    FROM
        HcaAgent
       
        -- ---------------------------------------------------------------
        -- CONDITIONS
        WHERE 1
        
        -- TIME AND DATE
        ${dateAndTimeSqlQuery(userSelection, "hca_agent_date")}
        
        -- AGENT
        ${arrayToSqlQuery(userSelection.agent, "hca_agent_id")}
        
        -- SUPERVISOR
        ${arrayToJsonSqlQuery(
    userSelection.supervisor,
    "hca_agent_people_json"
  )}
        
        -- SCHEDULE
        ${arrayToJsonSqlQuery(userSelection.client, "hca_agent_schedule_json")}
        
        -- ROLE
        ${arrayToJsonSqlQuery(userSelection.client, "hca_agent_role_json")}
        
        -- CLIENT
        ${arrayToJsonSqlQuery(userSelection.client, "hca_agent_client_json")}
        
        -- QUEUE
        ${arrayToJsonSqlQuery(userSelection.queue, "hca_agent_queue_json")}
        
        -- SERVICE
        ${arrayToJsonSqlQuery(userSelection.service, "hca_agent_service_json")}
        
        -- CAMPAIGN
        ${arrayToSqlQuery(userSelection.campaign, "hca_agent_campaign_json")}
        
        -- BREAK
        -- ASIGNACION

        GROUP BY hca_agent_date
        -- END ----------------------------------------------------------
        `;


  try {
    let temp = await pool.destinyReports.query(query);
    return temp.length < 1 ? result : temp;
  } catch (error) {
    return (result = { error: error });
  }
}


/**************************************** */
// Agents Connected
async function dashboardAgentsListConnectedFunction(userSelection) {
  let result = null;
  let resume_error = false;
  let query = `
  -- ---------------------------------------------------------------
  -- FIELDS
  SELECT
  
  -- TIME & INTERVAL
  now() as now
      
  ,rca_agent_name as agent_name
  ,rca_group_name as group_name
  ,rca_subgroup_name as subgroup_name
  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, "$.supervisor[0].name") ) as supervisor_name
  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, "$.schedule[0].name") ) as schedule_name
  
  -- ---------------------------------------------------------------
  -- TABLES & JOINS
  
  FROM
  
  RealCurrentAgents
  LEFT OUTER JOIN InvAgent
  ON rca_agent_id = inv_agent_id
  
  LEFT OUTER JOIN MainAudit
  ON rca_audit_login_id = audit_id
  
  -- ---------------------------------------------------------------
  -- CONDITIONS
  WHERE 1

  AND
  rca_agent_status = 'Logueado'
  
  -- TIME AND DATE
  ${dateAndTimeSqlQuery(userSelection, "rca_agent_datetime_login")}
  
  -- AGENT
  ${arrayToSqlQuery(userSelection.agent, "rca_agent_id")}
  
  -- SUPERVISOR
  ${arrayToJsonSqlQuery(userSelection.supervisor, "rca_people_json", "supervisor")}

  -- SCHEDULE
  ${arrayToJsonSqlQuery(userSelection.client, "rca_time_json", "schedule")}

  -- ROLE
  ${arrayToJsonSqlQuery(userSelection.client, "rca_people_json", "role")}

  -- CLIENT
  ${arrayToJsonSqlQuery(userSelection.client, "rca_operation_json", "client")}

  -- QUEUE
  ${arrayToJsonSqlQuery(userSelection.queue, "rca_operation_json", "queue")}

  -- SERVICE
  ${arrayToJsonSqlQuery(userSelection.service, "rca_operation_json", "service")}

  -- CAMPAIGN
  ${arrayToJsonSqlQuery(userSelection.campaign, "rca_operation_json", "campaign")}
  
  -- BREAK
  ${arrayToSqlQuery(userSelection.auxiliar, "audit_break_id")}
  
  -- ASIGNACION
  ${arrayToSqlQuery(userSelection.assignation, "audit_break_id")}
  
  GROUP BY rca_agent_name
  
  -- END -----------------------------------------------------------
  `;

  try {
    let result = await pool.destinyReports.query(query);
    return result;
  } catch (error) {
    return (result = { error: error });
  }
}


/**************************************** */
// Agents Effective
async function dashboardAgentsListEffectiveFunction(userSelection) {
  let result = null;
  let resume_error = false;
  let query = `
  -- ---------------------------------------------------------------
  -- FIELDS
  SELECT
  
  -- TIME & INTERVAL
  now() as now
      
  ,rca_agent_name as agent_name
  ,rca_group_name as group_name
  ,JSON_UNQUOTE(JSON_EXTRACT(rca_people_json, "$.supervisor[0].name") ) as supervisor_name
  ,JSON_UNQUOTE(JSON_EXTRACT(rca_time_json, "$.schedule[0].name") ) as schedule_name
  
  -- ---------------------------------------------------------------
  -- TABLES & JOINS
  
  FROM
  
  RealCurrentAgents
  LEFT OUTER JOIN InvAgent
  ON rca_agent_id = inv_agent_id
  
  LEFT OUTER JOIN MainAudit
  ON rca_audit_login_id = audit_id
  
  -- ---------------------------------------------------------------
  -- CONDITIONS
  WHERE 1

  AND
  rca_agent_status = 'Logueado'
  AND
  (rca_group_name = 'Disponible' or rca_group_name = 'Ocupado')
  
  -- TIME AND DATE
  ${dateAndTimeSqlQuery(userSelection, "rca_agent_datetime_login")}
  
  -- AGENT
  ${arrayToSqlQuery(userSelection.agent, "rca_agent_id")}
  
  -- SUPERVISOR
  ${arrayToJsonSqlQuery(userSelection.supervisor, "rca_people_json", "supervisor")}

  -- SCHEDULE
  ${arrayToJsonSqlQuery(userSelection.client, "rca_time_json", "schedule")}

  -- ROLE
  ${arrayToJsonSqlQuery(userSelection.client, "rca_people_json", "role")}

  -- CLIENT
  ${arrayToJsonSqlQuery(userSelection.client, "rca_operation_json", "client")}

  -- QUEUE
  ${arrayToJsonSqlQuery(userSelection.queue, "rca_operation_json", "queue")}

  -- SERVICE
  ${arrayToJsonSqlQuery(userSelection.service, "rca_operation_json", "service")}

  -- CAMPAIGN
  ${arrayToJsonSqlQuery(userSelection.campaign, "rca_operation_json", "campaign")}
  
  -- BREAK
  ${arrayToSqlQuery(userSelection.auxiliar, "audit_break_id")}
  
  -- ASIGNACION
  ${arrayToSqlQuery(userSelection.assignation, "audit_break_id")}
  
  GROUP BY rca_agent_name
  
  -- END -----------------------------------------------------------
  `;

  try {
    let result = await pool.destinyReports.query(query);
    return result;
  } catch (error) {
    return (result = { error: error });
  }
}