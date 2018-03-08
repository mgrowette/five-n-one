import React from 'react'
import { render } from 'react-dom'
import 'tachyons'
import { Provider } from 'react-redux'
import store from './store'
import { setColors } from './action-creators/colors'
import { setStarWars } from './action-creators/starwars'
import { setBuzzWords } from './action-creators/buzzwords'
import { setEmojis } from './action-creators/emojis'
import { setFortuneCookies } from './action-creators/fortune-cookies'

import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
store.dispatch(setColors)
store.dispatch(setStarWars)
store.dispatch(setBuzzWords)
store.dispatch(setEmojis)
store.dispatch(setFortuneCookies)
