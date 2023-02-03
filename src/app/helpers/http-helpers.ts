
interface ErrorResponse {
  statusCode: number
  message: string
}

export const badRequest = (error: Error, statusCode: number): ErrorResponse => {
  return {
    message: error.message,
    statusCode
  }
}
