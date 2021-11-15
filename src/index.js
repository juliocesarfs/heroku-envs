require('dotenv').config()

require('http')
.createServer((req, res) => {
  res.end(JSON.stringify({
    server: `DevJulio: ${process.env.TEST_ENV}`,
  }))
})
.listen(3000)

console.log('Rodando em http://localhost:3000')