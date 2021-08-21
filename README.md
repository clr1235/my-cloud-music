# 从零开始构建react-hooks + react-router-dom + reduxToolkit + antd-mobile的web端网易云app

工欲善其事，必先利其器！
万丈高楼平地起！
舞台先搭起来！

## 项目初始化
1. 在空目录下 执行 `npx create-react-app my-app --template redux`，此命令将会生成一个带有 `reduxToolkit` 的 `create-react-app` 架子的 `my-app` 项目。
2.




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

## 安装react-Toolkit react-redux
`yarn add @reduxjs/toolkit react-redux`
使用RTK，只需一个reducer即可，前提是组件必须是hooks的方式。

## @loadable/component
- 使用 @loadable/component 动态加载路由，进行代码分割

## 配置移动端自动适配
1. yarn add lib-flexible postcss-px2rem-exclude --save
2. 在reject之后的webpack.config.js文件中做以下修改：
    -  `const px2rem = require('postcss-px2rem-exclude');`
    - 在 getStyleLoaders 方法的 postcss-loader 所在对象中的options下的postcssNormalize方法之前添加 `px2rem({remUnit: 75, exclude:/node-modules/i}),`
3. 在入口的index.js文件中引入 `import lib-flexible`
4. 将public目录下的模板文件index.html中的 `<meta name="viewport" content="width=device-width, initial-scale=1" />` 注释掉。

## 配置别名 alias
1. 在 config目录下的paths文件中，找到 module.exports 抛出的那一个对象，在其中可添加自己想要的路径
2. 然后在webpack.config.js的resolve选项下的alias下添加你自定义的别名，比如 `'@': paths.appSrc`

## less-loader报错问题
`./src/index.less (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-8-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-8-3!./node_modules/less-loader/dist/cjs.js??ref--5-oneOf-8-4!./src/index.less)
TypeError: this.getOptions is not a function`
此报错是因为less-loader版本过高，和webpack4.+版本不兼容导致，需要将less-loader版本降至5.0.0
