class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="donwload">
    <h2 >MakanKuy ON YOUR DEVICE</h2>
    <div class="donwload-container">
    <a>
      <img class="apple"
        src="icons/as.png"
        alt="Logo apple appstore"
      />
    </a>
    <a>
      <img class="apple1"
        src="icons/gp.png"
        alt="Logo google paly store"
      />
    </a>
    <a>
      <img class="apple2"
      src="icons/microsoft.png"
      alt="Logo microsoft store"
      />
    </a>
    <a>
      <img class="apple3"
      src="icons/amazonaps.png"
      alt="Logo amazon apps"
      />
    </a>
   
     
  
    </div>
  </section>
  <section>
  <div class="menu-footer">
      <ul>
      <li>Blog</li>
      <li>Help</li>
      <li>Term</li>
      <li>Team</li>
      </ul>
      </div>
  </section>
  <div class="line"> </div>
      <footer >
      <div>
        <p>Copyright © 2020 - MakanKuy</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', Footer);
