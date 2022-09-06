# DevCon6 | Permissionless Perks
This repository is the hub to host and manage Token Negotiator's source files for the attestion mints on the DevCon6 Permissionless Perks portal. 

What is Permissionless Perks? They are benefits that attested ticket token holders can be claim on-chain, off-chain and in real-life. You can find the portal here: (Insert url) 

Permissionless Perks is built ontop of TokenScript which is a framework which improves functionality, security and usability of blockchain token. It creates a layer between a blockchain and user devices, adding information, rules and functionalites both onchain and offchain. 

For more information please visit: [https://tokenscript.org/](https://tokenscript.org/).

## Token Negotiator Examples

https://tokenscript.github.io/token-negotiator-gh-pages

This url is an example of Token Negotiator's capabilities to deliver ticket attestion with off-chain benefits. Each of examples by default are configured for use in a local environment.
See the README's inside each example for configuration and deployment.

## Running the examples via localhost

- cd into the root of this directory
- run `npm run install` to install all dependancies for the examples
- run `npm run start` which will serve all examples with a single command
- Or alternatively, serve each example seperately (see readme inside each directory for more information)

## Library Documentation

https://github.com/TokenScript/token-negotiator

## Quick Start with localhost

https://github.com/TokenScript/token-negotiator-examples/wiki/quick-start

## Quick Start with DevCon6 Tickets (for DevCon6 Bogota ticket holders)

This uses a custom example of the Token Negotiator (some of the API is not included inside the NPM package at this time).

[DevCon6 Development Website](https://www.figma.com/proto/hAnT86VzMkjIxNWOHgHxV4/Open-Ticket?page-id=2120%3A30425&node-id=2456%3A7596&viewport=1432%2C1769%2C0.25&scaling=min-zoom)

Using [HTTP-Server](https://www.npmjs.com/package/http-server), or any means you choose to serve this website, inspect the index.html
negotiation and authentication steps to read DevCon6 Bogota Tickets and complete the full attestation.

Example use cases include; using this example to make a third party website that uses the DevCon6 Ticket for an  entirely different purpose and/or extending the functionality of the power of the ticket at the event or virtually e.g. discounts on food and beverage, city attractions and offers, conference perks on workspaces, minting unique non-fungible tokens, etc. 

## Usage

[NPM Package](https://www.npmjs.com/package/@tokenscript/token-negotiator)

## Support

sayhi@smarttokenlabs.com

We look forward to hearing your feedback.
