import { render, screen } from '@testing-library/angular'

import { ButtonComponent } from './button.component'

describe('ButtonComponent', () => {
  it('should create button', async () => {
    await render('<met-button>Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument()
  })

  it('should render a button white', async () => {
    await render('<met-button color="white">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-white')
  })

  it('should render a button primary', async () => {
    await render('<met-button color="primary">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-primary')
  })

  it('should render a button light', async () => {
    await render('<met-button color="light">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-light')
  })

  it('should render a button secondary', async () => {
    await render('<met-button color="secondary">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-secondary')
  })

  it('should render a button success', async () => {
    await render('<met-button color="success">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-success')
  })

  it('should render a button info', async () => {
    await render('<met-button color="info">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-info')
  })

  it('should render a button warning', async () => {
    await render('<met-button color="warning">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-warning')
  })

  it('should render a button danger', async () => {
    await render('<met-button color="danger">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-danger')
  })

  it('should render a button dark', async () => {
    await render('<met-button color="dark">Button</met-button>', {
      declarations: [ButtonComponent],
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass('btn-dark')
  })
})
