async function promptAndShowName() {
  const name = prompt("Please enter your name:");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  document.getElementById("nameContainer").innerText = `Hello, ${name}!`;
}

document
  .getElementById("promptNameButton")
  .addEventListener("click", promptAndShowName);
