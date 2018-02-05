import fs from 'fs';
import _ from 'lodash';

const files = fs.readdirSync(__dirname);

const requires = files
  .filter(file => file.endsWith('-routes.js'))
  .map(file => require(`./${file}`));



const routes = [].concat.apply([{
  method: 'GET',
  path: '/',
  config: {
    handler: (request, reply) => reply('B'),
  },
}], requires);


module.exports = routes;
