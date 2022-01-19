class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="logo-container">
          <div class="logo">
            <a href="/">
              <img src="donwload1.png" alt="Logo" />
              MakanKuy
            </a>
          </div>
          <button class="toggle-button" ><span class="fa fa-bars"></span></button>
        </div>
        <nav class="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li>
              <a
                href="https://github.com/farashaidarp"
                target="_blank"
                >About Us</a
              >
            </li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define('custom-header', Header);
