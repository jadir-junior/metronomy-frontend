import { render, screen } from '@testing-library/angular'

import { FormFieldComponent } from './form-field.component'

describe('FormFieldComponent', () => {
  it('should create form field appearance default', async () => {
    await render(
      '<met-form-field><input placeholder="email@email.com" /></met-form-field>',
      {
        declarations: [FormFieldComponent],
      }
    )

    expect(screen.getByPlaceholderText('email@email.com').parentNode).toBeInTheDocument()
    expect(screen.getByPlaceholderText('email@email.com').parentNode).toHaveClass(
      'default'
    )
  })

  it('should create form field appearance solid', async () => {
    await render(
      '<met-form-field appearance="solid"><input placeholder="email@email.com" /></met-form-field>',
      {
        declarations: [FormFieldComponent],
      }
    )

    expect(screen.getByPlaceholderText('email@email.com').parentNode).toBeInTheDocument()
    expect(screen.getByPlaceholderText('email@email.com').parentNode).toHaveClass('solid')
  })

  it('should create form field appearance transparent', async () => {
    await render(
      '<met-form-field appearance="transparent"><input placeholder="email@email.com" /></met-form-field>',
      {
        declarations: [FormFieldComponent],
      }
    )

    expect(screen.getByPlaceholderText('email@email.com').parentNode).toBeInTheDocument()
    expect(screen.getByPlaceholderText('email@email.com').parentNode).toHaveClass(
      'transparent'
    )
  })
})
