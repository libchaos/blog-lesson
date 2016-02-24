/**
 * Created by mac on 16/2/22.
 */
var fs = require('fs');
const filepath = __dirname + '/data.json';
var list;
try {
  list = JSON.parse(fs.readFileSync(filepath));
} catch (e) {
  list = [];
}


module.exports = {
  add(article) {
    list.push(article);
  },
  delete(index) {
    list.splice(index, 1);
  },
  update(index, newArticle) {
    list.splice(index, 1, newArticle);

  },
  get list() {
    return list;
  },
  store(callback) {
    fs.writeFile(filepath, JSON.stringify(list), callback);
  }

};
