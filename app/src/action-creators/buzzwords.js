import fetch from 'isomorphic-fetch'
import { SET_BUZZWORDS } from '../constants'
const url = 'http://localhost:5000/buzzwords'

export const setBuzzWords = async (dispatch, getState) => {
  const buzzWords = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_BUZZWORDS, payload: buzzWords })
}
