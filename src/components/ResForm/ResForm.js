import React, { Component } from 'react';

class ResForm extends Component {
    constructor() {
        super();
        this.state = { 
            name: '',
            date: '',
            time: '',
            number: ''
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

    render() { 
        return ( 
            <form>
                <input onChange={this.handleAddName} type="text" placeholder="Your Name" value={this.state.name}/>
                <input onChange={this.handleAddDate} type="text" placeholder="Date" value={this.state.date}/>
                <input onChange={this.handleAddTime} type="text" placeholder="Time" value={this.state.time}/>
                <input onChange={this.handleAddNumber} type="text" placeholder="Number of People in Group" value={this.state.number}/>
                <button>Make Reservation</button>
            </form>
         );
    }
}
 
export default ResForm;