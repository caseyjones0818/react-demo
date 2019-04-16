import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <h2>
        <Link to="/examples">examples</Link>
      </h2>
    )
  }
}

export default Home
