//backend server; not working yet...

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.static(__dirname +'../server/index.js'));

app.post('/send', (req, res) => {
	const output = `
		<p>You have a new contact request</p>
		<h3>Contact Details</h3>
		<ul>
			<li>Name: ${req.body.name}</li>
			<li>Email: ${req.body.email}</li>
		</ul>
		<h3>Message:</h3>
		<p>${req.body.message}</p>
	`;

	// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'codingpotatohead@gmail.com', // generated ethereal user
            pass: 'dOmoman1!1'  // generated ethereal password
        },
        tls: {
        	rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Portfolio Contacts" <codingpotatohead@gmail.com>', // sender address
        to: 'stung89@gmail.com', // list of receivers
        subject: 'Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index', {msg: 'Email has been sent'});

    });
});



app.listen(3000, () => console.log('backend server has started'));