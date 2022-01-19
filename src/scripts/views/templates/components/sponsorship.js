class Sponsorship extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     
    `;
  }
}
customElements.define('custom-sponsorship', Sponsorship);
