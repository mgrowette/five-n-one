const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const starWarsRoutes = require('./routes/starwars')
const buzzWordsRoutes = require('./routes/buzzwords')
const fortuneCookieRoutes = require('./routes/fortune-cookies')
const emojisRoutes = require('./routes/emojis')

const app = express()
app.use(cors({ credentials: true }))

// load routes here

app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)

starWarsRoutes(app)

buzzWordsRoutes(app)
fortuneCookieRoutes(app)
emojisRoutes(app)

app.listen(5000)
console.log('Server listening at 5000')
