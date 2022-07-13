const express = require("express");
const router = express.Router();

const GoogleFile = require("../models/googleFile.model");

router.get("/get", async (req, res) => {
  const googleFiles = await GoogleFile.find().lean().exec();
  return res.status(200).json({ data: googleFiles });
});

router.post("/save", async (req, res) => {
  const data = await GoogleFile.create({
    description: req.body.description,
    embedUrl: req.body.embedUrl,
    iconUrl: req.body.iconUrl,
    id: req.body.id,
    isShared: req.body.isShared,
    lastEditedUtc: req.body.lastEditedUtc,
    mimeType: req.body.mimeType,
    name: req.body.name,
    parentId: req.body.parentId,
    serviceId: req.body.serviceId,
    sizeBytes: req.body.sizeBytes,
    type: req.body.type,
    url: req.body.url,
  });
  return res.status(201).json({ sucess: true, data: data });
});

module.exports = router;
