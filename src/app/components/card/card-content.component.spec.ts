import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardContentComponent } from './card-content.component'
import { getNativeElement } from 'src/app/utils/test-helper/test-helper'

describe('CardContentComponent', () => {
  let component: CardContentComponent
  let fixture: ComponentFixture<CardContentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContentComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should render a content without scroll', () => {
    const cardContent: HTMLElement = getNativeElement(fixture, '.card-content')
    fixture.detectChanges()

    expect(cardContent.style.height).toEqual('auto')
  })

  it('should render a content scroll with default 200px', () => {
    component.scroll = true
    fixture.detectChanges()
    const cardContent: HTMLElement = getNativeElement(fixture, '.card-content')

    expect(cardContent.style.height).toEqual('200px')
  })

  it('should render a content scroll and contentScrollHeight with 100px', () => {
    component.scroll = true
    component.contentScrollHeight = '100px'
    fixture.detectChanges()
    const cardContent: HTMLElement = getNativeElement(fixture, '.card-content')

    expect(cardContent.style.height).toEqual('100px')
  })

  it('should render a content a scroll without scroll and with contentScrollHeight 100px, when scroll is false, so height is auto', () => {
    component.contentScrollHeight = '100px'
    fixture.detectChanges()
    const cardContent: HTMLElement = getNativeElement(fixture, '.card-content')

    expect(cardContent.style.height).toEqual('auto')
  })
})
