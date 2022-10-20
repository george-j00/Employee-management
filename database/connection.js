import mongoose from 'mongoose';


const MongoConnect = async () => {

  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI)
    if (connection.readyState == 1) {
      console.log('connected ');
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export default MongoConnect