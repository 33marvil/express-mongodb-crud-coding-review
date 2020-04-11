const mongoose = require('mongoose');


const Company = require('../../models/Company');
// console.log(Company, 'out company');

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
    findById: (req, res) => {
        // console.log("inside findById")
        Company
            .findById(req.params.id)
            .then(data => {
                res
                    .json({
                        type: 'Companies Found',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(404).json(err);
            })
    }

}



module.exports = controller;