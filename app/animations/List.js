import Observer from '../classes/Observer';

export default class List extends Observer {
  constructor({ element }) {
    super({ element });
    this.element = element;
  }

  onEnter() {
    this.element.classList.add('in-view');
  }
}
