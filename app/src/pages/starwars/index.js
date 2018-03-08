import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = character => {
  return <li key={character.id}>{character.name}</li>
}

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars</h1>
      {map(li, props.names)}
    </div>
  )
}

// class StarWars extends React.Component {
//   constructor() {
//     super()
//     this.state = { names: '' }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/starwars')
//       .then(res => res.json())
//       .then(names => this.setState({ names }))
//       .catch(err => console.log('ERROR', err))
//   }
//   render() {
//     return (
//       <div>
//         <h1>Star Wars Names</h1>
//         <ul>{map(li, this.state.names)}</ul>
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return { names: state.starWars }
}

const connector = connect(mapStateToProps)

export default connector(StarWars)
