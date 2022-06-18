import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//import db package
import mongoose from 'mongoose';

//step 1 for authentication - import modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//modules for JWT support
import cors from 'cors';

//step 2 for auth - define our auth objects
let localStrategy = passportLocal.Strategy; //alias

//step 3 for auth - import the user model
import User from '../Models/user';

//import the router data
import indexRouter from '../Routes/index'; 
import contactListRouter from '../Routes/bcontacts';
import authRouter from '../Routes/auth';

const app = express();

//DB configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.RemoteURI || DBConfig.LocalURI);

const db = mongoose.connection; //alias for mongoose connection
db.on("open", function(){
  console.log(`connected to MongoDB at: ${(DBConfig.RemoteURI) ? DBConfig.HostName : "localhost"}`);
});

db.on("error", function(){
  console.error(`Connection Error`);
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors()); //add cors

//step 4 for auth - setup the express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false,
}));

//step 5 for auth - setup flash
app.use(flash());

//step 6 - initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//step 7 for auth - implement auth strategy
passport.use(User.createStrategy());

//step 8 for auth - setup serialization and deserialization (encoding decoding)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//use routes
app.use('/', indexRouter);
app.use('/', contactListRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;