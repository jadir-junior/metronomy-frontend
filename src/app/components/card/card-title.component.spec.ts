import { render, screen } from '@testing-library/angular'

import { CardTitleComponent } from './card-title.component'

describe('CardTitleComponent', () => {
  it('should create a title', async () => {
    await render('<met-card-title>Title</met-card-title>', {
      declarations: [CardTitleComponent],
    })

    const title = screen.getByText(/title/i)

    expect(title).toBeInTheDocument()
  })
})
