// bun run bun.js
// wrk -t1 -c256 -d30s http://127.0.0.1:3000 -> Requests/sec: 153950.90

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello, World!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
