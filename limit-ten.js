"use strict";

const { Transform } = require('stream')

let counter = 0

const transformStream = Transform({
	transform (buff, _, cb) {	
		//limits results to first 10
		if (counter < 10) {

			//callback sending the filtered words down the pipe
			cb(null, `${buff.toString()} \n`)
			counter++
		}
		else {
			cb()
		}	
	}
})

module.exports = transformStream
