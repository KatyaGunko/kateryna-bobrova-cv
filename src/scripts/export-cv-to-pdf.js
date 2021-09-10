import html2pdf from "html2pdf.js/src";

export default function initExportToPDF() {
  const printBtn = document.querySelector(".print");

  if (printBtn) {
    printBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const cv = document.querySelector(".print-block");
      const options = {
        margin: 0,
        filename: "Kateryna_Bobrova_CV.pdf",
      };

      if (cv) {
        html2pdf(cv, options);
      }
    });
  }
}
