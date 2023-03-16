const adviceNumber = document.getElementById("num");
const adviceText = document.querySelector(".advice-h1");
const adviceButton = document.querySelector(".btn");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const id = data.slip.id;
      adviceText.textContent = `"${advice}"`;
      adviceNumber.textContent = id;
    })
    .catch((error) => console.log(error));
}

adviceButton.addEventListener("click", fetchAdvice);

// fetch advice on page load
fetchAdvice();
