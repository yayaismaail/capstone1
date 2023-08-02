let html = '';

const progArr = [
  {
    id: 0,
    icon: 'images/sewing-machine.jpeg',
    title: 'sewing machine',
    desc: 'this is a machine used to sew fabrics and materils together with thread',
  },
  {
    id: 1,
    icon: 'images/thread.jpeg',
    title: 'silk thread',
    desc: 'this is a very fine thread and is gret to use when sewing natural fibres such s silk or wool ',
  },
  {
    id: 2,
    icon: 'images/scissors.jpeg',
    title: 'scissors',
    desc: 'this is used for cutting heavy materials like leather or multiple layers of fabrics with ease',
  },
  {
    id: 3,
    icon: 'images/tape.jpeg',
    title: 'sewing tape measure',
    desc: 'this is an ultra flexible tool that can mold easily to the body and is used for accurate measurement',
  },
  {
    id: 4,
    icon: 'images/bobbin case.jpeg',
    title: 'bobbin case',
    desc: 'this is the part of the machine that holds a bobbin when sewing',
  },
];

progArr.forEach((e) => {
  html += `<li class="items">
    <img src="${e.icon}" alt="">
    <p class="item-name">${e.title}</p>
    <p class="item-desc">${e.desc}</p>
</li>`;
});

const programList = document.querySelector('.program-list');
programList.innerHTML = html;