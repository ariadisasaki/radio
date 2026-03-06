let playlist = [
  {title:"NGANGGUR",artist:"Masdddho",id:"radio1"},
  {title:"Ku Rela Kau Pilih Dia",artist:"Hari Putra",id:"radio2"},
  {title:"Sembuhkan Luka",artist:"Owan",id:"radio3"}
];

let index = 0;
const list = document.getElementById("playlist");

function render(){
  list.innerHTML = "";
  playlist.forEach((s,i)=>{
    let div = document.createElement("div");
    div.className = "song";
    if(i === index) div.classList.add("active");
    div.innerHTML = `${i+1}. ${s.title}<br><small>${s.artist}</small>`;
    div.onclick = () => {
      index = i;
      load();
    }
    list.appendChild(div);
  });
}

async function load(){
  let id = playlist[index].id;
  let r = await fetch(API_URL + "/api/stream/" + id);
  let j = await r.json();
  play(j.url);
  render();
}

document.getElementById("play").onclick = toggle;
document.getElementById("next").onclick = ()=>{
  index++;
  if(index >= playlist.length) index=0;
  load();
};
document.getElementById("prev").onclick = ()=>{
  index--;
  if(index < 0) index=playlist.length-1;
  load();
};

render();
load();
