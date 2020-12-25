const apple = window.document.querySelector("#apple");
let a = window.document.querySelector("#hua");

const string = `
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.big {

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}

.yuan {
  border: 1px solid red;
  background: red;
  width: 126px;
  height: 130px;
  border-radius: 60% 60% 60% 60% / 50% 50% 90% 90%;
  position: relative;
}
.bai {
  width: 30px;
  height: 30px;
  position: relative;
  left: 70px;
  top: 15px;
  border-radius: 50%;
  box-shadow: 5px -5px 1px 0 rgba(255, 255, 255, 0.3);
}

.gen1 {
  border: 1px solid black;
  width: 10px;
  height: 40px;
  position: absolute;
  left: 58px;
  top: -30px;
  border-radius: 60% 60% 60% 60% / 50% 50% 90% 90%;
  transform: rotate(25deg);
  background: brown;
}
.smallyuao {
  /* border: 1px solid blue; */
  background: white;
  height: 30px;
  width: 30px;
  border-radius: 40%;
  position: relative;
  top: 127px;
  left: 50px;
}
.ye {
  border: 1px solid green;
  background: green;
  width: 50px;
  height: 50px;
  border-top-right-radius: 80%;
  border-bottom-left-radius: 80%;
  transform: rotate(-10deg);
  position: absolute;
  top: -40px;
}
`;
const string2 = "你是猪头";
let n;
setInterval(() => {
  for (n = 0; n <= string.length; n++) {
    apple.innerHTML = string.substr(0, n);
    // a.textContent = string2.substr(0, 4);
  }
}, 1000);
setInterval(() => {
  for (n = 0; n <= string2.length; n++) {
    a.textContent = string2.substr(0, n);
  }
}, 2500);
