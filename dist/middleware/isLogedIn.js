import jwt from 'jsonwebtoken';
export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.Token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
//# sourceMappingURL=isLogedIn.js.map