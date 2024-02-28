const btn = document.querySelector(".generate");

btn.addEventListener("click", () => {
  const color = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${color}`;
  document.querySelector(".hex").innerHTML = `#${color}`;
});
