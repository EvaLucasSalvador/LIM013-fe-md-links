// const { arrayPathMd } = require('./index.js');
const index = require('./index.js');

/* const principal = (path) => {
  if (mainFunctions.pathError(path)) {
    const pathAbs = mainFunctions.getAbsolute(path);
    console.log('La Ruta existe');
    if (mainFunctions.isFile(pathAbs)) {
      console.log('La Ruta corresponde a un Archivo');
      mainFunctions.ArchivoMD(pathAbs);
    } else {
      console.log('La Ruta corresponde a un Directorio');
      const archivos = mainFunctions.directoryNavigator(pathAbs);
      if (archivos.length === 0) {
        console.log('El directorio esta vacio');
      } else {
        console.log('El directorio continen elementos');
        mainFunctions.DirectorioMD(pathAbs);
      }
    }
  } else {
    console.log('La Ruta no existe');
  }
}; */
// Rehacer las funciones T_T

/* const mdLinks = (routePath) => new Promise((resolve, reject) => {
  if (!index.existsSync(routePath)) {
    return reject('no valida');
  }
  let arrLinkMd = [];
  if (index.isFile(routePath)) {
    arrLinkMd = index.arrayPathMd(routePath);
  }
  return resolve(arrLinkMd);
}); */

const mdLinks = (routePath) => new Promise((resolve, reject) => {
  let arrLinkMd = [];
  if (!index.pathError(routePath)) {
    reject('no valida');
  }

  arrLinkMd = index.arrayPathMd(routePath);

  resolve(arrLinkMd);
});

mdLinks('D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos');
console.log(mdLinks);

mdLinks('D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos').then((link) => {
  console.log(link);
})

  .catch((err) => {
    console.log(err);
  });

// mdLinks = 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos';

// const rutaAbs = 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos';
// principal(rutaAbs);

// console.log(mainFunctions.arrayPathMd(rutaAbs));
// console.log(mainFunctions.extractLinks(rutaAbs));
