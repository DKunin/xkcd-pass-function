'use strict';

var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

function generate(flags) {
    const wc = flags.wc || 4;
    const s = flags.s || '_';
    const words = new Array(wc)
        .fill()
        .map(() => uniqueRandomArray(mnemonicWords)());
    return words.join(s);
}

app.get('/', function (req, res) {
  res.send(generate({}));
});

module.exports = Webtask.fromExpress(app);
