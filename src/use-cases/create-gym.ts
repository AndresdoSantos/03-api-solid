import { Gym } from '@prisma/client'

import { IGymsRepository } from '@/repositories/gyms-repository'

interface ICreateGymUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateGymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymsRepository: IGymsRepository) {}

  async execute({
    description,
    latitude,
    longitude,
    phone,
    title,
  }: ICreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      description,
      latitude,
      longitude,
      phone,
      title,
    })

    return { gym }
  }
}
