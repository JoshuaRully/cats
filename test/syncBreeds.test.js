const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    const bombay = breedDetails('Bombay');
    console.log(bombay); //=> prints out the description for that breed
    console.log(breedDetails);
  });

  it("should return breed details for Balinese breed", () => {
        // We expect it to be a function, but will it be?
    const Balinese = breedDetails('Balinese');
    console.log(Balinese); //=> prints out the description for that breed
    console.log(breedDetails);
  });
});




