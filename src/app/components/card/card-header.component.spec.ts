import { render, screen } from '@testing-library/angular'

import { CardHeaderComponent } from './card-header.component'

describe('CardHeaderComponent', () => {
  it('should create card header component', async () => {
    await render('<met-card-header>Title</met-card-header>', {
      declarations: [CardHeaderComponent],
    })

    const header = screen.getByText(/title/i)

    expect(header).toBeInTheDocument()
  })
})
