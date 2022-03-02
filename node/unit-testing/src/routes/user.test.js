const req = require("supertest");
const { connect, disconnect, cleanup } = require("../db");
const app = require("../app");
const User = require("../models/user.model");

describe("user", () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();
  });

  afterAll(async () => {
    await disconnect();
  });

  it("should not create user when there is no email", async () => {
    const user = { password: "12345" };
    const res = await req(app).post("/users/signup").send(user);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/email is required/i);
  });

  it("should not create user when email is invalid", async () => {
    const user = { email: "test", password: "12345" };
    const res = await req(app).post("/users/signup").send(user);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/email is not valid/i);
  });

  it("should create a user correctly", async () => {
    const user = { email: "test@test.com", password: "12345" };
    const res = await req(app).post("/users/signup").send(user);
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toMatch(
      /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
    );
  });

  it("should signin user correctly", async () => {
    const user = { email: "test@test.com", password: "12345" };
    await User.create(user);
    const res = await req(app).post("/users/signin").send(user);
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toMatch(
      /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
    );
  });
});
