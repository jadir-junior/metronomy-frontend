import { render, screen } from '@testing-library/angular'

import { ErrorComponent } from './error.component'

describe('ErrorComponent', () => {
  it('should create error component', async () => {
    await render('<met-error>Error</met-error>', {
      declarations: [ErrorComponent],
    })

    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
