// index.js
require('dotenv').config(); // 手动加载 .env 文件

console.log("当前环境变量：");
console.log("PORT =", process.env.PORT);
console.log("DB_USER =", process.env.DB_USER);
console.log("DB_PASS =", process.env.DB_PASS);

// 如果没写 .env 文件，process.env 只会显示系统环境变量
