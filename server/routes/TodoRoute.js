const express = require('express');
const app = express();
const TodoRoute = express.Router();

// Require Todo model in our routes module
let Todo = require('../models/Todo');

// Defined store route
TodoRoute.route('/add').post(function (req, res) {
  if (req.body && req.body.text){
    let text = req.body.text;
    const data = { text: text };    
    let todo = new Todo(data);    
    console.log("new Todo - ", todo._id);
    todo.save()
      .then(todo => {
        console.log("save Todo - OK");
        res.status(200).json(todo);
      })
      .catch(err => {
        console.log("save Todo - ERROR ", err);
        res.status(400).send({error: err});
      });
  }
  else{
    err = "does not have todo information";
    console.log(err);
    res.status(400).send({error: err});
  }
});

// Defined get data(index or listing) route
TodoRoute.route('/').get(function (req, res) {
  Todo.find(function (err, todos){
    if(err){
      console.log(err);
      res.status(400).send({error: err});
    }
    else {
      res.status(200).json(todos);
    }
  });
  //res.json([{text:"One"},{text:"Two"}, {text:"Three"}]);
});

// Defined remove | remove | destroy route
TodoRoute.route('/remove').post(function (req, res) {
  if (req.body && req.body.id){
    let id = req.body.id;    
    console.log("about remove - ", id);
    Todo.findByIdAndRemove({_id: id}, function(err, todo){
      if(err) {
        console.log("remove - ERROR");
        res.json(err);
      }
      else {
        console.log("remove - OK");
        res.json(id);
      }
    });
  }
});

TodoRoute.route('/clear').get(function (req, res) {
  Todo.deleteMany({}, function(err){
      if(err) {
        res.status(400).send({error: err});
      }
      else { 
        console.log("Clear success");
        res.status(200).json({});
      }
  });
});

module.exports = TodoRoute;