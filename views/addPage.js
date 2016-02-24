/**
 * Created by mac on 16/2/24.
 */
'use strict';
var AbstractPage = require('./abstractPage');

class AddPage extends AbstractPage {
  constructor(erros) {
    super();
    this.errors = erros;
  }

  _render() {

    return `
      <form action="/add" method="post">
        <div class="form-group">
          <label for="title">标题</label>
          <input type="text" class="form-control" id="title" placeholder="标题" />
        </div>
        <div class="form-group">
          <label for="body">内容</label>
          <textarea type="text" class="form-control" id="body" placeholder="内容"></textarea>
        </div>
        <button type="submit" class="btn btn-default">添加</button>
      </form>
    `
  }
}

module.exports = AddPage;