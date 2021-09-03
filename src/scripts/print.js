import html2pdf from "html2pdf.js/src";

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".download-cv").addEventListener("click", (e) => {
    e.preventDefault();

    const printBody = document.querySelector("body").cloneNode(true);
    printBody.classList.add("print-mode");

    setTimeout(() => {
      const opt = {
        filename: "Kateryna_Bobrova_CV.pdf",
      };

      html2pdf().set(opt).from(printBody).save();
    }, 0);
  });
});
