let player=prompt("your name");
if(player!="")
document.getElementById("name").innerText=player;
else
document.getElementById("name").innerText="Player";

let player_img = document.getElementById("pi");
let com_img=document.getElementById("ci");

var btnsec = document.getElementById("btns")
var btns = btnsec.getElementsByTagName("button")
for (let i = 0; i < 3; i++) {
    btns[i].addEventListener("click", () => {
        player_img.src = "images/"+btns[i].id + ".jpeg"
        btns[i].style.color="darkgreen"
        btns[i].style.backgroundColor="orange"
    });
}

check = () => {
    let images = new Array( "rock.jpeg","paper.jpeg", "scissor.jpeg");
    let index=Math.floor(Math.random() * 3)
    com_img.src = images[index];
    disable();
    getImgName=(path)=>{
        return path.substring(path.lastIndexOf("/")+1,path.length)
    };
    setTimeout(()=>{
        if(com_img.src==player_img.src){
            alert("game draw !");
        }
        else{
            console.log(getImgName(com_img.src),getImgName(player_img.src))
            if(getImgName(com_img.src)==images[0] && getImgName(player_img.src)==images[1]) 
            alert("player won the game")
            else if(getImgName(com_img.src)==images[1] && getImgName(player_img.src)==images[2])
            alert("player won the game")
            else if(getImgName(com_img.src)==images[2] && getImgName(player_img.src)==images[0])
            alert("player won the game")
            else
            alert("Computer won the game")
        }
        document.getElementById("start").disabled=false
    },1000) ;
};

disable = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
};

enable = () => {
    com_img.src=""
    player_img.src=""
    document.getElementById("start").disabled=true
    for (let btn of btns) {
        btn.style.color="black"
        btn.style.backgroundColor="white"
        btn.disabled = false;
    }
};






