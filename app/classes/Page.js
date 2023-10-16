import TextReveal from '../animations/TextReveal';
import Button from '../animations/Button';
import ParallaxImage from '../animations/ParallaxImage';
import List from '../animations/List';

export default class Page {
  constructor() {
    this._createTextReveals();
    this._createButtons();
    this._createParallaxImages();
    this._createLists();
  }

  _createTextReveals() {
    const textItems = [
      ...document.querySelectorAll('[data-animation="text-reveal"]'),
    ];

    if (!textItems) return;

    textItems.forEach((text) => {
      new TextReveal({
        element: text,
      });
    });
  }

  _createButtons() {
    const buttons = [...document.querySelectorAll('[data-animation="button"]')];
    if (!buttons) return;

    buttons.forEach((button) => {
      new Button({
        element: button,
      });
    });
  }

  _createParallaxImages() {
    const images = [
      ...document.querySelectorAll('[data-animation="parallax-image"]'),
    ];

    if (!images) return;

    images.forEach((image) => {
      new ParallaxImage({
        imageSection: image,
      });
    });
  }

  _createLists() {
    const lists = [...document.querySelectorAll('.list__item')];

    if (!lists) return;

    lists.forEach((list) => {
      new List({
        element: list,
      });
    });
  }
}
