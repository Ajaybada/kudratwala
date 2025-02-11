import { Router } from "express";
import { searchItems } from "../controllers/searchController.js";

const router = Router();

router.route("/").get(searchItems); // Use GET method for searching

export default router;
