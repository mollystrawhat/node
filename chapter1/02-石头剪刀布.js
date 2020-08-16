console.log(process.argv);

let playerAction = process.argv[process.argv.length - 1];
let random = Math.random() * 3;
if (random <1) {
  computerAction = "rock";
} else if (random > 2) {
  computerAction = "scissor";
} else {
  computerAction = "paper";
}
console.log(99,computerAction,playerAction);

if (computerAction == playerAction) {
  console.log("平局");
} else if (
  (computerAction == "scissor" && playerAction == "rock") ||
  (computerAction == "paper" && playerAction == "scissor") ||
  (computerAction == "rock" && playerAction == "paper") 
) {
    console.log('赢');
}else{
    console.log('输');
}
