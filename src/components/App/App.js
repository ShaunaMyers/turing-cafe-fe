import React, { Component } from 'react';
import './App.css';
import { fetchReservations, updateReservations, deleteReservation } from '../../apiCalls';
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

  handleAddReservation = (reservation) => {
    const { name, date, time, number } = reservation;
    this.setState({ reservations: [...this.state.reservations, reservation ]})
    updateReservations({ name: name, date: date, time: time, number: number });
  }

  handleRemoveReservation = (id) => {
    deleteReservation(id);
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ResForm handleAddReservation={this.handleAddReservation} reservations={this.state.reservations}/>
        <ResContainer className='resy-container' reservations={this.state.reservations}handleRemoveReservation={this.handleRemoveReservation}/>
      </div>
    )
  }
}

export default App;
