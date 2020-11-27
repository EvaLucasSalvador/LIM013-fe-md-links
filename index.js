/* eslint-disable comma-spacing */
/* eslint-disable keyword-spacing */
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

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
  if (isFile(routePath)) {
    if (fileExtension(routePath) === '.md') {
      newArrayMdRuta.push(routePath);
    }
  } else{
    directoryNavigator(routePath).forEach((element) => {
      const pathMdElement = path.join(routePath,element);
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

// Validacion 3 intentio :)

const validation = (link) => {
  const arrPromises = [];

  link.forEach((element) => {
    arrPromises.push(fetch(element.href)
      .then((response) => (
        {
          href: element.href,
          text: element.text,
          file: element.file,
          status: response.status,
          statusText: response.statusText,
        }
      ))
      .catch(() => (
        {
          href: element.href,
          text: element.text,
          file: element.file,
          status: 'error',
          statusText: 'FAIL',
        }
      )));
  });
  return Promise.all(arrPromises);
};

// validation('D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos').then((res) => console.log(res));
// console.log(validation('D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos'));

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
  validation,
};
