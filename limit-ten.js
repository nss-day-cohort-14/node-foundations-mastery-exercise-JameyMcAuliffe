"use strict";

const { Transform, Readable } = require('stream')

const readStream = Readable()
const transformStream = Transform()

let i = 0


// transformStream._transform = (buffer, encoding, cb) => {
// 	cb(null, readStream.pipe(process.stdout))
// }
