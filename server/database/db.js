import mongoose from "mongoose";

const DBConnection = async () => {
    const Database_Url = `mongodb+srv://tanayhisariya:tanayhisariya@filesharing.yxzpsey.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(Database_Url , { useNewUrlParser: true});
        console.log('Database Successfully Connected');
    } catch(error) {
        console.error('Error while connecting with the database' , error.message);
    }
}

export default DBConnection;