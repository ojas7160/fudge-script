var robot = require("robotjs");

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  characters = characters.split("");
  // characters = characters.concat([
  //   "enter",
  //   "f1",
  //   "f2",
  //   "f3",
  //   "f4",
  //   "f6",
  //   "f7",
  //   "f8",
  //   "f9",
  //   "f10",
  //   "f11",
  //   "f12",
  //   "tab",
  //   "escape",
  //   "up",
  //   "down",
  //   "right",
  //   "left",
  //   "ctrl",
  //   "alt",
  //   "space",
  // ]);
  characters = characters.concat([
    "escape",
    "up",
    "down",
    "right",
    "left",
    "control",
    "alt",
    "space",
  ]);
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * charactersLength)];
  }
  return result;
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

//   var div = document.createElement("div");
//   div.onkeypress = ($e) => {
//     console.log(`${$e.key} is clicked`);
//   };
//   var interval = setInterval(
//     () => div.dispatchEvent(new KeyboardEvent("keypress", { key: makeid(1) })),
//     800
//   );

function startFudging() {
  
  var interval = setInterval(() => {console.log(`${makeid(1)} is clicked`); robot.keyTap(makeid(1))}, 800);

  setTimeout(() => {
    clearInterval(interval);
    sleep(Math.ceil(Math.random() * 10000)).then(() => startFudging());
  }, Math.ceil(Math.random() * 100000));
}

startFudging();