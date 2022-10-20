import { model, models, Schema } from "mongoose";


var userSchema = new Schema({
    name:String,
    email:String,
    salary:String,
    dob:String,
    status:String,
})

const Users = models.user || model('user',userSchema)

export default Users