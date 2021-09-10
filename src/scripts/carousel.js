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

export default function initCarousel() {
  const carousel1 = document.querySelector(".carousel-1 .skills-container");
  const carousel2 = document.querySelector(".carousel-2 .skills-container");
  const carousel3 = document.querySelector(".carousel-3 .skills-container");
  const carousel4 = document.querySelector(".carousel-4 .skills-container");

  if (carousel1) {
    mountSkillsToCarousel(carousel1, LANGUAGE_SKILLS);
  }

  if (carousel2) {
    mountSkillsToCarousel(carousel2, GENERAL_SKILLS);
  }

  if (carousel3) {
    mountSkillsToCarousel(carousel3, HELPER_SKILLS);
  }

  if (carousel4) {
    mountSkillsToCarousel(carousel4, LANGUAGE_SKILLS);
  }
}

function mountSkillsToCarousel(carousel, SKILLS) {
  [...SKILLS, ...SKILLS].forEach((skill) => {
    const el = document.createElement("span");
    el.classList.add("skill");
    el.innerHTML = `<span class="first-letter">${
      skill[0]
    }</span>${skill.substring(1)} ―`;

    carousel.appendChild(el);
  });
}
