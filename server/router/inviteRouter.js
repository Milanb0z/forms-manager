const router = require("express").Router();
const sgMail = require("@sendgrid/mail");

const { Form } = require("../models/formModel");
const { Invite } = require("../models/inviteModel");

sgMail.setApiKey(process.env.SENDGRID_KEY);

router.get("/:formId", async (req, res) => {
  try {
    const { formId } = req.params;

    const fetchedForm = await Form.findById(formId)
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
        text: fetchedForm.description,
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
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

module.exports = router;
