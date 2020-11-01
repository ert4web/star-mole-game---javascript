const holeContainer = document.querySelector('.hole-container');
const hole = document.querySelectorAll('.hole');
const img = document.querySelectorAll('.mole')

function init(){
    let randomNumber= Math.floor((Math.random()*9)+1);
    for(let i=0; i<hole.length;i++){
        randomMoles(i,randomNumber);
}
}
function randomMoles(i,randomNumber){
    if(randomNumber==hole[i].dataset.index){
        let img= document.querySelectorAll('.hole>img');
        let kingNumber = Math.random()
        if(kingNumber>0.9){
            img[i].src="./images/king-mole-hungry.png";
        }
        else{
            img[i].src="./images/mole-hungry.png";
        }
        img[i].classList.remove('gone');
        setTimeout(function(){
            img[i].src='./images/mole-leaving.png';
        },2000)
        setTimeout(function(){
            img[i].classList.add('gone');
        },2300)
        }
}

function fun1(){
    
    setTimeout(function(){
        for(let i=0; i<img.length; i++){
            img[i].src='./images/king-mole-leaving.png';
        }
    },1000);
    
        setTimeout(function(){
            for(let i=0; i<img.length; i++){
            img[i].classList.add('gone');
            }
        },1500);

        setTimeout(setInterval(init,1000),2000);
        
}


fun1();