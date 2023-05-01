import { Prisma, CheckIn } from '@prisma/client'

export interface ICheckInsRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>

  save(checkIn: CheckIn): Promise<CheckIn>

  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>

  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>

  findById(checkInId: string): Promise<CheckIn | null>

  countByUserId(userId: string): Promise<number>
}
