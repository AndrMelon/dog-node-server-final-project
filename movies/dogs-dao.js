import moviesModel from "./movies-model.js";

export const findAllDogs = async () => {
    const dogs = await dogsModel.find()
    return dogs
}
export const createDog = async (movie) => {
    const actualInsertedDog = await dogsModel.create(movie)
    return actualInsertedDog
}
export const deleteDog = async (url) => {
    const status = await dogsModel.deleteOne({ _id: mid })
    return status
}
export const updateDog = () => { }