const data = require('../data/zoo_data');

const animalGeneralCount = () => {
  const result = data.species.reduce((objeto, current) => {
    const { name, residents } = current;
    return {
      ...objeto,
      [name]: residents.length,
    };
  }, {});
  return result;
};

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return animalGeneralCount();
  }
  const contadorDeEspecie = data.species.filter(({ name }) => name === animal.specie);
  const contadorPorSex = contadorDeEspecie[0].residents.filter(({ sex }) => sex === animal.sex);
  if (animal.specie !== undefined && animal.sex !== undefined) {
    return contadorPorSex.length;
  } if (animal.specie !== undefined && animal.sex === undefined) {
    return contadorDeEspecie[0].residents.length;
  }
}

module.exports = countAnimals;
