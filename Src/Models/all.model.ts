import { Document, model, Schema } from "mongoose";

interface IProduct extends Document {
    name: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    quantity: String,
}
const ProductSchema = new Schema<IProduct>({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})

const productModel = model<IProduct>("product", ProductSchema);
export default productModel;    