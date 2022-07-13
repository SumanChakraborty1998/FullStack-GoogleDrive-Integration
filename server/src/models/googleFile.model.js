const mongoose = require("mongoose");

const googleFileSchema = new mongoose.Schema(
  {
    description: { type: String, required: false },
    embedUrl: { type: String, required: true },
    iconUrl: { type: String, required: true },
    id: { type: String, required: true },
    isShared: { type: Boolean, required: false },
    lastEditedUtc: { type: Number, required: false },
    mimeType: { type: String, required: false },
    name: { type: String, required: true },
    parentId: { type: String, required: false },
    serviceId: { type: String, required: false },
    sizeBytes: { type: Number, required: false },
    type: { type: String, required: false },
    url: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const GoogleFile = mongoose.model("googleFile", googleFileSchema);
module.exports = GoogleFile;
