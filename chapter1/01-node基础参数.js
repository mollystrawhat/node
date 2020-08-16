console.log("oioio")
console.log(__filename);// 文件目录加文件名
console.log(__dirname); //在哪一级下面

console.log(setTimeout);
console.log(setInterval);
console.log(setImmediate);  // conosle.log(requestAnimationFrame)



console.log(process);// 运行进程的一些信息
// 杀进程的一些操作
    // exit: [Function],
    // kill: [Function],
//
// hrtime: { [Function: hrtime] bigint: [Function] },    时间统计
// cpuUsage: [Function: cpuUsage],  // cpu运行情况
// memoryUsage: [Function: memoryUsage], //