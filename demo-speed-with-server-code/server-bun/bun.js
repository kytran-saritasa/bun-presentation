// Install the `figlet` package first by running: bun add figlet
// Run the server: 'bun run bun.js'

import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync("Bun!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);