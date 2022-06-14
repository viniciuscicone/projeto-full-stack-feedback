import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const transporter = nodemailer.createTransport({

   service: "hotmail",
   port: 587,
   auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
   },
   tls: {rejectUnauthorized: false}
})

