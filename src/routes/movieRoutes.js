import express from "express";
import verifyJwtToken from "../middlewares/verifyJwtToken.js";

import {
  createMovie,
  getJwtToken,
  deleteMovie,
  updateMovie,
  fetchMovies,
} from "../controllers/movieController.js";

const router = express.Router();


//PUBLIC ENDPOINTS
router.post("/create", createMovie);
router.get("/accessToken", getJwtToken);
router.get("/fetchMovies", fetchMovies);

//PRIVATE ENDPOINTS
//JWT VERIFICATION NEEDED
router.delete("/delete", verifyJwtToken, deleteMovie);
router.put("/update", verifyJwtToken, updateMovie);

export default router;
