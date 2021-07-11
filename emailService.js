const birthday = require("./birthday")
const nodemailer = require("nodemailer");


const sendMail = (info) => {
    let transporter = nodemailer.createTransport({});
    transporter.sendMail(info);

}

module.exports = { sendMail }