const { Router } = require("express");
const app = Router();




// testing model User, Appointments, Treatments
const Companies = require('../controllers/companies/companies');
console.log(Companies, "this companies");

// Endpoint companies GET
app.get('/companies', Companies.index);


// Endpoint companies POST
app.post('/companies', Companies.create);

// Endpoint companies GET BY ID 2 -- IS created Branch Number 2
app.get('/companies/:id', Companies.findById);

// Endpoint companies PUT
app.put('/companies/:id', Companies.update);

// Endpoint companies DELETE Companies + CompanyId
app.delete('/companies/:id', Companies.delete);


module.exports = app;
module.exports = app;