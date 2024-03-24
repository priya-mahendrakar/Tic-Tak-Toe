let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#newgamebtn");
let turnO = true;


let winningpatterns = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8], 
     [2,4,6],
];

boxes.forEach((box)=>{
box.addEventListener ("click",()=>{
     console.log("button was clicked!");

     if(turnO){
          box.innerText= "o";
          turnO= false; //turn of player x
     }else{
          box.innerText = "x";
          turnO = true ; //turn of player O
     }
     box.disabled=true;
     checkwinner();
     });

});



const gamedraw = () =>{
      msg.innerText = "Game is Draw";
      disableboxes();
     msgcontainer.classList.remove("hide");
     
};  

const checkwinner = () =>{
     for(let pattern of winningpatterns){
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;


          if(pos1val !="" && pos2val !="" && pos3val != ""){
               if(pos1val === pos2val && pos2val === pos3val){
                    console.log("Winner!",pos1val);
           
                    showWinner(pos1val);
                    
               }
          }
     }
};

const showWinner = (winner) =>{
     msg.innerText = `Congratulations, winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disableboxes();

};

const disableboxes =() =>{
     for(let box of boxes){
          box.disabled = true;
     }
};

const resetGame =() =>{
     enableboxes();
     msgcontainer.classList.add("hide");
};


const enableboxes =() =>{
     for(let box of boxes){
          box.disabled = false;
          box.innerText="";
     }
};

resetbtn.addEventListener ("click",resetGame);
newgamebtn.addEventListener("click",resetGame);


