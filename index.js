// start your server here

const server = require('./api/server');

const port = 4000;

server.listen(port, () => {
    console.log(`The server is running and listening on port ${port}.`);
});
