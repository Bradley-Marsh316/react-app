const bcrypt = require('bcrypt');

module.exports.seeds = [
  {
    email: 'marsh316bradley@gmail.com',
    name: 'Brad Marsh',
    password: bcrypt.hashSync('Password123!', 10)
  },
  {
    email: 'b_man316@hotmail.com',
    name: 'Bradley Marsh',
    password: bcrypt.hashSync('Password123!*', 10)
  },
]