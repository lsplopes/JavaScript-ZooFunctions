const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees
    .some(({ managers }) => managers
      .includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  if (isManager(managerId) === false) {
    console.log('deu certo');
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else if (isManager(managerId) === true) {
    const getSubordinateds = data.employees
      .filter(({ managers }) => managers
        .includes(managerId));

    const getName = getSubordinateds.map(({ firstName, lastName }) => `${firstName} ${lastName}`);

    return getName;
  }
}

getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
