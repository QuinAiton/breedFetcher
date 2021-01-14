
const { fetchBreedDescription } = require('../breedFetcher'),
  { assert } = require('chai');

describe('#fetchBreenDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc[0]['description'].trim());
      done();
    })
  });
  it('should return an empty array when nonexistant breed passed in', (done) => {
    fetchBreedDescription('dog', (err, desc) => {
      assert.deepEqual(desc, []);
      done()
    })
  });
})
