const router = require("express").Router();

const { Form } = require("../models/formModel");

router.post("/new", async (req, res) => {
  try {
    const { name, description, questions } = req.body;

    const newForm = new Form({
      name,
      description,
      createdBy: "64fdaaec0096d86deaf0aed9",
      questions,
    });

    const savedForm = await newForm.save();

    res.send(savedForm);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

module.exports = router;
