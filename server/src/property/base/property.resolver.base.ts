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
import { CreatePropertyArgs } from "./CreatePropertyArgs";
import { UpdatePropertyArgs } from "./UpdatePropertyArgs";
import { DeletePropertyArgs } from "./DeletePropertyArgs";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyFindUniqueArgs } from "./PropertyFindUniqueArgs";
import { Property } from "./Property";
import { CityFindManyArgs } from "../../city/base/CityFindManyArgs";
import { City } from "../../city/base/City";
import { ConfigurationFindManyArgs } from "../../configuration/base/ConfigurationFindManyArgs";
import { Configuration } from "../../configuration/base/Configuration";
import { LocalityFindManyArgs } from "../../locality/base/LocalityFindManyArgs";
import { Locality } from "../../locality/base/Locality";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { PropertyService } from "../property.service";

@graphql.Resolver(() => Property)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class PropertyResolverBase {
  constructor(
    protected readonly service: PropertyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async _propertiesMeta(
    @graphql.Args() args: PropertyFindManyArgs
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

  @graphql.Query(() => [Property])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async properties(
    @graphql.Args() args: PropertyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Property[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Property",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Property, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "own",
  })
  async property(
    @graphql.Args() args: PropertyFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Property | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Property",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "create",
    possession: "any",
  })
  async createProperty(
    @graphql.Args() args: CreatePropertyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Property> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Property",
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
        `providing the properties: ${properties} on ${"Property"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  async updateProperty(
    @graphql.Args() args: UpdatePropertyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Property | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Property",
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
        `providing the properties: ${properties} on ${"Property"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "delete",
    possession: "any",
  })
  async deleteProperty(
    @graphql.Args() args: DeletePropertyArgs
  ): Promise<Property | null> {
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

  @graphql.ResolveField(() => [City])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async cities(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: CityFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<City[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "City",
    });
    const results = await this.service.findCities(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Configuration])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async configuration(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: ConfigurationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Configuration[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Configuration",
    });
    const results = await this.service.findConfiguration(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Configuration])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async configurations(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: ConfigurationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Configuration[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Configuration",
    });
    const results = await this.service.findConfigurations(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Locality])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async localities(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: LocalityFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Locality[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Locality",
    });
    const results = await this.service.findLocalities(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
