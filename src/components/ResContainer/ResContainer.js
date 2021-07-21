import React from 'react';
import Reservation from '../Reservation/Reservation';

const ResContainer = (props) => {

    const allReservations = props.reservations.map(res => {
        return <Reservation key={res.id} id={res.id} name={res.name} date={res.date} time={res.time} number={res.number}/>
    })

    return ( 
        <h2>{allReservations}</h2>
     );
}
 
export default ResContainer;