const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    // title: {type: String, required: true},
    // description: {type: String, required: true,},
    // dateCreated: {type: Date, required: true}, 
    // complete: {type: Boolean, required: true},
    // dateCompleted: {type: Date, required: false},
    // author: {type: Schema.Types.ObjectId, ref: 'User'}


    title: {type: String, required: true},
    description: {type: String, required: true,},
    dateCreated: {type: Date, required: true},
   // complete: {type: Boolean, required: true},
    dateCompleted: {type: Date, required: false},
    author: {type: Schema.Types.ObjectId, ref: 'User'}
  }
);

//Export model
module.exports = mongoose.model('Todo', PostSchema);
