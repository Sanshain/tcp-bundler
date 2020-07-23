
const fs = require("fs");
const sock = require('net');
const path = require('path')

const bundler = require('./pack')

var options = {}


var start = function(host, port){
	host = host || 'localhost'
	port = port || 9098

	console.log(`bundler start listen on ${host}:${port}`)    	

	sock.createServer(function (socket) {

		console.log('connection estableshed')    
	
		socket.on('data', async function(data) {
			 			
			console.time('Time');		
	
			let filename = data.toString();
			console.log(`received task for '${filename}'`)
				
			if (fs.existsSync(filename)){
	
				var content = fs.readFileSync(filename, "utf8");
				var result = bundler.combine(content, path.dirname(filename))				
				let pathinfo = path.parse(filename);

				fs.writeFileSync(pathinfo.dir + path.sep + pathinfo.name + '.js', result)
			}
			else throw new Error(`file ${filename} does not exists`)
					
			console.timeEnd('Time');
			socket.write('success');
				  
		});
		 
	}).listen(port, host);

}


start()


/*
var s = require('net').Socket();
s.connect(8080, 'localhost');
s.write('Hello');
s.end();
//*/