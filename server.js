/**
 * Created by mac on 16/2/22.
 */

var http = require('http');
var database = require('./database');
var url = require('url');
var handleRepos = {};
var addAction = require('./actions/add');
var delAction = require('./actions/del');
var updateAction = require('./actions/update');
var listAction = require('./actions/list');

handleRepos['/add'] = addAction;
handleRepos['/del'] = delAction;
handleRepos['/update'] = updateAction;
handleRepos['/list'] = listAction;

function getHandle(path){
    return handleRepos[path];
}

http.createServer(function (req, res) {
    let pathname = url.parse(req.url);
    let handle = getHandle(pathname)
    handle(req, res);



}).listen(3000);