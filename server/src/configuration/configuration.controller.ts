import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConfigurationService } from "./configuration.service";
import { ConfigurationControllerBase } from "./base/configuration.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("configurations")
@common.Controller("configurations")
export class ConfigurationController extends ConfigurationControllerBase {
  constructor(
    protected readonly service: ConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
