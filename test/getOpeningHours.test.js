const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se não fornecer dados, retorna todos horarios', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toStrictEqual(expected);
  });

  it('se fornecer horario fechado, retorna The zoo is closed', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '03:21-AM');
    expect(actual).toStrictEqual(expected);
  });

  it('se fornecer horario fechado, retorna The zoo is closed', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Sunday', '09:21-PM');
    expect(actual).toStrictEqual(expected);
  });

  it('se fornecer horario aberto, retorna The zoo is open', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Friday', '11:25-AM');
    expect(actual).toStrictEqual(expected);
  });

  it('se fornecer um dia com maiusculo ou minusculo, retorna a função converte e aceita ajusta', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('FriDaY', '02:50-PM');
    expect(actual).toStrictEqual(expected);
  });

  it('Dada hora invalida, retorna The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '14:21-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Dado minuto invalid, retorna The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Monday', '11:72-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Dado a constante ampm errada, retorna erro', () => {
    expect(() => getOpeningHours('friday', '11:42-AJ')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('se fornecer dia invalido, retorna The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Fridge', '11:25-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('se fornecer hora invalida, retorna The hour should represent a number', () => {
    expect(() => getOpeningHours('Friday', 'jj:25-AM')).toThrow('The hour should represent a number');
  });

  it('se fornecer hora invalida, retorna The minutes should represent a number', () => {
    expect(() => getOpeningHours('Friday', '11:jj-AM')).toThrow('The minutes should represent a number');
  });
});
