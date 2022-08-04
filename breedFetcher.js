const request = require('request')
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request (url, (err, response, body) => {
 
  if (err) {
    console.log(`The request has failed. ${err}`)
  }
  const data = JSON.parse(body);
  
  const breedDetails = data[0];
  if (breedDetails) {
    console.log(breedDetails.description)
  } else {
    console.log("breed not found.");
  }
})

