
let temp

describe('Getting current weather.', () => {
    it('GET on weather API and return the current temperature in C for Bucharest', () => {
        cy.getWeather().then((response) => {
            // console.log(response.body.current['temp_c'])
            temp = response.body.current['temp_c']
            Cypress.env('Weather', temp)
            cy.log(Cypress.env('Weather'))
            // cy.log(temp)
        });
            cy.exec('node mail', {failOnNonZeroExit: false})
    })
})
