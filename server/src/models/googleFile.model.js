const mongoose = require("mongoose");

const googleFileSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    embedUrl: { type: String, required: true },
    iconUrl: { type: String, required: true },
    id: { type: String, required: true },
    isShared: { type: Boolean, required: true },
    lastEditedUtc: { type: Number, required: true },
    mimeType: { type: String, required: true },
    name: { type: String, required: true },
    parentId: { type: String, required: true },
    serviceId: { type: String, required: true },
    sizeBytes: { type: Number, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const GoogleFile = mongoose.model("googleFile", googleFileSchema);
module.exports = GoogleFile;
