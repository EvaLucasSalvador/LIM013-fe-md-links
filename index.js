/* eslint-disable comma-spacing */
/* eslint-disable keyword-spacing */
const path = require('path');
const fs = require('fs');
const marked = require('marked');

// Verifica si existe la ruta existe
const pathError = (routePath) => fs.existsSync(routePath);

// Determina si es una ruta absoluta
const pathAbsolute = (routePath) => path.isAbsolute(routePath);

// Retorna la ruta de forma absoluta
const getAbsolute = (routePath) => (pathAbsolute(routePath) ? routePath : path.resolve(routePath));

// Determina si la ruta corresponde a un archivo
const isFile = (routePath) => fs.statSync(routePath).isFile();

// Retorna la extensión del archivo
const fileExtension = (routePath) => path.extname(routePath);

// Leer el contenido de un directorio
const directoryNavigator = (routePath) => fs.readdirSync(routePath);

// retorna el contenido del archivo.
const readDocumentMD = (document) => fs.readFileSync(document, 'utf-8');

// Funcion para extraer las rutas donde estan los archivos .md
const arrayPathMd = (routePath) => {
  let newArrayMdRuta = [];
  const pathAbs = getAbsolute(routePath);
  if (isFile(pathAbs)) {
    if (fileExtension(pathAbs) === '.md') {
      newArrayMdRuta.push(pathAbs);
    }
  } else{
    directoryNavigator(pathAbs).forEach((element) => {
      const pathMdElement = path.join(pathAbs,element);
      const filesOfDirectory = arrayPathMd(pathMdElement);
      newArrayMdRuta = newArrayMdRuta.concat(filesOfDirectory);
    });
  }
  return newArrayMdRuta;
};

// Esta funcion extrae los link de una archivo .md
const extractLinks = (Path) => {
  const arrayLinks = [];
  const renderer = new marked.Renderer();
  arrayPathMd(Path).forEach((element) => {
    renderer.link = (href, title, text) => {
      const objLink = {
        href,
        text,
        file: element,
      };
      arrayLinks.push(objLink);
    };
    marked(readDocumentMD(element), { renderer });
  });
  return arrayLinks;
};

module.exports = {
  pathAbsolute,
  getAbsolute,
  isFile,
  fileExtension,
  directoryNavigator,
  pathError,
  readDocumentMD,
  extractLinks,
  arrayPathMd,
};
