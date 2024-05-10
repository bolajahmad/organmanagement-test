const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const uri = process.env.DATABASE_ACCESS || "";

const connectDB = async () => {
  try {
    mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("DB Connected Successfully")
    );
  } catch (error) {
    console.log("error:", error);
  }
};

module.exports = connectDB;

// let _db;

// module.exports = {

//   connectToServer: function( callback ) {
//     MongoClient.connect(process.env.DATABASE_ACCESS, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     } , (err, client) => {
//         _db = client.db("organmanagement")
//         return callback(err)
//     });
//   },

//   getDb: function() {
//     return _db;
//   }
// };
