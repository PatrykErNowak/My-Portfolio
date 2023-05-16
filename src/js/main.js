const paragraphContainer = document.querySelector('.header__text');

const text = [
  {
    txt: 'Cześć, nazywam się ',
    htmlTag: null,
    htmlClass: null,
  },
  {
    txt: 'Patryk Nowak',
    htmlTag: 'strong',
    htmlClass: null,
  },
  {
    txt: '',
    htmlTag: 'br',
    htmlClass: null,
  },
  {
    txt: 'Projektuję',
    htmlTag: 'span',
    htmlClass: 'design',
  },
  {
    txt: ' i ',
    htmlTag: null,
    htmlClass: null,
  },
  {
    txt: 'tworzę',
    htmlTag: 'span',
    htmlClass: 'develop',
  },
  {
    txt: ' strony internetowe.',
    htmlTag: null,
    htmlClass: null,
  },
];

const typeMsg2 = function (message, paragraphContainer) {
  // Helpers
  const interval = 75;
  let delay = 0;

  const typeText = function (txt, htmlElement) {
    const spreadTxt = [...txt];

    for (let i = 0; i < spreadTxt.length; i++) {
      const typeLetter = () => (htmlElement.innerHTML += spreadTxt[i]);
      setTimeout(typeLetter, delay);
      delay += interval;
    }
  };

  const paragraph = document.createElement('p');
  paragraphContainer.append(paragraph);

  let currentHtml = paragraph;

  message.forEach((object) => {
    const { txt, htmlTag, htmlClass } = object;
    // const html = document.createElement(htmlTag);
    const html = htmlTag ? document.createElement(htmlTag) : currentHtml;
    if (htmlClass) html.classList = htmlClass;

    if (htmlTag) setTimeout(() => currentHtml.append(html), delay);
    typeText(txt, html);
    if (htmlTag === 'p') setTimeout(() => (currentHtml = html), delay);
  });

  setTimeout(() => paragraph.classList.add('anime'), delay);
};
typeMsg2(text, paragraphContainer);
