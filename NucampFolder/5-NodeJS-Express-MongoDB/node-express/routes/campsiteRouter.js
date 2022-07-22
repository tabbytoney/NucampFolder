const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the campsites to you');
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
  })
  .delete((req, res) => {
    res.end('Deleting all campsites');
  });

module.exports = campsiteRouter;

// The first long way to do it:
// app.all('/campsites', (req, res, next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// });

// app.get('/campsites', (req, res) => {
//   res.end('Will send all the campsites to you');
// });

// app.post('/campsites', (req, res) => {
//   res.end(
//     `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
//   );
// });

// app.put('/campsites', (req, res) => {
//   res.statusCode = 403;
//   res.end('PUT operation not supported on /campsites');
// });

// app.delete('/campsites', (req, res) => {
//   res.end('Deleting all campsites');
// });
