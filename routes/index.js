var express = require('express');
var router = express.Router();
const todos = require('../data/todosData');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Unit 2 Assessment',
    todos
  });
});

router.post('/todos', function(req, res, next) {
  //res.send('this is a resource');
  todos.push(req.body.todo);
  res.redirect('/');
});

module.exports = router;
