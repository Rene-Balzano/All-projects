// document.querySelector("button").addEventListener("click", (event) => {

// Akteur (Element) ermitteln / suchen
const button = document.querySelector("#btn");
// Aktion auf Akteur registrieren -> wenn aktion/event xy (z.b. "click")
// stattfindet, macht das (i.d.R. function ausführen)
button.addEventListener("click", buttonClick);

// Schreibweisen
// button.addEventListener("click", () => { ... })
// button.addEventListener("click", function() { ... })
// button.addEventListener("click", functionName)

// Funktion definiert
function buttonClick() {
  const body = document.querySelector("body");

  const color = body.style.backgroundColor;
  if (color === "white") {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
  console.log("hallo");
}

// Erstellen einer function!
// function lightOff() {
//   document.querySelector("button").addEventListener("click", (event) => {

//     document.querySelector("body").style.backgroundColor = "black";
//     document.querySelector("title").innerText = "Good Night";

//     document.querySelector("button").addEventListener("click", (event) => {

//       document.querySelector("body").style.backgroundColor = "white";
//       document.querySelector("title").innerText = "Good Morning";

//       console.log(event);
//     });
//   });
// }

// document.querySelector("#btn").addEventListener(
//   "click",

//   function () {
//     document.querySelector("body").style.backgroundColor = "black";
//     document.querySelector("title").innerText = "Good Night";
//     console.log("äußerer event listener");

//     document.querySelector("#btn").addEventListener("click", function () {
//       console.log("innerer event listener");

//       document.querySelector("body").style.backgroundColor = "white";
//       document.querySelector("title").innerText = "Good Morning";
//       //   console.log("inner function");
//     });
//   }
// );
