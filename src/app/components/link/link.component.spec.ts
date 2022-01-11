import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/angular'

import { LinkComponent } from './link.component'

describe('LinkComponent', () => {
  it('should render component', async () => {
    await render('<met-link>Link Content</met-link>', {
      declarations: [LinkComponent],
    })

    expect(screen.getByRole('link', { name: /link content/i })).toBeInTheDocument()
  })

  it('should render link default', async () => {
    await render(LinkComponent)

    const link = screen.getByTestId(/link/i)

    expect(link).toHaveClass('link-small')
  })

  it('should render link with size medium', async () => {
    await render(LinkComponent, {
      componentProperties: {
        size: 'medium',
      },
    })

    const link = screen.getByTestId(/link/i)

    expect(link).toHaveClass('link-medium')
  })
})
