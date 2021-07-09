import { PrismaService } from "nestjs-prisma";
import { Prisma, City, Property } from "@prisma/client";

export class CityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CityFindManyArgs>
  ): Promise<number> {
    return this.prisma.city.count(args);
  }

  async findMany<T extends Prisma.CityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CityFindManyArgs>
  ): Promise<City[]> {
    return this.prisma.city.findMany(args);
  }
  async findOne<T extends Prisma.CityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CityFindUniqueArgs>
  ): Promise<City | null> {
    return this.prisma.city.findUnique(args);
  }
  async create<T extends Prisma.CityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CityCreateArgs>
  ): Promise<City> {
    return this.prisma.city.create<T>(args);
  }
  async update<T extends Prisma.CityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CityUpdateArgs>
  ): Promise<City> {
    return this.prisma.city.update<T>(args);
  }
  async delete<T extends Prisma.CityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CityDeleteArgs>
  ): Promise<City> {
    return this.prisma.city.delete(args);
  }

  async getProperty(parentId: string): Promise<Property | null> {
    return this.prisma.city
      .findUnique({
        where: { id: parentId },
      })
      .property();
  }
}
