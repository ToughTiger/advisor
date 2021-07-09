import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Property,
  Configuration,
  User,
  City,
  Locality,
} from "@prisma/client";

export class PropertyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PropertyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyFindManyArgs>
  ): Promise<number> {
    return this.prisma.property.count(args);
  }

  async findMany<T extends Prisma.PropertyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyFindManyArgs>
  ): Promise<Property[]> {
    return this.prisma.property.findMany(args);
  }
  async findOne<T extends Prisma.PropertyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyFindUniqueArgs>
  ): Promise<Property | null> {
    return this.prisma.property.findUnique(args);
  }
  async create<T extends Prisma.PropertyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyCreateArgs>
  ): Promise<Property> {
    return this.prisma.property.create<T>(args);
  }
  async update<T extends Prisma.PropertyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyUpdateArgs>
  ): Promise<Property> {
    return this.prisma.property.update<T>(args);
  }
  async delete<T extends Prisma.PropertyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyDeleteArgs>
  ): Promise<Property> {
    return this.prisma.property.delete(args);
  }

  async findConfigurations(
    parentId: string,
    args: Prisma.ConfigurationFindManyArgs
  ): Promise<Configuration[]> {
    return this.prisma.property
      .findUnique({
        where: { id: parentId },
      })
      .configurations(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.property
      .findUnique({
        where: { id: parentId },
      })
      .user(args);
  }

  async getCities(parentId: string): Promise<City | null> {
    return this.prisma.property
      .findUnique({
        where: { id: parentId },
      })
      .cities();
  }

  async getLocalities(parentId: string): Promise<Locality | null> {
    return this.prisma.property
      .findUnique({
        where: { id: parentId },
      })
      .localities();
  }
}
