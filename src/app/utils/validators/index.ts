export function isValidEmail (email: String) {
  return String(email).toLocaleLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export function notEmptyStringOrDefault (value: string): string {
  return typeof value === 'string' ? value.trim() : ''
}

export function numberOrDefault (value: number): number {
  return typeof value === 'number' ? value : 0
}
