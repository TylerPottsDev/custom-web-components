

class xComponent extends HTMLElement {
  constructor () {
    super();
    this.content = this.innerHTML;
    if (!this.content) {
      this.content = "I am default";
    }
    this.colors = this.getAttribute('colors').split(',').map(color => color.trim());
    this.style.fontSize = this.getAttribute('size') + "px";

    this.addEventListener("click", this.changeColor);
  }

  changeColor () {
    let color = this.colors[this.random()];
    this.style.color = color;
    this.setAttribute('color', color);
  }

  random () {
    return Math.floor(Math.random() * this.colors.length);
  }

  connectedCallback () {
    this.innerHTML = `
      <div>
        ${this.content}
      </div>
    `;
  }
}

customElements.define('x-component', xComponent);