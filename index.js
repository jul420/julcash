const express = require('express')
const app = express()
const port = 80

app.get('/', (request, response) => {
  response.send('Hello from Julcash!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})