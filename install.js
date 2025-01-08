////运行命令安装依赖 node install.js
const { exec } = require('child_process');

// 重新安装依赖
exec('npm install --legacy-peer-deps --ignore-engines', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error reinstalling dependencies: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});