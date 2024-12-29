// deno run deno2.js
// wrk -t1 -c256 -d30s http://127.0.0.1:3000 -> Requests/sec: 105837.75

import { serve } from "https://deno.land/std@0.207.0/http/mod.ts";

const HOST = "127.0.0.1";
const PORT = 3000;

console.log(`Server running at http://${HOST}:${PORT}`);

serve((req) => {
  return new Response("Hello, World!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}, { hostname: HOST, port: PORT });
