// DOM variables
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Event listeners

navToggle.addEventListener('click', function() {
  // console.log(links.classList);
  // if(links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // }

  // Short way 
  links.classList.toggle('show-links');
})