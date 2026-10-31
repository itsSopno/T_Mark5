import { Schema, model } from 'mongoose';

export interface IGraphicsCard {
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    iamges: string[];
    stock: number;
    brand: string;
    model?: string;
    vramSize?: number;
    vramType?: string;
    coreClock?: number;
    boostClock?: number;
    powerConnectors?: string[];
    displayOutputs?: string[];
    rayTracing?: boolean;
    dlss?: string;
    description: string;
    isFeatured: boolean;
    port?: string;
}

const graphicsCardSchema = new Schema<IGraphicsCard>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number
    },
    image: {
        type: String,
        required: true
    },
    iamges: {
        type: [String],
        default: []
    },
    stock: {
        type: Number,
        default: 100
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
    },
    vramSize: {
        type: Number,
    },
    vramType: {
        type: String,
    },
    coreClock: {
        type: Number,
    },
    boostClock: {
        type: Number,
    },
    powerConnectors: {
        type: [String],
    },
    displayOutputs: {
        type: [String],
    },
    rayTracing: {
        type: Boolean,
    },
    dlss: {
        type: String,   // ← Boolean থেকে String করা হয়েছে (frontend "DLSS 3", "FSR 3" পাঠায়)
    },
    description: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    port: {
        type: String,
    }
}, {
    timestamps: true
})

export const GraphicsCard = model<IGraphicsCard>('GraphicsCard', graphicsCardSchema)