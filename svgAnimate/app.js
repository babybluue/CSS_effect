const path = document.querySelectorAll("#logo path");

for (let i = 0; i < path.length; i++) {
  console.log(`letter ${i} is ${path[i].getTotalLength()}`);
}
