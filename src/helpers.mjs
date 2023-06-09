import fs from "fs";
const inform = console.log;
const informErr = console.error;

function readCollectionFile() {
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

//FIXME - const collectionFile = readCollectionFile();

function updateCollectionFile(collection) {
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

function readDeletedDataFile() {
  try {
    const data = fs.readFileSync("./data/deleted-works.json", {
      encoding: "utf8",
      flag: "r"
    });
    return JSON.parse(data);
  } catch (error) {
    informErr("Error reading deleted data:", error.message);
    return []; // Return empty array if file isn't found or can't be parsed;
  }
}

//FIXME - const deletedDataFile = readDeletedDataFile();

function updateDeletedDataFile(deletedData) {
  try {
    fs.writeFileSync(
      "./data/deleted-works.json",
      JSON.stringify(deletedData, null, 2)
    );
    inform("Deleted data updated successfully.");
  } catch (error) {
    informErr("Error updating deleted data:", error.message);
  }
}

export {
  readCollectionFile,
  updateCollectionFile,
  readDeletedDataFile,
  updateDeletedDataFile
};
