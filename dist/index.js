import express, {} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './Routes/auth.route.js';
import { authUser } from './middleware/auth.middleware.js';
// Configure dotenv
dotenv.config();
const app = express();
/**
 * @route middle ware
 */
app.use(express.json());
app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
/**
 * @route using all routes
 */
app.use("/api", authRouter, authUser);
/**
 * @route test router
 */
app.get("/", (_req, res) => {
    res.json({ message: "Server is running" });
});
export default app;
//# sourceMappingURL=index.js.map