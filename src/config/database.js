
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://itsaparnam_db_user:gzRfWavofxzdmy6G@cluster0.jgb615d.mongodb.net/?tls=true&tlsInsecure=true",
  );
};

module.exports = connectDb;
