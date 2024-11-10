const router = require("express").Router();
const sgMail = require("@sendgrid/mail");

const { Form } = require("../models/formModel");
const { Invite } = require("../models/inviteModel");
const { Response } = require("../models/responseModel");

sgMail.setApiKey(process.env.SENDGRID_KEY);

// Get Form from Invite
router.get("/solve/:inviteId", async (req, res) => {
  try {
    const { inviteId } = req.params;
    const fetchedInvite = await Invite.findById(inviteId);

    if (!fetchedInvite) {
      return res.status(404).send({ error: "Invite Not Found" });
    }

    if (fetchedInvite.isSolved) {
      return res.status(401).send({ error: "Invite Already Solved" });
    }

    const fetchedForm = await Form.findById(fetchedInvite.formId)
      .populate("createdBy")
      .populate("invites")
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

router.post("/end/:inviteId", async (req, res) => {
  try {
    const { inviteId } = req.params;
    const { response } = req.body;

    const fetchedInvite = await Invite.findById(inviteId);

    if (!fetchedInvite) {
      return res.status(404).send({ error: "Invite Not Found" });
    }

    if (fetchedInvite.isSolved) {
      return res.status(401).send({ error: "Invite Already Solved" });
    }

    const newResponse = new Response({
      formId: fetchedInvite.formId,
      response,
    });

    const savedResponse = await newResponse.save();

    fetchedInvite.response = savedResponse._id;
    fetchedInvite.isSolved = true;

    await fetchedInvite.save();

    res.send(savedResponse);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Get Form With Invites
router.get("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;

    const fetchedForm = await Form.findById(formId)
      .populate("createdBy")
      .populate("invites")
      .populate("responses")
      .select("-createdBy.password");

    if (!fetchedForm) {
      return res.status(404).send({ error: "From Not Found" });
    }

    res.send({ form: fetchedForm });
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Resend Mail
router.get("/resend/:inviteId", async (req, res) => {
  try {
    const { inviteId } = req.params;
    const fetchedInvite = await Invite.findById(inviteId);

    if (!fetchedInvite) {
      return res.status(404).send({ error: "Invite Not Found" });
    }

    if (fetchedInvite.isSolved) {
      return res.status(401).send({ error: "Invite Already Solved" });
    }

    const fetchedForm = await Form.findById(fetchedInvite.formId)
      .populate("createdBy")
      .populate("invites")
      .select("-createdBy.password");

    const messageMail = {
      to: fetchedInvite.email, // Change to your recipient
      from: "bozic411@gmail.com", // Change to your verified sender
      subject: fetchedForm.name,
      templateId: "d-12e9467c03b44f3eac6493d7655cbf68",
      dynamicTemplateData: {
        username: fetchedForm.createdBy.username,
        solveLink: `${process.env.CLIENT_URL}/invite/${inviteId}`,
        description: fetchedForm.description,
        title: fetchedForm.title,
      },
    };

    sgMail
      .send(messageMail)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });

    res.send({ message: "Email Sent" });
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

// Add Invite
router.post("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;
    const { invites } = req.body;
    const inviteData = invites.map((email) => ({ formId, email }));

    const fetchedForm = await Form.findById(formId);

    if (!fetchedForm) {
      return res.status(404).send({ error: "From Not Found" });
    }

    const invitesArr = await Invite.insertMany(inviteData);

    invitesArr.forEach((invite) => {
      const messageMail = {
        to: invite.email, // Change to your recipient
        from: "bozic411@gmail.com", // Change to your verified sender
        subject: fetchedForm.name,
        templateId: "d-12e9467c03b44f3eac6493d7655cbf68",
        dynamicTemplateData: {
          username: fetchedForm.createdBy.username,
          solveLink: `${process.env.CLIENT_URL}/invite/${inviteId}`,
          description: fetchedForm.description,
          title: fetchedForm.title,
        },
      };

      sgMail
        .send(messageMail)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });
    });

    invitesArr.forEach(({ _id }) => {
      fetchedForm.invites.push(_id);
    });

    const savedForm = await fetchedForm.save();

    console.log(invitesArr);

    res.send(savedForm);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

//Delete Invite
router.delete("/:inviteId", async (req, res) => {
  try {
    const { inviteId } = req.params;

    const deletedInvite = await Invite.findByIdAndDelete(inviteId);

    res.send(deletedInvite);
  } catch (error) {
    console.log({ error });
    res.status(error).send({ error });
  }
});

module.exports = router;
