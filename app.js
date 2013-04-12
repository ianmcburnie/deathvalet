var http = require("http"),
    port = process.env.PORT || 5000;
    
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<!doctype html><hgroup><h1>Death Valet</h1><h2>A graphic novel by Ian McBurnie &amp; Dan Haak.</h2><h3>Coming soon...</h3></hgroup>\n");
}).listen(port, "127.0.0.1");
console.log("Server running at http://127.0.0.1:"+port);