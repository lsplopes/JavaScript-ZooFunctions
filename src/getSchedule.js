const data = require('../data/zoo_data');

// ENCONTRA OS DIAS DA SEMANA DE CADA ANIMAL NO FORMATO: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]
const getAnimalAvailability = (animal) => data.species
  .find((animalName) => animalName.name === animal).availability;

// ENCONTRA E ENTREGA O HORARIO NO FORMATO: Open from 8am until 6pm
const getOfficeHour = (daySearched) => {
  if (daySearched === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[daySearched].open}am until ${data.hours[daySearched].close}pm`;
};

// ENCONTRA E ENTREGA OS ANIMAIS/DIA NO FORMATO: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ]
const getAnimalsByDay = (daySearched) => {
  if (daySearched === 'Monday') {
    return 'The zoo will be closed!';
  }
  const animalsByDateObject = data.species
    .filter((anyAnimal) => anyAnimal.availability
      .includes(daySearched));
  return animalsByDateObject.map((animal) => animal.name);
};

// ENCONTRA SE O VALOR DADO É UM ANIMAL: true or false
const isAnimal = (animalSearched) => data.species.some((animal) => animal.name === animalSearched);

// ENCONTRA SE O VALOR DADO É UM DIA: true or false
const isDay = (daySearched) => (Object.keys(data.hours).includes(daySearched));

// ENCONTRA TODA PROGRAMAÇÃO DO ZOOLOGICO:
const holeProgram = () => {
  const objeto = {};
  Object.keys(data.hours).forEach((dayOfWeek) => {
    objeto[dayOfWeek] = {
      officeHour: getOfficeHour(dayOfWeek),
      exhibition: getAnimalsByDay(dayOfWeek),
    };
  });
  return objeto;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (isAnimal(scheduleTarget) === true) {
    return getAnimalAvailability(scheduleTarget);
  }
  if (isDay(scheduleTarget) === true) {
    const objeto = {};
    objeto[scheduleTarget] = {
      officeHour: getOfficeHour(scheduleTarget),
      exhibition: getAnimalsByDay(scheduleTarget),
    };
    return objeto;
  }
  return holeProgram();
}
console.log(getSchedule('Monday'));
// console.log(isDay('Monday'));
module.exports = getSchedule;
