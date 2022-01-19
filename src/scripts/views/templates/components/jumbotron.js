class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="backgrounds" >
       
          <div class= "background">
          <h2>Katalog Restaurant</h2>
        <h2>Selamat datang dan silahkan dilihat</h2>
        <a href="#" class="btn signup"><span class="fa fa-google"></span>Email</a>
        <p class="atau">atau</p>
        <a href="#" class="btn facebook"><span class="fa fa-facebook"></span> Facebook</a>
        <a href="#" class="btn twitter"><span class="fa fa-twitter"></span> Twitter</a>
        </div>
        
     
      </section>
    `;
  }
}
customElements.define('custom-jumbotron', Jumbotron);
