import { mongoose } from "mongoose";

let isConnected = false; //tracks the connection

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log("MongoDB is already connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {

            dbName: "sharePrompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}
