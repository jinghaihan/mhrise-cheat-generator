class HexUtils {
  static DEC_TO_BIN_TAIL(dec: number, pad: number): string {
    let bin = ''
    let i
    for (i = 0; i < pad; i++) {
      dec *= 2
      if (dec >= 1) {
        dec -= 1
        bin += '1'
      }
      else {
        bin += '0'
      }
    }
    return bin
  }

  static DEC_TO_BIN_HEAD(dec: number, pad: number): string {
    let bin = ''
    let i
    for (i = 0; i < pad; i++) {
      bin = Number.parseInt((dec % 2).toString()).toString() + bin
      dec /= 2
    }
    return bin
  }
}

export function genDoubleTime(hour: number): string {
  const second = hour * 60 * 60
  const string = getDoubleHex(second)

  return (`${string.slice(0, 8)} ${string.slice(8)}`).toUpperCase()
}

export function getDoubleHex(number: number): string {
  let signString: string, exponent: number
  const decString = number.toString()
  let decValue = Math.abs(Number.parseFloat(decString))

  if (decString.toString().charAt(0) === '-') {
    signString = '1'
  }
  else {
    signString = '0'
  }

  if (decValue === 0) {
    exponent = 0
  }
  else {
    exponent = 1023
    if (decValue >= 2) {
      while (decValue >= 2) {
        exponent++
        decValue /= 2
      }
    }
    else if (decValue < 1) {
      while (decValue < 1) {
        exponent--
        decValue *= 2
        if (exponent === 0) {
          break
        }
      }
    }
    if (exponent !== 0)
      decValue -= 1
    else decValue /= 2
  }

  const fractionString = HexUtils.DEC_TO_BIN_TAIL(decValue, 52)
  const exponentString = HexUtils.DEC_TO_BIN_HEAD(exponent, 11)
  const doubleBinStr = signString + exponentString + fractionString
  let doubleHexStr = ''
  for (let i = 0, j = 0; i < 8; i++, j += 8) {
    const m = 3 - (j % 4)
    const hexUnit
      = Number(doubleBinStr[j]) * 2 ** m
        + Number(doubleBinStr[j + 1]) * 2 ** (m - 1)
        + Number(doubleBinStr[j + 2]) * 2 ** (m - 2)
        + Number(doubleBinStr[j + 3]) * 2 ** (m - 3)
    const hexDecade
      = Number(doubleBinStr[j + 4]) * 2 ** m
        + Number(doubleBinStr[j + 5]) * 2 ** (m - 1)
        + Number(doubleBinStr[j + 6]) * 2 ** (m - 2)
        + Number(doubleBinStr[j + 7]) * 2 ** (m - 3)
    doubleHexStr = doubleHexStr + hexUnit.toString(16) + hexDecade.toString(16)
  }
  return doubleHexStr
}
