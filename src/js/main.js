const para1 = document.querySelector('.header__text');

const typeMsg = function () {
  const txt1 = 'Cześć, nazywam się ';
  const txt2 = 'Patryk Nowak';
  const p = document.createElement('p');

  para1.append(p);

  const interval = 75;
  let delay = 0;

  for (let i = 0; i < [...txt1].length; i++) {
    const typeLetter = () => (p.textContent += [...txt1][i]);
    setTimeout(typeLetter, delay);
    delay += interval;
  }

  const strong = document.createElement('strong');
  setTimeout(() => p.append(strong), delay);

  for (let i = 0; i < [...txt2].length; i++) {
    const typeLetter = () => (strong.textContent += [...txt2][i]);
    setTimeout(typeLetter, delay);
    delay += interval;
  }

  const txt3 = 'Projektuję';
  const txt4 = ' i ';
  const txt5 = 'tworzę';
  const txt6 = ' strony internetowe.';

  const br = document.createElement('br');
  const design = document.createElement('span');
  const develop = document.createElement('span');
  design.classList.add('design');
  develop.classList.add('develop');

  setTimeout(() => p.append(br), delay);
  setTimeout(() => p.append(design), delay);

  for (let i = 0; i < [...txt3].length; i++) {
    const typeLetter = () => (design.textContent += [...txt3][i]);
    setTimeout(typeLetter, delay);
    delay += interval;
  }

  for (let i = 0; i < [...txt4].length; i++) {
    const typeLetter = () => (p.innerHTML += [...txt4][i]);
    setTimeout(typeLetter, delay);
    delay += interval;
  }

  setTimeout(() => p.append(develop), delay);

  for (let i = 0; i < [...txt5].length; i++) {
    const typeLetter = () => (develop.innerHTML += [...txt5][i]);
    setTimeout(typeLetter, delay);
    delay += interval;
  }

  for (let i = 0; i < [...txt6].length; i++) {
    const typeLetter = () => (p.innerHTML += [...txt6][i]);
    setTimeout(typeLetter, delay);
    delay += interval;
  }

  setTimeout(() => p.classList.add('anime'), delay);
};
typeMsg();
