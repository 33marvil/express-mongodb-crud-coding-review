const mongoose = require('mongoose');


const listDataByIdController = getData => (req, res, next) => {
    const data = getData();
    console.log(data, 'inside data');
    data
        .findById(req.params.id)
        .exec()
        .then(data => {
            res
                .json({
                    type: 'Data Found',
                    data: data
                })
                .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })

}
module.exports = listDataByIdController;