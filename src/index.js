function generatePoem(event) {
  event.preventDefault();

  let apiKey = "b8e4c9bea5b1fcaco0bf15019t432341";
  let prompt = "Write a short poem about mood.";
  let context = "Be poetic and inspiring.";
  
  // Correctly build the URL using a template literal
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Loading...";

  // Make the API call
  axios.get(apiUrl).then(function (response) {
    // Clear the loading text
    poemElement.innerHTML = "";

    // Use Typewriter effect to animate the poem
    new Typewriter(poemElement, {
      autoStart: true,
      delay: 50,
      cursor: "",
    })
      .typeString(response.data.answer)
      .start();
  }).catch(function (error) {
    poemElement.innerHTML = "Something went wrong. Please try again.";
    console.error(error);
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
