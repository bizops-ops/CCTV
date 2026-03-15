addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const html = `<!DOCTYPE html>
<html>
<head><title>CCTV Shield</title></head>
<body><h1>Test - Worker is working!</h1></body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  });
}
