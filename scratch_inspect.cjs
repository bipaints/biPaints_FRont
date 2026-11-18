const fs = require('fs');
const header = fs.readFileSync('temp_header.html', 'utf8');
console.log(header);
