const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sinhvienSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    born: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sinhvienSchema.plugin(toJSON);
sinhvienSchema.plugin(paginate);

const Sinhvien = mongoose.model('Sinhvien', sinhvienSchema);

module.exports = Sinhvien;
