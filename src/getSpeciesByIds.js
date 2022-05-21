const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const filtrarporId = ids.map((id) => data.species.filter((especie) => especie.id === id)[0]);
  return filtrarporId;
}

module.exports = getSpeciesByIds;
