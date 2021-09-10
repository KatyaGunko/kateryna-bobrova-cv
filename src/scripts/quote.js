const TEXT =
  '"It is not enough to do your best: you must KNOW what to do, and THEN do your best." – W. Edwards Deming.';
const CARET_BLINKING_INTERVAL = 250;
const DELAY_TO_NEXT_LETTER = 100;
const DELAY_BEFORE_TEXT_CLEANUP = 2000;

export default function initQuote() {
  const quoteTextContainer = document.querySelector(
    ".quote-header .visible-body .text"
  );
  const quoteCaretElement = document.querySelector(
    ".quote-header .visible-body .caret"
  );

  if (quoteTextContainer && quoteCaretElement) {
    initCaretBlinking(quoteCaretElement);
    initTextTyping(quoteTextContainer, TEXT);
  }
}

function initCaretBlinking(quoteCaretElement) {
  let caretVisible = true;

  setInterval(() => {
    if (caretVisible) {
      quoteCaretElement.style.opacity = 0;
      caretVisible = false;
    } else {
      quoteCaretElement.style.opacity = 1;
      caretVisible = true;
    }
  }, CARET_BLINKING_INTERVAL);
}

function initTextTyping(quoteTextContainer, text) {
  let currentLetterIndex = 0;

  const interval = setInterval(() => {
    if (currentLetterIndex === text.length) {
      clearInterval(interval);

      setTimeout(() => {
        quoteTextContainer.innerHTML = "";
        currentLetterIndex = 0;
        initTextTyping(quoteTextContainer, text);
      }, DELAY_BEFORE_TEXT_CLEANUP);

      return;
    }

    quoteTextContainer.innerHTML =
      quoteTextContainer.innerHTML + text[currentLetterIndex];
    currentLetterIndex++;
  }, DELAY_TO_NEXT_LETTER);
}
