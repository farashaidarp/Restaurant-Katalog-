class ErrorPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error">
       <img src="../error.jpg">
      </div>
    `;
  }
}
customElements.define('error-page', ErrorPage);
