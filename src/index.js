import "./styles/index.scss";

import pathToCV from "./assets/cv/Kateryna_Bobrova_CV.pdf";

import initWorkExperienceView from "./scripts/work-experience";
import initSkillsView from "./scripts/skills";
import initEducationView from "./scripts/eduacation";
import initCarousel from "./scripts/carousel";
import initQuote from "./scripts/quote";
import initExportToPDF from "./scripts/export-cv-to-pdf";

document.addEventListener("DOMContentLoaded", (event) => {
  initCarousel();
  initWorkExperienceView();
  initSkillsView();
  initEducationView();
  initQuote();
  initExportToPDF();
  initDownloadCVBtn();
  hideBackground();
});

function initDownloadCVBtn() {
  const downloadCVBtn = document.querySelector(".download-cv");

  if (downloadCVBtn) {
    downloadCVBtn.href = pathToCV;
  }
}

function hideBackground() {
  setTimeout(() => {
    const bg = document.querySelector(".bg");
    bg.style.opacity = 0;

    setTimeout(() => {
      bg.style.display = "none";
    }, 1000);
  }, 700);
}
