import { PipeTransform, BadRequestException } from '@nestjs/common'
import { ZodError, ZodSchema } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      console.log(value)
      return this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(value)

        throw new BadRequestException({
          message: 'Validation error.',
          statusCode: 401,
          erros: fromZodError(error),
        })
      }
    }
  }
}
