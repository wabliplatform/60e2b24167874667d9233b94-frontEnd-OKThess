const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'createtask' : './javascript/createtask.js',
	'edittask' : './javascript/edittask.js',
	'mytasks' : './javascript/mytasks.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};