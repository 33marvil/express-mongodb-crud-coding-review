const { Router } = require("express");
const app = Router();




// testing model User, Appointments, Treatments
const Companies = require('../controllers/companies/companies');
console.log(Companies, "this companies");

const Jobs = require('../controllers/jobs/jobs');
console.log(Jobs, "this jobs");

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

// Endpoint jobs GET
app.get('/jobs', Jobs.index);

// Endpoint jobs POST
app.post('/jobs', Jobs.create);

// Endpoint jobs GET BY Id
app.get('/jobs/:id', Jobs.findById);

// Endpoint jobs PUT update
app.put('/jobs/:id', Jobs.update);

// Endpoint DELETE /api/jobs` + jobId
app.delete('/jobs/:id', Jobs.delete);


module.exports = app;