const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ2MTczNDVlLTI4NTctNDQ0NS04NzE1LTY5NjZhNGM4NmMwZS0xNjc2MTQyMzY5NTQ4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMGM5ODkxYTYtNzNiMS00Y2ZkLTk4MjEtN2ZkNjYyMmI1NmRkIiwidHlwZSI6InQifQ.Y8Wzsdi7Go0bSQmFJp0yQLfjqsMkwkljFjtyKelEePA'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'token',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
