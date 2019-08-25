import IDomElement from './interfaces/IDomElement';
import ILabel from './interfaces/ILabel';

export default class Label implements ILabel, IDomElement {
  description: string;
  id: string;
  classes: string;

  constructor(label: string, id: string, classes?: string) {
    this.description = label;
    this.id = id;
    if (classes) {
      this.classes = classes;
    }
  }

  render(): string {
    return `<label for=${this.id} class=${this.classes}>${this.description}</label>`;
  }
}
