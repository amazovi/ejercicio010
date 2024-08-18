const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',  // La URL donde corre tu aplicación
    supportFile: false,  // Desactiva el archivo de soporte
    setupNodeEvents(on, config) {
      // Aquí puedes agregar eventos si es necesario
    },
  },
});
