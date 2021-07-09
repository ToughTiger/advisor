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
import { CreateLocalityArgs } from "./CreateLocalityArgs";
import { UpdateLocalityArgs } from "./UpdateLocalityArgs";
import { DeleteLocalityArgs } from "./DeleteLocalityArgs";
import { LocalityFindManyArgs } from "./LocalityFindManyArgs";
import { LocalityFindUniqueArgs } from "./LocalityFindUniqueArgs";
import { Locality } from "./Locality";
import { PropertyFindManyArgs } from "../../property/base/PropertyFindManyArgs";
import { Property } from "../../property/base/Property";
import { LocalityService } from "../locality.service";

@graphql.Resolver(() => Locality)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class LocalityResolverBase {
  constructor(
    protected readonly service: LocalityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Locality",
    action: "read",
    possession: "any",
  })
  async _localitiesMeta(
    @graphql.Args() args: LocalityFindManyArgs
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

  @graphql.Query(() => [Locality])
  @nestAccessControl.UseRoles({
    resource: "Locality",
    action: "read",
    possession: "any",
  })
  async localities(
    @graphql.Args() args: LocalityFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Locality[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Locality",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Locality, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Locality",
    action: "read",
    possession: "own",
  })
  async locality(
    @graphql.Args() args: LocalityFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Locality | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Locality",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Locality)
  @nestAccessControl.UseRoles({
    resource: "Locality",
    action: "create",
    possession: "any",
  })
  async createLocality(
    @graphql.Args() args: CreateLocalityArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Locality> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Locality",
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
        `providing the properties: ${properties} on ${"Locality"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Locality)
  @nestAccessControl.UseRoles({
    resource: "Locality",
    action: "update",
    possession: "any",
  })
  async updateLocality(
    @graphql.Args() args: UpdateLocalityArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Locality | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Locality",
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
        `providing the properties: ${properties} on ${"Locality"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Locality)
  @nestAccessControl.UseRoles({
    resource: "Locality",
    action: "delete",
    possession: "any",
  })
  async deleteLocality(
    @graphql.Args() args: DeleteLocalityArgs
  ): Promise<Locality | null> {
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
    resource: "Locality",
    action: "read",
    possession: "any",
  })
  async property(
    @graphql.Parent() parent: Locality,
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
