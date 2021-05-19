import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const creatUser = (req, res) => {
    const user = req.body
    // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    // const userWithId = { ...user, id: userId}

    // users.push(userWithId)
    users.push({...user, id: uuidv4() })

    res.send(`user ${user.firstName} ${user.lastName} added`)
}

export const getUserById = (req, res) => {
    const id = req.params.id

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}


export const deleteUser = (req, res) => {
    const id = req.params.id
    
    // ______ filter (if userid != id remove item from array, otherwise keep the item)
    users = users.filter((user) => user.id != id)

    res.send(`user with id ${id} has been succesfully deleted`)
}


export const updateUser = (req, res) =>{
    // const id = req.params.id
    const { id } = req.params
    const {firstName, lastName, age} = req.body


    const userToBeUpdate = users.find((user) => user.id === id)

    if(firstName) userToBeUpdate.firstName = firstName
    if(lastName) userToBeUpdate.lastName = lastName
    if(age) userToBeUpdate.age = age

    res.send(`user with id ${id} has been updated`)
}
