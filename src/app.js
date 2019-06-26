const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index')
//setting 
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));


//routes or views
app.use(indexRoutes);



app.listen(app.get('port'), () =>{
    console.log('Server on port',app.get('port'));
}); 