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
import { CreateCityArgs } from "./CreateCityArgs";
import { UpdateCityArgs } from "./UpdateCityArgs";
import { DeleteCityArgs } from "./DeleteCityArgs";
import { CityFindManyArgs } from "./CityFindManyArgs";
import { CityFindUniqueArgs } from "./CityFindUniqueArgs";
import { City } from "./City";
import { PropertyFindManyArgs } from "../../property/base/PropertyFindManyArgs";
import { Property } from "../../property/base/Property";
import { CityService } from "../city.service";

@graphql.Resolver(() => City)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class CityResolverBase {
  constructor(
    protected readonly service: CityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "any",
  })
  async _citiesMeta(
    @graphql.Args() args: CityFindManyArgs
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

  @graphql.Query(() => [City])
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "any",
  })
  async cities(
    @graphql.Args() args: CityFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<City[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "City",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => City, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "own",
  })
  async city(
    @graphql.Args() args: CityFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<City | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "City",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => City)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "create",
    possession: "any",
  })
  async createCity(
    @graphql.Args() args: CreateCityArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<City> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "City",
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
        `providing the properties: ${properties} on ${"City"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => City)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async updateCity(
    @graphql.Args() args: UpdateCityArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<City | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "City",
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
        `providing the properties: ${properties} on ${"City"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => City)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "delete",
    possession: "any",
  })
  async deleteCity(@graphql.Args() args: DeleteCityArgs): Promise<City | null> {
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
    resource: "City",
    action: "read",
    possession: "any",
  })
  async property(
    @graphql.Parent() parent: City,
    @graphql.Args() args: PropertyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Property[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Property",
    });
    const results = await this.service.findProperty(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
