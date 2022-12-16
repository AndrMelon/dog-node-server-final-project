import * as dao from "./reviews-dao.js"
import { findReviewsByAuthor, findReviewsByDog } from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const findReviewsByDog = async (req, res) => {
        const did = req.params.did
        const reviews = await dao.findReviewsByDog(did)
        res.json(reviews)
    }
    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }
    app.post('/api/reviews', createReview)
    app.get('/api/dogs/:did/reviews', findReviewsByDog)
    app.get('/api/users/:author/reviews', findReviewsByAuthor)
}
export default ReviewsController