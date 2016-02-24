/**
 * Created by mac on 16/2/24.
 */
'use strict';
var AbstractPage = require('./abstractPage');

class IndexPage extends AbstractPage {
  constructor(articlelist) {
    super();
    this.list = articlelist;
  }

  _render() {
    let listDOMString = this.list.map(article => `
  <li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p></li>`).join(' ')
    return `
    <ul class="list-group">
      ${listDOMString}
    </ul>
   `
  }
}

module.exports = IndexPage;