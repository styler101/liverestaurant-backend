export class AppError extends Error {
  private readonly statusCode: number

  constructor (message: string, statusCode: number) {
    super(message)
    this.message = message
    this.statusCode = statusCode
  }
}
