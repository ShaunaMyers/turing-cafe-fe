describe('Main Reservation Page', () => {

    beforeEach(() => {
        cy 
        .visit('http://localhost:3000/')
    })

    it('Should be able to display a header when the page is visited', () => {
        cy 
        .get('h1')
        .contains('Turing Cafe Reservations')
    })

    it('Should be able to display an input to type a name', () => {
        cy 
        .get('form')
        .get('input').first()
        .invoke('attr', 'placeholder')
        .should('contain', 'Your Name')
    })

    it('Should be able to display an input to type a date', () => {
        cy 
        .get('form')
        .get('input').next()
        .invoke('attr', 'placeholder')
        .should('contain', 'Date')
    })

    it('Should be able to display all reservations when the page is visited', () => {
        cy 
        .get('.resCard')
        .should('have.length', 9)
    })
})