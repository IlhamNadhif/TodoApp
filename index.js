const express = require("express");
const app = express();
const todoRouter = require("./src/routers/todoRouter");
const port = 3005;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './src/public/views');
app.set('view engine', 'ejs');

app.use('/assets', express.static('src/public/assets'))

app.use(todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
