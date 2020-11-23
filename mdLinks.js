/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-console */
const mainFunctions = require('./index.js');

// const principal = (path) => {
//   if (mainFunctions.pathError(path)) {
//     const pathAbs = mainFunctions.getAbsolute(path);
//     console.log('La Ruta existe');
//     if (mainFunctions.isFile(pathAbs)) {
//       console.log('La Ruta corresponde a un Archivo');
//       mainFunctions.ArchivoMD(pathAbs);
//     } else {
//       console.log('La Ruta corresponde a un Directorio');
//       const archivos = mainFunctions.directoryNavigator(pathAbs);
//       if (archivos.length === 0) {
//         console.log('El directorio esta vacio');
//       } else {
//         console.log('El directorio continen elementos');
//         mainFunctions.DirectorioMD(pathAbs);
//       }
//     }
//   } else {
//     console.log('La Ruta no existe');
//   }
// };
// Rehacer las funciones T_T


const rutaAbs = 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos';
// principal(rutaAbs);

// console.log(mainFunctions.arrayPathMd(rutaAbs))
console.log(mainFunctions.extractLinks(rutaAbs));
