import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';
const HttpsProxyAgent = require('https-proxy-agent');

/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return await response.json()
  }
  else if (contentType.includes("application/text")) {
    return await response.text()
  }
  else if (contentType.includes("text/html")) {
    return await response.text()
  }
  else {
    return await response.text()
  }
}

async function handleRequest() {
  const init = {
    method: "GET",
  }
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', init)
  const results = await gatherResponse(response)
	var test = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  test = await test.text();
  return new Response(test, init)
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest())
})