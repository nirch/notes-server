import Ajv from "ajv";
import noteSchema from "../data/noteSchema.js";

const ajv = new Ajv();
const validate = ajv.compile(noteSchema);

function noteValidation(req, res, next) {
  const valid = validate(req.body);
  if (valid) {
    next();
  } else {
    res.status(400).send(validate.errors);
  }
}

export default noteValidation;
