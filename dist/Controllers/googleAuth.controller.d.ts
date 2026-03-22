import type { Request, Response } from "express";
/**
 * @name GoogleRegesterController
 * @desc post google Regester data, It will work for both regester and login
 *
 *@access Public
 */
export declare const GoogleAuthController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
/**
 * @name Get GoogleLoginData controller
 * @desc user can get here google login data
 * @route GET api/Google
 * @access proivate
 *
 */
export declare const getMe: (req: Request, res: Response) => Promise<Response | void>;
/**
 * @name GoogleLogoutController
 * @des for logout system
 * @acces private
 * @route GET api/Google/Logout
 */
export declare const LogoutController: (_req: Request, res: Response) => Promise<Response | void>;
//# sourceMappingURL=googleAuth.controller.d.ts.map