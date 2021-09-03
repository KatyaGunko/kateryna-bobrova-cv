const workExperience = [
  {
    title: "Amazon",
    position: "Front End Engineer",
    period: "APRIL 2021 - PRESENT",
    description:
      "Building Web application for Deals microservice at Amazon Retail website.",
  },
  {
    title: "Ciklum",
    position: "JavaScript Tech Lead",
    period: "JULY 2018 - MARCH 2021",
    description:
      "Leading teams in building reach internet applications. Leading internship programs.",
  },
  {
    title: "Dev-Pro.net",
    position: "JavaScript Software Engineer",
    period: "MAY 2017 - JULY 2018",
    description: "Taking part in active development phase of POS system.",
  },
  {
    title: "SoftServe",
    position: "JavaScript Software Engineer",
    period: "JUNE 2016 - MAY 2017",
    description:
      "Building Web Apps using JavaScript latest Front-End technologies.",
  },
  {
    title: "Fabware",
    position: "JavaScript Software Engineer",
    period: "MARCH 2016 - JUNE 2016",
    description: "Building POS applications using Angular.js.",
  },
  {
    title: "PioGroup",
    position: "JavaScript Software Engineer",
    period: "MARCH 2015 - MARCH 2016",
    description: "Building Web Apps using Angular.js / Ionic / Cordova.",
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  const workExperienceWebView = document.querySelector(
    ".do-not-print .work-experience .right"
  );
  const workExperiencePrintView = document.querySelector(
    ".only-print .work-experience .left"
  );

  mountWorkExperience(workExperienceWebView);
  mountWorkExperience(workExperiencePrintView);
});

function mountWorkExperience(container) {
  container.innerHTML =
    container.innerHTML +
    workExperience
      .map(
        (company) => `
            <p>
                <span class="job-title">
                  <span class="bold">${company.title}</span> — ${company.position}
                </span>
                <br />
                <span class="date">${company.period}T</span>
                <br />
                ${company.description}
              </p>
            `
      )
      .join("");
}
