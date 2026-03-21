import { Router } from "express";
import { createKeyboardCollectionControler, getAllKeyboards, getSingleKeyboard } from "../Controllers/keyboard.controller.js";
const keyboardRouter = Router();
keyboardRouter.post("/", createKeyboardCollectionControler);
keyboardRouter.get("/", getAllKeyboards);
keyboardRouter.get("/:id", getSingleKeyboard);
export default keyboardRouter;
//# sourceMappingURL=keyboard.route.js.map