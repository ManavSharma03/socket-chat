const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = app.getRequestHandler();

const { Server } = require("socket.io");

const { createServer } = require("http");
const { parse } = require("url");

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });

  const io = require("socket.io")(server);
  console.debug("\n\n\n\n");
  console.debug({ io });
  console.debug("\n\n\n\n");
  global._io = io;
  io.on("connection", (socket) => {
    console.log("socket connected ");
  });
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Server is running');
// });

// server.listen(3000, (req, res) => {
//   console.log("listen at 3000!");
// });

// const io = new Server(server);

// module.exports = {io};
