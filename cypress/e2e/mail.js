const nodemailer = require("nodemailer");
let thisShouldBeWeather = Cypress.env('Weather')
// Import NodeMailer (after npm install)

async function main() {
// Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: 'adriang0811@gmail.com', // Your email address
      pass: 'zgyg yprl vkza ehod', // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: '"You" <adriang0811@gmail.com>',
    bcc: "adrian.grecu@rocketmail.com",
    subject: "Asta ar fi trebuit sa fie vremea",
    html: "Afara sunt " + thisShouldBeWeather + " grade" ,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));