"use strict";

const { createReadStream } = require('fs')
const transform = require('./limit-ten')

const es = require('event-stream')

const [,,...cliArg] = process.argv

//variable to pipe data from words docs
const readStream = createReadStream('/usr/share/dict/words')

//pipes to split, then map for filtering
readStream.pipe(es.split())
.pipe(es.map(function(data, cb) {
	if(data.toString().toUpperCase().startsWith(cliArg[0].toUpperCase())) {
		//console.log(data.toString())

		//cb sends data down the stream
		cb(null, data)
	} else{
		//if not a match, empty callback drops the data
		cb()
	}
}))
//data from map cb function being sent to transform
.pipe(transform)
.pipe(process.stdout)








