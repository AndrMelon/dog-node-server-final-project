import mongoose from "mongoose";

const dogsSchema = mongoose.Schema({
    url: { type: String, required: true },
    likes: { type: Number, default: 0 },
    breed: { type: String, required: true },
    sub_breed: { type: String, required: false },
    // liked: { type: Boolean, default: false },
    // dislikes: Number,
    // rating: String,
    // genre: { type: String, enum: ['SCIFI', 'HORROR', 'COMEDY'] }
}, { collection: 'dogs' })

export default dogsSchema