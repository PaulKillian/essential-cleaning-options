// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const port = process.env.PORT || 8086;
const app = express();
const compression = require('compression');
const URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URI : process.env.REACT_APP_PROD_URI;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  express.static('public', {
    etag: true,
    lastModified: true,
    setHeaders: (res, path) => {
      const hashRegExp = new RegExp('\\.[0-9a-f]{8}\\.');

      if (path.endsWith('.js')) {
        res.setHeader('Cache-Control', 'max-age=31536000');
      } else if (hashRegExp.test(path)) {
        res.setHeader('Cache-Control', 'max-age=31536000');
      }
    }
  })
);
app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post(`${URL}/estimate`, (req, res) => {
  const gmail = process.env.GMAIL_PASS.toString();
  const user = process.env.GMAIL_USER.toString();
  const transport = nodemailer.createTransport({
    host: 'smtp.mail.gmail.com',
    port: 587,
    service: 'gmail',
    secure: false,
    auth: {
      user: user,
      pass: gmail
    },
    debug: false,
    logger: true
  });
  const mailAppearance = {
    from: `${req.body.email}`,
    to: 'psk65lava@gmail.com',
    subject: 'New estimate message',
    text: `
      Name: ${req.body.name}
      Email: ${req.body.email}
      Subject: ${req.body.subject}
      Rooms: ${req.body.make}
      Stairs: ${req.body.stairs}
      Pets: ${req.body.pets}
      Estimate: ${req.body.estimate}
      Time: ${req.body.time}
      Date: ${req.body.date}
      BestTime: ${req.body.bestTime}
      BestDate: ${req.body.bestDate}`
  };
  transport.sendMail(mailAppearance, (error, response) => {
    if (error) {
      res.json({ error: 'error' });
    } else {
      res.json({ success: 'success' });
    }
  });
});

app.post(`${URL}/auto-estimate`, (req, res) => {
  const gmail = process.env.GMAIL_PASS.toString();
  const user = process.env.GMAIL_USER.toString();
  const transport = nodemailer.createTransport({
    host: 'smtp.mail.gmail.com',
    port: 587,
    service: 'gmail',
    secure: false,
    auth: {
      user: user,
      pass: gmail
    },
    debug: false,
    logger: true
  });
  const mailAppearance = {
    from: `${req.body.email}`,
    to: 'psk65lava@gmail.com',
    subject: 'New auto estimate message',
    text: `
      Name: ${req.body.name}
      Email: ${req.body.email}
      Subject: ${req.body.subject}
      Make: ${req.body.make}
      Model: ${req.body.model}
      Year: ${req.body.year}
      Color: ${req.body.color}
      Time: ${req.body.time}
      Date: ${req.body.date}
      BestTime: ${req.body.bestTime}
      BestDate: ${req.body.bestDate}`
  };
  transport.sendMail(mailAppearance, (error, response) => {
    if (error) {
      res.json({ error: 'error' });
    } else {
      res.json({ success: 'success' });
    }
  });
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
  console.log(`Listening on port ${port}`);
});
