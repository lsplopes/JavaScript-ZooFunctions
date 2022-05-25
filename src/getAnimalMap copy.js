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

// CRIA UMA FUNÇÃO QUE CRIA UM OBJETO COM OS ANIMAIS DIVIDIDOS POR ZONA ONDE EM CADA CHAVE:
// A CADA ANIMAL DENTRO DO ARRAY SE TRANSFORMA EM UM OBJETO
// CADA OBJETO CONTEM APENAS UMA CHAVE
// CADA UMA DESSAS CHAVES RECEBE UM ARRAY COM OS NOMES DOS RESIDENTES

const getSpeciesResidents = (zones) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .map((eachAnimal) => eachAnimal.name),
        })));
  return zones;
};

// CRIA FUNÇÃO JÁ ORGANIZADA EM ORDEM ALFABÉTICA

const getSpeciesResidentsSort = (zones) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .map((eachAnimal) => eachAnimal.name).sort(),
        })));
  return zones;
};

// RESPOSTA COM SEXO SIMPLES

const getSpeciesResidentsSex = (gender, zones) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .filter((eachAnimal) => Object.values(eachAnimal)[1] === gender)
            .map((eachAnimalFiltered) => eachAnimalFiltered.name),
        })));
  return zones;
};

// RESPOSTA COM SEX SORT

const getSpeciesResidentsSexSort = (gender, zones) => {
  Object.keys(zones)
    .forEach((zonaArray) => data.species
      .filter((specie) => (specie.location === zonaArray))
      .forEach((animalFiltered) => zones[zonaArray]
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .filter((eachAnimal) => Object.values(eachAnimal)[1] === gender)
            .map((eachAnimalFiltered) => eachAnimalFiltered.name).sort(),
        })));
  return zones;
};

const sexOrganizer = (options, zones) => {
  if (!options.sorted) return getSpeciesResidentsSex(options.sex, zones);
  return getSpeciesResidentsSexSort(options.sex, zones);
};

const sexlessOrganizer = (options, zones) => {
  if (!options.sorted) return getSpeciesResidents(zones);
  return getSpeciesResidentsSort(zones);
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
  if (options.includeNames && options.sex) return sexOrganizer(options, zones);
  return sexlessOrganizer(options, zones);
}

module.exports = getAnimalMap;
