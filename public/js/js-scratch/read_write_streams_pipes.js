var fs = require('fs');
var readStream = fs.createReadStream(__filename);
var writeStream = fs.createWriteStream('temp.js');
readStream.pipe(writeStream);