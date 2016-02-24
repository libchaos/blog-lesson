/**
 * Created by mac on 16/2/24.
 */
'use strict';
class AbstractPage{
  constructor(){

  }
  _render(){
    throw new Error('子类必须实现');
  }
  render(){
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <link href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
        ${this._render()}
      </body>
      </html>
    `
  }

}

module.exports = AbstractPage;