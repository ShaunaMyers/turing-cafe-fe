import React from 'react';
import Reservation from '../Reservation/Reservation';

const ResContainer = (props) => {

    props.reservations.map(reservation => {
        return <Reservation />
    })

    return ( 
        <h2>Hi</h2>
     );
}
 
export default ResContainer;