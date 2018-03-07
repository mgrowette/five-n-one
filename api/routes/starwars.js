const starWarsObj = require('starwars-names')
const { prop, map, keys } = require('ramda')
const uuid = require('uuid')

const createStarWars = s => ({
  id: uuid.v4(),
  name: s,
  value: null
})

//name: `${starWarsObj.random()}` for names in a random order

// console.log(starWarsObj)

const starWars = map(createStarWars, starWarsObj.all)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starWars)
  })
}
