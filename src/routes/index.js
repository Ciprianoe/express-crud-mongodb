const express = require('express');
const router = express.Router();
const model = require('../model/task')();

router.get('/', (req, res) => {
    model.find({},(err,tasks) => {
        if (err) throw err;
        res.render('index', {
            title:'CRUD',
            tasks: tasks
        });
    });
}); 

router.post('/add',(req,res) => {
    let body = req.body;
    //console.log(body);
    //colocamos false al status del objeto
    body.status = false;
    //guardamos el objeto al recibirlo 
    model.create(body,(err,task) => {
        if (err) throw err;
        res.redirect('/');
    });
});

router.get('/turn/:id', (req,res) => {
    // con esto /turn/:id le estoy pasando el id para agarrarlo en una variable que esta abajo let id 
    let id =  req.params.id;
    // luego este id que pasa de la vista lo buscamos en mongodb de la siguient forma para realizar la funcion desead
    model.findById(id, (err,task) => {
        if (err) throw err;
        task.status = !task.status
        task.save()
        .then(() => {res.redirect('/')})

    });
});
router.get('/delete/:id',(req,res) => {
    /* esta es la forma de eliminar by ceem segun lo que pense yo y guiandome del ejemplo de arriba pero se puede hacer de otra forma */
    
/* let id = req.params.id;
    model.remove({_id: id}, (err,task) => {
        if (err) throw err;
        res.redirect('/')
    });
 */

    let id = req.params.id;
    model.findById(id, (err,task) => {
        if (err) throw err;
        task.delete()
        .then( () => {res.redirect('/')} )
    });
});




module.exports = router;
