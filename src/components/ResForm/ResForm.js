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
                <input onChange={handleAddName} type="text" placeholder="Your Name"/>
                <input onChange={handleAddDate} type="text" placeholder="Date"/>/>
                <input onChange={handleAddTime} type="text" placeholder="Time"/>/>
                <input onChange={handleAddNumber} type="text" placeholder="Number of People in Group"/>/>
                <button>Make Reservation</button>
            </Form>
         );
    }
}
 
export default ResForm;