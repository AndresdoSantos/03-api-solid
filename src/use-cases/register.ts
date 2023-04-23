import { hash } from 'bcryptjs'

import { IUserRepository } from '@/repositories/users-repository'

interface IRegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({ email, name, password }: IRegisterUseCaseRequest) {
    const passwordHash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('Email already exists.')
    }

    await this.usersRepository.create({
      email,
      name,
      passwordHash,
    })
  }
}
