import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = fortune => {
  return <li key={fortune.id}>{fortune.name}</li>
}

class FortuneCookies extends React.Component {
  constructor() {
    super()
    this.state = { names: '' }
  }
  componentDidMount() {
    fetch('http://localhost:5000/fortune-cookies')
      .then(res => res.json())
      .then(names => this.setState({ names }))
      .catch(err => console.log('ERROR', err))
  }
  render() {
    return (
      <div>
        <h1>Fortune Cookies</h1>
        <ul>{map(li, this.state.names)}</ul>
      </div>
    )
  }
}

export default FortuneCookies
