// const server = require('./api/server.js')

// const port = process.env.PORT || 9000

// server.listen(port, () => {
//   console.log(`\n** Running on port ${port} **\n`)
// })



const bcrypt = require('bcryptjs');

console.log('hashing...');
let result = bcrypt.hashSync('asdf', 16);
console.log(result);