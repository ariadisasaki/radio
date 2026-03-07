const audio = document.getElementById("audio")

const playerTitle = document.getElementById("playerTitle")

const playBtn = document.getElementById("playBtn")

const equalizer = document.getElementById("equalizer")

let currentIndex = -1



/* PLAY CHANNEL */

function playChannel(ch,card,index){

audio.src = API_PLAY + "?id=" + ch.id

audio.play()

playerTitle.innerText = ch.name

playBtn.innerText = "⏸"

equalizer.classList.remove("hidden")

currentIndex = index

localStorage.setItem("lastChannel",index)

}



/* PLAY / PAUSE */

function togglePlay(){

if(currentIndex === -1 && channels.length>0){

playChannel(channels[0],null,0)

return

}

if(audio.paused){

audio.play()

playBtn.innerText="⏸"

equalizer.classList.remove("hidden")

}else{

audio.pause()

playBtn.innerText="▶"

equalizer.classList.add("hidden")

}

}



/* NEXT CHANNEL */

function nextChannel(){

currentIndex++

if(currentIndex>=channels.length){

currentIndex=0

}

playChannel(channels[currentIndex],null,currentIndex)

}



/* PREVIOUS CHANNEL */

function prevChannel(){

currentIndex--

if(currentIndex<0){

currentIndex=channels.length-1

}

playChannel(channels[currentIndex],null,currentIndex)

}



/* AUTO LOAD LAST CHANNEL */

window.addEventListener("load",()=>{

let last=localStorage.getItem("lastChannel")

if(last!==null && channels.length>0){

currentIndex=parseInt(last)

playChannel(channels[currentIndex],null,currentIndex)

}

})
