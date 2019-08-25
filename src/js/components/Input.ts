import IDomElement from './interfaces/IDomElement';
import IInput from './interfaces/IInput';

export default class Input implements IInput, IDomElement {
  id: string;
  placeholder: string;
  value: string;
  disabled: boolean;

  constructor(
    id: string,
    placeholder: string,
    value: string,
    disabled: boolean
  ) {
    this.id = id;
    this.placeholder = placeholder;
    this.value = value;
    this.disabled = disabled;
  }

  onClick(): void {}

  onBlur(): void {}

  render(): string {
    return `
      <input type="text" name="${this.id}" id="${this.id}" placeholder="${this.placeholder}" value="${this.value} onclick="${this.onClick}" disabled=${this.disabled} />
    `;
  }
}
