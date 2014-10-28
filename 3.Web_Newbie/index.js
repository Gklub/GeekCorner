var inputText = document.getElementById('username');
var btnClickMe = document.getElementById('btnClickMe');

btnClickMe.addEventListener('click', function () {
  var username = inputText.value;
  alert('hello world ' + username);
});
