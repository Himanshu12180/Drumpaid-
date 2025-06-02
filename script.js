


// that is Object in key valuepair...................................


let data ={
    A:{
        name:'Clap',
        sound: "sounds/clap-2-95736.mp3",
    },
    S:{
        name:'HiHat',
        sound: "sounds/hihat-closing-98355.mp3",
    } ,
    D:{
        name:'Kick',
        sound: "sounds/kick-greg-232043.mp3",
    },
    F:{
        name:'OpenHat',
        sound: "sounds/ohat-88576.mp3",
    },
    G:{
        name:'Boom',
        sound: "sounds/boom-2-208745.mp3",
    },
    H:{
        name:'Ride',
        sound: "sounds/long-ride-cymbal-2-36337.mp3",
    },
    J:{
        name:'snare',
        sound: "sounds/snare-328872.mp3",
    },
    K:{
        name:'Tom',
        sound: "sounds/tom-0104-107508.mp3",
    },
    L:{
        name:'Drum-Roll',
        sound: "sounds/drum-roll-3-228357.mp3",
    },
};

// id is get in javascript.......................................
let drumkit=document.getElementById('drumkit');
// console.log(drumkit);



// funcation for ecute the cards and open Object....................................

function card(){
    // for in loop using all data(object) can access...................
    for(let key in data){
      let drumElement =document.createElement("div");          //a create elemnt usign javascript
    //   drumElement.className="element";
    drumElement.classList.add("element",data[key].name);  
    //   console.log(drumElement);
    drumkit.appendChild(drumElement);
    let h2=document.createElement('h2');
    // console.log(h2)
    drumElement.appendChild(h2);

    let span= document.createElement("span");
    span.innerHTML=data[key].name;
    drumElement.appendChild(span); 

    drumElement.addEventListener('click',function (event){
            let k=event.currentTarget.querySelector('h2').innerHTML;
            console.log(k);   
             playDrum(key.toUpperCase());
          });


}
}
function playDrum(key){
    console.log(key)
    if(data.hasOwnProperty(key)){
      let drumElement=document.querySelector(`.element.${data[key].name}`);
      console.log(drumElement);
        drumElement.classList.add("active");

    
        let audio = new Audio();
        audio.src=data[key].sound;
        audio.play();

audio.addEventListener("timeupdate",function(){
    if(audio.currentTime>=audio.duration/32){
        drumElement.classList.remove("active");
        audio.removeEventListener("timeupdate",arguments.callee);
    };
});

    };
};
document.addEventListener("keydown",function (event){
    playDrum(event.key.toUpperCase());
});
card();