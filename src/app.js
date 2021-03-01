const express = require('express')
const path = require('path')
const { devMiddleware, hotMiddleware } = require('./server/hot-module-reload');
const { dataHandler } = require('./server/data-handler-update');
const app = express()
const fs = require('fs');
const bodyParser = require("body-parser")

const port = process.env.PORT || '8000'

app.use(devMiddleware, hotMiddleware)
app.use(bodyParser.json())

app.use('/files', express.static(`${__dirname}/static/files`));
app.use(express.static(`${__dirname}/static`))

app.get('*', (req, res) => {
  const indexPath = path.resolve(__dirname, './static/dist/index.html');
  const fileContent = fs.readFileSync(indexPath)

  res.send(fileContent.toString()).end();
});

app.post('/file', async (req, res) => {
  // const data = req.body

  const data = {
    "id":3,
    "text":"be was (were) been",
    "translate":"быть",
    "count": 5
  }

  await dataHandler(data)
  res.send(200)
})

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
