const mdLinks = require('./mdLinks.js');
const index = require('./index.js');

const help = `
mdlink <route>
mdlink <route> --validate
mdlink <route> --stats
mdlink <route> (--stas --validate || --validate --stas)
`;

const optionsCli = (path, options) => {
    if (options.length > 0) {
      if (options === '--validate') {
        return mdLinks.mdLinks(path, { validate: true })
          .then((link) => index.validation(link))
          .catch((link) => index.error(link));
      }
  
      if (options === '--stats') {
        return mdLinks.mdLinks(path, { validate: true })
          .then((link) => index.stats(link))
          .catch((link) => index.error(link));
      }
  
      if (options === '--stats --validate' || options === '--validate --stats') {
        return mdLinks.mdLinks(path, { validate: true })
          .then((link) => index.statsValidate(link))
          .catch((link) => index.error(link));
      }
      
      return Promise.resolve(help);
    }
    return mdLinks.mdLinks(path, { validate: false })
      .then((link) => link)
      .catch((link) => index.error(link));
    
  };
//optionsCli('D:\\1.LABORATORIA\\LIM013-fe-md-links\\archivos\\Nuevacarpeta\\holi.md', ' ').then((link) => {console.log(link);})

const [,, ...args] = process.argv;

const pathCli = args[0];

const input = [];
for (let i = 1; i < args.length; i += 1) {
  input.push(args[i]);
}
  
  // Convertimos todos los argumentos en string
const newInput = input.join(' ');
    
if (pathCli === undefined) {
      console.log(help);
}else 
{
  optionsCli(pathCli, newInput).then((link) => {console.log(link);});
}
module.exports = optionsCli;