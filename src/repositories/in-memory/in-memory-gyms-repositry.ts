import { Gym } from '@prisma/client'

import { IGymsRepository } from '../gyms-repository'

export class InMemoryGymsRepository implements IGymsRepository {
  public items: Gym[] = []

  async findById(id: string): Promise<Gym | null> {
    const gyms = this.items.find((item) => item.id === id)

    if (!gyms) {
      return null
    }

    return gyms
  }
}
