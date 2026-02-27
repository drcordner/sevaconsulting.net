// local-web-server (ws) config – run with: npx local-web-server
// Makes /clarity and /clarity/ serve clarity.html (same behaviour as Netlify _redirects)
module.exports = {
  rewrite: [
    { from: "/clarity", to: "/clarity.html" },
    { from: "/clarity/", to: "/clarity.html" },
  ],
};
