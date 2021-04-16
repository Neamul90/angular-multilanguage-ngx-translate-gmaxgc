import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! My name is neamuls</h1>`
})
export class HelloComponent  {
  @Input() name: string;
}
