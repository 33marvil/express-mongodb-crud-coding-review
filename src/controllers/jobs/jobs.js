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
    },
    create: (req, res) => {
        console.log(Job, "inside create job");
        const name = req.body.name;
        console.log(req.body.name)

        const newJob = new Job({ // prototype
            _id: mongoose.Types.ObjectId(),
            name: name
        });
        console.log(newJob, 'inside newJob');

        newJob
            .save()
            .then(data => {
                res
                    .json({
                        type: 'Job created',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    findById: (req, res) => {
        // console.log("inside findById")
        Job
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

    },
    update: (req, res) => {
        // console.log("inside update jobs");
        console.log(req.body, "inside req body")

        Job
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { useFindAndModify: false })

        .then(data => {
                res
                    .json({
                        type: 'Job found Update',
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