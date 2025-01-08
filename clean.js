//运行命令清理文件 node clean.js
const fs = require('fs');
const path = require('path');

// 要删除的文件和目录列表
const pathsToDelete = [
  'node_modules',
  //'dist',
  'package-lock.json',
  'npm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',
  '.DS_Store',
  '.vscode',
  '.idea'
];

// 删除文件或目录
const deletePath = (filePath) => {
  if (fs.existsSync(filePath)) {
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmdirSync(filePath, { recursive: true });
      console.log(`Deleted directory: ${filePath}`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${filePath}`);
    }
  }
};

// 遍历并删除指定的文件和目录
pathsToDelete.forEach((relativePath) => {
  const absolutePath = path.resolve(__dirname, relativePath);
  deletePath(absolutePath);
});

// 删除 .DS_Store 文件
const deleteDSStoreFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      deleteDSStoreFiles(filePath);
    } else if (file === '.DS_Store') {
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${filePath}`);
    }
  });
};

// 开始删除 .DS_Store 文件
deleteDSStoreFiles(__dirname);

console.log('Clean up completed.');