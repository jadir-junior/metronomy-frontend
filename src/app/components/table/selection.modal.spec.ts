import { SelectionModel } from './selection.model'

interface IEmployee {
  id: string
  name: string
  position: string
}

const data: IEmployee[] = [
  { id: '1', name: 'Jadir Junior', position: 'CTO' },
  { id: '2', name: 'Maria Alice', position: 'CFO' },
  { id: '3', name: 'Enzo', position: 'Developer Back End' },
]

describe('selection table', () => {
  it('should select one item', async () => {
    const selection = new SelectionModel<IEmployee>(true, [])

    selection.setData(data)
    selection.toggle(data[0])

    expect(selection.selected).toEqual([data[0]])
    // expect(selection.isSelected(data[0])).toEqual(data[0])
  })
})
