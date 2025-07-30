import http from 'http';

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end(JSON.stringify({message:"Hello world ! kaisa chal rha hai3"}));
});

server.listen(PORT, () => {
  console.log('Server is running at http://localhost:3000/');
});

