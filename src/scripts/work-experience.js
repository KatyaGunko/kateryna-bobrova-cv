const workExperience = [
  {
    title: "Delinea",
    position: "Senior JavaScript Engineer",
    period: "DECEMBER 2021 - PRESENT",
    description:
      "Managing development workflow at Security Monitoring Web application.",
  },
  {
    title: "Amazon",
    position: "Front End Engineer",
    period: "APRIL 2021 - NOVEMBER 2021",
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
    title: "PioGroup",
    position: "JavaScript Software Engineer",
    period: "MARCH 2015 - MARCH 2016",
    description: "Building Web Apps using Angular.js / Ionic / Cordova.",
  },
];

export default function initWorkExperienceView() {
  const workExperienceWebView = document.querySelector(
    ".do-not-print .work-experience .right"
  );
  const workExperiencePrintView = document.querySelector(
    ".print-block .work-experience .left"
  );

  if (workExperienceWebView) {
    mountWorkExperience(workExperienceWebView);
  }

  if (workExperiencePrintView) {
    mountWorkExperience(workExperiencePrintView);
  }
}

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
                <span class="date">${company.period}</span>
                <br />
                ${company.description}
              </p>
            `
      )
      .join("");
}
