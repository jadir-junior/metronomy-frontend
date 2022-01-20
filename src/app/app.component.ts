import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showPassword = false

  toggleVisibility() {
    this.showPassword = !this.showPassword
  }
}
