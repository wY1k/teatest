const { v4: uuidv4 } = require('uuid');

// 生成随机字符串
function generateRandomString() {
  return uuidv4();
}

module.exports = generateRandomString;