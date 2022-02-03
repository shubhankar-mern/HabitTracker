const Habit = require('../model/habit');

const Month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

module.exports.create = function (req, res) {
  //--fetching curr date
  let d = new Date();
  let date = d.getDate() + ',' + Month[d.getMonth()] + ' ' + d.getFullYear();
  //--adding data to db
  Habit.create(
    {
      name: req.body.habitName,
      time: req.body.time,
      days: { date: date, status: 'None' },
    },
    function (err, data) {
      if (err) {
        console.log('Error in creating a Habit');
        return;
      }
      console.log('*******', data);
      return res.redirect('/');
    }
  );
};
