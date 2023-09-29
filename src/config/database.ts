import mongoose from "mongoose";

const connectDatabase = (): void => {
  mongoose
    .connect(process.env.LOCALHOST as string)
    .then(() => {
      console.log(`Mongodb connected with server: ${mongoose.connection.host}`);
    })
    .catch((error: any) => {
      console.error(`Mongodb connection error: ${error}`);
    });
};

export default connectDatabase;
