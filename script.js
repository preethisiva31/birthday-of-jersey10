const text = "Hey Surya... a small birthday memory is waiting for you 🎂";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();

// START EXPERIENCE
function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("bgmusic").play();

  createParticles();

  setTimeout(showEndScreen, 25000);
}

// MEMORY SYSTEM
function openMemory(step) {

  let box = document.getElementById("memoryBox");

  let data = {
    1: "📖 6th Standard — The first time I saw you… and that memory stayed quietly forever.",
    2: "🏫 School Days — Watching from far, never speaking, but always remembering.",
    3: "🏏 Silent Journey — Time passed, but memory didn’t change.",
    4: "💬 First Talk — After years, that moment felt special.",
    5: "✨ Happy Birthday Surya 🎂 — Wishing you happiness, success, and peace always."
  };

  box.style.opacity = 0;

  setTimeout(() => {
    box.innerHTML = data[step];
    box.style.opacity = 1;
  }, 200);
}

// PARTICLES
function createParticles() {
  for (let i = 0; i < 60; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 4 + 3) + "s";

    document.body.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 6000);
  }
}

// END SCREEN
function showEndScreen() {
  document.getElementById("main").style.display = "none";
  document.getElementById("endScreen").style.display = "flex";
}
