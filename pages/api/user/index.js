import MongoConnect from "../../../database/connection";
import { delUser, getUsers, postUser, putUser } from "../../../database/controller";


export default function handler(req, res) {

    MongoConnect()

    const { method } = req

    switch (method) {
        case 'GET':
            getUsers(req, res)
            break;
        case 'POST':
            postUser(req, res)
            break;
        case 'PUT':
            putUser(req, res)
            break;
        case 'DELETE':
            delUser(req, res)
            break;

        default:
            res.status(405).json({ error: 'default error' })
            break;
    }
}
