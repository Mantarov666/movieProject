const express = require('express');
const app = express();
const path =require('path')
const port = 5000; 

const handlebars = require('express-handlebars');

app.engine('hbs', handlebars.engine({extname:'hbs'}));
app.set('view engine', 'hbs');


app.get('/', (req, res)=>{
    res.render('home')
})


app.listen( port, ()=>{
    console.log(`Server working on port ${port}...`)
})