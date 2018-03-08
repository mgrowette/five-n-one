import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      {map(li, props.colors)}
    </div>
  )
}

// class Colors extends React.Component {
//   constructor() {
//     super()
//     this.state = { colors: [] }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/colors')
//       .then(res => res.json())
//       .then(colors => this.setState({ colors }))
//       .catch(err => console.log('ERROR ALL THE WAY', err))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Colors</h1>
//         <ul>{map(li, this.state.colors)}</ul>
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)
