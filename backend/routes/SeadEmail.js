const nodemailer = require("nodemailer");
const { google } = require("googleapis");



  function sendEmail(email, resetLink){
    try {
      
      const CLIENT_ID ="365563839723-0jfoabebmd5lii33e35kgnfc90f3fnu4.apps.googleusercontent.com";
      const CLIENT_SECRET = "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";
      const REDIRECT_URL = "https://developers.google.com/oauthplayground"; // This should match the redirect URI you specified in the Google Developers Console

      const OAuth2 = google.auth.OAuth2;
  
      // Create OAuth2 client
      const oauth2Client = new OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URL // This should match the redirect URI you specified in step 2
      );
  
      // Generate the access token
      oauth2Client.setCredentials({
        refresh_token:
          "1//04wyWU22Skr7BCgYIARAAGAQSNwF-L9IrMt73pRrUH5U4Y1IRKr84nCR-vhp2FC9qJNG7AzNEDh6N9Lr6kKn0BrgeoLMWsAL7GAQ",
      });
  
      // Get the access token
      const accessToken = oauth2Client.getAccessToken();
  
      // Create the Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "noreplyofmassage@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken:
            "1//04wyWU22Skr7BCgYIARAAGAQSNwF-L9IrMt73pRrUH5U4Y1IRKr84nCR-vhp2FC9qJNG7AzNEDh6N9Lr6kKn0BrgeoLMWsAL7GAQ",
          accessToken: accessToken,
        },
      });
  
      // Set up email options and send the email
      const mailOptions = {
        from: "SBS Constructor  <noreplyofmassage@gmail.com>",
        to: email,
        subject: "Reset password instructions",
        html: `<!DOCTYPE html>
        <html>
        <head>
        <title>Reset password instructions</title>
        <style>
        /* Global Styles */
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h2 {
          color: #007bff;
        }
        
        .button {
          display: inline-block;
          background-color:#008CBA ;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
        }
        
        </style>
        </head>
        <body>
        <div class="container">
          <h2>Reset password</h2>
          <p>Click the button below to reset your password.</p>
          <p><a href=${resetLink} class="button">Reset Password</a></p>
          <p>If you didn’t request this email, you can safely ignore it.</p>
          <p>This code will expire in 10 minutes. If you do not receive this email, please contact support.</p>
        </div>
        </body>
        </html>
        `
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          // console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } catch (erorr) {
      console.log(erorr);
    }
  
 };

module.exports={sendEmail};
