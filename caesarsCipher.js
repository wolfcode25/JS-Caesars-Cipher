document.addEventListener("DOMContentLoaded", function () {
  
let input = document.getElementById("encrypted");
let button = document.getElementById("clic");
let output = document.getElementById("decrypted");

function rot(str) {
  let ref = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let msg = "";
  let strx = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    let x = ref.indexOf(strx[i]);
    if (x != -1) {
      let y = 26 - x;
      if (y < 14) {
        x = 13 - y;
      } else {
        x = x + 13;
      }
      msg += ref.charAt(x);
    } else {
      msg += str[i];
    }
  }
  return msg;
}

button.addEventListener("click", result);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    result();
  }
});

function result() {
  output.classList.replace("p", "h3");
  let userInput = input.value;
  if (userInput == "") {
    output.innerHTML = "Please type a maessage to decrypt!";
    output.classList.replace("h3", "p");
    return;
  }
  output.innerHTML = rot(userInput);
}
input.value = "";

});
