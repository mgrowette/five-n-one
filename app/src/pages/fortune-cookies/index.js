import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = fortune => {
  return <li key={fortune.id}>{fortune.name}</li>
}

const FortuneCookies = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      {map(li, props.fortuneCookies)}
    </div>
  )
}

// class FortuneCookies extends React.Component {
//   constructor() {
//     super()
//     this.state = { names: '' }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/fortune-cookies')
//       .then(res => res.json())
//       .then(names => this.setState({ names }))
//       .catch(err => console.log('ERROR', err))
//   }
//   render() {
//     return (
//       <div>
//         <h1>Fortune Cookies</h1>
//         <ul>{map(li, this.state.names)}</ul>
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return { fortuneCookies: state.fortuneCookies }
}

const connector = connect(mapStateToProps)

export default connector(FortuneCookies)
