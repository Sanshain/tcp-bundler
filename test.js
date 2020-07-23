
const tcpbundler = require("./index")
const cmd = require("child_process");

// setTimeout(()=> cmd.exec("start python test.py"), 1000)

tcpbundler.startListen('localhost', 9097, { 
	tsc: true, 
	minify: false 
});
