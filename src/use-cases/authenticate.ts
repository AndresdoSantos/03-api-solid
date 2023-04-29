import { compare } from 'bcryptjs'
import type { User } from '@prisma/client'

import { IUserRepository } from '@/repositories/users-repository'

import { InvalidCredentialsError } from './errors/invalid-credentials-error'

interface IAuthenticateUseCaseRequest {
  email: string
  password: string
}

interface IAuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    email,
    password,
  }: IAuthenticateUseCaseRequest): Promise<IAuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.passwordHash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
