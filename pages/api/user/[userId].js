import MongoConnect from "../../../database/connection";
import { delUser, getUser, putUser } from "../../../database/controller";

export default function handler(req, res) {

    MongoConnect()

    const { method } = req

    switch (method) {
        case 'GET':
            getUser(req, res)
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
