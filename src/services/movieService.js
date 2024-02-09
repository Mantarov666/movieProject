
const movie = [

{
    tittle: 'Home Alone', 
    genre : 'Comedy', 
    description: 'It is Christmas time and the McCallister family',
    date: '2000', 
    image: '/img/home-alone.jpeg', 
    rate : '4', 
    director : 'S.M.66'
}

]; 

exports.create =  (data)=> { 
    movie.push(data)
   
}

exports.getAll = ()=> { 
   return movie.slice()
}

