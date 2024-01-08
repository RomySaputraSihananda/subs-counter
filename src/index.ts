import express, { Express, Request, Response } from "express";
import { SubscriberController } from "./controllers";

class MyExpressServer {
  private app: Express = express();
  private port: number;
  private controller: SubscriberController = new SubscriberController(this.app);

  constructor(port: number) {
    this.port = port;

    this.configureRoutes();
    this.controller.setupRouter();
  }

  private configureRoutes(): void {}

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

const portNumber: number = 3000;
const myServer: MyExpressServer = new MyExpressServer(portNumber);
myServer.startServer();
