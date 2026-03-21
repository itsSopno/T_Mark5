import { Router } from "express";
import { registerUserController, LoginUserController, logoutUserController, getMeController } from "../Controllers/auth.controler.js";
import { authUser } from "../middleware/auth.middleware.js";
import { createKeycapsCollectionController, getAllKeyCapsCollectionController, getSingleKeycapController, updateKeycapController, deleteKeycapController } from "../Controllers/keycap.controler.js";
import { CreateAllProductController, getAllProduct, getSingleProductController } from "../Controllers/allPRoduct.controller.js";
const authRouter: Router = Router();
authRouter.post("/register", registerUserController)
authRouter.post("/login", LoginUserController)
authRouter.get("/logout", logoutUserController)
authRouter.get("/getMe", authUser, getMeController)
authRouter.post("/allproduct", CreateAllProductController)
authRouter.get("/allproduct", getAllProduct)
authRouter.get("/allproduct/:id", getSingleProductController)
authRouter.post("/keycaps", createKeycapsCollectionController)
authRouter.get("/keycaps", getAllKeyCapsCollectionController)
authRouter.get("/keycaps/:id", getSingleKeycapController)
authRouter.put("/keycaps/:id", updateKeycapController)
authRouter.delete("/keycaps/:id", deleteKeycapController)

export default authRouter;