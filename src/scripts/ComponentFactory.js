import Header from './components/Header';
import Carousel from './components/Carousel';
import Scrolly from './components/Scrolly';
import Youtube from './components/Youtube';
import Form from './components/Form';
import Accordion from './components/Accordion';

export default class ComponentFactory {
  constructor(element) {
    this.element = element;
    this.componentList = {
      Header,
      Carousel,
      Scrolly,
      Youtube,
      Form,
      Accordion,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      new this.componentList[componentName](element);
    }
  }
}
