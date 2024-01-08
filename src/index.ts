import express, { Express } from "express";
import { SubscriberController } from "./controllers";

class MyExpressServer {
  private app: Express = express();
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.configureRoutes();

    new SubscriberController(this.app);
  }

  private configureRoutes(): void {}

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

export default MyExpressServer;

const portNumber: number = 3000;
const myServer: MyExpressServer = new MyExpressServer(portNumber);
myServer.startServer();
