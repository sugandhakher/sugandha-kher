/**
 * Created by sony on 16-03-2017.
 */

module.exports = function(){
    var mongoose = require("mongoose")

    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        pages: [{type: mongoose.Schema.ObjectId, ref: "Page"}],
        dateCreated: [{type: Date, default: Date.now}]
        }, {collection: "assignment.website"});

    return WebsiteSchema;
};