 const isNationalIdentificationNumberValid = (input)=> {
  try {
    if (typeof input !== 'string') {
      throw new Error('Input type should be string.')
    }

    const regex = /^[A-Z][1,2]\d{8}$/

    if (!regex.test(input)) {
      throw new Error('身分證格式錯誤')
    }

    return verifyTaiwanIdIntermediateString(input)
  } catch (e) {
    console.error(e.message)
    return false
  }
}

const verifyTaiwanIdIntermediateString = (input) => {
  const idArray = input.split('')
  const intRadix = 10
  const TAIWAN_ID_LOCALE_CODE_LIST = [
    1, // A -> 10 -> 1 * 1 + 9 * 0 = 1
    10, // B -> 11 -> 1 * 1 + 9 * 1 = 10
    19, // C -> 12 -> 1 * 1 + 9 * 2 = 19
    28, // D
    37, // E
    46, // F
    55, // G
    64, // H
    39, // I -> 34 -> 1 * 3 + 9 * 4 = 39
    73, // J
    82, // K
    2, // L
    11, // M
    20, // N
    48, // O -> 35 -> 1 * 3 + 9 * 5 = 48
    29, // P
    38, // Q
    47, // R
    56, // S
    65, // T
    74, // U
    83, // V
    21, // W -> 32 -> 1 * 3 + 9 * 2 = 21
    3, // X
    12, // Y
    30 // Z -> 33 -> 1 * 3 + 9 * 3 = 30
  ]

  const RESIDENT_CERTIFICATE_NUMBER_LIST = [
    '0', // A
    '1', // B
    '2', // C
    '3', // D
    '4', // E
    '5', // F
    '6', // G
    '7', // H
    '4', // I
    '8', // J
    '9', // K
    '0', // L
    '1', // M
    '2', // N
    '5', // O
    '3', // P
    '4', // Q
    '5', // R
    '6', // S
    '7', // T
    '8', // U
    '9', // V
    '2', // W
    '0', // X
    '1', // Y
    '3' // Z
  ]

  // if is not a number (居留證編號)
  if (isNaN(parseInt(idArray[1], intRadix))) {
    idArray[1] =
      RESIDENT_CERTIFICATE_NUMBER_LIST[input.charCodeAt(1) - 'A'.charCodeAt(0)]
  }

  const result = idArray.reduce(
    (sum, n, index) => {
      if (index === 0) {
        return (
          sum +
          TAIWAN_ID_LOCALE_CODE_LIST[
            idArray[0].charCodeAt(0) - 'A'.charCodeAt(0)
          ]
        )
      } else if (index === 9) {
        return sum + parseInt(idArray[9], intRadix)
      }
      return sum + parseInt(idArray[index], intRadix) * (9 - index)
    },
    0
  )

  if (result % 10 === 0) {
    return true
  }
  return false
}

console.log(isNationalIdentificationNumberValid("你的身分證"))
