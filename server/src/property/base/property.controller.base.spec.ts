import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { BasicAuthGuard } from "../../auth/basicAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PropertyController } from "../property.controller";
import { PropertyService } from "../property.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  carpet: 42,
  constructionstart: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isfeatured: "true",
  ispopular: "true",
  isPromoted: "true",
  parking: 42,
  pin: "examplePin",
  possession: new Date(),
  projectaddress: "exampleProjectaddress",
  projectname: "exampleProjectname",
  promoteduntil: new Date(),
  state: "exampleState",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  carpet: 42,
  constructionstart: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isfeatured: "true",
  ispopular: "true",
  isPromoted: "true",
  parking: 42,
  pin: "examplePin",
  possession: new Date(),
  projectaddress: "exampleProjectaddress",
  projectname: "exampleProjectname",
  promoteduntil: new Date(),
  state: "exampleState",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    carpet: 42,
    constructionstart: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    isfeatured: "true",
    ispopular: "true",
    isPromoted: "true",
    parking: 42,
    pin: "examplePin",
    possession: new Date(),
    projectaddress: "exampleProjectaddress",
    projectname: "exampleProjectname",
    promoteduntil: new Date(),
    state: "exampleState",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  carpet: 42,
  constructionstart: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isfeatured: "true",
  ispopular: "true",
  isPromoted: "true",
  parking: 42,
  pin: "examplePin",
  possession: new Date(),
  projectaddress: "exampleProjectaddress",
  projectname: "exampleProjectname",
  promoteduntil: new Date(),
  state: "exampleState",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Property", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PropertyService,
          useValue: service,
        },
      ],
      controllers: [PropertyController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(BasicAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /properties", async () => {
    await request(app.getHttpServer())
      .post("/properties")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        constructionstart: CREATE_RESULT.constructionstart.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        possession: CREATE_RESULT.possession.toISOString(),
        promoteduntil: CREATE_RESULT.promoteduntil.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /properties", async () => {
    await request(app.getHttpServer())
      .get("/properties")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          constructionstart: FIND_MANY_RESULT[0].constructionstart.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          possession: FIND_MANY_RESULT[0].possession.toISOString(),
          promoteduntil: FIND_MANY_RESULT[0].promoteduntil.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /properties/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/properties"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /properties/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/properties"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        constructionstart: FIND_ONE_RESULT.constructionstart.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        possession: FIND_ONE_RESULT.possession.toISOString(),
        promoteduntil: FIND_ONE_RESULT.promoteduntil.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
