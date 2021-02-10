// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it (easy peezee, butter squeezy) ...
  return catBreeds[breed];
};

module.exports = breedDetails;