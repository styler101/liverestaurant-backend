export class AppError {
  private message: string
  private statusCode: number
  constructor (message: string = 'Invalid Request', statusCode: number = 400) {
    this.message = message
    this.statusCode = statusCode
  }

  public setMessage (message: string): void {
    this.message = message
  }

  public getMessage (): String {
    return this.message
  }

  public setStatus (statusCode: number): void {
    this.statusCode = statusCode
  }

  public getStatus (): number {
    return this.statusCode
  }
}
