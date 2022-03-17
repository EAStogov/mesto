class Section {
  constructor({ items, renderer }, selector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(selector);
  }
  rendererItems() {
    this.items.forEach(item => {
      this.renderer(item);
    });
  };
  addItem(item) {
    this.container.append(item);
  }
}