const { Router } = require("express");
const app = Router();




// testing model User, Appointments, Treatments
const Companies = require('../controllers/companies/companies');
console.log(Companies, "this companies");

//companies GET
app.get('/companies', Companies.index);


// companies POST
app.post('/companies', Companies.create);




module.exports = app;