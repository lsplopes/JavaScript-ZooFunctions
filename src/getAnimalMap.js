const data = require('../data/zoo_data');

// CRIA UMA FUNÇÃO QUE RETORNA UM OBJETO COM OS ANIMAIS DIVIDIDOS POR ZONAS EM CADA CHAVE

const getSpeciesByZone = () => {
  const zones = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push(animalFiltered.name)));
  return zones;
};

console.log(getSpeciesByZone());

// CRIA UMA FUNÇÃO TRANSFORMA O OBJETO ZONES CRIADO DE MODO QUE:
// A CADA ANIMAL DENTRO DO ARRAY SE TRANSFORMA EM UM OBJETO
// CADA OBJETO CONTEM APENAS UMA CHAVE
// CADA UMA DESSAS CHAVES RECEBE UM ARRAY COM OS NOMES DOS RESIDENTES

// const getSpeciesResidents = () => {
//   const zones = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   Object.keys(zones)
//     .forEach((zonaArray) => data.species
//       .filter((specie) => (specie.location === zonaArray))
//       .forEach((animalFiltered) => zones[zonaArray]
//         .push(animalFiltered.name)));
//   return zones;
// };

console.log(getSpeciesByZone());

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;
