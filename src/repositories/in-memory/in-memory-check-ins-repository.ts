import { CheckIn, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

import { ICheckInsRepository } from '../check-ins-repository'

export class InMemoryCheckInsRepository implements ICheckInsRepository {
  public items: CheckIn[] = []

  async findByUserIdOnDate(userId: string, date: Date) {
    const checkInOnSameDate = this.items.find(
      (checkIn) => checkIn.userId === userId,
    )

    if (!checkInOnSameDate) {
      return null
    }

    return checkInOnSameDate
  }

  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    const checkIn = {
      id: randomUUID(),
      userId: data.userId,
      gymId: data.gymId,
      createdAt: new Date(),
      validatedAt: data.validatedAt ? new Date() : null,
    }

    this.items.push(checkIn)

    return checkIn
  }
}
