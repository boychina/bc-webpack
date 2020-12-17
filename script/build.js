const bcWebpack = require('../lib');
const config = require('../config/webpack.config');

const compiler = bcWebpack(config);
// 开始打包webpack
compiler.run();