'use strict';

var response = require('./res');
var connection = require('./connect');

exports.index = function(req, res){
    response.ok("Rest API successfully created", res);
}

// show all data
exports.showalldata = function(req, res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

// show all data based on id
exports.showbyid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM user WHERE user_id = ?', [id], 
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res)
            }
    });
};

// add user
exports.adduser = function(req, res){
    var email = req.body.user_email;
    var password = req.body.user_password;
    var username = req.body.user_name;

    connection.query('INSERT INTO user (user_email, user_password, user_name) VALUES(?,?,?)',
        [email, password, username],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("Successfully added user", res)
            }
    });
}