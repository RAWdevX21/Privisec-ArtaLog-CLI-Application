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

let collectionFile = readCollection();

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

function readDeletedCollection() {
  try {
    const data = fs.readFileSync("./data/deleted-works-recovery.json", {
      encoding: "utf8",
      flag: "r"
    });
    return JSON.parse(data);
  } catch (error) {
    informErr("Error reading deleted data:", error.message);
    return []; // Return empty array if file isn't found or can't be parsed;
  }
}

let deletedDataFile = readDeletedCollection();

function updateDeletedCollection(deletedData) {
  try {
    fs.writeFileSync(
      "./data/deleted-works-recovery.json",
      JSON.stringify(deletedData, null, 2)
    );
    inform("Deleted data updated successfully.");
  } catch (error) {
    informErr("Error updating deleted data:", error.message);
  }
}

export {
  readCollection,
  collectionFile,
  updateCollection,
  readDeletedCollection,
  deletedDataFile,
  updateDeletedCollection
};
