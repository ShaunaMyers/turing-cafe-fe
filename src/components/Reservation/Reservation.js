import React from 'react';

const Reservation = ({ id, name, date, time, number }) => {
    return ( 
        <div>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
        </div>
     );
}
 
export default Reservation;