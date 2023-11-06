window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
let date = document.createElement("p");
const words = document.querySelector(".words");

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((results) => results[0])
    .map((results) => results.transcript)
    .join("");
  p.innerText = text;
  date.innerText = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
  words.appendChild(p);
  p.appendChild(date);

  if (e.results[0].isFinal) {
    searchWords(text);
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});
recognition.start();

function searchWords(text) {
  if (text.includes("Merhaba") || text.includes("Hello")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Hi berk nasılsın dostum.";
    words.appendChild(p);
  }
  if (text.includes("söylenmedi hiç")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "sana layik düşler benden önce.";
    words.appendChild(p);
  }
  if (text.includes("tutsak Yüreğim")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "gidiyorsun sen de ince ince";
    words.appendChild(p);
  }
  if (text.includes("yangın yeri hep")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "buralar sayende yok şikayet";
    words.appendChild(p);
  }
  if (text.includes("gel bir sarayım")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "aşkın olayım";
    words.appendChild(p);
  }
  if (text.includes("YouTube open")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "opening youtube";
    words.appendChild(p);
    window.open("https://www.youtube.com");
  }
  if (text.includes("Twitter open")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "opening youtube";
    words.appendChild(p);
    window.open("https://twitter.com/home");
  }
  if (text.includes("What is your name")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "My name is berk";
    words.appendChild(p);
  }
}
