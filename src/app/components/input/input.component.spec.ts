import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InputComponent } from './input.component'
import { convertColorHexToRgb } from 'src/app/utils/convert-color/convert-color'
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

    expect(getComputedStyle(input).backgroundColor).toEqual(
      `${convertColorHexToRgb('#ffffff')}`
    )
    expect(getComputedStyle(input).border).toEqual(
      `1px solid ${convertColorHexToRgb('#e4e6ef')}`
    )

    // TODO TESTS TO FOCUS
  })

  it('should create a input with color solid', () => {
    component.color = 'solid'
    fixture.detectChanges()
    const input: HTMLInputElement = getNativeElement(fixture, 'input') as HTMLInputElement

    expect(getComputedStyle(input).backgroundColor).toEqual(
      `${convertColorHexToRgb('#f5f8fa')}`
    )
    expect(getComputedStyle(input).borderColor).toEqual(
      `${convertColorHexToRgb('#f5f8fa')}`
    )
    expect(getComputedStyle(input).color).toEqual(`${convertColorHexToRgb('#5e6278')}`)
  })

  it('should create a input with color transparent', () => {
    component.color = 'transparent'
    fixture.detectChanges()
    const input: HTMLInputElement = getNativeElement(fixture, 'input') as HTMLInputElement

    expect(getComputedStyle(input).backgroundColor).toEqual(
      `${convertColorHexToRgb('transparent')}`
    )
    expect(getComputedStyle(input).borderColor).toEqual(
      `${convertColorHexToRgb('transparent')}`
    )
  })

  it('should create a input with flush prop', () => {
    component.flush = true
    fixture.detectChanges()
    const input: HTMLInputElement = getNativeElement(fixture, 'input') as HTMLInputElement

    expect(getComputedStyle(input).backgroundColor).toEqual(
      `${convertColorHexToRgb('transparent')}`
    )
    expect(getComputedStyle(input).borderColor).toEqual(
      `${convertColorHexToRgb('transparent')}`
    )
  })
})
