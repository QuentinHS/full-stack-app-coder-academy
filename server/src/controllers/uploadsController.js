const path = require('path');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { cloudinary } = require("../utils/cloudinary")
const fs = require('fs');


const uploadTaskImage = async (req, res) => {
  console.log(req.files)
  const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "file-upload",
  })
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
}


module.exports = {
  uploadTaskImage,
}
