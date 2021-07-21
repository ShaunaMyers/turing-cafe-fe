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
                <input onChange={handleAddName}/>
                <input onChange={handleAddDate}/>
                <input onChange={handleAddTime}/>
                <input onChange={handleAddNumber}/>
                <button>Make Reservation</button>
            </Form>
         );
    }
}
 
export default ResForm;