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
