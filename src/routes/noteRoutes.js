import express from "express";
import noteController from "../controllers/noteController.js";
import authenticated from "../middlewares/authenticated.js";
import noteValidation from "../middlewares/noteValidation.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_FOLDER + "/" });

router
  .route("/")
  .get(authenticated, noteController.getNotes)
  .post(authenticated, upload.single("image"), noteController.addNote);

// router.post("/image", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   console.log(req.body);
//   if (req.file) {
//     res.send(process.env.HOST + "/" + req.file.path);
//   } else {
//     res.send("no file");
//   }
// });

export default router;
