import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ConfigurationResolverBase } from "./base/configuration.resolver.base";
import { Configuration } from "./base/Configuration";
import { ConfigurationService } from "./configuration.service";

@graphql.Resolver(() => Configuration)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class ConfigurationResolver extends ConfigurationResolverBase {
  constructor(
    protected readonly service: ConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
