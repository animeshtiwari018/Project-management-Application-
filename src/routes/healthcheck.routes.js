import { Router } from "_express";
import { healthCheck } from "../controllers/healthcheck.controllers";
const router = Router();

router.route("/").get(healthCheck)


export default router; 
