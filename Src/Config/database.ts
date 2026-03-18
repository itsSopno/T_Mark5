import mongoose from 'mongoose';

/**
 * MongoDB কানেকশন ফাংশন
 * @returns Promise<void>
 */
async function connectDB(): Promise<void> {
    try {
        // MONGO_URI কে string হিসেবে টাইপ কাস্টিং করা হয়েছে
        const mongoUri = process.env.MONGO_URI as string;

        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        await mongoose.connect(mongoUri);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        // error: any অথবা unknown ব্যবহার করা যায়
        if (error instanceof Error) {
            console.error("❌ Error connecting to MongoDB:", error.message);
        } else {
            console.error("❌ An unknown error occurred while connecting to MongoDB");
        }
        process.exit(1); // কানেকশন না হলে সার্ভার বন্ধ করে দেওয়া ভালো
    }
}

export default connectDB;