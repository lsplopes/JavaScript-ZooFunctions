const data = require('../data/zoo_data');

// CRIA UMA FUNÇÃO QUE RETORNA UM OBJETO COM OS ANIMAIS DIVIDIDOS POR ZONAS EM CADA CHAVE

const getSpeciesByZone = (zones) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push(animalFiltered.name)));
  return zones;
};

// CRIA FUNÇÃO JÁ ORGANIZADA EM ORDEM ALFABÉTICA SEM FILTRAGEM POR SEXO

const getSpeciesResidentsSort = (zones, sorted) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push({
          [animalFiltered.name]: ((sorted) ? animalFiltered.residents
            .map((eachAnimal) => eachAnimal.name).sort() : animalFiltered.residents
            .map((eachAnimal) => eachAnimal.name)),
        })));
  return zones;
};

// RESPOSTA COM SEXO SIMPLES

const getSpeciesResidentsSex = (zones, sorted, gender) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push({
          [animalFiltered.name]: ((sorted) ? animalFiltered.residents
            .filter((eachAnimal) => Object.values(eachAnimal)[1] === gender)
            .map((eachAnimalFiltered) => eachAnimalFiltered.name).sort() : animalFiltered.residents
            .filter((eachAnimal) => Object.values(eachAnimal)[1] === gender)
            .map((eachAnimalFiltered) => eachAnimalFiltered.name)),
        })));
  return zones;
};

function getAnimalMap(options) {
  // seu código aqui
  const zones = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (!options || !options.includeNames) return getSpeciesByZone(zones);
  if (options.includeNames && options.sex) {
    return getSpeciesResidentsSex(zones, options.sorted, options.sex);
  }
  return getSpeciesResidentsSort(zones, options.sorted);
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
