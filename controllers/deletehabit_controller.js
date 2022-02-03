const Habit = require('../model/habit');

module.exports.delete = async function (req, res) {
  let id = req.query.id;
  await Habit.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log('Error in deleteing habit');
      return;
    }
    return res.redirect('back');
  });
};
