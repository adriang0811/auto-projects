
describe('Getting current weather.', () => {
    it('GET on weather API and return the current temperature in C for Bucharest', () => {
        cy.getWeather().then((response) => {
            console.log(response.body.current['temp_c'])
            // cy.print(response.body.current['temp_c'])
        });
    })
})
