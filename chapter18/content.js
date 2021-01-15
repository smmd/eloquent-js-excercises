const url = "https://eloquentjavascript.net/author";
const fetch = require('node-fetch');

async function showContent(type) {
  let resp = await fetch(url, {
    headers: {
      accept: type
    }
  });

  console.log(`--------- ${type} -----------`);
  console.log(`${await resp.text()}\n`);
}

showContent("text/plain");
showContent("text/html");
showContent("application/json");
showContent("application/rainbows+unicorns");
