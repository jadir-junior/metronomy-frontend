import { CommonModule } from '@angular/common'
import { InputComponent } from './input.component'
import { NgModule } from '@angular/core'
import { LabelComponent } from './label.component'

const components = [InputComponent, LabelComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class InputModule {}
