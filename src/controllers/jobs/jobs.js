const mongoose = require('mongoose');


const Job = require('../../models/Job');
console.log(Job, 'out Job');

const controller = {
    index: (req, res) => {
        console.log(Job, "inside ");
        Job
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
    }
}


module.exports = controller;