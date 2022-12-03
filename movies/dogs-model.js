import mongoose from "mongoose";
import dogsSchema from "./dogs-schema.js";

const dogsModel = mongoose.model('DogModel', dogsSchema)

export default dogsModel