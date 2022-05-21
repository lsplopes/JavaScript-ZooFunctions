const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childEntrants = entrants.filter(({ age }) => age < 18).length;
  const adultEntrants = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const seniorEntrants = entrants.filter(({ age }) => age >= 50).length;
  return {
    child: childEntrants,
    adult: adultEntrants,
    senior: seniorEntrants,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return countEntrants(entrants).child * data.prices.child
    + countEntrants(entrants).adult * data.prices.adult
    + countEntrants(entrants).senior * data.prices.senior;
}
module.exports = { calculateEntry, countEntrants };
