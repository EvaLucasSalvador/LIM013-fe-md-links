const mdLinks = require('../mdLinks');

// Usados en arrayPathMd() 
const routePath = "D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container"
const routeRelativa = "test\\test_container\\archivo4.md"

// Usados en extractLinks()
const arrayOutput_5= [
  {
    file: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md',
    href: 'https://nodejs.org/',
    text: 'Node.js'
     },
  {
    file: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md',
    href: 'https://nodejs.org/pe',
    text: 'Node.js'
      }
];

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

//mdLinks Ruta absoluta

  describe('Function mdLinks()', () => {
    it('pruebas con rutas relativa a  absolutas', (done) => {
     //console.log (mdLinks.mdLinks(arrayOutput_3).then((links) => links[0])
      mdLinks.mdLinks(routeRelativa, {validate : true}).then((links) => {expect(links).toEqual(linksOutput);
    done();
  });
});
});

 //mdLinks validación
  describe('Function mdLinks()', () => {
    it('Debería retornar un array de objetos con 5 propiedades: file, href, text, status y statusMessage', (done) => {
          mdLinks.mdLinks(routePath, {validate : true}).then((links) => {expect(links).toEqual(linksOutput);
        done();
      });
    });
    it('Debería retornar un array de objetos con 3 propiedades: file, href, text', (done) => {
          mdLinks.mdLinks(routePath, { validate : false }).then((links) => {expect(links).toEqual(arrayOutput_5);
        done();
  });
});
});