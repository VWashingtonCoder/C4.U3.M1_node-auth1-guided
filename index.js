// const server = require('./api/server.js')

// const port = process.env.PORT || 9000

// server.listen(port, () => {
//   console.log(`\n** Running on port ${port} **\n`)
// })



const bcrypt = require('bcryptjs');

let result = bcrypt.hashSync('asdf', 9);
console.log(result);