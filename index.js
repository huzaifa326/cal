let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.btn');

// Add event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    let value = e.target.innerText;
    
    // Handle the clear button
    if (value === 'C') {
      screen.value = '';
    }
    // Handle the equals button
    else if (value === '=') {
      screen.value = eval(screen.value);
    }
    // Handle all other buttons
    else {
      screen.value += value;
    }
  });
});