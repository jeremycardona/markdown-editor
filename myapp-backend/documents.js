var mongoose = require('mongoose');  

exports.allDocuments = function(dtitle, dbody, callback) {  
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
exports.createDocument = function(dtitle, dbody, callback){
  var Document = mongoose.model('Document');
  Document.create({
    'title': dtitle,
    'body': dbody
  }, function(err, document){
    if(err){
      console.log(err);
    }else{
      console.log(document);
      callback("", document);
    }
  });
};
exports.findDocumentById = function(dtitle, dbody, callback){
  var Document = mongoose.model('Document');
  Document.findById(id, function(err, document){
    if(err){
      console.log(err);
    } else{
      console.log(document);
      callback("", document);
    }
  });
};
exports.deleteDocumentById = function(dtitle, dbody, callback){
  var Document = mongoose.model('Document');
  Document.deleteOne(id, function(err, document){
    if(err){
      console.log(err);
    }else{
      console.log(document.id);
      callback("", document);
    }
  })
};