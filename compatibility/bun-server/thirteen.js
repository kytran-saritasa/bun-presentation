// Get the same package.json file from "../node-server/package.json"
// Install dependencies using Bun, run 'bun install'
// Send GET request to the route /:number to check if the number is 13
// Run the server using Bun: 'bun run thirteen.js' -> Works great
// Run the server using Node: 'node thirteen.js' -> Gets error
// So we can see that Bun is compatible with NodeJS but not vice versa

const is = require('is-thirteen');

Bun.serve({
    port: 3000,
    fetch(req) {
        // Extract the pathname (excluding query string)
        const numberParam = new URL(req.url, `http://${req.headers.host}`).pathname.slice(1);
        const parsedNumber = parseInt(numberParam, 10);

        if (isNaN(parsedNumber)) {
            return new Response('Invalid input. Please provide a valid number.', { status: 400 });
        }

        return new Response(
            is(parsedNumber).thirteen() ? 'The number is 13' : 'The number is not 13',
            { status: 200 }
        );
    },
});

console.log(`Server is running on http://localhost:3000`);