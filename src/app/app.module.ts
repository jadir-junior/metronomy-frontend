import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { CardModule } from './components/card/card.module'
import { ComponentsModule } from './components.module'
import { InputModule } from './components/input/input.module'
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
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
