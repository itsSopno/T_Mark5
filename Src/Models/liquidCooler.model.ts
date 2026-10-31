import { Schema, model } from 'mongoose';

export interface ILiquidCooler {
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    images?: string[];
    stock?: number;
    brand?: string;
    description: string;
    isFeatured?: boolean;

    // Specifications
    radiatorSize?: string;    // e.g. "360mm", "280mm", "240mm"
    fanCount?: number;        // e.g. 3
    fanSize?: string;         // e.g. "120mm", "140mm"
    fanRPM?: string;          // e.g. "500-2000 RPM"
    pumpSpeed?: string;       // e.g. "800-2800 RPM"
    noise?: string;           // e.g. "≤ 36 dBa"
    socketSupport?: string;   // e.g. "LGA1700, AM5, AM4"
    rgbLighting?: boolean;
    tubingLength?: string;    // e.g. "380mm"
    warranty?: string;
}

const liquidCoolerSchema = new Schema<ILiquidCooler>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
    stock: {
        type: Number,
        default: 100,
    },
    brand: {
        type: String,
        default: 'Corsair',
    },
    description: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    radiatorSize: {
        type: String,
    },
    fanCount: {
        type: Number,
    },
    fanSize: {
        type: String,
    },
    fanRPM: {
        type: String,
    },
    pumpSpeed: {
        type: String,
    },
    noise: {
        type: String,
    },
    socketSupport: {
        type: String,
    },
    rgbLighting: {
        type: Boolean,
        default: false,
    },
    tubingLength: {
        type: String,
    },
    warranty: {
        type: String,
        default: '2 Years',
    },
}, { timestamps: true });

export const LiquidCooler = model<ILiquidCooler>('LiquidCooler', liquidCoolerSchema);
