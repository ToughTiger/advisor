import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as basicAuthGuard from "../../auth/basicAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ConfigurationService } from "../configuration.service";
import { ConfigurationCreateInput } from "./ConfigurationCreateInput";
import { ConfigurationWhereInput } from "./ConfigurationWhereInput";
import { ConfigurationWhereUniqueInput } from "./ConfigurationWhereUniqueInput";
import { ConfigurationFindManyArgs } from "./ConfigurationFindManyArgs";
import { ConfigurationUpdateInput } from "./ConfigurationUpdateInput";
import { Configuration } from "./Configuration";
import { PropertyWhereInput } from "../../property/base/PropertyWhereInput";
import { Property } from "../../property/base/Property";

export class ConfigurationControllerBase {
  constructor(
    protected readonly service: ConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Configuration })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ConfigurationCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Configuration> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Configuration"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        bhktype: true,
        createdAt: true,
        id: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Configuration] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ConfigurationFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Configuration[]> {
    const args = plainToClass(ConfigurationFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Configuration",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        bhktype: true,
        createdAt: true,
        id: true,
        price: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Configuration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Configuration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Configuration",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        bhktype: true,
        createdAt: true,
        id: true,
        price: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Configuration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body()
    data: ConfigurationUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Configuration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Configuration"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          bhktype: true,
          createdAt: true,
          id: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Configuration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ConfigurationWhereUniqueInput
  ): Promise<Configuration | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          bhktype: true,
          createdAt: true,
          id: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get("/:id/property")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PropertyWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyProperty(
    @common.Req() request: Request,
    @common.Param() params: ConfigurationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Property[]> {
    const query: PropertyWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Property",
    });
    const results = await this.service.findProperty(params.id, {
      where: query,
      select: {
        carpet: true,
        city: true,
        configuration: true,
        constructionstart: true,
        createdAt: true,
        description: true,
        id: true,
        isfeatured: true,
        ispopular: true,
        isPromoted: true,
        locality: true,
        parking: true,
        pin: true,
        possession: true,
        postedBy: true,
        projectaddress: true,
        projectname: true,
        promoteduntil: true,
        state: true,
        status: true,
        type: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Post("/:id/property")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "update",
    possession: "any",
  })
  async createProperty(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      property: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Configuration"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Patch("/:id/property")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "update",
    possession: "any",
  })
  async updateProperty(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      property: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Configuration"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Delete("/:id/property")
  @nestAccessControl.UseRoles({
    resource: "Configuration",
    action: "update",
    possession: "any",
  })
  async deleteProperty(
    @common.Param() params: ConfigurationWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      property: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Configuration",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Configuration"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
