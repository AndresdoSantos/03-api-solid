import type { User } from '@prisma/client'

import { IUserRepository } from '@/repositories/users-repository'

import { ResourcesNotFoundError } from './errors/resources-not-found-error'

interface IGetUserProfileUseCaseRequest {
  userId: string
}

interface IGetUserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    userId,
  }: IGetUserProfileUseCaseRequest): Promise<IGetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourcesNotFoundError()
    }

    return {
      user,
    }
  }
}
