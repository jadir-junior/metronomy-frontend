import { CommonModule } from '@angular/common'
import { InputComponent } from './input.component'
import { LabelComponent } from './label.component'
import { NgModule } from '@angular/core'

const components = [InputComponent, LabelComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class InputModule {}
