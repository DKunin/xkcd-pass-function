'use strict';

const express    = require('express');
const Webtask    = require('webtask-tools');
const bodyParser = require('body-parser');
const uniqueRandomArray = require('unique-random-array');
const mnemonicWords = require('mnemonic-words');
const app = express();

app.use(bodyParser.json());

function generate(flags) {
    
    const wc = parseInt(flags.wc) || 4;
    const s = flags.s || '_';

    const words = new Array(wc)
        .fill()
        .map(() => uniqueRandomArray(mnemonicWords)());
    return  new Array(wc);
    return words.join(s);
}

app.get('/', function (req, res) {
  res.send(generate(req.query));
});

module.exports = Webtask.fromExpress(app);
