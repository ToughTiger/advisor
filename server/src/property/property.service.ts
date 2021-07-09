import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PropertyServiceBase } from "./base/property.service.base";

@Injectable()
export class PropertyService extends PropertyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
