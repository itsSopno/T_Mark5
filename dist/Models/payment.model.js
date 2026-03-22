import { Schema, model, Document } from "mongoose";
const paymentModel = model("Payment", new Schema({
    userEmail: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: true
    },
    items: [{
            name: String,
            image: String,
            price: Number,
        }],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    transactionId: {
        type: String,
        required: true
    }
}));
const PaymentModel = paymentModel;
export default PaymentModel;
//# sourceMappingURL=payment.model.js.map