import { By } from '@angular/platform-browser'
import { ComponentFixture } from '@angular/core/testing'

export const getNativeElementByCss = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fixture: ComponentFixture<any>,
  prop: string
): HTMLElement => {
  return fixture.debugElement.query(By.css(prop)).nativeElement
}
