import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from './components/button/button.module'
import { CardModule } from './components/card/card.module'
import { ComponentsModule } from './components.module'
import { LinkModule } from './components/link/link.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CardModule,
    LinkModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
