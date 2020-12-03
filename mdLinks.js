const index = require('./index.js');

const mdLinks = (routePath, { validate }) => new Promise((resolve, reject) => {
  let arrLinkMd = [];
  if (!index.pathError(routePath)) {
    reject('Ruta no valida');
  }
   if (index.pathAbsolute(routePath)) {
    arrLinkMd = index.extractLinks(routePath);
  } else {
    arrLinkMd = index.extractLinks(index.getAbsolute(routePath));
  }
  //arrLinkMd = index.extractLinks(routePath);
  if (validate) {
    arrLinkMd = index.validation(arrLinkMd);
    arrLinkMd.then((validateLinks) => resolve(validateLinks));
  } else resolve(arrLinkMd);
});

module.exports = {
  mdLinks,
};


mdLinks('D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos', { validate: true }).then((link) => {
  console.log(link);
});
