const speakersArr = [
  {
    id: 0,
    img: 'images/my-picture.jpg',
    alt: 'yayaismail',
    speakerName: 'yayaismail',
    speakerStatus: 'Agronomist, Breeder, Designer and Software Developer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 1,
    img: 'images/sis juwairiyya.jpg',
    alt: 'Juwairiyya',
    speakerName: 'Mrs. Juwairiyya',
    speakerStatus: 'Seamstress and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
];

let speakers1 = '';

speakersArr.forEach((speaker) => {
  speakers1 += `<li class="speakers">
  <div class="img-card">
      <img src="${speaker.img}" alt="${speaker.alt}">
  </div>
  <div class="img-desc">
      <h3 class="speaker-name">${speaker.speakerName}</h3>
      <p class="speaker-status">${speaker.speakerStatus}</p>
      <div class="h-r3"></div>
      <p class="speaker-info">${speaker.speakerInfo}</p>
  </div>
  </li>`;
});

const speakers = document.querySelector('.speakers-list');
speakers.innerHTML = speakers1;

const speakersArr2 = [
  {
    id: 0,
    img: 'images/A M Yahaya.jpg',
    alt: 'Prof. Yahaya',
    speakerName: 'Prof. A.M Yahaya',
    speakerStatus: 'Field Agronomist, Seamster and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 1,
    img: 'images/Engr. Lere.jpg',
    alt: 'Lere',
    speakerName: 'Engr. Lere',
    speakerStatus: 'Electrical Engineer, Seamster and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
];

let speakers12 = '';

speakersArr2.forEach((speaker2) => {
  speakers12 += `<li class="speakers">
  <div class="img-card">
      <img src="${speaker2.img}" alt="${speaker2.alt}">
  </div>
  <div class="img-desc">
      <h3 class="speaker-name">${speaker2.speakerName}</h3>
      <p class="speaker-status">${speaker2.speakerStatus}</p>
      <div class="h-r3"></div>
      <p class="speaker-info">${speaker2.speakerInfo}</p>
  </div>
  </li>`;
});

const speakers2 = document.querySelector('.speakers-list2');
speakers2.innerHTML = speakers12;

const speakersArr3 = [
  {
    id: 0,
    img: 'images/sis maimoonah.jpg',
    alt: 'Hassana',
    speakerName: 'Mrs. Maimuonah',
    speakerStatus: 'Seamstress and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 1,
    img: 'images/my-niece.jpg',
    alt: 'Haajar',
    speakerName: 'Mrs. Sameer',
    speakerStatus: 'Seamstress and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
];

let speakers13 = '';

speakersArr3.forEach((speaker3) => {
  speakers13 += `<li class="speakers">
  <div class="img-card">
      <img src="${speaker3.img}" alt="${speaker3.alt}">
  </div>
  <div class="img-desc">
      <h3 class="speaker-name">${speaker3.speakerName}</h3>
      <p class="speaker-status">${speaker3.speakerStatus}</p>
      <div class="h-r3"></div>
      <p class="speaker-info">${speaker3.speakerInfo}</p>
  </div>
  </li>`;
});

const speakers3 = document.querySelector('.speakers-list3');
speakers3.innerHTML = speakers13;