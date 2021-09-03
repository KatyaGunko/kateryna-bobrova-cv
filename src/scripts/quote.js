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
