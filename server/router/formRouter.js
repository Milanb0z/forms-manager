const router = require("express").Router();

const auth = require("../middleware/auth");
const { Form } = require("../models/formModel");

// Create Form
router.post("/new", auth, async (req, res) => {
  try {
    const user = req.user;
    const { name, description, customLink, questions } = req.body;

    const newForm = new Form({
      name,
      description,
      customLink,
      createdBy: user._id,
      questions,
    });

    const savedForm = await newForm.save();

    user.createdForms.push(savedForm._id);

    await user.save();

    res.send(savedForm);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Get All Forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find();

    res.send(forms);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Get Forms By ID
router.get("/id/:formId", async (req, res) => {
  try {
    const { formId } = req.params;

    console.log(formId);
    const fetchedForm = await Form.findOne({ customLink: formId })
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

// Get Forms By _id
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

//Update Form
router.put("/:formId", auth, async (req, res) => {
  try {
    const { formId } = req.params;
    const { name, description, customLink, isOpen } = req.body;

    console.log(isOpen);

    const updateFrom = await Form.findByIdAndUpdate(
      formId,
      {
        name,
        description,
        customLink,
        isOpen,
      },
      { new: true }
    );

    console.log(updateFrom);

    res.send(updateFrom);
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
