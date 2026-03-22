import { type Document } from "mongoose";
export interface IGoogle extends Document {
    googleId: string;
    email: string;
    name: string;
    image: string;
}
declare const googleModel: import("mongoose").Model<IGoogle, {}, {}, {}, Document<unknown, {}, IGoogle, {}, import("mongoose").DefaultSchemaOptions> & IGoogle & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IGoogle>;
export default googleModel;
//# sourceMappingURL=google.model.d.ts.map