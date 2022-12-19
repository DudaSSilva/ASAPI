const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const urlMongo = "mongodb+srv://eddy:eddy@cluster0.1wiep7f.mongodb.net/?retryWrites=true&w=majority";
console.log(urlMongo)

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const dbConnection = mongoose.connection;

dbConnection.on("error", console.error.bind(console, "Erro na conexão ao MongoDB."));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//conteudos
var conteudoRouter = require('./routes/materias/conteudo');
var conteudosPageRouter = require('./routes/materias/conteudospage');
var portuguesRouter = require('./routes/materias/portugues');
var viewConteudosRouter = require('./routes/materias/viewconteudos');

//flashcards
var flashcardsRouter = require('./routes/cards/flashcards');
var flashcardsPageRouter = require('./routes/cards/flashcardspage');
var viewFlashcardsRouter = require('./routes/cards/viewflashcards');

//hábitos
var habitosRouter = require('./routes/habit/habitos');
var habitosPageRouter = require('./routes/habit/habitospage');
var viewHabitosRouter = require('./routes/habit/viewhabitos');

//livros
var livrosRouter = require('./routes/book/livros');
var livrosPageRouter = require('./routes/book/livrospage');
var viewlivrosRouter = require('./routes/book/viewlivros');

//menu
var menuRouter = require('./routes/menu');

//tarefas
var tarefasRouter = require('./routes/todo/tarefas');
var tarefasPageRouter = require('./routes/todo/tarefaspage');
var viewTarefasRouter = require('./routes/todo/viewtarefas');


//conquistas
var conquistasRouter = require('./routes/vitorias/conquistas');
var conquistasPageRouter = require('./routes/vitorias/conquistaspage');
var viewConquistasRouter = require('./routes/vitorias/viewconquistas');

//json e rotas
var jsonPageRouter = require('./routes/jsonpage');
var rotasPageRouter = require('./routes/rotaspage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);

//rota dos flashcards
app.use('/flashcards', flashcardsRouter);
app.use('/flashcardspage', flashcardsPageRouter);
app.use('/viewflashcards', viewFlashcardsRouter);

//rotas de disciplinas

app.use('/conteudo', conteudoRouter);
app.use('/conteudospage', conteudosPageRouter);
app.use('/viewconteudos', viewConteudosRouter);

//rotas de hábitos

app.use('/habitos', habitosRouter);
app.use('/habitospage', habitosPageRouter);
app.use('/viewhabitos', viewHabitosRouter);

//rotas de livros

app.use('/livros', livrosRouter);
app.use('/livrospage', livrosPageRouter);
app.use('/viewlivros', viewlivrosRouter);

//rota de português

app.use('/portugues', portuguesRouter);

//rotas de tarefas
app.use('/tarefas', tarefasRouter);
app.use('/tarefaspage', tarefasPageRouter);
app.use('/viewtarefas', viewTarefasRouter);

//rotas de conquistas
app.use('/conquistas', conquistasRouter);
app.use('/conquistaspage', conquistasPageRouter);
app.use('/viewconquistas', viewConquistasRouter);

//json e rotas
app.use('/jsonpage', jsonPageRouter);
app.use('/rotaspage', rotasPageRouter);

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

module.exports = app;
