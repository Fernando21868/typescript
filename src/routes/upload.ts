import { Router } from "express";
import { getOrder } from "../controllers/order";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/file";
import { getFile } from "../controllers/upload";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };
