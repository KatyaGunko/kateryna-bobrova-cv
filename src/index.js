import "./styles/index.scss";

const LANGUAGE_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Express",
  "Redux",
  "HTML",
  "CSS",
];

const GENERAL_SKILLS = [
  "OOD",
  "Design patterns",
  "Functional Programming",
  "Testing",
  "REST",
  "SPA",
  "RIA",
  "MVC",
  "MVVM",
  "MVP",
  "TDD",
  "BDD",
];

const HELPER_SKILLS = [
  "Webpack",
  "CI/CD",
  "Jenkins",
  "Jest",
  "Jasmine",
  "Mocha",
  "Eslint",
  "Sonar",
  "Git",
  "Prettier",
];

document.addEventListener("DOMContentLoaded", (event) => {
  const carousel1 = document.querySelector(".carousel-1 .skills-container");
  const carousel2 = document.querySelector(".carousel-2 .skills-container");
  const carousel3 = document.querySelector(".carousel-3 .skills-container");
  const carousel4 = document.querySelector(".carousel-4 .skills-container");

  LANGUAGE_SKILLS.forEach((skill) => {
    const el = document.createElement("span");
    el.classList.add("skill");
    el.innerHTML = `<span class="first-letter">${
      skill[0]
    }</span>${skill.substring(1)} ―`;

    carousel1.appendChild(el);
  });
  GENERAL_SKILLS.forEach((skill) => {
    const el = document.createElement("span");
    el.classList.add("skill");
    el.innerHTML = `<span class="first-letter">${
      skill[0]
    }</span>${skill.substring(1)} ―`;

    carousel2.appendChild(el);
  });
  HELPER_SKILLS.forEach((skill) => {
    const el = document.createElement("span");
    el.classList.add("skill");
    el.innerHTML = `<span class="first-letter">${
      skill[0]
    }</span>${skill.substring(1)} ―`;

    carousel3.appendChild(el);
  });

  LANGUAGE_SKILLS.forEach((skill) => {
    const el = document.createElement("span");
    el.classList.add("skill");
    el.innerHTML = `<span class="first-letter">${
      skill[0]
    }</span>${skill.substring(1)} ―`;

    carousel4.appendChild(el);
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const text =
    '"It is not enough to do your best: you must KNOW what to do, and THEN do your best."';
  const textLen = text.length;
  const quoteText = document.querySelector(".quote-header .visible-body .text");
  const quoteCaret = document.querySelector(
    ".quote-header .visible-body .caret"
  );
  const DELTA = 100;
  let index = 0;
  let caretVisible = true;

  setInterval(() => {
    if (caretVisible) {
      quoteCaret.style.opacity = 0;
      caretVisible = false;
    } else {
      quoteCaret.style.opacity = 1;
      caretVisible = true;
    }
  }, 250);

  initInterval();

  function initInterval() {
    const interval = setInterval(() => {
      if (index === textLen) {
        clearInterval(interval);

        setTimeout(() => {
          quoteText.innerHTML = "";
          index = 0;
          initInterval();
        }, 2000);

        return;
      }

      quoteText.innerHTML = quoteText.innerHTML + text[index];
      index++;
    }, DELTA);
  }
});
