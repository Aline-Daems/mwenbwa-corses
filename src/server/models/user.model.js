import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "email is invalid"],
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 8,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("User", userSchema);
