'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/showall')
        .get(myjson.showalldata);

    app.route('/showall/:id')
        .get(myjson.showbyid);

    app.route('/adduser')
        .post(myjson.adduser);

    app.route('/edituser')
        .put(myjson.edituser);

    app.route('/deleteuser')
        .delete(myjson.deleteuser);

}