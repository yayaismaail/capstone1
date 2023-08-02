// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  desktopMenu.classList.remove('active');
}));

// Toggle Button For Mobile

const toggleContents = document.querySelector('.toggle-contents');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  if (toggleContents.style.display === 'none' || toggleContents.style.display === '') {
    toggleContents.style.display = 'block';
    toggleBtn.innerHTML = 'LESS &nbsp; &nbsp;<i class="fa-solid fa-angle-up angle"></i>';
  } else {
    toggleContents.style.display = 'none';
    toggleBtn.innerHTML = 'MORE <i class="fa-solid fa-angle-down angle">';
  }
});

// Mobile Popup

const joinBtn = document.querySelector('.join-btn');
const joinPopup = document.querySelector('.join-popup');

joinBtn.addEventListener('click', () => {
  joinPopup.classList.remove('d-none');
});

// Desktop Popup
const allProject = document.querySelector('.all-project');

allProject.addEventListener('click', () => {
  joinPopup.classList.remove('d-none');
  document.body.style.overflowY = 'hidden';
});

// close popup btns

const closeBtnA = document.querySelector('.close-btnA');
closeBtnA.addEventListener('click', () => {
  joinPopup.classList.add('d-none');
  document.body.style.overflowY = 'auto';
});

const closeBtnB = document.querySelector('.close-btnB');
closeBtnB.addEventListener('click', () => {
  joinPopup.classList.add('d-none');
});