const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age2) {
  // seu código aqui
  const getanimal = data.species.find((especies) => especies.name === animal);
  const checkage = getanimal.residents
    .map((elemento) => elemento.age)
    .every((elemento) => elemento >= age2);
  return checkage;
}

module.exports = getAnimalsOlderThan;
