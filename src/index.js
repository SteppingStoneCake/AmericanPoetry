function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  
  poemElement.innerHTML = "";

  
  new Typewriter(poemElement, {
    autoStart: true,
    delay: 50,
    cursor: "",
  })
    .typeString("I always loved mood")
    .start();
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

