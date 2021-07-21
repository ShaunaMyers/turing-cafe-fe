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
    render() { 
        return ( 
            <Form>
                <input onChange={handleAddName} type="text" placeholder="Your Name" value={this.state.name}/>
                <input onChange={handleAddDate} type="text" placeholder="Date" value={this.state.date}/>
                <input onChange={handleAddTime} type="text" placeholder="Time" value={this.state.time}/>
                <input onChange={handleAddNumber} type="text" placeholder="Number of People in Group" value={this.state.number}/>
                <button>Make Reservation</button>
            </Form>
         );
    }
}
 
export default ResForm;