import { render, screen } from '@testing-library/angular'

import { CardFooterComponent } from './card-footer.component'

describe('CardFooterComponent', () => {
  it('should create card footer component', async () => {
    await render('<met-card-footer>Footer</met-card-footer>', {
      declarations: [CardFooterComponent],
    })

    const footer = screen.getByText(/footer/i)

    expect(footer).toBeInTheDocument()
  })
})
