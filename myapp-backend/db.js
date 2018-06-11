var mongoose = require('mongoose');  
var documentSchema = new mongoose.Schema({  
  title: String,
  body: String
});
mongoose.model('Document', documentSchema);  
//mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds157621.mlab.com:57621/markdown-editor'); 
  
