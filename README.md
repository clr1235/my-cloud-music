## npm eject之后 按需引入antd-mobile
1. ```npm install antd-mobile --save```  ```npm install babel-plugin-import --save-dev```
2. 在package.json文件的 babel 配置项下加入 
```
    "plugins": [
        [
            "import",
            {
            "libraryName": "antd-mobile",
            "style": "css"
            }
        ]
    ]
```
3. 完成。
## 在编辑器中进行调试
1. 根目录下创建 .vscode文件夹
2. 在.vscode文件夹下创建launch.json文件，并在其内书写如下代码：
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```
3. npm start 启动应用程序，然后按 F5 或单击绿色调试图标在 VS Code 中开始调试。你现在可以编辑代码，设置断点，更改代码，以及从编辑器调试新修改的代码。
## 自动格式化代码
Prettier 是一个固定的代码格式化程序，支持 JavaScript ，CSS 和 JSON 。使用 Prettier，你可以自动格式化你编写的代码，以确保项目中的代码风格。
- 执行命令 ```npm install --save husky lint-staged prettier```进行安装
- husky 使得使用 githooks 变得很容易，就好像它们是 npm 脚本一样。
- lint-staged 允许我们在 git 中的 staged 文件上运行脚本。
- prettier 的是我们将在提交运行之前的 JavaScript 格式化程序。
- 接下来在 package.json 文件中添加 如下代码：
```
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```
- 然后在 package.json 文件中添加 lint-staged 配置，如下所示：
```
"lint-staged": {
   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --single-quote --write",
        "git add"
   ]
},
```
- 到此处，无论何时进行提交，Prettier 都会自动格式化已更改的文件。
