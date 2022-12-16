import * as dogDao from './dogs-dao.js'


export const getDogs = () => dogs;

const DogsController = (app) => {

    const createDog = async (req, res) => {
        const dog = req.body
        const actualDog = await dogDao.createDog(dog)
        res.send(actualDog)
    }
    const findAllDogs = async (req, res) => {
        const dogsInDatabase = await dogDao.findAllDogs()
        res.send(dogsInDatabase)
    }
    const findDogById = async (req, res) => {
        const did = req.params['did']
        const dog = await dogDao.findDogById(did)
        res.send(dog)
    }
    const updateDog = (req, res) => {
        const did = req.params['did']
        const dogUpdates = req.body
        const dogIndex = dogs.findIndex(
            (d) => d._id === did)
        dogs[dogIndex] = {
            ...dogs[dogIndex],
            ...dogUpdates
        }
        res.send(200)
    }
    const deleteDog = async (req, res) => {
        const did = req.params['did']
        const status = await dogDao.deleteDog(did)
        res.send(status)
    }

    app.post('/dogs', createDog)
    app.get('/dogs', findAllDogs)
    app.get('/dogs/:did', findDogById)
    app.put('/dogs/:did', updateDog)
    app.delete('/dogs/:did', deleteDog)

}

export default DogsController;