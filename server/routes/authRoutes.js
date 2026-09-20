import { Router } from "express";
import { login, logout, me, register } from "../controllers/authControllers.js";
import { optionalAuthMiddleware } from "../middleware/authMiddleware.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", optionalAuthMiddleware, me);

export default authRouter;
