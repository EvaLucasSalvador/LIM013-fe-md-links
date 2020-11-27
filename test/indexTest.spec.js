const path = require('path');
const section = require('D:\\1.LABORATORIA\\LIM013-fe-md-links\\index.js');
const data = require('./dataObj');

describe('Function pathError()', () => {
  it('Debería retornar true si no hay error', () => {
    expect(section.pathError('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\carpeta1\\archivo5.md')).toBe(true);
  });

  it('Debería retornar false si hay error', () => {
    expect(section.pathError('test_container/carpeta1/archivo6.md')).toBe(false);
  });
});



describe('Function pathAbsolute()', () => {
  it('Debería retornar true si la ruta es absoluta', () => {
    expect(section.pathAbsolute('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\carpeta1\\archivo5.md')).toBe(true);
  });

  it('Debería retornar false si la ruta no es absoluta', () => {
    expect(section.pathAbsolute('test_container/carpeta1/archivo5.md')).toBe(false);
  });
});
