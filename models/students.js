var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    id : String,
    name : String,
    age : Number,
    major : String,
    grade : Number
});

module.exports = mongoose.model('student', studentSchema);