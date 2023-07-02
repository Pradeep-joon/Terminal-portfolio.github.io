var cursor;

window.onload = init();

// Initializes the cursor to the leftmost possible position
function init() {
  cursor = document.getElementById('cursor');
  cursor.style.left = "0px";
  changeCursorColor();
}

// Function to change the color of the cursor continuously
function changeCursorColor() {
  setInterval(() => {
    const randomColor = getRandomColor();
    cursor.style.backgroundColor = randomColor;
  }, 250); // Change color every 500 milliseconds (0.5 seconds)
}

// Helper function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Replace all the newline characters with an empty string
function replaceNewline(str) {
  return str.replace(/\n/g, '');
}

// Takes data from the textarea and writes to the inputLine span
function typeToLine(source, e) {
  // Load event data using both methods
  e = e || window.event;

  // Store data from the textarea and write to the inputLine span
  var textBox = source.value;
  var inputLine = document.getElementById('input');

  inputLine.innerHTML = replaceNewline(textBox);
}


// Moves the cursor depending on key pressed
function moveCursor(len, e){
    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    // left or right arrow key -> shift the cursor by 10px left or right.
    if (keyCode == 37 && parseInt(cursor.style.left) >= (0 - ((len - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } 
    else if (keyCode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}