import { convertColorHexToRgb } from './convert-color'

describe('Convert Color', () => {
  it('should conver color HEX (#eff2f5) to RGB (rgb(239, 242, 245))', () => {
    const result = convertColorHexToRgb('#eff2f5')

    expect(result).toEqual('rgb(239, 242, 245)')
  })

  it('should return rgba(0, 0, 0, 0) if the color is "transparent"', () => {
    const result = convertColorHexToRgb('transparent')

    expect(result).toEqual('rgba(0, 0, 0, 0)')
  })

  it('should return null if a value wrong', () => {
    const result = convertColorHexToRgb('something')

    expect(result).toBe(null)
  })
})
