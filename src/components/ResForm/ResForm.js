import React, { Component } from 'react';
import './ResForm.css';

class ResForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            date: '',
            time: '',
            number: '',
            error: ''
         }
    }

    handleAddName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleAddDate = (e) => {
        this.setState({ date: e.target.value })
    }

    handleAddTime = (e) => {
        this.setState({ time: e.target.value })
    }

    handleAddNumber = (e) => {
        this.setState({ number: e.target.value })
    }

    onAddReservation = (e) => {
        e.preventDefault()
        const { name, date, time, number } = this.state;
        this.props.handleAddReservation({ id: Math.random(), name: name, date: date, time: time, number: number })
    }

    clearErrorMessage = () => {
        this.setState({ error: '' })
    }

    render() { 
        return ( 
            <div>
                <form className="resForm">
                    <input onChange={this.handleAddName} type="text" placeholder="Your Name" value={this.state.name}/>
                    <input onChange={this.handleAddDate} type="text" placeholder="Date" value={this.state.date}/>
                    <input onChange={this.handleAddTime} type="text" placeholder="Time" value={this.state.time}/>
                    <input onChange={this.handleAddNumber} type="text" placeholder="Number of People in Group" value={this.state.number}/>
                    <button className="makeRes" onClick={this.onAddReservation}>Make Reservation</button>
                </form>
                {this.state.error && <p className="errorMessage">{this.state.error}</p>}
            </div>
         );
    }
}
 
export default ResForm;