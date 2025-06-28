const mongoose = require("mongoose");
async function connect (){
    try {
        await mongoose.connect(process.env.DB); 
        console.log("Connected");
    } catch (error) {
        console.log("Error:", error);
    }
}



module.exports = connect;
