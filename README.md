# prettier eslint and vscode

## 代码质量校验

> 依赖：eslint包、eslint vscode插件、vscode配置、eslintrc配置文件

- 实时提示代码质量问题

```json
"eslint.enable": true, //启用/禁用 vscode-eslint。默认情况下是启用的。
"eslint.alwaysShowStatus": true, // vscode右下角始终展示ESLint状态，建议打开
"eslint.trace.server": "message", // eslint打印详细日志 ['messages', 'verbose']
"eslint.codeAction.showDocumentation": { // 在“快速修复”菜单中显示“打开lint规则文档”网页。默认情况下为true
  "enable": true
},
// 检测指定文件，不在列表中不会检测。默认包含如下
// "eslint.probe": [ 
//   "javascript",
//   "javascriptreact",
//   "typescript",
//   "typescriptreact",
//   "html",
//   "vue",
//   "markdown"
// ]
```

- 上面只是提示，如果保存时自动修复eslint能力范围内的问题，比如末尾分号是否自动添加/去除。vscode添加配置如下：

```json
// 在保存的时候执行的操作
"editor.codeActionsOnSave": { 
  // 保存时用eslint格式化
  "source.fixAll.eslint": true,
}

// 也可以指定文件类型
// "[html]": {
//   "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": false
//   }
// }
```

## 代码格式化

格式化程序有两种方式：
- 一种是触发某种动作时自动格式化，格式化之前程序不会显示warning、error等异常提示，这里暂且称之为`静默格式化`。比如vscode内置格式化、prettier插件格式化

- 另一种是在敲打代码时候，有不符合规范代码格式时候会有warning、error等破浪线提示，再触发指定动作后自动格式化，这里暂且称之为`实时提示格式化`。比如eslint插件、eslint插件扩展prettier规则(eslint主要方向不是格式化代码，加入prettier规则后可以增强格式化功能)


## 静默格式化

### 格式化开关

 ```json
 "editor.formatOnSave": true // 在保存时候自动格式化
 "editor.formatOnType": true // 在回车换行时自动格式化本行
 "editor.formatOnPaste": true // 在粘贴时候自动格式化
 ```

### vscode内置格式化程式

> 依赖：无

 vscode本身有内置的格式化程式，可以对程序简单格式化。只要打开上述指定开关即可。

 也可以不使用vscode内置的格式化程式，指定一个插件来代替内置程式，例如使用prettier插件。

### prettier

> 依赖：prettier vscode插件，prettierrc配置文件

插件市场搜索【Prettier - Code formatter】

使用prettier代替vscode默认格式化程式，修改vscode配置文件：
 ```json
// 所有格式文件都用prettier进行格式化
"editor.defaultFormatter": "esbenp.prettier-vscode" 
// js文件使用prettier进行格式化
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
// json文件使用prettier进行格式化
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
 ```

## 实时提示格式化 - 推荐方式

> 依赖： eslint包、prettier包、eslint-config-prettier包、eslint-plugin-prettier包、eslint vscode插件、vscode配置、eslintrc配置文件。

> vscode配置以上述`代码质量校验`为基础

```bash
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

原理：eslint可以实时代码质量校验并提示，eslint使用prettier作为插件，增强eslint识别代码格式问题与格式化代码的能力

eslint-config-prettier 包作用：关掉所有和Prettier冲突的ESLint的配置。在eslintrc配置文件中配置：
```json
"extends": ["prettier"] // prettier一定要是最后一个，才能确保覆盖
```
这样配置完后，在点击保存文件时候就可以自动以prettier规则格式化了，但是还不能实时提示格式化问题。

eslint-config-prettier 包作用：把Prettier推荐格式问题的配置以ESLint rules的方式写入，所有不符合格式规范的都报"error"
```json 
"plugins": ["prettier"],      
"rules": {        
  "prettier/prettier": "error"      
} 
```
如果想修改prettier某个规则：
```json
rules: {
  "prettier/prettier": [
    "error",
    {
      "semi": true,
    },
  ],
},
```
具体参考文档： https://prettier.io/docs/en/options.html

至此，结束。