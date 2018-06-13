var mongoose = require('mongoose');  
var documentSchema = new mongoose.Schema({  
  title: {type: String, default:''},
  body: {type: String, default:''}
});

mongoose.connect('mongodb://jeremycardona:Cardona1@ds157621.mlab.com:57621/markdown-editor'); 
var d = mongoose.connection;
d.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose.model('Document', documentSchema); 