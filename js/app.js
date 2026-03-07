const container=document.getElementById("channels")

let channels=[]

fetch(API_CHANNELS)

.then(res=>res.json())

.then(data=>{

channels=data.channels

renderChannels(channels)

})

function renderChannels(list){

container.innerHTML=""

list.forEach(ch=>{

const card=document.createElement("div")

card.className="channel"

card.innerHTML=`

<div class="logo">📻</div>

<h3>${ch.name}</h3>

<p>${ch.artist}</p>

`

card.onclick=()=>playChannel(ch,card)

container.appendChild(card)

})

}

const container=document.getElementById("channels")

let channels=[]

fetch(API_CHANNELS)

.then(res=>res.json())

.then(data=>{

channels=data.channels

renderChannels(channels)

})



function renderChannels(list){

container.innerHTML=""

list.forEach((ch,index)=>{

const card=document.createElement("div")

card.className="channel"

card.innerHTML=`

<div class="logo">📻</div>

<h3>${ch.name}</h3>

<p>${ch.artist}</p>

<button class="fav">⭐</button>

`

card.onclick=()=>playChannel(ch,card,index)



/* FAVORITE */

card.querySelector(".fav").onclick=(e)=>{

e.stopPropagation()

saveFavorite(ch)

}



container.appendChild(card)

})

}
