import { By } from '@angular/platform-browser'
import { ComponentFixture } from '@angular/core/testing'

export const getNativeElement = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fixture: ComponentFixture<any>,
  prop: string
): HTMLElement | HTMLLinkElement | HTMLAnchorElement => {
  return fixture.debugElement.query(By.css(prop)).nativeElement
}
