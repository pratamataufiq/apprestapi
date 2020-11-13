'use strict'; //used for make sure the javascript on the right track

exports.ok = function(values, res) {
    var data = {
        'status':200,
        'values':values
    };
     res.json(data);
     res.end();
}

