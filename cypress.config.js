const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          { "reporter"; "mochawesome",
              "reporterOptions"; 
                  { "reportDir"; "cypress/report/mochawesome-report",
                  "overwrite"; true,
                  "html"; true,
                  "json"; false,
                  "timestamp"; "mmddyyyy_HHMMss" }}
      },
  },
  video: true
});


// Funciona o mochawesome, mas não funciona o video.
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//       setupNodeEvents(on, config) {
//         module.exports = defineConfig({
//           e2e:{
//             setupNodeEvents(on, config){
//           { "reporter"; "mochawesome",
//               "reporterOptions"; 
//                   { "reportDir"; "cypress/report/mochawesome-report",
//                   "overwrite"; true,
//                   "html"; true,
//                   "json"; false,
//                   "timestamp"; "mmddyyyy_HHMMss" }}
//       },
//   },
//   video: true
// });

// },
// },
// });

