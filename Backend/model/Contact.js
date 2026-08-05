const mongoose = require("mongoose");
// Grab your MongoDB string securely from environment variables
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
  .then(() => {
    console.log("🚀 ===================================== 🚀");
    console.log("🟢 DATABASE STATUS: MongoDB connected successfully!");
    console.log("🚀 ===================================== 🚀");
  })
  .catch((err) => {
    console.log("❌ ===================================== ❌");
    console.log("🔴 DATABASE STATUS: Connection failed!");
    console.error(err.message);
    console.log("❌ ===================================== ❌");
  });

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);