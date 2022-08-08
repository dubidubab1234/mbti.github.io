let result = [];
let mbti;
console.log(result);

const home = document.getElementById("home");
const start = document.getElementById("start");

const ei = document.getElementById("ei");
const e = document.getElementById("e");
const i = document.getElementById("i");

const sn = document.getElementById("sn");
const s = document.getElementById("s");
const n = document.getElementById("n");

const ft = document.getElementById("ft");
const f = document.getElementById("f");
const t = document.getElementById("t");

const jp = document.getElementById("jp");
const j = document.getElementById("j");
const p = document.getElementById("p");

const end = document.getElementById("end");
const mbtiResult = document.getElementById("result");

start.addEventListener("click", () => {
  home.style.display = "none";
  ei.style.display = "flex";
});

e.addEventListener("click", () => {
  ei.style.display = "none";
  sn.style.display = "flex";
  result.length < 1 ? result.push("e") : (result[0] = "e");
  console.log(result);
});

i.addEventListener("click", () => {
  ei.style.display = "none";
  sn.style.display = "flex";
  result.length < 1 ? result.push("i") : (result[0] = "i");
  console.log(result);
});

s.addEventListener("click", () => {
  sn.style.display = "none";
  ft.style.display = "flex";
  result.length === 1 ? result.push("s") : (result[1] = "s");
  console.log(result);
});

n.addEventListener("click", () => {
  sn.style.display = "none";
  ft.style.display = "flex";
  result.length === 1 ? result.push("n") : (result[1] = "n");
  console.log(result);
});

f.addEventListener("click", () => {
  ft.style.display = "none";
  jp.style.display = "flex";
  result.length === 2 ? result.push("f") : (result[2] = "f");
  console.log(result);
});

t.addEventListener("click", () => {
  ft.style.display = "none";
  jp.style.display = "flex";
  result.length === 2 ? result.push("t") : (result[2] = "t");
  console.log(result);
});

j.addEventListener("click", () => {
  jp.style.display = "none";
  end.style.display = "flex";
  result.length === 3 ? result.push("j") : (result[3] = "j");
  mbti = result.join("");
  mbtiResult.innerHTML = mbti;
  console.log(result);
});

p.addEventListener("click", () => {
  jp.style.display = "none";
  end.style.display = "flex";
  result.length === 3 ? result.push("p") : (result[3] = "p");
  mbti = result.join("");
  mbtiResult.innerHTML = mbti;
  console.log(result);
});
