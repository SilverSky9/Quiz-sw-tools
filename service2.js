const express = require('express')
const app = express()
const port = 3000

app.get('/movies', async function (req, res) {
  res.type('json')
  var delay = Math.floor( ( Math.random() * 2000 ) + 100);

  setTimeout((() => {
    res.send(({movies: [
      { name: 'Nopphadon Phanwong', genre: 'Student'}, 
      { name: '62070101 Nopphadon Phanwong', genre: 'Student'},
      { name: 'Nopphadon Phanwong 62070101', genre: 'Student'},
    ]}))
  }), delay)

})

app.listen( port, () => { console.log(`Listening at http://localhost:${port}`)})