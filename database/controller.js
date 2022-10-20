import Users from "../models/schema";

// get method 
export const getUsers = async (req, res) => {
    try {
        const users = await Users.find({})
        res.status(200).json({ name: 'GET get', users })
    } catch (error) {
        console.log(error);
    }
}
// GET single data.
export const getUser = async (req, res) => {
    try {
        
        const { userId } = req.query
        const user = await Users.findById(userId);
        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({ error: "not user found" })
    }
}

// post method 
export const postUser = async (req, res) => {
    try {
        const formData = req.body
        await Users.create(formData, (err, data) => {
            res.status(200).json(data)
        })
    } catch (error) {
        console.log(error);
    }
}

//put method
export const putUser = async (req, res) => {
    try {
        const { userId } = req.query
        const formData = req.body
        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
        }
        res.status(404).json({ error: " user not found" })
    } catch (error) {
        console.log(error);
    }
}

//delete method.
export const delUser = async (req, res) => {

    try {
        const { userId } = req.query

        if (userId) {
            const user = await Users.findByIdAndDelete(userId);
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json({ error: " can't delete" })
    }
}