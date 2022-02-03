const Habit = require('../model/habit');

const month = [
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

module.exports.showDetails = async function (req, res) {
  //get all info related to habits
  let id = req.query.id;

  await Habit.findById(id, function (err, data) {
    if (err) {
      console.log('Error in finding requested habits details');
      return;
    }
    //--storing track of previos 6 days
    const days_Track = [];
    for (let i = 0; i < 6; i++) {
      let date1 =
        new Date().getDate() - i + ', ' + month[new Date().getMonth()];
      let date =
        new Date().getDate() -
        i +
        ', ' +
        month[new Date().getMonth()] +
        ' ' +
        new Date().getFullYear();

      //---now finding status of previous dates
      let find_status = data.days.find((x) => x.date == date);
      if (find_status) {
        days_Track.push({ date: date1, status: find_status.status });
      } else {
        days_Track.push({ date: date1, status: 'None' });
      }
    }
    return res.render('habitDetails', {
      title: 'Details',
      habitDetail: data,
      track: days_Track,
    });
  });
};

//--updating status of selected habit
module.exports.updateStatus = async function (req, res) {
  let id = req.query.id;
  let date = req.query.date + ' ' + new Date().getFullYear();
  let status = req.query.status;

  //--find the selected habit
  await Habit.findById(id, function (err, data) {
    if (err) {
      console.log('Error in finding requested habit details');
      return;
    }
    //----find status of selected habit
    let find = data.days.find((x) => x.date == date);
    //--update the staus
    if (!find) {
      data.days.push({ date: date, status: status });
      data.save();
    } else {
      data.days.remove(find);
      data.days.push({ date: date, status: status });
      data.save();
    }
    res.redirect('back');
  });
};
//https://github.com/rohansharma06/Hospital-API
