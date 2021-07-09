import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateConfigurationArgs } from "./CreateConfigurationArgs";
import { UpdateConfigurationArgs } from "./UpdateConfigurationArgs";
import { DeleteConfigurationArgs } from "./DeleteConfigurationArgs";
import { ConfigurationFindManyArgs } from "./ConfigurationFindManyArgs";
import { ConfigurationFindUniqueArgs } from "./ConfigurationFindUniqueArgs";
import { Configuration } from "./Configuration";
import { PropertyFindManyArgs } from "../../property/base/PropertyFindManyArgs";
import { Property } from "../../property/base/Property";
import { ConfigurationService } from "../configuration.service";

@graphql.Resolver(() => Configuration)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class ConfigurationResolverBase {
  constructor(
    protected readonly service: ConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "any",
  })
  async _configurationsMeta(
    @graphql.Args() args: ConfigurationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Configuration])
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "any",
  })
  async configurations(
    @graphql.Args() args: ConfigurationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Configuration[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Configuration",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Configuration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "own",
  })
  async configuration(
    @graphql.Args() args: ConfigurationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Configuration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Configuration",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Configuration)
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "create",
    possession: "any",
  })
  async createConfiguration(
    @graphql.Args() args: CreateConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Configuration> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Configuration"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Configuration)
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "update",
    possession: "any",
  })
  async updateConfiguration(
    @graphql.Args() args: UpdateConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Configuration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Configuration"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Configuration)
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "delete",
    possession: "any",
  })
  async deleteConfiguration(
    @graphql.Args() args: DeleteConfigurationArgs
  ): Promise<Configuration | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Property])
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "any",
  })
  async properties(
    @graphql.Parent() parent: Configuration,
    @graphql.Args() args: PropertyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Property[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Property",
    });
    const results = await this.service.findProperties(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
