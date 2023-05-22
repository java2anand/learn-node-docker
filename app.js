const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321;

app.get('/',(req,res) => {
    res.status(200);
    res.send("helooo");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT} `));