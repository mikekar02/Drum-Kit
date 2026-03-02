const drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("mikeOS");
}
