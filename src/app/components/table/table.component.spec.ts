import { render, screen } from '@testing-library/angular'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  it('should create a component default', async () => {
    await render(TableComponent)

    expect(screen.getByLabelText(/table/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/table/i)).toHaveClass('table-text-align-left')
  })

  it('should render a table responsive', async () => {
    await render(TableComponent, {
      componentProperties: {
        responsive: true,
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-responsive')
  })

  it('should render a table with text align column center', async () => {
    await render(TableComponent, {
      componentProperties: {
        textAlign: 'center',
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-text-align-center')
  })

  it('should render a table with text align column right', async () => {
    await render(TableComponent, {
      componentProperties: {
        textAlign: 'right',
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-text-align-right')
  })

  it('should render a table with row border solid', async () => {
    await render(TableComponent, {
      componentProperties: {
        rowBorder: 'solid',
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-row-border-solid')
  })

  it('should render a table with row border dashed', async () => {
    await render(TableComponent, {
      componentProperties: {
        rowBorder: 'dashed',
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-row-border-dashed')
  })

  it('should render a table striped', async () => {
    await render(TableComponent, {
      componentProperties: {
        striped: true,
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-striped')
  })

  it('should render a table border', async () => {
    await render(TableComponent, {
      componentProperties: {
        tableBorder: true,
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-border')
  })

  it('should render a table rounded', async () => {
    await render(TableComponent, {
      componentProperties: {
        tableRounded: true,
      },
    })

    expect(screen.getByLabelText(/table/i)).toHaveClass('table-rounded')
  })
})
