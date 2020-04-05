const controllers = {
    index: (req, res) => {
    	Company
    	  .exec()
    	  .then(data => {
    	  	res
    	  	  .json({
    	  	  		type: 'Reading companies',
    	  	  		data: data
    	  	  })
    	  	  	.status(200);
    	  })
    	  .catch(err => {
    	  	  	console.log(`caugth error: ${err}`);
    	  	  	return res.status(500).json(err);
    	  });
    },


    create: (req, res) => {


    },


    delete: (request, response) => {
  
    },

    update: (request, response) => {
 
    }       

};

