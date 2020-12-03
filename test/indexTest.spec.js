const path = require('path');
//const { extractLinks } = require('D:\\1.LABORATORIA\\LIM013-fe-md-links\\index.js');
const index = require('../index.js')

////// DATA DE TESTEO //////

// Usados en directoryNavigator()
const arrayOutput_1 = ['P1.md','P2.txt','prueba2'];
const arrayOutput_2 = ['archivo4.md','p4.txt','prueba'];

// Usados en arrayPathMd()
const arrayOutput_3= [
  "D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba\\P1.md",
  "D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba\\prueba2\\P3.md"];
const arrayOutput_4= [
  'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba\\prueba2\\P3.md'];

// Usados en extractLinks()
const arrayOutput_5= [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md'
  },
  {
    href: 'https://nodejs.org/pe',
    text: 'Node.js',
    file: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md'
  }
];
const arrayOutput_6= [];

const linksOutput = [
  {
    file: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    status: 200,
    statusMessage: 'OK',
  }, {
    file: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md',
    href: 'https://nodejs.org/pe',
    text: 'Node.js',
    status: 404,
    statusMessage: 'FAIL',
  }];




describe('Function pathError()', () => {
  it('Debería retornar true si la ruta existe', () => {
    expect(index.pathError('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md')).toBe(true);
  });

  it('Debería retornar false si la ruta no existe', () => {
    expect(index.pathError('test_container/carpeta1/archivo6.md')).toBe(false);
  });
});

describe('Function pathAbsolute()', () => {
  it('Debería retornar true si la ruta es absoluta', () => {
    expect(index.pathAbsolute('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md')).toBe(true);
  });

  it('Debería retornar false si la ruta no es absoluta', () => {
    expect(index.pathAbsolute('.\\test_container\\archivo4.md')).toBe(false);
  });
});

describe('Function getAbsolute()', () => {
  it('Debería retornar una ruta absoluta al pasarle una ruta relativa', () => {
    expect(index.getAbsolute('.\\test_container\\archivo4.md')).toBe('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test_container\\archivo4.md');
  });

  it('Debería retornar una ruta absoluta al pasarle una ruta absoluta', () => {
    expect(index.getAbsolute('.\\test_container\\prueba\\P1.md')).toBe('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test_container\\prueba\\P1.md');
  });
});

describe('Function isFile()', () => {
  it('Retornar true si es un archivo', () => {
    expect(index.isFile('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba\\P2.txt')).toBe(true);
  });

  it('Retornar false si es un directorio', () => {
    expect(index.isFile('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba')).toBe(false);
  });
});

describe('Function fileExtension()', () => {
  it('Debería retornar la extensión del archivo al encontrar el primer punto', () => {
    expect(index.fileExtension('archivo4.md')).toBe('.md');
  });

  it('Debería retornar una cadena vacía al no encontrar el primer punto', () => {
    expect(index.fileExtension('carpeta1')).toBe('');
  });
});

describe('Function directoryNavigator()', () => {
  it('Debería retornar un array con el contenido del directorio', () => {
    expect(index.directoryNavigator('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba')).toEqual(arrayOutput_1);
  });

  it('Debería retornar un array con el contenido del directorio', () => {
    expect(index.directoryNavigator('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container')).toEqual(arrayOutput_2);
  });

});

describe('Function readDocumentMD()', () => {
  it('Retorna el contenido del archivo', () => {
    expect(index.readDocumentMD('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\p4.txt')).toBe('Hola Soy Eva lucas Salvador :)');
  });

  it('Debería retornar una cadena vacía al no encontrar el primer punto', () => {
    expect(index.readDocumentMD('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba\\P2.txt')).toBe('Hola boli');
  });

});

 describe('Function arrayPathMd()', () => {
  it('Retorna un Arreglo de strig con las rutas de los archivos con extension .md', () => {
    expect(index.arrayPathMd('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba')).toEqual(arrayOutput_3);
  });

  it('Retorna un Arreglo de strig con las rutas de los archivos con extension .md', () => {
    expect(index.arrayPathMd('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba\\prueba2')).toEqual(arrayOutput_4);
  });
});

describe('Function extractLinks()', () => {
  it('Retorna un Arreglo de strig con todos los link que se encuentren en los archivos .md de la ruta', () => {
    expect(index.extractLinks('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md')).toEqual(arrayOutput_5);
  });

  it('Retorna un Arreglo de strig con todos los link que se encuentren en los archivos .md de la ruta', () => {
    expect(index.extractLinks('D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\prueba')).toEqual(arrayOutput_6);
  });
});

describe('Function validation()', () => {
  it('Debería retornar un array de objetos con 5 propiedades: file, href, text, status y statusMessage', (done) => {
        index.validation(arrayOutput_5).then((element) => {expect(element).toEqual(linksOutput);
      done();
    });
  });
});