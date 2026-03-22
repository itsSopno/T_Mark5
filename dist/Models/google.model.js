import { model, Schema } from "mongoose";
const googleSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});
const googleModel = model("google", googleSchema);
export default googleModel;
//# sourceMappingURL=google.model.js.map