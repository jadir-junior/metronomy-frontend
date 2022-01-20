import { render, screen } from '@testing-library/angular'

import { LabelComponent } from './label.component'

describe('LabelComponent', () => {
  it('should create label', async () => {
    await render('<met-label>First Name</met-label>', {
      declarations: [LabelComponent],
    })

    expect(screen.getByText(/First Name/i)).toBeInTheDocument()
  })
})
