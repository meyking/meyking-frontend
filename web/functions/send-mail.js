const nodemailer = require('nodemailer')
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};
const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}
exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { firstName, lastName, subject, message, company, email, phone } = data
    console.log("transporter was created successfully")
    const [cFirstName, cLastName, cCompany, cPhone, cEmail, cMessage] = [firstName, lastName, company, phone, email, message].map(escapeHtml)
    const html = `
    <h2> Information about Request </h2>
    <p>
    First name: ${cFirstName} <br/>
    Last name : ${cLastName} <br/>
    Company : ${cCompany} <br/>
    Phone Number: ${cPhone} <br/>
    Email: ${cEmail} <br/>
    </p>
    <hr/>
    <h2> User Message </h2>
    <p>
    ${cMessage}
    </p> <br/>
    Sent at ${new Date().toString()}
    `
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.WEBSITE_EMAIL,
      subject,
      html
    }
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: error.message
    }
  }
};
