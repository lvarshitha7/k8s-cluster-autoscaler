const express = require('express');
const app = express();
const PORT =  3000;
const os = require('os');

app.use(express.static('public'));

// Shows which pod handled the request
app.get('/api/info', (req, res) => {
  res.json({
    podName: process.env.HOSTNAME,
    podIP: os.networkInterfaces(),
    node: os.hostname(),
    message: 'Request handled by this pod'
  });
});

app.get('/api/health', (req, res) => {
  let x = 0;
  for (let i = 0; i < 1000000; i++) x += i;
  res.json({ 
    status: 'ok', 
    load: x,
    podName: process.env.HOSTNAME  // Shows which pod responded
  });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
