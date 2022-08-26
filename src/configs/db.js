import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db Successfully"))
    .catch((error) => console.error(error));
};

export default dbConnection;
