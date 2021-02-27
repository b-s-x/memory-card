const fs = require("fs")

const data = {
  "id":3,
  "text":"be was (were) been",
  "translate":"быть",
  "count": 5
}

const dataHandler = (data) => {

  fs.readFile('../static/files/words-test.json', 'utf8', (err, dataServerJSON) => {
    const dataReadServerParse = JSON.parse(dataServerJSON)

    dataReadServerParse.filter((elem) =>  {
      if(elem.id === data.id) {
        elem.count = data.count
      }
    })

    const dataServerStringify = JSON.stringify(dataReadServerParse)

    fs.writeFile('../static/files/words-test.json', dataServerStringify, (err) => {
      if(err) throw err
    })
  })
}

dataHandler(data)

// module.exports = { dataHandler }
