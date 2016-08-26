"use strict";

const { createReadStream } = require('fs')
//const transform = require('./limit-ten')

const es = require('event-stream')

const [,,...cliArg] = process.argv

//variable to pipe data from words docs
const readStream = createReadStream('/usr/share/dict/words')

readStream.pipe(es.split())
.pipe(es.map(function(data, cb) {
	if(data.toString().startsWith(cliArg[0])) {
		//console.log(data.toString())
		cb(null, data)
	} else{
		cb()
	}
}))





//readStream.pipe(process.stdout)
//readStream.pipe(transform)

// readStream.pipe(es.split())
//   .pipe(es.map(function (line, cb) {
//     //do something with the line 
//     line = `${arg}`
//     cb(null, line)
//     .pipe(process.stdout)
//   }))

//piping output to transform in limit-ten.js
//readStream.pipe(transformStream)


