const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
require('dotenv').config();

const validateRequest = require('./middlewares/validateRequest');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

app.post('/api/send-email', validateRequest, async (req, res) => {
    const { name, phone, email, service, message } = req.body;

    const emailHtml = `
        <h2>Новая заявка</h2>
        <p>Вы получили новую заявку с формы:</p>
        <table border="1" cellpadding="5">
            <tr><th>Поле</th><th>Значение</th></tr>
            <tr><td>Ваше имя</td><td>${name || 'Не указано'}</td></tr>
            <tr><td>Телефон</td><td>${phone || 'Не указано'}</td></tr>
            <tr><td>E-mail</td><td>${email || 'Не указано'}</td></tr>
            <tr><td>Услуга</td><td>${service || 'Не указано'}</td></tr>
            <tr><td>Сообщение</td><td>${message || 'Не указано'}</td></tr>
        </table>
        <p>Пожалуйста, свяжитесь с клиентом в ближайшее время.</p>
    `;

    try {
        await transporter.sendMail({
            from: `"Admin" savchik.official@gmail.com`,
            to: "savchik.official@gmail.com",
            subject: "Новая заявка на обслуживание!",
            html: emailHtml,
        });

        res.status(200).json({ message: 'Email успешно отправлен' });
    } catch (error) {
        console.error('Ошибка при отправке email:', error);
        res.status(500).json({ message: 'Ошибка при отправке email' });
    }
});

app.listen(PORT, () => console.log("Server ready on port 3000."));

module.exports = app;