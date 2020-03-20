import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
const data = require('./data')

console.log(data)

class App extends Component {

  state = { dir: data }

handleFirstAZ = _ => {
  let dir = JSON.parse(JSON.stringify(this.state.dir))
  dir.sort((a, b) => a.first_name.localeCompare(b.first_name))
  this.setState({ dir: dir })
}

  handleFirstZA = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((b, a) => a.first_name.localeCompare(b.first_name))
    this.setState({ dir: dir })
}

  handleLastAZ = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((a, b) => a.last_name.localeCompare(b.last_name))
    this.setState({ dir: dir })
}

  handleLastZA = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((b, a) => a.last_name.localeCompare(b.last_name))
    this.setState({ dir: dir })
}

handleStateFilter = ({ target }) => {
  let dir
  switch(target.value) {
    case 'CA':
      dir = data.filter((a) => (a.state === 'California'))
      break
    case 'AZ':
      dir = data.filter((a) => (a.state === 'Arizona'))
      break
    case 'NV':
      dir = data.filter((a) => (a.state === 'Nevada'))
      break
    case 'WA':
      dir = data.filter((a) => (a.state === 'Washington'))
      break
    case 'OR':
      dir = data.filter((a) => (a.state === 'Oregon'))
      break
    case 'All':
      dir = data
      break
    }
    this.setState({ dir: dir })
}

render () {
  return (
    <>
      <div className='uk-padding-large uk-background-primary'><h1 className='uk-heading-medium uk-text-center'>Employee Directory</h1></div>
      <div className='uk-container'>
        <p className='uk-padding'>
          Sort by first name:
          <button className='uk-button uk-button-default uk-button-small' onClick={this.handleFirstAZ}>A > Z</button>
          <button className='uk-button uk-button-default uk-button-small' onClick={this.handleFirstZA}>Z > A</button>
          Sort by last name:
          <button className='uk-button uk-button-default uk-button-small' onClick={this.handleLastAZ}>A > Z</button>
          <button className='uk-button uk-button-default uk-button-small' onClick={this.handleLastZA}>Z > A</button>
          Filter by state:
          <select className='uk-select uk-form-width-small' defaultValue={this.state.selectValue} onChange={this.handleStateFilter}>
            <option value="All">All</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="NV">Nevada</option>
            <option value="OR">Oregon</option>
            <option value="WA">Washington</option>
          </select>
        </p>
        <table className='uk-table uk-table-striped'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.dir.map(elem => (
                <tr key={elem.id}>
                  <td>{elem.first_name}</td>
                  <td>{elem.last_name}</td>
                  <td>{elem.email}</td>
                  <td>{elem.state}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
}

export default App
