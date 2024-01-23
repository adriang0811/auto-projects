Cypress.Commands.add('getWeather', () => {
    cy.request({
        method: "GET",
        url: 'http://api.weatherapi.com/v1/current.json?key=9bb5930dbe9549bc96f172944242201&q=Bucharest&aqi=yes',
        failOnStatusCode: false
    }).then((response) => {
        // cy.log("status: " + response.status)
        // cy.log(JSON.stringify(response.body))
        expect(response.body.current).to.have.property("temp_c")
        return cy.wrap(response)
    })
})