// To switch to comfirmation page.
document.getElementById('button').addEventListener('click', function(event) {
    document.querySelector('.main-cont').style.display = 'none';
    document.querySelector('.sub-cont').style.display = 'flex';
    event.preventDefault();

});

// When dismiss message is clicked.
document.getElementById('dismissButton').addEventListener('click', function () {
  alert("Message Dismissed");
  location.reload();
})

// Email display.
document.getElementById('button').addEventListener('click', function() {
    const inputValue = document.getElementById('email').value;
    document.getElementById('inputEmail').innerText = inputValue;
});