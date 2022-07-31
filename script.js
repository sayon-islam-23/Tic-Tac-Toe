console.log("Welcome to Tic Tac Toe Game")

let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;
let turn = "X";

// function to change the turn
const changeTurn = () =>{
    return  turn === "X"?"0":"X"   // if turn is on X then next turn will return 0, else if turn is on 0, it will return X
}

//function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        // array of array for all winning combinations
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6], 
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = "Player  "+boxtext[e[0]].innerText + "  Won !!!";
        isgameover = true
        gameover.play();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "230px";
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box");  // selecting the grid or class box
Array.from(boxes).forEach(element =>{               
    let boxtext = element.querySelector('.boxtext');  // using for each loop getting each individual span for putting turn
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;   // if innertext is empty put X or Y (the turn variable value)
            turn =  changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = " Turn For " + turn;
            }
        }
    })
})

// reset button

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn= "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = " Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
