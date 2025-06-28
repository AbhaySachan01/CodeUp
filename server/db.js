const mongoose = require("mongoose");
async function connect (){
    try {
        await mongoose.connect(process.env.DB); 
        console.log("Connect ho gaya");
    } catch (error) {
        console.log("Error:", error);
    }
}



module.exports = connect;
