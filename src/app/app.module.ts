import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { CardModule } from './components/card/card.module'
import { ComponentsModule } from './components.module'
import { LinkModule } from './components/link/link.module'
import { NgModule } from '@angular/core'
import { TableModule } from './components/table/table.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CardModule,
    LinkModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
