import { hash } from 'bcryptjs'

import { prisma } from '@/lib/prisma'

interface IRegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: any) {}

  async execute({ email, name, password }: IRegisterUseCaseRequest) {
    const passwordHash = await hash(password, 6)

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

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
