const Compiler = require('./Compiler');

function bcWebpack(config) {
  return new Compiler(config);
}


module.exports = bcWebpack;