/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
document.addEventListener('DOMContentLoaded', initCounter);
function initCounter() {
  const txtElements = document.querySelectorAll('.wp-block-create-block-counter-up-block');
  txtElements.forEach(txtElement => {
    new Counter(txtElement);
  });
}
class Counter {
  constructor(txtElement) {
    this.txtElement = txtElement;
    this.counter = txtElement.querySelector('.counter');
    this.targetnumber = parseInt(this.counter.getAttribute('data-target'));
    this.speed = parseInt(this.counter.getAttribute('data-speed'));
    this.comma = this.counter.getAttribute('data-comma');
    this.update_ms = 10;
    this.increment = this.targetnumber / this.speed * this.update_ms;
    this.counter.innerText = '0', this.number = +this.counter.innerText;
    this.timer;
    this.events();
  }
  events() {
    window.addEventListener('load', () => this.run()); // or checkBoxes()
    window.addEventListener('resize', () => this.run());
    window.addEventListener('scroll', () => this.run());
  }
  run() {
    if (this.isInViewport(this.txtElement)) {
      if (!this.txtElement.classList.contains('show')) {
        this.txtElement.classList.add('show');
        this.timer = setInterval(() => this.updateCounter(), this.update_ms);
      }
    }
  }
  isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  updateCounter() {
    if (this.number < this.targetnumber) {
      this.counter.innerText = Math.ceil(this.number);
    } else {
      clearInterval(this.timer);
      this.counter.innerText = this.comma == 'yesComma' ? this.targetnumber.toLocaleString('en-US') : this.targetnumber;
    }
    this.number = this.number + this.increment;
  }
}
/******/ })()
;
//# sourceMappingURL=frontend.js.map