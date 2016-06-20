var mongoose = require('mongoose');
// have no idea what the mongoose-function is 
require('mongoose-function')(mongoose);

// appschema is the structure of documents within a collection
var appSchema = new mongoose.Schema({
	title: {type: String},
	author: String,
	category: String,
	description: String,
})

// app model is the instances of data using the appSchema
// and also a mongodb collection called App for these docs
var App = mongoose.model('App', appSchema);

module.exports = {
	App: App
}