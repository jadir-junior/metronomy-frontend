import { render, screen } from '@testing-library/angular'

import { CardComponent } from './card.component'

describe('CardComponent', () => {
  it('should create', async () => {
    await render('<met-card><div>Card</div></met-card>', {
      declarations: [CardComponent],
    })

    expect(screen.getByText(/card/i)).toBeInTheDocument()
  })

  it('should render default with a border shadow', async () => {
    await render(CardComponent)

    const card = screen.getByTestId(/card/i)

    expect(card).toHaveClass('card border-shadow')
  })

  it('should render with a border solid with input "solid"', async () => {
    await render(CardComponent, {
      componentProperties: {
        border: 'solid',
      },
    })

    const card = screen.getByTestId(/card/i)

    expect(card).toHaveClass('card border-solid')
  })

  it('should render with a border dashed with input "dashed"', async () => {
    await render(CardComponent, {
      componentProperties: {
        border: 'dashed',
      },
    })

    const card = screen.getByTestId(/card/i)

    expect(card).toHaveClass('card border-dashed')
  })
})
