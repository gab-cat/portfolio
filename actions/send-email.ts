'use server';


const nodemailer = require('nodemailer');
import { formSchema } from "@/schema/quote"


const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // Use SSL
    auth: {
        user: "support@gab-cat.me",
        pass: process.env.PASSWORD,
    },
});

export  const sendQuoteEmail = async (formData: any) => {
    const validatedData = formSchema.safeParse(formData);

    if (!validatedData.success) {
        console.log("Not valid");
        return {
            success: false,
            message: "Form is not valid"
        }
    }

    const { name, email, projectType, budget, timeline, features, customDescription } = validatedData.data;


// Transform features into a readable format
    let featuresList: string;

    if (typeof features === 'string') {
        // Custom project description case
        featuresList = `<p>Custom Project Description: ${features}</p>`;
    } else {
        // Predefined features case
        featuresList = '<ul>';
        for (const [feature, isSelected] of Object.entries(features)) {
            if (isSelected) {
                featuresList += `<li style="font-size: 14px; line-height: 1.6; margin-bottom: 5px;">${feature}</li>`;
            }
        }
        featuresList += '</ul>';
    }

// Build the email body
    const emailBody = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
    <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">
      <h2 style="color: #2a0e61; font-size: 24px; margin-bottom: 20px;">Your Quote Details</h2>
      <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
      <p style="font-size: 16px; color: #555; line-height: 1.6;">Thank you for requesting a quote with us. Here are the details you provided:</p>

      <div style="border-top: 1px solid #eaeaea; margin-top: 20px; padding-top: 20px;">
        <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px; color: #333;"><strong>Project Type:</strong> ${projectType}</p>
        <p style="font-size: 16px; color: #333;"><strong>Budget:</strong> $${budget}</p>
        <p style="font-size: 16px; color: #333;"><strong>Timeline:</strong> ${timeline} weeks</p>
        <p style="font-size: 16px; color: #333;"><strong>Selected Features:</strong></p>
        ${featuresList}
        ${customDescription ? `<p style="font-size: 16px; color: #333;"><strong>Additional Description:</strong> ${customDescription}</p>` : ''}
      </div>

      <p style="margin-top: 30px; font-size: 16px; color: #555;">We will review your request and get back to you shortly with more information or follow-up questions.</p>
      
      <div style="text-align: center; margin-top: 40px;">
        <p style="font-size: 16px; color: #888;">Best regards,<br><strong style="color: #333;">Gabriel Catimbang</strong></p>
      </div>
    </div>

    <footer style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">
      <p style="margin-bottom: 5px;">This is an automated message. Please do not reply.</p>
      <p style="margin-bottom: 0;">&copy; 2024 CyberNext Solutions, All rights reserved.</p>
    </footer>
  </div>
`;


    const mailOptions = {
        from: `Gabriel Catimbang <support@gab-cat.me>`,
        to: email,
        subject: "Your Quote Details",
        html: emailBody,
    };

    try {
        // Send the email using the transporter
        const result = await transporter.sendMail(mailOptions);
        console.log(result)
        return {
            success: true,
            message: "Quote sent"
        }
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Quote not sent"
        }
    }
}