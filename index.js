
const fs = require("fs");
const sock = require('net');
const path = require('path')

const cmd = require("child_process");
var ts = require('typescript');
var tsc = require('gulp-typescript');
var tss = require('typescript-simple');

const bundler = require('./pack')





var start = function(host, port, options){
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
				var result = bundler.combine(content, path.dirname(filename), options)
				
				if (options.tsc){
					
					// result = tsc.compileString(result)
					// cmd.execSync(`tsc ${filename} ${filename}`)
					// var r = ts.createProgram(filename, _options)
					// tsc('./samples/init.ts',{})
					
					result = tss(result);
				}

				let pathinfo = path.parse(filename);

				fs.writeFileSync(pathinfo.dir + path.sep + pathinfo.name + '.js', result)
			}
			else throw new Error(`file ${filename} does not exists`)
					
			console.timeEnd('Time');
			socket.write('success');
				  
		});
		 
	}).listen(port, host);

}


start('localhost', 9097, { tsc: true } )


/*
var s = require('net').Socket();
s.connect(8080, 'localhost');
s.write('Hello');
s.end();
//*/