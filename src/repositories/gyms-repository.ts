import { Gym, Prisma } from '@prisma/client'

export interface IFindManyNearbyManyParams {
  latitude: number
  longitude: number
}

export interface IGymsRepository {
  findById(id: string): Promise<Gym | null>

  searchMany(query: string, page: number): Promise<Gym[]>

  findManyNearby({
    latitude,
    longitude,
  }: IFindManyNearbyManyParams): Promise<Gym[]>

  create(data: Prisma.GymCreateInput): Promise<Gym>
}
