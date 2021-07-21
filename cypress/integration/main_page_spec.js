describe('Main Reservation Page', () => {
    it('Should be able to display all reservations when the page is visited', () => {
        cy 
            .visit('http://localhost:3000/')
            .get('.resCard')
            .should('have.length', 9)
    })
})