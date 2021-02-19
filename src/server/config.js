import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://Aline:LesCorses400@cluster0.syldx.mongodb.net/LesCorses?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
);

mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database`);
});
