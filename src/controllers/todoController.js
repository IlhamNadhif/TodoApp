const Todo = require("../models/todo");

const show = (req, res) => {
  Todo.find().then((results) => {
    res.render("index", { results });
  });
};

const create = (req, res) => {
  const createTodo = new Todo({
    todo: req.body.todo,
  });
  createTodo
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteOne = (req, res) => {
    Todo.deleteOne({_id: req.params.id}, function (err) {
        if (err) {
            console.log('error')
        } else {
            res.redirect('/')
        }
    });
}

const deleteAll = (req, res) => {
    Todo.deleteMany({}, function (err) {
        if (err) {
            console.log('error')
        } else {
            res.redirect('/')
        }
    });
}

module.exports = {
  show,
  create,
  deleteOne,
  deleteAll,
};
