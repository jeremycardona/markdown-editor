var mongoose = require('mongoose');  

exports.allDocuments = function document(dtitle, dbody, callback) {  
  var Document = mongoose.model('Document');
  Document.find({
    'title': dtitle,
    'body': dbody
  }, function(err, documents) {
    if (err) {
      console.log(err);
    } else {
      console.log(documents);
      callback("", documents);
    }
  }); // end Document.find 
}; // end exports.allDocuments