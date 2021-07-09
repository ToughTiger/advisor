import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocalityService } from "./locality.service";
import { LocalityControllerBase } from "./base/locality.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("localities")
@common.Controller("localities")
export class LocalityController extends LocalityControllerBase {
  constructor(
    protected readonly service: LocalityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
