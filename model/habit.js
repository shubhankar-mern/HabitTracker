const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  days: [],
});

const Habit = mongoose.model('habit', habitSchema);

module.exports = Habit;
