import fetch from 'isomorphic-fetch'
import { SET_FORTUNE_COOKIES } from '../constants'
const url = 'http://localhost:5000/fortune-cookies'

export const setFortuneCookies = async (dispatch, getState) => {
  const fortuneCookies = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_FORTUNE_COOKIES, payload: fortuneCookies })
}
