const express = require('express');
const Router = require('./routes/index');
const path = require('path');
const port = 8000;
const app = express();
//path of public directory
const publicDirectoryPath = path.join(__dirname, './assets/');
app.use('/static', express.static(publicDirectoryPath));
console.log(publicDirectoryPath);
//--used to parse the url
app.use(express.urlencoded());
//--database
const db = require('./config/mongoose');
//used for the template engine
app.set('view engine', 'ejs');
app.set('views', './views');
//--for routing
app.use('/', Router);

//server starts here
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started in ${port}`);
  }
});
