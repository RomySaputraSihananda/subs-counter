import { Express, Request, Response } from "express";
import { SubscriberService } from "../services";

class SubscriberController {
  private app: Express;
  private service: SubscriberService = new SubscriberService();

  constructor(app: Express) {
    this.app = app;
    this.setupRouter;
  }

  public setupRouter = () => {
    this.app.get("/search/:name", async (req: Request, res: Response) => {
      const { name }: any = req.params;
      this.service.getChannels(name, req, res);
    });

    this.app.get("/channel/:id", async (req: Request, res: Response) => {
      const { id }: any = req.params;
      this.service.getSubs(id, req, res);
    });
  };
}

export default SubscriberController;
