const mongoose = require('mongoose');
const express = require('express');

const app = express();

//ROUTE
app.get('/project', (req, res) => {
  res.send('project route');
});

app.get('/users', (req, res) => {
  res.send('user route');
});

//SERVER
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.error('MongoDB connect error ❌', err));

app.listen(prompt, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
