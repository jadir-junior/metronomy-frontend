import { CommonModule } from '@angular/common'
import { InputComponent } from './input.component'
import { NgModule } from '@angular/core'

const components = [InputComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class InputModule {}
