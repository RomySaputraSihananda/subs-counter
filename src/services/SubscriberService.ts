import { Request, Response } from "express";
import { BodyResponse } from "../helpers";

class SubscriberService {
  private BASE_URL =
    "https://api.socialcounts.org/youtube-live-subscriber-count";

  public getChannels = async (
    name: string | any,
    _req: Request,
    res: Response
  ) => {
    const response = await fetch(`${this.BASE_URL}/search/${name}`);

    if (response.status !== 200)
      return res
        .json(
          new BodyResponse(
            "NOT FOUND",
            404,
            `channel with name ${name} not found`,
            null
          )
        )
        .status(404);

    const { items } = await response.json();

    return res
      .json(
        new BodyResponse(
          "OK",
          200,
          `all data of channel with name ${name}`,
          items
        )
      )
      .status(200);
  };

  public getSubs = async (id: string | any, _req: Request, res: Response) => {
    const response = await fetch(`${this.BASE_URL}/${id}`);

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
        new BodyResponse("OK", 200, `all data of channel with id ${id}`, table)
      )
      .status(200);
  };
}

export default SubscriberService;
