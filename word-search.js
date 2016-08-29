"use strict";

const { createReadStream } = require('fs')
const transform = require('./limit-ten')

const es = require('event-stream')

const [,,...cliArg] = process.argv

//variable to pipe data from words docs
const readStream = createReadStream('/usr/share/dict/words')

//checks to see if arg is passed
if (cliArg[0] === undefined){
		console.log('Usage: node word-search.js [searchterm]')
} 
else {
	//pipes to split, then map for filtering
	readStream.pipe(es.split())
	.pipe(es.map(function(data, cb) {	
		if(data.toString().toUpperCase().startsWith(cliArg[0].toUpperCase())) {
			//cb sends data down the stream
			cb(null, data)
		} else{
			//if not a match, empty callback drops the data
			cb()
		}
	}))

	//data from map cb function being sent to transform,
	.pipe(transform)
	//then back from transform to stdout
	.pipe(process.stdout)
}








