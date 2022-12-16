import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { db } from "./database";

const app = express();

app.get("/welcome", async (req: Request, res: Response, next: NextFunction) => {
  console.log("welcome");

  try {
    await db.query("INSERT INTO successLog(name) VALUES('호호호호')");
  } catch (error) {
    console.log(":::error:::welcome:::", error);
  }

  res.send("welcome!");
});

app.get(
  "/healthcheck",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("healthcheck");

    try {
      await db.query("INSERT INTO successLog(name) VALUES('healthcheck')");
    } catch (error) {
      console.log(":::error:::healthcheck:::", error);
    }

    res.send("healthcheck!");
  }
);

app.listen("1234", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
