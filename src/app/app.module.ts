import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { CardModule } from './components/card/card.module'
import { ComponentsModule } from './components.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
