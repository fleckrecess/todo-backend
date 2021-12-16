const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    prj_name: { type: String, required: true, },
    prj_stat: { type: String, required: true, },
    prj_manager: { type: String, required: true, },
    prj_cost: { type: Number, required: true, }
  }, {
    timestamps: true,
  });
  const todos = mongoose.model('todos', todoSchema);

module.exports = {todos};