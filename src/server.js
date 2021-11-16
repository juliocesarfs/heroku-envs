require('dotenv').config()
const { response } = require('express')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const keyword = 'apples'

app.get('/', (request, response) => {
  response.send(keyword)
})

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`)
})


console.log(`enviroment: ${process.env.TEST_ENV}`)