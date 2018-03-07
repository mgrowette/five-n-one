import { setFortuneCookies } from './fortune-cookies'
import { SET_FORTUNE_COOKIES } from '../constants'

test('get and dispatch fortune cookies from the api server', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_FORTUNE_COOKIES)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setFortuneCookies(mockDispatch)
})
