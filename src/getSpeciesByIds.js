const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const filtrarporId = ids.map((id) => data.species.filter((especie) => especie.id === id));
  // const filtroarrumado = (elemento) => {
  //   const result = [];
  //   for (const index in elemento) {
  //     result.push(elemento[index][0]);
  //   }
  //   return result;
  // };
  
  return filtroarrumado(filtrarporId);
}

console.log(getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
));
module.exports = getSpeciesByIds;
