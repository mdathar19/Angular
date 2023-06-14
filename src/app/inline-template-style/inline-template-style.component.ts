import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template-style',
  template: `
    <h2>
      inline-template-style works!
</h2>
  `,
  styles: [
    `h2{color:yellow}`
  ]
})
export class InlineTemplateStyleComponent {

}
