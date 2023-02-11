const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'SEU TOKEN AQUI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
