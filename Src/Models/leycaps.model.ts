import { Schema, Document, model } from "mongoose";

export interface IKeycaps extends Document {
    name: String,
    image: String,
    description: String,
    price: Number,
    brand: String,
}
const keyCapsSchema = new Schema<IKeycaps>({
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
})

const KeycapsModel = model<IKeycaps>("keycaps", keyCapsSchema);
export default KeycapsModel