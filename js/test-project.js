console.log('Test Project');

if (confirm("Is this a test project>") == true) {
  document.getElementById('message').innerHTML = 'You answered correctly, this is a test project!';
}
else {
  document.getElementById('message').innerHTML = 'You answered WRONG, this is a test project!';
}