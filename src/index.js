function generatePoem(event) {
  event.preventDefault();

  let apiKey = "b8e4c9bea5b1fcaco0bf15019t432341";
  let topicInput = document.querySelector("#poem-topic");
  let topic = topicInput.value.trim();

  if (topic.length === 0) {
    alert("Please enter a topic to generate a poem.");
    return;
  }

  let prompt = `Write a Southern-style poem about ${topic}.`;
  let context = "Use rich imagery and Southern culture. Keep it poetic, not too long.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "📝 Generating your poem...";

  axios
    .get(apiUrl)
    .then(function (response) {
      let poem = response.data.answer;
      poemElement.innerHTML = "";

      new Typewriter(poemElement, {
        autoStart: true,
        delay: 40,
        cursor: "",
      })
        .typeString(poem)
        .start();
    })
    .catch(function (error) {
      console.error("API Error:", error);
      poemElement.innerHTML =
        "⚠️ Something went wrong. Please try again later.";
    });
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);
