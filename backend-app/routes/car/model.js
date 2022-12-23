
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  modelName: {
    type: String,
  },
  color: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  contact: {
    type: String,
  },
  year: {
    type: String,
  },

},
  {
    timestamps: true
  });


module.exports = mongoose.model('car', carSchema);