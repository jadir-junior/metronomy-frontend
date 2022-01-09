import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LinkComponent } from './link.component'
import { getNativeElement } from 'src/app/utils/test-helper/test-helper'

describe('LinkComponent', () => {
  let component: LinkComponent
  let fixture: ComponentFixture<LinkComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should render link default', () => {
    fixture.detectChanges()

    const link: HTMLAnchorElement = getNativeElement(fixture, 'a') as HTMLAnchorElement

    expect(getComputedStyle(link).fontWeight).toEqual('500')
    expect(getComputedStyle(link).fontSize).toBe('17.2px')
  })

  it('should render a link with as medium size', () => {
    component.size = 'medium'
    fixture.detectChanges()
    const link: HTMLAnchorElement = getNativeElement(fixture, 'a') as HTMLAnchorElement

    expect(getComputedStyle(link).fontSize).toBe('19.2px')
  })
})
