import express, { Express, Request, Response } from "express";
import { SubscriberService } from "../services";
import { ENDPOINTS } from "../helpers";
import * as swaggerUi from "swagger-ui-express";

const swaggerDocument = require("../config/swagger.json");

class SubscriberController {
  private app: Express;
  private service: SubscriberService = new SubscriberService();

  constructor(app: Express) {
    this.app = app;

    this.setupRouter();
  }

  private setupRouter = () => {
    this.app.use(express.json());

    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.app.get(
      `${ENDPOINTS}/search/:name`,
      async (req: Request, res: Response) => {
        const { name }: any = req.params;
        this.service.getChannels(name, req, res);
      }
    );

    this.app.get(
      `${ENDPOINTS}/channel/:id`,
      async (req: Request, res: Response) => {
        const { id }: any = req.params;
        this.service.getSubs(id, req, res);
      }
    );
  };
}

export default SubscriberController;
