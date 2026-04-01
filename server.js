const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/api/health', (req, res) => {
// Simulate CPU load
let x = 0;
for (let i = 0; i < 1000000; i++) x += i;
res.json({ status: 'ok', load: x });
});
app.listen(PORT, () => console.log(`Running on port ${PORT}`));