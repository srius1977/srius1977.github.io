function jsfunction() {
  var myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello world!';
}

var myButton=document.querySelector('button')
var myHeading=document.querySelector('h1')

function setUserName() {
  var myName=prompt('Please enter your name')
  localStorage.setItem('name', myName)
}
