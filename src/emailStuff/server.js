const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mreisdorf9717@gmail.com',
        pass: 'LdV1500AC2'
    }
});


contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Ready to Send');
    }
})


module.exports = {router, contactEmail};