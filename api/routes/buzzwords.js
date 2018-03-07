const buzzWordsObj = require('buzzwords')
const uuid = require('uuid')
const { map, keys, prop } = require('ramda')

const createBuzzWord = b => ({
  id: uuid.v4(),
  name: prop(b, buzzWordsObj),
  value: null
})

const buzzWords = map(createBuzzWord, keys(buzzWordsObj))

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzWords)
  })
}
