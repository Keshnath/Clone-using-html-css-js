// variable defining

let songIndex =  0 ;
let masterPlay = document.getElementById('masterplay');
let audioElement = new Audio('songs/0.mp3');
let gif = document.getElementById('gif');
let timestamp = document.getElementsByClassName('timestamp');
let progressbar = document.getElementById('progressbar');
let masterplaysongname = document.getElementById('masterplaysongname');
let songsItems = Array.from(document.getElementsByClassName('songitems'));
let songsarray = [{songName : 'Kesariya', songPath :'songs/0.mp3' , songCover:'covers/kk.jpg' }
                ,{songName : 'Amaan_malik', songPath :'songs/1.mp3' , songCover:'covers/1.jpg' },
                {songName : 'Love_Aaj_kal', songPath :'songs/2.mp3' , songCover:'covers/2.jpg' },
                {songName : 'I dont know', songPath :'songs/3.mp3' , songCover:'covers/3.jpg' },
                {songName : 'what ar the songs name ', songPath :'songs/4.mp3' , songCover:'covers/4.jpg' }];

// songsitem div

songsItems.forEach((elements , i)=>
{
  
    elements.getElementsByTagName('img')[0].src = songsarray[i].songCover;
    elements.getElementsByClassName('songname')[0].innerText = songsarray[i].songName;
   
   
});

// function for making all pause of small icon

const fun = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((elements)=>{
            elements.classList.remove('fa-pause');
            elements.classList.add('fa-play');
            
    });
}

// function for next previousbutton and also for small icon click 

function indexplay(songIndex){
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = '1';
}

// click event for small icon

Array.from(document.getElementsByClassName('songitemplay')).forEach((elements)=>{
    elements.addEventListener('click' , (e)=>{
        fun();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        indexplay(songIndex);

    });
});

// master play botton functionality 

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = '1';
       
    
    }
    else{
        
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = '0';
    }
   
});

// progressbar functionality

audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    progressbar.value = progress;
});

// progressbar changing with time 

progressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration / 100 ;
});

//  next functionality 

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex >=4){
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    masterplaysongname.innerText = songsarray[songIndex].songName
    indexplay(songIndex);
    fun();
});

// previous functionality 

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex <=0){
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    masterplaysongname.innerText = songsarray[songIndex].songName
    indexplay(songIndex);
    fun();
});
