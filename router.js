'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/showall')
        .get(myjson.showalldata);

    app.route('/showall/:id')
        .get(myjson.showbyid);

}