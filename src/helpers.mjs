import fs from "fs";
const inform = console.log;
const informErr = console.error;

function readCollection() {
  try {
    const data = fs.readFileSync("./data/collection.json", {
      encoding: "utf8",
      flag: "r"
    });
    return JSON.parse(data);
  } catch (error) {
    informErr("Error reading collection:", error.message);
    return []; // Return empty array if file isn't found or can't be parsed;
  }
}

const collection = readCollection();
/*
The JSON.stringify is used to convert the JavaScript object back to a JSON 
string with proper formatting (the third argument 2 specifies the number of 
spaces for indentation).
*/
function updateCollection(collection) {
  try {
    fs.writeFileSync(
      "./data/collection.json",
      JSON.stringify(collection, null, 2)
    );
    inform("Collection updated successfully.");
  } catch (error) {
    informErr("Error updating collection:", error.message);
  }
}

export { readCollection, updateCollection };
