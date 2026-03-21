import { Router } from "express";
import { createKeycapsCollectionController, getAllKeyCapsCollectionController, getSingleKeycapController, updateKeycapController, deleteKeycapController } from "../Controllers/keycap.controler.js";
const keycapsRouter = Router();
keycapsRouter.post("/", createKeycapsCollectionController);
keycapsRouter.get("/", getAllKeyCapsCollectionController);
keycapsRouter.get("/:id", getSingleKeycapController);
keycapsRouter.put("/:id", updateKeycapController);
keycapsRouter.delete("/:id", deleteKeycapController);
export default keycapsRouter;
//# sourceMappingURL=keycaps.route.js.map