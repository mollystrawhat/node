exports.hello = 'world';
exports.add = function (a, b) {
    return a + b;
}
exports.geekbang = { hello: 'word' }

// 1 当前的exports和index中的lib是同一个引用，在index.js中也可以改变模块导出的内容。ps:是同一个引用
    // setTimeout(() => {
    //     console.log(exports);
    // }, 1000)



/*
*  2 如果这样写的话，exports上面就只有minus这个方法，exports在上面挂的属性都会消失
* 或者说被覆盖掉
*/
module.exports = function minus(a,b){
    return a-b;
}

/* 3 
*  此时exports并不包含minus这个方法，exports对象只有上面添加的3个属性
*  index.js上面添加的属性时挂在module.exports上面，而不是exports上
总结：exports包含exports.XX 和 引用文件挂上的属性
      module.exports只包含module.exports上挂的东西
*/
setTimeout(() => {
    console.log(3, exports);
}, 1000)

/* 4 webpack对应commonjs的打包
4.1所有的文件被打包成一个对象{ }
4.2每一个文件被打包成了一个key为文件名，value为函数的键值对; module,exports, __webpack_require__成为函数的参数
4.3函数:每一个模块都是一个作用域，通过函数创建作用域
*/