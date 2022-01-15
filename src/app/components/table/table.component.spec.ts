import { render, screen } from '@testing-library/angular'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  it('should create a component default', async () => {
    await render(TableComponent)

    expect(screen.getByLabelText(/table/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/table/i)).toHaveClass('table-position-left')
  })

  it('should render a table responsive', async () => {
    await render(TableComponent, {
      componentProperties: {
        responsive: true,
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-responsive')
  })

  it('should render a table with position column center', async () => {
    await render(TableComponent, {
      componentProperties: {
        position: 'center',
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-position-center')
  })

  it('should render a table with position column right', async () => {
    await render(TableComponent, {
      componentProperties: {
        position: 'right',
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-position-right')
  })
})
