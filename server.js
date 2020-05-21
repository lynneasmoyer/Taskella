const express = require('express'),
    cors = require('cors'),
    port = 8000,
    app = express(),
    server = app.listen(port, () => {
    console.log(`Listening at Port ${server.address().port}`)
});

app.use(cors(), express.json(), express.urlencoded({ extended: true })); 

require('./server/config/database.config'); 
require('./server/routes/tasks.routes')(app);