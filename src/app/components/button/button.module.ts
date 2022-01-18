import { ButtonComponent } from './button.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

const components = [ButtonComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ButtonModule {}
