"use strict";

const { createReadStream } = require('fs')

//variable to pipe data from words docs
const readStream = createReadStream('/usr/share/dict/words')

//readStream.pipe(process.stdout)
