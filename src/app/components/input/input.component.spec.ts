import { render, screen } from '@testing-library/angular'

import { InputComponent } from './input.component'

describe('InputComponent', () => {
  it('should create input', async () => {
    await render(InputComponent, {
      componentProperties: {
        placeholder: 'email@example.com',
      },
    })

    expect(screen.getByPlaceholderText('email@example.com')).toBeInTheDocument()
  })

  it('should create a input with default config', async () => {
    await render(InputComponent, {
      componentProperties: {
        placeholder: 'email@example.com',
      },
    })

    expect(screen.getByPlaceholderText('email@example.com').parentNode).toHaveClass(
      'form-control-default'
    )
  })

  it('should create a input with color solid', async () => {
    await render(InputComponent, {
      componentProperties: {
        placeholder: 'email@example.com',
        color: 'solid',
      },
    })

    expect(screen.getByPlaceholderText('email@example.com').parentNode).toHaveClass(
      'form-control-solid'
    )
  })

  it('should create a input with color transparent', async () => {
    await render(InputComponent, {
      componentProperties: {
        placeholder: 'email@example.com',
        color: 'transparent',
      },
    })

    expect(screen.getByPlaceholderText('email@example.com').parentNode).toHaveClass(
      'form-control-transparent'
    )
  })

  it('should create a input with flush prop', async () => {
    await render(InputComponent, {
      componentProperties: {
        placeholder: 'email@example.com',
        flush: true,
      },
    })

    expect(screen.getByPlaceholderText('email@example.com').parentNode).toHaveClass(
      'form-control-flush'
    )
  })
})
