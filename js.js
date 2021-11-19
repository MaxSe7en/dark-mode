// let getEl = document.querySelector("div");
// getEl.innerHTML = `<a href="google.com">This is it!!!</a>`

const btn = document.getElementById("btn");
const body = document.querySelector("body");
const wrap = document.querySelector(".wrapper");
console.log(wrap);

btn.addEventListener("click", () => {
    wrap.classList.toggle("active");
})