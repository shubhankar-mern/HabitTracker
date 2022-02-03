const Habit = require('../model/habit');

//---finding all habits and rendering them on the home Page
module.exports.home = function (req, res) {
  Habit.find({}, function (err, data) {
    if (err) {
      console.log('Error in finding habits from DB');
      return;
    }
    return res.render('home', {
      title: 'Home',
      allHabits: data,
    });
  });
};
