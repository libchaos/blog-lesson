/**
 * Created by mac on 16/2/22.
 */

var http = require('http');
var database = require('./database');
var url = require('url');

//test
var article = {title: 'mytitle', body: 'mybody'};
http.createServer(function (req, res) {
    var result = url.parse(req.url);
    var pathname = result.pathname;
    var query = result.query;

    console.log(pathname);
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(database.list.toString());
            break;
        case '/add':
            if (req.method === 'GET') {

            } else {

            }

            break;
        case '/del':
            database.delete(0);

            break;
        case '/update':
            if (req.method === 'GET') {

            } else {

            }
            break;
    }
}).listen(3000);