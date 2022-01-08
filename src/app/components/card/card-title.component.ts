import { Component } from '@angular/core'

@Component({
  selector: 'app-card-title',
  template: ` <h3><ng-content></ng-content></h3> `,
  styles: [],
})
export class CardTitleComponent {}
