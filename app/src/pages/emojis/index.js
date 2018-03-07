import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = emoji => {
  return <li key={emoji.id}>{emoji.name}</li>
}

class Emojis extends React.Component {
  constructor() {
    super()
    this.state = { names: '' }
  }
  componentDidMount() {
    fetch('http://localhost:5000/emojis')
      .then(res => res.json())
      .then(apiNames => this.setState({ names: apiNames }))
      .catch(err => console.log('ERROR', err))
  }
  render() {
    return (
      <div>
        <h1>Emojis</h1>
        <ul>{map(li, this.state.names)}</ul>
      </div>
    )
  }
}

export default Emojis
