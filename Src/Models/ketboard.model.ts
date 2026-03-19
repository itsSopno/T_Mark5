import mongoose, { Schema, model, Document } from "mongoose";

interface IKeyBoard extends Document {
    name: string;
    price: number;
    image: string;
    stock: number;
    category: string;
    brand: string;
    switchType: string;
    layout: string;
    description: string;
    isFeatured: boolean;

}

const keyboardSchema = new Schema<IKeyBoard>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,

    },
    switchType: {
        type: String,
        required: true,

    },
    layout: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    }
})

const keyboardModel = model<IKeyBoard>("keyboard", keyboardSchema);
export default keyboardModel;