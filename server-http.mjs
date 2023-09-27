import http from "node:http";

const host = "localhost";
const port = 8000;

import fs from "node:fs/promises";

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const urlParts = request.url.split("/");
    const path = urlParts[1]; // Obtenez le premier niveau du chemin

    switch (path) {
      case "":
      case "index.html":
        const indexContents = await fs.readFile("index.html", "utf8");
        response.writeHead(200);
        return response.end(indexContents);
      case "random.html":
        response.writeHead(200);
        return response.end(`<html><p>${Math.floor(100 * Math.random())}</p></html>`);
      case "random":
        const nb = parseInt(urlParts[2]); // Obtenez le nombre à partir de l'URL
        if (!isNaN(nb) && nb > 0) {
          const randomNumbers = Array.from({ length: nb })
            .map((_) => Math.floor(100 * Math.random()))
            .join("</li><li>");
          response.writeHead(200);
          return response.end(`<html><ul><li>${randomNumbers}</li></ul></html>`);
        } else {
          response.writeHead(400);
          return response.end(`<html><p>400: BAD REQUEST</p></html>`);
        }
      default:
        response.writeHead(404);
        return response.end(`<html><p>404: NOT FOUND</p></html>`);
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
console.log("NODE_ENV =", process.env.NODE_ENV);

// async function requestListener(request, response) {
//   response.setHeader("Content-Type", "text/html");
//   try {
//     const urlParts = request.url.split("/");
//     const path = urlParts[1]; 
//     const contents = await fs.readFile("index.html", "utf8");
//     switch (request.url) {
//       case "/index.html":
//         response.writeHead(200);
//         return response.end(contents);
//       case "/random.html":
//         response.writeHead(200);
//         return response.end(`<html><p>${Math.floor(100 * Math.random())}</p></html>`);
//       default:
//         response.writeHead(404);
//         return response.end(`<html><p>404: NOT FOUND</p></html>`);
//     }
//   } catch (error) {
//     console.error(error);
//     response.writeHead(500);
//     return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
//   }
// }
