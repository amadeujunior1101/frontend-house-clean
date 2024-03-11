const addedMaskPhoneNumber = (value: string): string => {
  const numericValue = value.replace(/\D/g, '')

  const maskedValue = numericValue.replace(
    /(\d{2})(\d{1})(\d{4})(\d{4})/,
    '($1) $2 $3-$4'
  )

  return maskedValue
}

export { addedMaskPhoneNumber }
