const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(request, response){
        //buscar devs em um raio de 10km
        //filtrar por tecnologias
       const {latitude, longitude, techs } = request.query;

       const techsArray = parseStringAsArray(techs);
       
       console.log(techsArray);

       const devs = await Dev.find({
           techs : {
               $in: techsArray,
           },
           location: {
               $near: {
                   $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                   },
                   $maxDistance: 10000,
               },   
           },
       });        
        return response.json({ devs });
    }
}