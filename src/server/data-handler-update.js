const fs = require("fs")

const data = {
  "id":3,
  "text":"be was (were) been",
  "translate":"быть","count": 5
}

const dataHandler = (data) => {

  const dataParse = JSON.parse(data)
  
  fs.readFile('../static/files/words-test.json', 'utf8', (err, dataServerJSON) => {
    const dataReadServerParse = JSON.parse(dataServerJSON)
    console.log( dataReadServerParse[dataParse.id]);
    dataReadServerParse[dataParse.id].count = dataParse.count

    const dataServerStringify = JSON.stringify(dataReadServerParse)

    fs.writeFile('../static/files/words-test.json', dataServerStringify, (err) => {
      if(err) throw err
    })
  })

}

dataHandler(data)

// module.exports = { dataHandler }
