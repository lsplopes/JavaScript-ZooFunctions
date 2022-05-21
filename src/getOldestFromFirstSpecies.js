const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // RECUPERA ARRAY IDS DOS ANIMAIS AOS QUAIS É RESPONSAVEL
  const getEmployee = data.employees.find((idEmployee) => idEmployee.id === id).responsibleFor;
  // RECUPERA AS INFORMAÇÕES DO PRIMEIRO ID ENCONTRADO
  const animalResp = data.species.find((animal) => animal.id === getEmployee[0]);
  // RECUPERA O ANIMAL MAIS VELHO DA ESPECIE
  const orderAnimal = animalResp.residents
    .reduce((older, current) => ((older > current.age) ? older : current.age), 0);
  const oldestData = animalResp.residents.find((residente) => residente.age === orderAnimal);
  return [oldestData.name, oldestData.sex, oldestData.age];
}

module.exports = getOldestFromFirstSpecies;
