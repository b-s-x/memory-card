const fs = require("fs")
const path = require('path');

const DATA_PATH = path.join(__dirname, "..", "static/files", "words-test.json")

const dataReader = (newData, cb) => {
  fs.readFile(DATA_PATH, 'utf8', (err, dataServer) => {
    const dataServerParse = JSON.parse(dataServer)
    dataServerParse.filter((elem) => {
      if (elem.id === newData.id) {
        elem.count = newData.count
      }
    })

    cb(err, dataServerParse)
  })
}


const dataWriter = (data) => {
  fs.writeFile(DATA_PATH, JSON.stringify(data), (err) => {
    if (err) throw err
  })
}


const dataHandler = (data) => {
  try {
    return new Promise((resolve, reject) => {
      dataReader(data, (err, newDataParse) => {
        if (err != null) {
          reject(err);
          return;
        }
        resolve(newDataParse)
      })
    }).then(dataWriter)
      .catch(console.log)
  } catch (err) {
    console.log(err);
  };
}


module.exports = { dataHandler }
