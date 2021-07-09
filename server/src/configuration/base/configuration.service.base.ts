import { PrismaService } from "nestjs-prisma";
import { Prisma, Configuration, Property } from "@prisma/client";

export class ConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ConfigurationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigurationFindManyArgs>
  ): Promise<number> {
    return this.prisma.configuration.count(args);
  }

  async findMany<T extends Prisma.ConfigurationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigurationFindManyArgs>
  ): Promise<Configuration[]> {
    return this.prisma.configuration.findMany(args);
  }
  async findOne<T extends Prisma.ConfigurationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigurationFindUniqueArgs>
  ): Promise<Configuration | null> {
    return this.prisma.configuration.findUnique(args);
  }
  async create<T extends Prisma.ConfigurationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigurationCreateArgs>
  ): Promise<Configuration> {
    return this.prisma.configuration.create<T>(args);
  }
  async update<T extends Prisma.ConfigurationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigurationUpdateArgs>
  ): Promise<Configuration> {
    return this.prisma.configuration.update<T>(args);
  }
  async delete<T extends Prisma.ConfigurationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConfigurationDeleteArgs>
  ): Promise<Configuration> {
    return this.prisma.configuration.delete(args);
  }

  async findProperty(
    parentId: string,
    args: Prisma.PropertyFindManyArgs
  ): Promise<Property[]> {
    return this.prisma.configuration
      .findUnique({
        where: { id: parentId },
      })
      .property(args);
  }
}
