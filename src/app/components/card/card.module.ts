import { CardComponent } from './card.component'
import { CardContentComponent } from './card-content.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

const components = [CardComponent, CardContentComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class CardModule {}
