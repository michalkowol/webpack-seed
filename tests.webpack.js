require('core-js/es5');
const testsContext = require.context('./src/js', true, /\.(spec|test)$/);
testsContext.keys().forEach(testsContext);
