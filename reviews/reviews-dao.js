import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByDog = (did) =>
    reviewsModel
        .find({ did })
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({ author })