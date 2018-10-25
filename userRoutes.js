var express = require('express');
var router = express.Router();
var fs = require('fs');


var user = {
  "user4": {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 4
  }
}

router.get('/show', function(req, res){
  res.send("Show list of users");
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
})

// router.get('/remove', function (req, res) {
//   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//     delete data["user2"];
//     console.log("Deleting data")
//     console.log( data );
//     res.end(data["user2"]);
//   });
// })

router.get('/deleteUser', function (req, res) {
  // First read existing users.
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     delete data['user2'];
     console.log(data)
     fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
      console.log(err);
    });
     res.end(JSON.stringify(data));
  });
})

router.get('/add', function (req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
      console.log(err);
    });
    res.end(JSON.stringify(data));
  });
})

router.get('/:id', function (req, res) {
  // First read existing users.
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     var users = JSON.parse( data );
     var user = users["user" + req.params.id] 
     console.log( user );
     res.end( JSON.stringify(user));
  });
})

module.exports = router;