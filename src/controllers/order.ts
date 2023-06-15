import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getOrder = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Esto solo lo ve las personas con session / JWT",
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, "ERROR GET ITEMS");
  }
};

export { getOrder };
