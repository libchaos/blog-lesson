/**
 * Created by mac on 16/2/22.
 */
'use strict';
var http = require('http');
var url = require('url');
var actionRepos = {};

//
//handleRepos['/add'] = require('./actions/add');
//handleRepos['/del'] = require('./actions/del');
//handleRepos['/update'] = require('./actions/update');;
actionRepos['/'] = require('./actions/index');


http.createServer(function (req, res) {

  let pathname = url.parse(req.url).pathname;
  console.log(pathname);
  var action = actionRepos[pathname];
  if(action){
    action(req, res);
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found!!!');
  }


}).listen(3000);
