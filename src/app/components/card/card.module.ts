import { CardComponent } from './card.component'
import { CardContentComponent } from './card-content.component'
import { CardFooterComponent } from './card-footer.component'
import { CardHeaderComponent } from './card-header.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

const components = [
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardFooterComponent,
]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class CardModule {}
