import { render, screen } from '@testing-library/angular'

import { CardContentComponent } from './card-content.component'

describe('CardContentComponent', () => {
  it('should create card content component', async () => {
    await render('<met-card-content>Card content</met-card-content>', {
      declarations: [CardContentComponent],
    })

    expect(screen.getByText(/card content/i)).toBeInTheDocument()
  })

  it('should render a content without scroll', async () => {
    await render(CardContentComponent)

    const content = screen.getByLabelText(/card content/i)

    expect(content).toHaveStyle({ height: 'auto' })
  })

  it('should render a content scroll with default 200px', async () => {
    await render(CardContentComponent, {
      componentProperties: {
        scroll: true,
      },
    })

    const content = screen.getByLabelText(/card content/i)

    expect(content).toHaveStyle({ height: '200px' })
  })

  it('should render a content scroll and contentScrollHeight with 100px', async () => {
    await render(CardContentComponent, {
      componentProperties: {
        scroll: true,
        contentScrollHeight: '100px',
      },
    })

    const content = screen.getByLabelText(/card content/i)

    expect(content).toHaveStyle({ height: '100px' })
  })

  it('should render a content scroll without scroll and with contentScrollHeight 100px, when scroll is false, so height is auto', async () => {
    await render(CardContentComponent, {
      componentProperties: {
        contentScrollHeight: '100px',
      },
    })

    const content = screen.getByLabelText(/card content/i)

    expect(content).toHaveStyle({ height: 'auto' })
  })
})
