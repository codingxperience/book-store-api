const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Book-store API',
  },
  host: 'offs341-05.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// localhost:3000
// schemes: ['http']

// host: 'https://offs341-05.onrender.com',
// schemes: ['https']


/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

   // generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// run the sever after it gets generated
swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./server.js')
});