import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InputComponent } from './input.component'
import { getNativeElement } from 'src/app/utils/test-helper/test-helper'

describe('InputComponent', () => {
  let component: InputComponent
  let fixture: ComponentFixture<InputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should create a input with default config', () => {
    fixture.detectChanges()
    const input: HTMLInputElement = getNativeElement(fixture, 'input') as HTMLInputElement

    expect(getComputedStyle(input).backgroundColor).toEqual('rgb(255, 255, 255)')
    expect(getComputedStyle(input).border).toEqual('1px solid rgb(228, 230, 239)')

    // TODO TESTS TO FOCUS
  })
})
