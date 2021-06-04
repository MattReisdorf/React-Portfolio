const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const { MY_EMAIL, MY_PASS } = require("./emailstuff");

PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MY_EMAIL,
      pass: MY_PASS,
    },
  });
  
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});


router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: MY_EMAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});