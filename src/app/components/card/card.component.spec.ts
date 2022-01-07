import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { By } from '@angular/platform-browser'
import { CardComponent } from './card.component'

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
    const card: DebugElement = fixture.debugElement.query(By.css('.card'))
    const cardNative: HTMLElement = card.nativeElement

    expect(getComputedStyle(cardNative).boxShadow).toEqual(
      'rgba(0, 0, 0, 0.05) 0px 1.6px 16px 4px'
    )
  })

  it('should render a border solid with input border "solid"', () => {
    component.border = 'solid'
    fixture.detectChanges()
    const card: HTMLElement = fixture.debugElement.query(By.css('.card')).nativeElement

    expect(getComputedStyle(card).border).toEqual('1px solid #eff2f5')
  })
})
