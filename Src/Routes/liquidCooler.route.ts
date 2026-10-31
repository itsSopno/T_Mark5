import { Router } from 'express';
import {
    createLiquidCoolerController,
    getAllLiquidCoolersController,
    getSingleLiquidCoolerController,
    updateLiquidCoolerController,
    deleteLiquidCoolerController,
} from '../Controllers/liquidCooler.controller.js';

const liquidCoolerRouter: Router = Router();

liquidCoolerRouter.post('/', createLiquidCoolerController);
liquidCoolerRouter.get('/', getAllLiquidCoolersController);
liquidCoolerRouter.get('/:id', getSingleLiquidCoolerController);
liquidCoolerRouter.put('/:id', updateLiquidCoolerController);
liquidCoolerRouter.delete('/:id', deleteLiquidCoolerController);

export default liquidCoolerRouter;
