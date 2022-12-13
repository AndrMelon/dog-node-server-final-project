import likesModel from "./likes-model.js";

export const userLikesDog = async (uid, did) => {
    return await likesModel.create({ user: uid, dog: did })
}
export const userUnlikesDog = async (uid, did) => {
    return await likesModel.deleteOne({ user: uid, dog: did })
}
export const findDogsLikedByUser = async (uid) => {
    return await likesModel
        .find({ user: uid }, { user: false })
        .populate('movie', 'title')
        .exec()
}
export const findUsersThatLikeDog = async (did) => {
    return await likesModel.find({ dog: did }, { dog: false })
        .populate('user', 'username')
        .exec()
}
export const findAllLikes = async () =>
    await likesModel.find()
