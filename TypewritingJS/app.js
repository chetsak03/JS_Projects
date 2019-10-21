const texts = ["Websites_maker", "Do_illustrations", "Do_programs"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index).toUpperCase();

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    // setTimeout(400, function() {
    //   letter = currentText.slice(-1, --index).toUpperCase();

    //   document.querySelector(".typing").textContent = letter;
    // });
    count++;
    index = 0;
  }
  // setTimeout(300, function() {
  // for (var i = texts.length; i >= 0; i--) {
  //   letter = letter[i];
  // }
  // for (var i = 0; i < texts.length; i++) {
  //   letter = letter.length - 1;
  //   console.log(letter);
  // }
  // });
  setTimeout(type, 400);
})();
