const build = require('../pack').combine;
const fs = require('fs');

const colorReset = '%s\x1b[0m';
const redColor = '\x1b[31m'
const yColor = '\x1b[33m';
const blueColor = '\x1b[34m'


function testTS() {
    let content = fs.readFileSync('./entry_point.ts').toString();
    // build()
    // console.log(content);
    
    let funcNames = content.match(/import \{ ([\w ,]+) \} from "\.\/functions/).pop();


    let result = build(content, '.', {})
    let errors = 0;

    if (funcNames) {
        console.log();
        funcNames.split(',').map(w => w.trim()).forEach(w => {
            if (!~result.indexOf('function ' + w)) {
                console.error('\x1b[31m' + '%s\x1b[0m', w + ' not found');
                errors++;
            }
            else {
                console.log(`${w} is transpiled`);
            }
        })
    }

    fs.writeFileSync('./__bundle.ts', result)

    if (!errors) console.log(blueColor + colorReset, 'Typescript tests has completed successfully.');
    else {
        console.log(yColor + colorReset, `Typescript tests has completed with ${errors} errors`);
    }
}

testTS()