const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: {
        type : String,
       required : true,
    },
    genre : { 
        type:String, 
        required: true
    }, 
    description : { 
        type:String, 
        required : true, 
        maxLenght : 1000
    }, 
    director : { 
        type:String, 
        required : true, 
        
    }, 
    rating : { 
        type : Number, 
        required: true,
    }, 
    year : { 
        type : Number,
        required : true, 
        min : 1900, 
        max : 2030
    }, 

    imageURL : { 
        type: String,
        required: true, 
        match : /^https?/,
    }

}); 

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie


