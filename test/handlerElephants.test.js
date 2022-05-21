const { handlerElephants, getElephants } = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('independente de parametro, função getElephants retorna objeto sobre elefantes presente em data.', () => {
    const expected = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };
    const actual = getElephants();
    expect(actual).toStrictEqual(expected);
  });

  it('Atribuindo parametro count na função handlerElephants, retorna a quantidade de elefantes existente', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro names na função handlerElephants, retorna nome dos elefantes residentes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(actual).toStrictEqual(expected);
  });

  it('Atribuindo parametro avaregeAge na função handlerElephants, retorna a media de idade dos elefantes', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro inexistente na função handlerElephants, retorna null', () => {
    const expected = null;
    const actual = handlerElephants('c3po');
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro indefinido na função handlerElephants, retorna undefined', () => {
    const expected = undefined;
    const actual = handlerElephants();
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro diferente de string na função handlerElephants, retorna mensagem de parametro invalido', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(7);
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro location na função handlerElephants, retorna NW', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro popularity na função handlerElephants, retorna 5', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');
    expect(actual).toBe(expected);
  });

  it('Atribuindo parametro availability na função handlerElephants, retorna 5', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = handlerElephants('availability');
    expect(actual).toStrictEqual(expected);
  });
});
