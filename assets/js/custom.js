function onResize() {
  document.body.style.setProperty(
    '--gradient-degree',
    (Math.atan((window.innerHeight * -1) / window.innerWidth) * 180) / Math.PI +
      'deg'
  );
}

document.body.onload = onResize;
document.body.onresize = onResize;
