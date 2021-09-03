const education = [
  {
    title: "Simon Kuznets Kharkiv National University of Economics",
    period: "",
    description: "Bachelor of Computer Science",
  },
  {
    title: "Cambridge English Business Certificate",
    period: "MAY 2016",
    description: "",
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  const educationWebView = document.querySelector(
    ".do-not-print .education .right"
  );
  const educationPrintView = document.querySelector(
    ".only-print .education .left"
  );

  mountEducationInfo(educationWebView);
  mountEducationInfo(educationPrintView);
});

function mountEducationInfo(container) {
  container.innerHTML =
    container.innerHTML +
    education
      .map(
        (item) => `
            <p>
                <span class="job-title">
                    <span class="bold">${item.title}</span>
                </span>
            ${
              item.period
                ? `<br /> <span class="date">${item.period}</span>`
                : ""
            }
            ${item.description ? `<br /> ${item.description}` : ""}
            </p>`
      )
      .join("");
}
