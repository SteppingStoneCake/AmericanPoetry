function generatePoem(event) {
    event.preventDefault();

    // Clear previous content
    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "";

    // Start typewriter effect
    const typewriter = new Typewriter("#poem", {
        strings: ["I always loved mood"],
        autoStart: true,
        delay: 1,
        cursor: ""
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
