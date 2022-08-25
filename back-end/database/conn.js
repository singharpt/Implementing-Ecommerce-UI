const mongoose = require('mongoose');
const db = "mongodb+srv://07arpit:OtO9TjB8jNNwXBsj@cluster0.pevcnmw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection started")).catch((error)=>console.log('ERROR : ',error.message));