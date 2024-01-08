import express, { Express, Request, Response } from "express";
import { BodyResponse } from "./helpers";

class MyExpressServer {
  private app: Express;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.app.get("/search/:name", async (req: Request, res: Response) => {
      if (!req.params.name) return res.json({}).status(400);
      const data = await fetch(
        `https://api.socialcounts.org/youtube-live-subscriber-count/search/${req.params.name}`
      );
      return res.json(await data.json());
    });

    this.app.get("/channel/:id", async (req: Request, res: Response) => {
      const { id }: any = req.params;

      const response = await fetch(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${id}`
      );

      if (response.status !== 200)
        return res
          .json(
            new BodyResponse(
              "NOT FOUND",
              404,
              `channel with id ${id} not found`,
              null
            )
          )
          .status(404);

      const { table } = await response.json();

      return res
        .json(
          new BodyResponse(
            "OK",
            200,
            `all data of channel with id ${id}`,
            table
          )
        )
        .status(200);
    });
  }

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

const portNumber: number = 3000;
const myServer: MyExpressServer = new MyExpressServer(portNumber);
myServer.startServer();
