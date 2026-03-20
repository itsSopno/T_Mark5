import type { Request, Response } from "express";
/**
 * @name createKeyboardCollectionControler
 * @desc create keyboard collection
 * @access public
 */
export declare const createKeyboardCollectionControler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * @name getallkeybaord
 * @desc get all keyboard collection
 * @access public
 */
export declare const getAllKeyboards: (req: Request, res: Response) => Promise<Response>;
/**
 * @name getSingleKeyboard
 * @desc get a single keyboard
 * @access public
 */
export declare const getSingleKeyboard: (req: Request, res: Response) => Promise<Response>;
//# sourceMappingURL=keyboard.controller.d.ts.map