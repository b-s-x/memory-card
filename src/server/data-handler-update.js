const fs = require("fs")

// const data = {
//   "id":3,
//   "text":"be was (were) been",
//   "translate":"быть",
//   "count": 3
// }

const dataReader = (data, cb) => {
  fs.readFile('../static/files/words-test.json', 'utf8', (err, dataServer) => {
    const dataServerParse = JSON.parse(dataServer)

    console.log("dataServer", dataServer);
    console.log("data", data);
    dataServerParse.filter((elem) =>  {
      if(elem.id === data.id) {
        elem.count = data.count
      }
    })

    cb(null, dataServerParse)
  })
}

const dataWriter = (data) => {
  fs.writeFile('../static/files/words-test.json', data, (err) => {
    if(err) throw err
  })
}

const dataHandler = (data) => {
  dataReader(data, (err, newData) => {
    const dataServerStringify = JSON.stringify(newData)
    dataWriter(dataServerStringify)
  })
}

// dataHandler(data)

module.exports = { dataHandler }
