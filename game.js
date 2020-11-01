function getSadInterval(){
   return Date.now()+1000
} 

function getGoneInterval(){
    return Date.now() + Math.floor(Math.random()*18000)+5000; 
}

function getHungryInterval(){
    return Date.now() + Math.floor(Math.random()*3000)+2000;
}
let score=0;
const moles =[
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-0')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-1')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-2')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-3')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-4')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-5')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-6')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-7')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-8')
    },
    {
        status:'sad',
        next:getSadInterval(),
        king:false,
        node:document.querySelector('#hole-9')
    },
]

function getNextStatus(mole){
    switch(mole.status){
        case 'sad':
        case "fed": 
        mole.status = "leaving"
        mole.next=getSadInterval();
        if(mole.king){
            mole.node.children[0].src = "./images/king-mole-leaving.png";
        }
        else{
            mole.node.children[0].src = "./images/mole-leaving.png";
        }
        mole.king=false;
        break;

        case 'leaving':
        mole.status = "gone";
        mole.next=getGoneInterval();
        mole.node.children[0].classList.add('gone');
        break;

        case "gone":
        mole.status = "hungry";
        mole.next= getHungryInterval();
        mole.king=kingStatus();
        mole.node.children[0].classList.add('hungry');
        if(mole.king){
            mole.node.children[0].src="./images/king-mole-hungry.png"
        }else{
            mole.node.children[0].src="./images/mole-hungry.png"
        } 
        mole.node.children[0].classList.remove('gone');
        break;

        case "hungry":
        mole.status="sad"
        mole.next=getSadInterval();
        mole.node.children[0].classList.remove('hungry');
        if(mole.king){
            mole.node.children[0].src="./images/king-mole-sad.png";
        }
        else{
            mole.node.children[0].src="./images/mole-sad.png";
        }

    } 

    
    
}
function feed(event){
    if(event.target.tagName!=="IMG" || !event.target.classList.contains("hungry")){
        return
    }
let mole = moles[parseInt(event.target.dataset.index)];

mole.status="fed";
mole.next=getSadInterval();
if(mole.king){
    mole.node.children[0].src="./images/king-mole-fed.png";
    score += 2;
}
else{
    mole.node.children[0].src="./images/king-mole-fed.png";
    score++;
}
mole.node.children[0].classList.remove('hungry');



if(score>=10){
    win();
}
}
function win(){
    document.querySelector('.container').classList.add('hide');
    document.querySelector('.win').classList.remove('hide');
}

let runAgainAt = Date.now()+100
function nextFrame(){
    let now = Date.now();
    if(now>runAgainAt){
        for(let i=0 ;i<moles.length; i++){
            if(moles[i].next<now){
               getNextStatus(moles[i]);
                
            }
        }
        runAgainat = now+100;
    }
    
    requestAnimationFrame(nextFrame);
}
function kingStatus(){
   return Math.random()>0.9
}
document.querySelector('.container').addEventListener('click', feed);

nextFrame();