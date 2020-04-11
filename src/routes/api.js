// // router configuration
// const services = require('../../config/services');

const { Router } = require("express");
const app = Router();


// testing model User, Appointments, Treatments
const Companies = require('../controllers/companies/companies');
console.log(Companies, "this companies");

//companies GET
app.get('/companies', Companies.index);

// companies Get By Id
app.get('/companies/:id', Companies.findById);




module.exports = app;