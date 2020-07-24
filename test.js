
const tcpbundler = require("./index")
const cmd = require("child_process");
const { isNumericLiteral } = require("typescript");

// setTimeout(()=> cmd.exec("start python test.py"), 1000)

var isNumber = (str) => Boolean(str.match(/\d+/).length)

var args = process.argv.slice(2)
var params = []

if(args.length){
	var options = {}
	for (let arg of args) 
	{
		if (arg.startsWith('-')) options[arg.replace('-','')] = true;
		else{
			params.push(arg)
		}
	}
	console.log(options)
}

if (params.length == 1){
	if (isNumber(params[0])) { params[1] = params[0]; params[0] = null }
}
else if (params[1] && isNumber(params[1]) == false){	
	throw new Error(`Wrong port argument ${params[1]}. Expected port number`)
}

tcpbundler.startListen(params[0] || 'localhost', params[1] || Number(9097), options || { 
	tsc: true, 
	minify: false 
});
