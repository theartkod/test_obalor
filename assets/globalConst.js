const PHONE_ERROR = 'Для продолжения ведите корректный номер телефона'

const VALID_PHONE_LENGTH = 18

const PHONE_MASK = [
  '+',
  '7',
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]
export { PHONE_ERROR, VALID_PHONE_LENGTH, PHONE_MASK }
