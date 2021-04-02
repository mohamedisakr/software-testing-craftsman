process.stdin.resume();
process.stdin.setEncoding("utf8");

/*
async function read(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

const params = await read(process.stdin);
console.log(params);
*/
