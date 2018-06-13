var createError = require('http-errors'),
express = require('express'),
db = require('./db'),
routes = require('./routes'),
http = require('http'),
path = require('path'),
cookieParser = require('cookie-parser'),
logger = require('morgan');

db();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var editRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');

var port = process.env.PORT || 8080;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create', createRouter);
app.use('/edit', editRouter);
//app.delete('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
