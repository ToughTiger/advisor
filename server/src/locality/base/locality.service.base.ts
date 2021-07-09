import { PrismaService } from "nestjs-prisma";
import { Prisma, Locality, Property } from "@prisma/client";

export class LocalityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LocalityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalityFindManyArgs>
  ): Promise<number> {
    return this.prisma.locality.count(args);
  }

  async findMany<T extends Prisma.LocalityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalityFindManyArgs>
  ): Promise<Locality[]> {
    return this.prisma.locality.findMany(args);
  }
  async findOne<T extends Prisma.LocalityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalityFindUniqueArgs>
  ): Promise<Locality | null> {
    return this.prisma.locality.findUnique(args);
  }
  async create<T extends Prisma.LocalityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalityCreateArgs>
  ): Promise<Locality> {
    return this.prisma.locality.create<T>(args);
  }
  async update<T extends Prisma.LocalityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalityUpdateArgs>
  ): Promise<Locality> {
    return this.prisma.locality.update<T>(args);
  }
  async delete<T extends Prisma.LocalityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalityDeleteArgs>
  ): Promise<Locality> {
    return this.prisma.locality.delete(args);
  }

  async findProperty(
    parentId: string,
    args: Prisma.PropertyFindManyArgs
  ): Promise<Property[]> {
    return this.prisma.locality
      .findUnique({
        where: { id: parentId },
      })
      .property(args);
  }
}
