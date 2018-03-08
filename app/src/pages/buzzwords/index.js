import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = word => {
  return <li key={word.id}>{word.name}</li>
}

// class BuzzWords extends React.Component {
//   constructor() {
//     super()
//     this.state = { names: '' }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/buzzwords')
//       .then(res => res.json())
//       .then(names => this.setState({ names }))
//       .catch(err => console.log('ERROR', err))
//   }
//   render() {
//     return (
//       <div>
//         <h1>BuzzWords</h1>
//         <ul>{map(li, this.state.names)}</ul>
//       </div>
//     )
//   }
// }

const BuzzWords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      {map(li, props.word)}
    </div>
  )
}

const mapStateToProps = state => {
  return { word: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(BuzzWords)
