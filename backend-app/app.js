var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
var logger = require('morgan');
const helmet = require('helmet');
const dbConfig = require('./service/constant').dbConfig;
var cors = require('cors');
const mongoose = require('mongoose');
const indexRouter = require('./routes').routes;
const methodOverride = require('method-override');
var corsOption = {
  origin: '*'
}
var app = express()
app.use(cors(corsOption))
require('dotenv').config()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1000mb' }));

app.use(compress());
app.use(methodOverride());



app.get('/', function (req, res, next) {
  res.render('index', { title: 'Poly9 Backend' });
});
app.use('/api', indexRouter);

// connect to mongo db
const mongoUri = `${dbConfig.host}`;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: 1 });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${dbConfig.dbName}`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
