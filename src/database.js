import mongoose, {mongo} from "mongoose";

mongoose.connect('mongodb+srv://230758:cupertino123@f-ank.4cakj.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=F-Ank')
.then((db)=> console.log('Mongodb Atlas Connected'))
.catch((error)=> console.error(error));

export default mongoose;