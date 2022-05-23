const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
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
