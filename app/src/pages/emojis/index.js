import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = emoji => {
  return <li key={emoji.id}>{emoji.name}</li>
}

const Emojis = props => {
  return (
    <div>
      <h1>Emojis</h1>
      <ul>{map(li, props.names)}</ul>
    </div>
  )
}
// class Emojis extends React.Component {
//   constructor() {
//     super()
//     this.state = { names: '' }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/emojis')
//       .then(res => res.json())
//       .then(apiNames => this.setState({ names: apiNames }))
//       .catch(err => console.log('ERROR', err))
//   }
//   render() {
//     return (
// <div>
//   <h1>Emojis</h1>
//   <ul>{map(li, this.state.names)}</ul>
// </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return { emojis: state.emojis }
}

const connector = connect(mapStateToProps)

export default connector(Emojis)
