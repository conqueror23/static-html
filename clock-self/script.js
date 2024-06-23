const clock=()=>{
  d = new Date(),
  h = d.getHours(),
  m = d.getMinutes(),
  s = d.getSeconds(),
       
  hDeg = h * 30 + m * (360/720) - 90
  mDeg = m * 6 + s * (360/3600) - 90
  sDeg = s * 6 - 90
 
  hEl = document.querySelector('.hour')
  mEl = document.querySelector('.min')
  sEl = document.querySelector('.sec')

  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";

  console.log("rotating ",s)
  console.log("rotating",d)
}

setInterval("clock()", 100);
