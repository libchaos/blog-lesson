/**
 * Created by mac on 16/2/22.
 */

var http = require('http');
var url = require('url');
var handleRepos = {};


handleRepos['/add'] = require('./actions/add');
handleRepos['/del'] = require('./actions/del');
handleRepos['/update'] = require('./actions/update');;
handleRepos['/list'] = require('./actions/list');


http.createServer(function (req, res) {

    let pathname = url.parse(req.url).pathname;
    handleRepos[pathname];

}).listen(3000);