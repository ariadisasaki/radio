function updateClock() {
  const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

  const now = new Date();
  const d = `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;
  const t = `Pkl. ${now.toLocaleTimeString('id-ID')}`;

  document.getElementById("date").innerText = d;
  document.getElementById("clock").innerText = t;
}

setInterval(updateClock,1000);
updateClock();
