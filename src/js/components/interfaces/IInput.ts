export default interface IInput {
  id: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onClick();
  onBlur();
}
