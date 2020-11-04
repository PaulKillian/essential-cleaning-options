require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('src'));
app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post('/api/estimate', (req, res) => {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'psk65lava@gmail.com',
      pass: '584ad599c82ff5'
    }
  });
  const mailAppearance = {
    from: 'ken@ymail.com',
    to: 'psk65lava@gmail.com',
    subject: 'New estimate message',
    text:
      `
      Name: ${req.body.name}
      Email: ${req.body.email}
      Subject: ${req.body.subject}
      Message: ${req.body.message}`
  };
  transport.sendMail(mailAppearance, (error, response) => {
    if (error) {
      res.render('contact-failure');
    } else {
      res.render('contact-success');
    }
  });
  res.writeHead(301, { Location: 'index.html' });
  res.end();
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
