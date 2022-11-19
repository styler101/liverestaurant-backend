class AppError extends Error {
  constructor (status: number, message: string) {
    super(message)
    // @ts-expect-error
    this.status = status
    this.message = message
  }
}

export default AppError
