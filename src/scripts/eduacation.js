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

export default function initEducationView() {
  const educationWebView = document.querySelector(
    ".do-not-print .education .right"
  );
  const educationPrintView = document.querySelector(
    ".print-block .education .left"
  );

  if (educationWebView) {
    mountEducationInfo(educationWebView);
  }

  if (educationPrintView) {
    mountEducationInfo(educationPrintView);
  }
}

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
