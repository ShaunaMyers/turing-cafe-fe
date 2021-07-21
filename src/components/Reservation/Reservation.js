import React from 'react';
import './Reservation.css';

const Reservation = ({ id, name, date, time, number }) => {
    return ( 
        <div className="resCard">
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
        </div>
     );
}
 
export default Reservation;