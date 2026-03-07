function saveFavorite(ch){

let fav=JSON.parse(localStorage.getItem("favorites")||"[]")

let exist=fav.find(f=>f.id===ch.id)

if(!exist){

fav.push(ch)

}

localStorage.setItem("favorites",JSON.stringify(fav))

alert("Channel disimpan ke favorite")

}
