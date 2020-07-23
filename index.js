
const fs = require("fs");
const sock = require('net');
const path = require('path')

const bundler = require('./pack')

var options = {}


var start = function(host, port){
	host = host || 'localhost'
	port = port || 9097

	sock.createServer(function (socket) {

		console.log('bundler start listen on ')    
	
		socket.on('data', async function(data) {
			 
			console.log('connected')
			console.time('Time');		
	
			let filename = data.toString();
	
			
			if (fs.existsSync(filename)){
	
				var content = fs.readFileSync(filename, "utf8");
				var result = bundler.combine(content, path.dirname(filename))
			}
			else throw new Error(`file ${filename} does not exists`)
					
			console.timeEnd('Time');
			socket.write(result);
				  
		});
		 
	}).listen(port, host);

}





/*
var s = require('net').Socket();
s.connect(8080, 'localhost');
s.write('Hello');
s.end();
//*/