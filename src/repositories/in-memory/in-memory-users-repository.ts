import { Prisma, User } from '@prisma/client'

import { IUserRepository } from '../users-repository'

export class InMemoryUsersRepository implements IUserRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      email: data.email,
      name: data.name,
      passwordHash: data.passwordHash,
      createdAt: new Date(),
    }

    this.items.push(user)

    return user
  }
}
