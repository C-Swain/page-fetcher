const request = require('request');
const fs = require('fs')
const args = process.argv.slice(2);
const link = args[0];
const file = args[1]
console.log(link);
request(`${link}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred

let data = body;
  
// Write data in 'Output.txt' .
fs.writeFile(file , data, (err) => {
	console.log(`file has been downloaded successfully ${fs.statSync(file).size} bytes saved to ${file}`);
  
    // In case of a error throw err.
    if (err) throw err;
})



 

});

