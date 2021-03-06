import * as pool from "../../../../connectors/pool";
import { removeRowDataPacket } from "../../../../helpers/mysql-helper";
import { writeDestiny, readOriginByDate } from "./extract-functions-real";
import moment from "moment";

// Constants
const destinyTable = "RealCallEntry";
const originTable = "MainCallEntry";
const datefield = "callentry_datetime_entry_queue";
let incoming_date = process.argv[2];

/******************* Running actual program -- exec*/
async function extractRealCallEntry(start_date) {
  start_date = start_date ? start_date : moment().format("YYYY-MM-DD");

  // Console notification
  console.log(`/*************/ Transform ${destinyTable} /*************/ `);
  console.log("start_date", start_date);

  // Read origin data
  let records = await readOriginByDate(
    start_date,
    originTable,
    datefield
  ).catch(err =>
    console.log(`${destinyTable} caught it - readOriginAllRecords`, err)
  );

  console.log("records", records.length);

  // Transform data to import
  if (Array.isArray(records) && records.length > 0) {
    let extendedResult = records
      .map(x => {
        return x;
      })
      .map(y => {
        return y;
      });

    // Write process data to destiny
    let validation =
      Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

    if (validation) {
      try {
        let written = await writeDestiny(extendedResult, destinyTable).catch(
          err =>
            console.log("extractRealCallEntry caught it - writeDestiny", err)
        );

        return { function: "extractRealCallEntry ", result: written };
      } catch (error) {
        console.log("error", error);
        return { error: error };
      }
    }
  }
}

/************************************************************************ */

// npx babel-node src/sync/etl/extract/real/extract_real_main_callentry.js
// extractRealCallEntry(incoming_date);

module.exports = {
  extractRealCallEntry
};
