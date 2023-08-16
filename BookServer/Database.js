const mongoose = require("mongoose")
//   const uri = "mongodb://localhost:27017/300363696-priyanka";
 const uri = "mongodb+srv://priyankap1:123@cluster0.gjdzsco.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

module.exports = connection;