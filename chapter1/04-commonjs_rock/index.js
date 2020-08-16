var playerAction = process.argv[process.argv.length - 1];
var game = require('./lib.js');



let count = 0;
// 获取进程的标准输入，并且转换成字符串。事件监听和buff的处理
process.stdin.on('data', e => {
    const playerAction = e.toString().trim();
    console.log(playerAction);
    const result = game(playerAction);
    console.log(result);
    if (result === 1) {
        count++
    } 
    if(count === 3){
        console.log('你太厉害了，我不玩了');
        process.exit()
    }

})
