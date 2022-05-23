const data = require('../data/zoo_data');

// RECUPERA Os ids dos animais do EMPREGADO PELO NOME OU ID
const getEmployee = (employeeName) => data.employees
  .find(({ id, firstName, lastName }) => id === employeeName
  || firstName === employeeName || lastName === employeeName);

// DADO O ID DE UM ANIMAL, ENTREGA TODAS INFOS SOBRE ELE
const getAnimalspecies = (idDoAnimal) => data.species.find((animal) => animal.id === idDoAnimal);

const forAllIds = (nameOrID) => {
  const result = {
    id: getEmployee(nameOrID).id,
    fullName: `${getEmployee(nameOrID).firstName} ${getEmployee(nameOrID).lastName}`,
    species: [],
    locations: [],
  };
  getEmployee(nameOrID).responsibleFor.forEach((idDaEspecie) => {
    result.species.push(getAnimalspecies(idDaEspecie).name);
  });
  getEmployee(nameOrID).responsibleFor.forEach((idDaEspecie) => {
    result.locations.push(getAnimalspecies(idDaEspecie).location);
  });
  return result;
};

// RETORNA O ID DE TODOS OS EMPREGADOS
const getAllEmployees = () => {
  const employeesId = data.employees.map((employ) => employ.id);
  return employeesId;
};

function getEmployeesCoverage(object) {
  // seu código aqui
  if (object === undefined) {
    return getAllEmployees().map((employId) => forAllIds(employId));
  }
  if (getEmployee(Object.values(object)[0]) === undefined) {
    throw new Error('Informações inválidas');
  }
  if (object.id !== undefined || object.name !== undefined) {
    return forAllIds(Object.values(object)[0]);
  }
}
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
