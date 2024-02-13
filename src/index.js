const express = require('express');
const app = express();
const path =require('path')
const port = 5000; 
const routes = require('./routes');
const mongoose = require('mongoose')


const handlebars = require('express-handlebars');


app.engine('hbs', handlebars.engine({extname:'hbs'}));
app.set('view engine', 'hbs');
app.use(express.static('src/static'));
app.use(express.urlencoded({extended:false})); 

// app.get('/', (req, res)=>{
//     res.render('home')
// })
// // 

app.use(routes)

app.listen( port, ()=>{
    mongoose.connect('mongodb://localhost:27017/magic-movies')
    console.log(`Server working on port ${port}...`)
})