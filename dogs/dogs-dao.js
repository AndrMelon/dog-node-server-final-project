import dogsModel from "./dogs-model.js";

export const findAllDogs = async () => {
    const dogs = await dogsModel.find()
    return dogs
}

export const findDogById = async (did) => {
    const dog = await dogsModel.findById(did)
    return dog
}

export const createDog = async (movie) => {
    const actualInsertedDog = await dogsModel.create(movie)
    return actualInsertedDog
}
export const deleteDog = async (did) => {
    const status = await dogsModel.deleteOne({ _id: did })
    return status
}
export const updateDog = () => { }