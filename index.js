const express = require('express')
const app = express()
const port = 8080

app.get('/', (request, response) => {
  //response.send('Hello from Julcash!')
  response.sendFile(__dirname + '/images/logo.png');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})