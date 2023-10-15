// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json()); // Parse JSON requests

// // Your existing routes...

// app.post('/api/contact', async (req, res) => {
//   const formData = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'GMAIL',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: 'shivamnarkar04@gmail.com', // Replace with your email
//     subject: 'New Contact Form Submission',
//     text: `
//       Name: ${formData.client_name}
//       Email: ${formData.client_email}
//       Subject: ${formData.client_phone}
//       Message: ${formData.client_message}
//     `,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending email' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const port = 3000;



// app.use(cors());
// // Middleware to parse the form data
// app.use(bodyParser.urlencoded({ extended: true }));

// require('dotenv').config();


// // Serve the HTML form
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'newproperty.html'));
// });

// // Handle form submission
// app.post('/api/properties', (req, res) => {
//   const formData = req.body;

//   // Configure nodemailer to send the email
//   const transporter = nodemailer.createTransport({
//     service: 'GMAIL', // e.g., 'Gmail'
//     auth: {
//         user: process.env.GMAIL_USER, // Using environment variables
//         pass: process.env.GMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: 'tt7302398@gmail.com',
//     to: 'tt7302398@gmail.com',
//     subject: 'New Property Submission',
//     text: `Listing Type: ${formData.listing_type}\nProperty Type: ${formData.property_type}\nText Color: ${formData.text_color}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
   
//     if (error) {
//       console.error(error);
//       res.send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
//////////////////////////////////////////////////////////////////////


////og
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.js'));
});

app.post('/api/properties', (req, res) => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
        service: 'GMAIL',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
        debug: true, // Enable debug mode
      });
      

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'shivamnarkar04@gmail.com',
        subject: 'New UDS-Form Submission',
        text: `Name: ${formData.client_name}\nEmail: ${formData.client_email}\nPhone: ${formData.client_phone}\nMessage: ${formData.client_message}`,
    };




    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully </br> <a href="http://127.0.0.1:5500/newproperty.html">Go back</a>');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
