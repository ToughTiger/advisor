import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LocalityServiceBase } from "./base/locality.service.base";

@Injectable()
export class LocalityService extends LocalityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
