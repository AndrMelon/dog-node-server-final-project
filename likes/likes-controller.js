import { getDogs } from "../dogs/dogs-controller.js";
import users from "../users/users.js";
import * as likesDao from "./likes-dao.js";

let likes = [
    { _id: '123', user: '111', dog: '123' },
    { _id: '234', user: '111', dog: '234' },
    { _id: '345', user: '222', dog: '345' },
    { _id: '456', user: '333', dog: '345' },
]

const LikesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userLikesDog = async (req, res) => {
        const uid = req.params.uid
        const did = req.params.did

        const newLike = await likesDao.userLikesDog(uid, did)
        // likes.push(newLike)
        res.json(newLike)
    }

    const userLikesDogByUrl = async (req, res) => {
        const uid = req.params.uid
        const did = req.params.url

        const newLike = await likesDao.userLikesDogByUrl(uid, did)
        // likes.push(newLike)
        res.json(newLike)
    }

    const userUnlikesDog = async (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        const status = await likesDao.userUnlikesDog(uid, mid)

        // likes = likes.filter((l) => l.user !== uid && l.movie !== mid)
        res.send(status)
    }
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }
    const findDogsLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const dogs = await likesDao.findDogsLikedByUser(uid)
        res.json(dogs)
        // const movies = likes.filter((like) => like.user === uid)
        // const populatedMovies = populate({
        //     rawResults: movies,
        //     fieldToPopulate: 'movie',
        //     sourceData: getMovies(),
        //     sourceField: '_id'
        // })
        // res.json(populatedMovies)
    }
    const findUsersWhoLikeDog = async (req, res) => {
        const mid = req.params.mid
        const users = await likesDao.findUsersWhoLikeDog(mid)
        res.json(users)

        // const usersWhoLikeMovie = likes.filter((like) => like.movie === mid)
        // const populateUsers = populate({
        //     rawResults: usersWhoLikeMovie,
        //     fieldToPopulate: 'user',
        //     sourceData: users,
        //     sourceField: '_id'
        // })
        // res.json(populateUsers)
    }

    app.post('/users/:uid/likes/:did', userLikesDog)
    app.delete('/users/:uid/unlikes/:did', userUnlikesDog)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findDogsLikedByUser)
    app.get('/movies/:did/likes', findUsersWhoLikeDog)
    // app.put(updateLike)
}

export default LikesController;