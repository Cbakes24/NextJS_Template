import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
        // email: [true, "Email is invalid"], not sure if this exist in mongoose to check if email is a vlaid email address
    },

    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^[a-zA-Z0-9._ ]{8,20}$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },

    image: {
        type: String,

    },
});

const User = models.User || model("User", UserSchema)

export default User;
