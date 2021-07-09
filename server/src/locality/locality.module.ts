import { Module } from "@nestjs/common";
import { LocalityModuleBase } from "./base/locality.module.base";
import { LocalityService } from "./locality.service";
import { LocalityController } from "./locality.controller";
import { LocalityResolver } from "./locality.resolver";

@Module({
  imports: [LocalityModuleBase],
  controllers: [LocalityController],
  providers: [LocalityService, LocalityResolver],
  exports: [LocalityService],
})
export class LocalityModule {}
