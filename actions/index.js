/**
 * Created by mac on 16/2/24.
 */
var IndexPage = require('../views/indexPage');
module.exports = function (req, res) {
  var articlelist = [
  {title: 'title one', body: 'body 1'},
  {title: 'tile 2', body: 'body 2'}
  ];
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(new IndexPage(articlelist).render());

}
