var HtmlToJson = require('html2json.js');
var htmlDiscode = require('htmldiscode.js');

//type 'html'

function weParser(type, html) {
  var weParserData = [];
  if (type == 'html') {
    html = htmlDiscode.strDiscode(html);
    var json = HtmlToJson(html);
    weParserData = json.child;
  }
  
  return weParserData;
}

module.exports = weParser;
