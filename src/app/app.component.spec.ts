import { AppComponent } from './app.component'
import { Component } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'

@Component({
  selector: 'met-link',
  template: '<p>Mock Link</p>',
})
class MockMetLinkComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MockMetLinkComponent],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
