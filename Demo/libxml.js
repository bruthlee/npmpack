var libxmljs = require("libxmljs");
var xml =  '<?xml version="1.0" encoding="UTF-8"?>' +
           '<root>' +
               '<child foo="bar">' +
                   '<grandchild baz="fizbuzz">grandchild content</grandchild>' +
               '</child>' +
               '<sibling>with content!</sibling>' +
           '</root>';

var xmlDoc = libxmljs.parseXml(xml);

// xpath queries
var gchild = xmlDoc.get('//grandchild');

console.log(gchild.text());
// grandchild content

var children = xmlDoc.root().childNodes();
console.log(children)
// [ {}, {} ]
var child = children[0];
console.log(child)
// {}
console.log(child.attr('foo').value());
// bar