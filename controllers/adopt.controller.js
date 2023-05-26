const Adopt = require('../models/adopt.model');

// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }

// module.exports.createAdopt = (request, response) => {
//     const { title, company, salary} = request.body; 
//     Adopt.create({
//         title, 
//         company, 
//         salary})
//     .then(adopt => response.json(adopt))
//     .catch(err => response.json(err));
// }

// this is one "get all" method which calls the model and uses the find function
// built into mongoDB, and stores the results in json readable format
// and catches any errors at the end if necessary
module.exports.getAll = (request, response) => {
    Adopt.find({})
    .then(results => response.json(results))
    .catch(err => response.json(err));
}


// module.exports.createAdopt = async (request, response) => {
//     try {
//     const newAdopt = new Adopt(request.body)
//     const results = await newAdopt.save()
//     response.json(results)
//     } 
//     catch{(err => response.status(400).json(err))}
//     }


module.exports.createAdopt = (req, res) => {
    Adopt.create(req.body)
        .then(newAdopt => {
            return res.json(newAdopt)
        }).catch(err => {
            return res.status(400).json(err)
        })
}

// module.exports.getAll = (req, res) => {
//     Adopt.find({})
//         .then(allAdopts => {
//             return res.json(allAdopts)
//         })
//         .catch(err => {
//             return res.json(err)
//         })
// }

module.exports.getOne = (req, res) => {
    Adopt.findById({ _id: req.params.id })
        .then(Adopt => {
            return res.json(Adopt)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    Adopt.deleteOne({ _id: req.params.id })
        .then(deletedAdopt => {
            return res.json(deletedAdopt)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.updateOne = (req, res) => {
    Adopt.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true , runValidators: true})
        .then(updatedAdopt => {
            return res.json(updatedAdopt)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
}