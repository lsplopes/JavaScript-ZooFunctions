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

// CRIA UMA FUNÇÃO QUE CRIA UM OBJETO COM OS ANIMAIS DIVIDIDOS POR ZONA ONDE EM CADA CHAVE:
// A CADA ANIMAL DENTRO DO ARRAY SE TRANSFORMA EM UM OBJETO
// CADA OBJETO CONTEM APENAS UMA CHAVE
// CADA UMA DESSAS CHAVES RECEBE UM ARRAY COM OS NOMES DOS RESIDENTES

const getSpeciesResidents = () => {
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
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .map((eachAnimal) => eachAnimal.name),
        })));
  return zones;
};

// CRIA FUNÇÃO JÁ ORGANIZADA EM ORDEM ALFABÉTICA

const getSpeciesResidentsSort = () => {
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
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .map((eachAnimal) => eachAnimal.name).sort(),
        })));
  return zones;
};

// RESPOSTA COM SEXO SIMPLES

const getSpeciesResidentsSex = (gender) => {
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
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .filter((eachAnimal) => Object.values(eachAnimal)[1] === gender)
            .map((eachAnimalFiltered) => eachAnimalFiltered.name),
        })));
  return zones;
};

// RESPOSTA COM SEX SORT

const getSpeciesResidentsSexSort = (gender) => {
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
        .push({
          [animalFiltered.name]: animalFiltered.residents
            .filter((eachAnimal) => Object.values(eachAnimal)[1] === gender)
            .map((eachAnimalFiltered) => eachAnimalFiltered.name).sort(),
        })));
  return zones;
};

const sexOrganizer = (options) => {
  if (!options.sorted) return getSpeciesResidentsSex(options.sex);
  return getSpeciesResidentsSexSort(options.sex);
};

const sexlessOrganizer = (options) => {
  if (!options.sorted) return getSpeciesResidents();
  return getSpeciesResidentsSort();
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return getSpeciesByZone();
  if (options.includeNames && options.sex) return sexOrganizer(options);
  return sexlessOrganizer(options);
}

module.exports = getAnimalMap;
