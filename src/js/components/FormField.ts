import IDomElement from './interfaces/IDomElement';
import Input from './Input';
import IFormField from './interfaces/IFormField';
import Label from './Label';

export class FormField implements IFormField, IDomElement {
  label: Label;
  input: Input;

  constructor(label: Label, input: Input) {
    this.label = label;
    this.input = input;
  }

  render(): string {
    return `
      ${this.label.render()}
      ${this.input.render()}
    `;
  }
}
