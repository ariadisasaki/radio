function toggleFavorite(id){

let fav=JSON.parse(localStorage.getItem("fav")||"[]")

if(fav.includes(id)){

fav=fav.filter(f=>f!==id)

}else{

fav.push(id)

}

localStorage.setItem("fav",JSON.stringify(fav))

}
