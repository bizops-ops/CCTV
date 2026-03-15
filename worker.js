import html from "./Index.html";

export default {
  async fetch(request) {
    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
