import { Router } from "express";

const router = Router();
import linksController from '../controllers/links';

router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.hitLink);

router.get('/links/:code/stats', linksController.getLink);

export default router;