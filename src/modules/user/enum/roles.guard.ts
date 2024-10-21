import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../roles.decorator'
import { Role } from './user-roles.enum'
import { PrismaService } from '@/prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { ConfigService } from '@nestjs/config'
import { Env } from '@/env'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService<Env, true>,
  ) {}

  async canActivate(context: ExecutionContext) {
    const publicKey = this.config.get('JWT_PUBLIC_KEY', { infer: true })
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (!requiredRoles) {
      throw new Error('Required roles are not provided.')
    }

    const request = context.switchToHttp().getRequest()
    const accessToken = request.headers.authorization.split(' ')[1]

    let decoded: UserPayload
    try {
      decoded = this.jwt.verify<UserPayload>(accessToken, {
        publicKey: Buffer.from(publicKey, 'base64'),
        algorithms: ['RS256'],
      })
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token')
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: decoded.sub,
      },
    })

    return requiredRoles.some((role) => user.role === role)
  }
}
