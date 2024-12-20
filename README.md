# Unhandled Exception Crash in Node.js HTTP Server

This repository demonstrates a common yet easily overlooked bug in Node.js: unhandled exceptions crashing a server under high load. The bug occurs because the server's `requestListener` function doesn't gracefully handle potential errors, causing Node.js to terminate unexpectedly. 

## Bug Description

A simple HTTP server is created using the `http` module.  Under normal conditions it responds with "Hello, World!". However, if subjected to a large number of concurrent requests (e.g., using a load testing tool), it might crash without warning due to unhandled exceptions.  

## Bug Solution
The solution involves adding robust error handling within the `requestListener` using `try...catch` blocks to prevent Node.js from crashing.  The improved server logs errors and sends an appropriate response to the client even when an error occurs. 

## How to reproduce the bug
1. Clone this repository.
2. Run `node bug.js`.
3. Use a load testing tool such as k6 or artillery to send a large number of concurrent requests to `http://localhost:3000`. Observe the server crashing.

## How to run the solution
1. Run `node bugSolution.js`
2. Use a load testing tool such as k6 or artillery to send a large number of concurrent requests to `http://localhost:3000`.  Observe the server's graceful handling of errors. 