var mongoose = require('mongoose');  
var documentSchema = new mongoose.Schema({  
  title: String,
  body: String
});
mongoose.model('Document', documentSchema);  
mongoose.connect('mongodb://localhost/my_database');  