<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    //这个属性只用于iOS (iPhone和iPad)。当你点击一个链接或者通过Javascript定义的可点击元素的时候，它就会出现一个半透明的灰色背景
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    //chrome默认最小字体为12px,设置后可以不受限制
    -webkit-text-size-adjust: none;
    //不可选
    -webkit-user-select: none;
    //除Chrome和Safari外，在其它浏览器中，如果将文本设置为 -ms-user-select:none;，则用户将无法在该文本块中开始选择文本
    -ms-user-select: none;
    user-select: none;
    font-family: "微软雅黑";
}
img {
    border: none;
    max-width: 100%;
    //垂直对齐
    vertical-align: middle;
}
body,
p,
form,
input,
button,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
    //清空列表属性
    list-style: none;
    overflow-x: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
}
input,
textarea {
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
    -webkit-appearance: none;
    font-size: 1em;
    line-height: 1.5em;
}
table {
    border-collapse: collapse;
}
input,
select,
textarea {
    outline: none;
    border: none;
    background: none;
}
a {
    outline: 0;
    cursor: pointer;
}
a:link,
a:active {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
}
a {
    text-decoration: none;
    -webkit-touch-callout: none;
}
em,
i {
    font-style: normal;
}
li,
ol {
    list-style: none;
}
html {
    font-size: 16px;
}
.clear {
    clear: both;
    height: 0;
    font-size: 0;
    line-height: 0;
    visibility: hidden;
    overflow: hidden;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
body {
    margin: 0 auto;
    max-width: 750px;
    min-width: 320px;
    //背景色
    background-color: #f1f1f1;
    color: #555;
    height: 100%;
}
a {
    color: #555;
    text-decoration: none;
}
.clearfix {
    overflow: hidden;
    clear: both;
}

.clearfix:before {
    content: " ";
    display: table;
}

</style>
