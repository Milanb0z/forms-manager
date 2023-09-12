const router = require("express").Router();

const auth = require("../middleware/auth");
const { Form } = require("../models/formModel");

// Create Form
router.post("/new", auth, async (req, res) => {
  try {
    const { name, description, questions } = req.body;

    const newForm = new Form({
      name,
      description,
      createdBy: req.user._id,
      questions,
    });

    const savedForm = await newForm.save();

    res.send(savedForm);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Get All Forms
router.get("/", async (req, res) => {
  try {
    console.log(req.user);
    const forms = await Form.find();

    res.send(forms);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Get Forms By ID
router.get("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;
    const fetchedForm = await Form.findById(formId)
      .populate("createdBy")
      .select("-createdBy.password");

    if (!fetchedForm) {
      return res.status(404).send({ error: "From Not Found" });
    }

    res.send(fetchedForm);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Delete Form
router.delete("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;

    const deletedFrom = await Form.findByIdAndDelete(formId);

    res.send(deletedFrom);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

module.exports = router;
