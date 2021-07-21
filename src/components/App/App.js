import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetchReservations() 
      .then(data => this.setState({ reservations: data }))
      .catch(() => console.log('Error loading movies'))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;