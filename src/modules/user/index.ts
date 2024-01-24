import MODULES_ROUTES from "@/config/routes.config";
import { Router } from "express";
import { GET } from "./controller";

const router = Router();
router.route(MODULES_ROUTES.users).get(GET);

export default router;
