class NavDrawer extends HTMLElement {
  constructor() {
    super();
    this._contentId = this.getAttribute('content');
    this._shadowDOM = this.attachShadow({ mode: 'open' });
    this.preRender();
    this.render();
    this.initializeDrawer();
  }

  preRender() {
    this._style = `
    <style>
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v118/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
      }
      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
      }
      .drawer-button {
        display: none;
        background: none;
        margin: none;
        padding: none;
        height: 44px;
        width: 44px;
        text-align: right;
        border: none;
        flex-grow: 1;
        color: white;
      }
      .drawer-button span {
        font-size: 35px;
      }
      .nav {
        background-color: blue;
        color: white;
        height: 64px;
        display: flex;
        flex-direction: row;
        padding: 0 40px;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      .logo {
        display: inline;
        margin: 0;
        padding: auto 0;
        text-transform: uppercase;
      }
      .logo a {
        color: white;
        text-decoration: none;
      }
      .nav-menu-container {
        display: inline-block;
        flex-grow: 1;
        text-align: end;
      }
      .nav-menu {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        padding: 0;
      }
      .nav-menu li {
        display: inline;
        list-style-type: none;
        height: auto;
        margin: 0 10px;
      }
      .nav-menu li a,
      .nav-menu-login a {
        color: white;
        display: inline-flex;
        align-items: center;
        min-height: 44px;
        min-width: 44px;
        text-decoration: none;
      }
      .nav-menu li a:hover,
      .nav-menu-login a:hover {
        color: rgba(255, 255, 255, 0.801);
      }
      .nav-menu-login {
        display: inline-block;
        margin-left: 10px;
        padding-left: 10px;
        border-left: 2px solid white;
      }
      @media screen and (max-width: 524px) {
        .drawer-button {
          display: inline-block;
          transition: 0.5s;
        }
        .drawer-icon {
          transform: rotate(0deg);
          transition: 0.5s;
        }
        .animate-drawer-icon {
          transform: rotate(180deg);
          transition: 0.5s;
        }
        .nav {
          padding: 0 20px;
        }
        .nav-menu-container {
          background: blue;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding-top: 64px;
          text-align: left;
          z-index: -99;
          transform: translateY(-101%);
          transition: 0.5s;
          opacity: 0;
        }
        .show-nav-menu {
          opacity: 1;
          transform: translateY(0);
          transition: 0.5s;
        }
        .nav-menu,
        .nav-menu-login,
        .nav-menu-container {
          display: block;
        }
        .nav-menu-login {
          border-left: none;
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          margin: 0;
          padding: 0;
          text-align: center;
        }
        .nav-menu li {
          display: block;
          margin: 0;
        }
        .nav-menu li a,
        .nav-menu-login a {
          width: 100%;
          justify-content: center;
        }
      }
    </style>
    `;
  }

  render() {
    this._shadowDOM.innerHTML = `
      ${this._style}
      <div class="nav">
        <h1 class="logo"><a href="#">Logo</a></h1>
        <span id="nav-menu" class="nav-menu-container">
          <ul class="nav-menu">
            ${this.innerHTML}
          </ul>
          <span class="nav-menu-login"><a href="#">Login</a></span>
        </span>
        <button id="drawer-button" class="drawer-button">
          <span id="drawer-icon" class="drawer-icon material-icons">
            menu
          </span>
        </button>

      </div>
    `;
    this.innerHTML = '';
  }

  // eslint-disable-next-line class-methods-use-this
  initializeDrawer() {
    const { _shadowDOM } = this;
    const drawerButton = _shadowDOM.querySelector('#drawer-button');
    const drawerIcon = _shadowDOM.querySelector('#drawer-icon');
    const navMenu = _shadowDOM.querySelector('#nav-menu');
    const content = document.querySelector(`#${this._contentId}`);
    content.style.marginTop = '64px';

    let isDrawerOpen = false;
    const TRANSITION_LENGTH = 500;

    const animateRotationDrawerButton = () => {
      isDrawerOpen = !isDrawerOpen;
      drawerIcon.classList.toggle('animate-drawer-icon');

      setTimeout(() => {
        if (isDrawerOpen) {
          drawerIcon.innerText = 'close';
          content.style.marginTop = `${navMenu.clientHeight}px`;
        } else {
          drawerIcon.innerText = 'menu';
          content.style.marginTop = '64px';
        }
      }, TRANSITION_LENGTH / 2);
    };

    const toggleNavMenu = () => {
      navMenu.classList.toggle('show-nav-menu');
      animateRotationDrawerButton();
    };

    const closeNavMenu = () => {
      if (isDrawerOpen) {
        navMenu.classList.remove('show-nav-menu');
        animateRotationDrawerButton();
      }
    };

    drawerButton.addEventListener('click', toggleNavMenu);
    content.addEventListener('click', closeNavMenu);
    navMenu.addEventListener('click', closeNavMenu);
  }
}

customElements.define('nav-drawer', NavDrawer);
