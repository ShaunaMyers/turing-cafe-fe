import React from 'react';
import './Reservation.css';

const Reservation = ({ id, name, date, time, number, handleRemoveReservation }) => {
    return ( 
        <div className="resCard">
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button onClick={() => handleRemoveReservation(id)}>Cancel Reservation</button>
        </div>
     );
}
 
export default Reservation;