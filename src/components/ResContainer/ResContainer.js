import React from 'react';
import Reservation from '../Reservation/Reservation';
import './ResContainer.css';

const ResContainer = (props) => {

    const allReservations = props.reservations.map(res => {
        return <Reservation key={res.id} id={res.id} name={res.name} date={res.date} time={res.time} number={res.number} handleRemoveReservation={props.handleRemoveReservation}/>
    })

    return ( 
        <section className="resContainer">
            <h2>{allReservations}</h2>
        </section>
     );
}
 
export default ResContainer;