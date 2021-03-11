import request from 'supertest'
import { app } from '../app'


import createConnection from '../database';

describe("Users", ()=> {
  beforeAll(async()=>{
    const connection = await createConnection();
    await connection.runMigrations()
  });
  it("Shoul be able to create a new user", async()=>{
    const res = await request(app).post("/users").send({
      email:"userExample@gmail.com",
      name: "User Example"
    });
  })
})