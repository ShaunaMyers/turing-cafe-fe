export const fetchReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching reservations')
            }
            return response.json()
        })
}

export const updateReservations = (data) => {
    fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => console.log(response))
        .catch(err => console.log(`Update Reservation Error: ${err.message}`));
}

export const deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'Delete',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => console.log(response))
        .catch(err => console.log(`Update Reservation Delete Error: ${err.message}`));
}