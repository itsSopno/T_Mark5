import { Document } from "mongoose";
interface IPayment extends Document {
    userEmail: string;
    userImage: string;
    items: {
        name: string;
        image: string;
        price: number;
    }[];
    totalAmount: number;
    paymentStatus: 'pending' | 'completed' | 'failed';
    transactionId: string;
}
declare const PaymentModel: import("mongoose").Model<IPayment, {}, {}, {}, Document<unknown, {}, IPayment, {}, import("mongoose").DefaultSchemaOptions> & IPayment & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IPayment>;
export default PaymentModel;
//# sourceMappingURL=payment.model.d.ts.map