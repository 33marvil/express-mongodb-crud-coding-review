const mongoose = require('mongoose');




const Company = require('../../models/Company');
console.log(Company, 'out company');

const controller = {
    index: (req, res) => {
        // console.log("inside index");
        Company
            .find()
            .exec()
            .then((data) => {
                res
                    .json({
                        type: "Reading data",
                        data: data,
                    })
                    .status(200);
            })
            .catch((err) => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            });
    },
    create: (req, res) => {
        console.log(Company, "inside create company");
        const name = req.body.name;
        console.log(name, 'req.body.name');

        const newCompany = new Company({ // prototype
            _id: mongoose.Types.ObjectId(),
            name: name
        });
        console.log(newCompany, 'inside newCompany');
        newCompany
            .save()
            .then(data => {
                res
                    .json({
                        type: 'Company created',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    }

}



module.exports = controller;