const request = require('request')

const fetchBreedDescription= function (breedName, callback){
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request (url, (err, response, body) => {
 
  if (err) {
    return callback(err, null)
  }
  const data = JSON.parse(body);
  
  const breedDetails = data[0];
  if (breedDetails) {
    return callback(null,breedDetails.description)
  } else {
    callback("breed not found.");
  }
})

};
module.exports={fetchBreedDescription};