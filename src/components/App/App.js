import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../../apiCalls';
import ResContainer from '../ResContainer/ResContainer';

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
      // .then(data => console.log('data', data))
      .catch(() => console.log('Error loading movies'))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ResContainer className='resy-container' reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
