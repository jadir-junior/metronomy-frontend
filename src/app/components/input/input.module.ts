import { CommonModule } from '@angular/common'
import { ErrorComponent } from './error.component'
import { InputComponent } from './input.component'
import { LabelComponent } from './label.component'
import { NgModule } from '@angular/core'

const components = [InputComponent, LabelComponent, ErrorComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class InputModule {}