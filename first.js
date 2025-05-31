let rst=document.querySelector("#rst-btn");
let box=document.querySelectorAll(".box");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let reveal=document.querySelector(".rev")
const winpatterns=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
let turn0=true;
const clickSound = new Audio("click.wav");
const winSound = new Audio("winbell.wav");
const draw=new Audio("draw.wav");
const disablebox=()=>{
    for (let eachbox of box){
        eachbox.disabled=true;
    }
}
const enablebox=()=>{
    for (let eachbox of box){
        eachbox.disabled=false;
        eachbox.innerText="";
    }
}
const rstbtn=()=>{
    turn0=true;
    enablebox();
    msg.classList.add("hide");

}
const checkdraw=()=>{
    let boolean=false;
    box.forEach((box)=>{
        if (box.innerText===""){
            boolean=true;
        }
    })
    if (boolean===false){
        draw.play();
         reveal.innerText=`Match draw!`;
    msg.classList.remove("hide");
    disablebox();
    }
}
box.forEach((box) => {
    box.addEventListener("click",()=>{
       clickSound.play();
        if (turn0==true){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
            }
            box.disabled=true;
            checkwinner();
            checkdraw();
    })
})
const showwinner=(winner)=>{
    winSound.play();
    reveal.innerText=`Wohooo! ${winner} won this time`;
    msg.classList.remove("hide");
    disablebox();
}
const checkwinner=()=>{
    for (let winpat of winpatterns){
        let pos1=box[winpat[0]].innerText;
        let pos2=box[winpat[1]].innerText;
        let pos3=box[winpat[2]].innerText;
        if (pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",rstbtn);
rst.addEventListener("click",rstbtn);