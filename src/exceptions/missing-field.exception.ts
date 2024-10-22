import { HttpException, HttpStatus } from '@nestjs/common'

export class MissingFieldException extends HttpException {
  constructor(field: string) {
    super(`A ${field} is required.`, HttpStatus.BAD_REQUEST)
  }
}
