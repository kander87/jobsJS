const adoptController = require("../controllers/adopt.controller")

module.exports = function(app){
    // app.get('/api', adoptController.index);

    app.get('/api/adopt', adoptController.getAll);
    app.post('/api/adopt/create', adoptController.createAdopt);
    app.get('/api/adopt/view/:id', adoptController.getOne)
    app.put('/api/adopt/edit/:id', adoptController.updateOne);
    app.delete('/api/adopt/:id', adoptController.deleteOne);
}
