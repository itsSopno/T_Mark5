import { Router } from "express";
import { registerUserController, LoginUserController, logoutUserController, getMeController, createKeyboardCollectionControler } from "../Controllers/auth.controler.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRouter: Router = Router();

authRouter.post("/register", registerUserController)
authRouter.post("/login", LoginUserController)
authRouter.get("/logout", logoutUserController)
authRouter.get("/getMe", authUser, getMeController)
authRouter.post("/createKeyboard", createKeyboardCollectionControler)

export default authRouter;