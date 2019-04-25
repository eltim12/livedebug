const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: function (plainPassword) {
    return bcrypt.hashSync(plainPassword, 8);
  },
  checkPassword: function (plainPassword, hash) {
    let status = bcrypt.compareSync(plainPassword, hash);
    return status;
  },
  generateNum: function (digit) {
    let result = ''
    for (let i = 0; i < digit; i++) {
      result += Math.floor(Math.random() * 10);
    }

    return result;
  }
}
