import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    dog: { type: mongoose.Schema.Types.ObjectId, ref: 'DogModel' },
}, { collection: 'likes' })
export default likesSchema