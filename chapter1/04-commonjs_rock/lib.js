module.exports=function (playerAction){
    var random = Math.random() * 3;
    if (random < 1) {
        var computerAction = 'rock'
    } else if (random > 2) {
        var computerAction = 'scissor'
    } else {
        var computerAction = 'paper'
    }
    if (playerAction === computerAction) {
        console.log('平局');
        return 0;
    } else if (
        playerAction === "rock" && computerAction === "paper" ||
        playerAction === "scissor" && computerAction === "rock" ||
        playerAction === "paper" && computerAction === "scissor"
    ) {
        console.log('我输了');
        return - 1
    } else {
        console.log('我赢了');
        return 1

    }
}

