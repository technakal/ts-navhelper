interface IInput {
  id: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onClick();
  onBlur();
  render(): string;
}

export default class Input implements IInput {
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
    return `<input type="text" name="${this.id}" id="${this.id}" placeholder="${this.placeholder}" value="${this.value} onClick="${this.onClick}" disabled=${this.disabled} />`;
  }
}
