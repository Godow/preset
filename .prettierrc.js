module.exports = {
  semi: true, // 句尾添加分号
  useTabs: false, // 缩进不使用tab，使用空格
  tabWidth: 2, // 缩进字节数
  singleQuote: false, // 使用单引号代替双引号
  printWidth: 80, // 超过最大值换行
  arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSameLine: false, // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素） ‍
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }" ‍
  embeddedLanguageFormatting: "auto", //嵌入式语言格式 ‍
  htmlWhitespaceSensitivity: "css", // 尊重 CSSdisplay属性的默认值。对于与处理相同的车把strict。 ‍
  insertPragma: false, // 插入编译指示‍
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号 ‍
  proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行 ‍
  quoteProps: "as-needed", // 引用对象中的属性时更改 "as-needed"- 仅在需要时在对象属性周围添加引号‍‍
  requirePragma: false, // 需要编译指示‍‍
  trailingComma: "es5", // 末尾逗号 none - 末尾无逗号，es5 - es5有效保留， all - 在可能的地方都加上逗号‍
  vueIndentScriptAndStyle: false, // Vue 文件脚本和样式标签缩进‍
};
