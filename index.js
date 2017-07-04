const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// ====================================================================
// PASSPORT STUFF
//const passport = require('passport');
const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);


app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/users/tacos', require('./controllers/users'));
app.use('/users', require('./controllers/signup'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
