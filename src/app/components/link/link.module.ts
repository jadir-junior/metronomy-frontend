import { CommonModule } from '@angular/common'
import { LinkComponent } from './link.component'
import { NgModule } from '@angular/core'

const components = [LinkComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class LinkModule {}
