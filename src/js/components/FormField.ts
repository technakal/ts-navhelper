import Input from './Input';

interface IFormField {
  label: string;
  classNames: string;
  input: Input;
}

export class FormField implements IFormField {
  label: string;
  classNames: string;
  input: Input;

  constructor(label: string, classNames: strings, input: Input) {
    this.label = label;
    this.classNames = classNames;
    this.input = input;
  }

  render(): string {
    return `
      <label for="${this.input.id}" class="${this.classNames}">${this.label}</label>
      ${input.render()}
    `;
  }
}