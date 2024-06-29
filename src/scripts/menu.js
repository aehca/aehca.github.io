document.querySelector('.hamburger').addEventListener('click', () => {
  console.log("pressed")
  document.querySelector('.nav-links').classList.toggle('expanded');
});