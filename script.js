console.log("welcome to tic tac toe game")
let gameturn = new Audio("ting.mp3")
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3")
let turn = "X"
 const changeturn = ()=>{
     return turn === "X"?"0":"X"
 }
 const checkwin = ()=>{

 }


 //logics
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerText ===''){
        boxtext.innerText = turn;
        turn = changeturn();
        gameturn.play();
        checkwin();
        document.getElementsByClassName("info")[0].innerText = "Turn for"+ turn;

    }
})
 })
