import Label from './components/Label';
import Input from './components/Input';
import { FormField } from './components/FormField';

const field1 = new FormField(
  new Label('First Name', 'fname'),
  new Input('fname', 'Enter your first name', '', false)
).render();

document.querySelector('#app').innerHTML = field1;
