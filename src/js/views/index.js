console.log('Halo Dunia');

// initializing nav drawer
const drawerButton = document.querySelector('#drawer-button');
const drawerIcon = document.querySelector('#drawer-icon');
const navMenu = document.querySelector('#nav-menu');

let isDrawerOpen = false;
const TRANSITION_LENGTH = 500;

const animateRotationDrawerButton = () => {
  isDrawerOpen = !isDrawerOpen;
  drawerIcon.classList.toggle('animate-drawer-icon');
  setTimeout(() => {
    if (isDrawerOpen) {
      drawerIcon.innerText = 'close';
    } else {
      drawerIcon.innerText = 'menu';
    }
  }, TRANSITION_LENGTH / 2);
};

const toggleNavMenu = () => {
  navMenu.classList.toggle('show-nav-menu');
  animateRotationDrawerButton();
};

drawerButton.addEventListener('click', toggleNavMenu);
