import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'
import { getNativeElementByCss } from 'src/app/utils/test-helper/test-helper'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should render a border default with shadow', () => {
    fixture.detectChanges()
    const card: HTMLElement = getNativeElementByCss(fixture, '.card')

    expect(getComputedStyle(card).boxShadow).toEqual(
      'rgba(0, 0, 0, 0.05) 0px 1.6px 16px 4px'
    )
  })

  it('should render a border solid with input border "solid"', () => {
    component.border = 'solid'
    fixture.detectChanges()
    const card: HTMLElement = getNativeElementByCss(fixture, '.card')

    expect(getComputedStyle(card).border).toEqual(`1px solid rgb(239, 242, 245)`)
  })

  it('should render a border with dashed with input border "dashed"', () => {
    component.border = 'dashed'
    fixture.detectChanges()
    const card: HTMLElement = getNativeElementByCss(fixture, '.card')
    expect(getComputedStyle(card).border).toEqual('1px dashed rgb(239, 242, 245)')
  })
})
