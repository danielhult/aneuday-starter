export default class Observer {
  constructor({ element }) {
    this.element = element;
    this._createObserver();
  }

  _createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: 1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.onEnter();
        } else {
          this.onLeave();
        }
      });
    }, options);

    this.observer.observe(this.element);
  }

  onEnter() {}
  onLeave() {}
}
