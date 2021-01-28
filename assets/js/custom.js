function onResize() {
  const deg =
    (Math.atan((window.innerHeight * -1) / window.innerWidth) * 180) / Math.PI;
  document.body.style.setProperty('--gradient-degree', deg + 'deg');
  document.body.style.setProperty('--gradient-degree-inv', (180 + deg) + 'deg');
}

document.body.onload = onResize;
document.body.onresize = onResize;
