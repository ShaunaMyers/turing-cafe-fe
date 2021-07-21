import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../../apiCalls';
import ResContainer from '../ResContainer/ResContainer';
import ResForm from '../ResForm/ResForm';

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
        <ResForm />
        <ResContainer className='resy-container' reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
