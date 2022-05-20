const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const getEmployee = data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return getEmployee;
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
