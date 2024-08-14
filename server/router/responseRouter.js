const router = require("express").Router();

const { Form } = require("../models/formModel");
const { Response } = require("../models/responseModel");

router.post("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;
    const { response } = req.body;

    const newResponse = new Response({ formId, response });

    await newResponse.save();

    console.log(newResponse);

    res.send(newResponse);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

router.get("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;

    const response = await Response.find({ formId }).populate("formId");

    res.send(response);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const allResponses = await Response.find();

    if (!allResponses) {
      return res.status(404).send({ error: "No Response Found" });
    }

    res.send({ data: allResponses });
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

module.exports = router;
