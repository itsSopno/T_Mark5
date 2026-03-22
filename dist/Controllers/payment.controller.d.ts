import { type Request, type Response } from "express";
export declare const initiatePayment: (req: Request, res: Response) => Promise<any>;
export declare const verifyPayment: (req: Request, res: Response) => Promise<any>;
/**
 * @name getPaymentdataController
 * @desc user can get every paymentdata
 * @route GET /api/payment/getPaymentdata
 * @access Private
 */
export declare const getPaymentdataController: (_req: Request, res: Response) => Promise<any>;
//# sourceMappingURL=payment.controller.d.ts.map