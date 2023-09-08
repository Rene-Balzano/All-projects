// Wie ändere ich die Background-color!

function changeBackGroundColor(r, g, b) {
  document.querySelector("body").style.backgroundColor =
  //Durch das concatinieren "+" werden in der Funktion r+g+b in der function ausgeführt!
    "rgb(" + r + "," + g + "," + b + ")";
}

changeBackGroundColor(100, 180, 150);

// Wenn sich der slider bewegt,dann soll er den Rot wert verändern.
document.querySelector("#red").addEventListener("input", (event) => {
  const redValue = event.target.value;
  const greenValue = document.querySelector("#green").value;
  const blueValue = document.querySelector("#blue").value;
  changeBackGroundColor(redValue, greenValue, blueValue);
});

document.querySelector("#green").addEventListener("input", (event) => {
  const redValue = document.querySelector("#red").value;
  const blueValue = document.querySelector("#blue").value;
  const greenValue = event.target.value;
  changeBackGroundColor(redValue, greenValue, blueValue);
});

document.querySelector("#blue").addEventListener("input", (event) => {
  const greenValue = document.querySelector("#green").value;
  const redValue = document.querySelector("#red").value;
  const blueValue = event.target.value;
  changeBackGroundColor(redValue, greenValue, blueValue);
});
