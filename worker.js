export default {
  async fetch(request) {
    const html = await fetch("https://raw.githubusercontent.com/bizops-ops/CCTV/main/Index.html");
    const text = await html.text();
    return new Response(text, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
