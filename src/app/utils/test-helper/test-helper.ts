import { By } from '@angular/platform-browser'
import { ComponentFixture } from '@angular/core/testing'

export const getNativeElementByCss = (
  fixture: ComponentFixture<any>,
  prop: string
): HTMLElement => {
  return fixture.debugElement.query(By.css(prop)).nativeElement
}
