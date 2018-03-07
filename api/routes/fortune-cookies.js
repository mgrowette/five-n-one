const fortuneCookiesObj = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createFortune = f => ({
  id: uuid.v4(),
  name: prop(f, fortuneCookiesObj),
  value: null
})

const fortuneCookies = map(createFortune, keys(fortuneCookiesObj))

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(fortuneCookies)
  })
}
