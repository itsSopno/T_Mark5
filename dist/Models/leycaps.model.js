import { Schema, Document, model } from "mongoose";
const keyCapsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    }
});
const KeycapsModel = model("keycaps", keyCapsSchema);
export default KeycapsModel;
//# sourceMappingURL=leycaps.model.js.map