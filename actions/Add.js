/**
 * Created by mac on 16/2/24.
 */

'use strict';
var database = require('../database');
var AddPage = require('../views/addPage');
var post = require('./post');

module.exports = function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(new AddPage().render());
  } else {
    post(req).then(function(data){
      console.log(data);
    })
  }
}