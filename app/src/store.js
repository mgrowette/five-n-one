import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'
import { starWars } from './reducers/starwars'
import { buzzwords } from './reducers/buzzwords'
import { emojis } from './reducers/emojis'
import { fortuneCookies } from './reducers/fortune-cookies'

export default createStore(
  combineReducers({
    colors,
    starWars,
    buzzwords,
    emojis,
    fortuneCookies
  }),
  applyMiddleware(thunk)
)
