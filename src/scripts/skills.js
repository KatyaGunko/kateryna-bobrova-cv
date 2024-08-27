const SKILLS = [
  [
    "Leading development teams",
    "Leading internship programs",
    "Mentoring",
    "Interviewing",
    "Skills assessment",
    "Promotion evaluation",
  ],
  [
    "OOD / Design Patterns",
    "Functional Programming",
    "PWA",
    "SPA / MVC / MVVM / MVP",
    "Databases",
    "Test / Feature / Behaviour driven development",
    "Refactoring",
  ],
  [
    "JavaScript / TypeScript",
    "HTML / HTML5 / CSS / CSS3",
    "React",
    "Angular",
    "Node.js",
    "Express",
    "Jasmine / Karma / Mocha / Chai",
  ],
  [
    "Webpack",
    "Code reviews",
    "CI/CD",
    "Unit / Functional / Integration testing",
    "Code complexity analysis",
  ],
];

export default function initSkillsView() {
  const skillsBoxesWebView = document.querySelectorAll(
    ".do-not-print .skills-list .box"
  );
  const skillsBoxesPrintView = document.querySelectorAll(
    ".print-block .skills-list .box"
  );

  if (skillsBoxesWebView) {
    skillsBoxesWebView.forEach(mountSkillsIntoBox);
  }

  if (skillsBoxesPrintView) {
    skillsBoxesPrintView.forEach(mountSkillsIntoBox);
  }
}

function mountSkillsIntoBox(box, index) {
  const skills = SKILLS[index];
  box.innerHTML =
    box.innerHTML +
    `
    <p>
        ${skills.map((skill) => `${skill} <br />`).join("")}
    </p>
  `;
}
