var express = require("express"),
    app = express(),
    port = process.env.PORT || 5000;

app.use(express.logger());

app.get('/', function(request, response) {
  response.send("<!doctype html><html><head><style>html{font-family:Century;}</style></head><body><hgroup><h1>Death Valet</h1><h2>A graphic novel by Ian McBurnie &amp; Dan Haak.</h2><h3>Coming soon...</h3></hgroup></body></html>\n");
});

app.listen(port, function() {
  console.log("Listening on " + port);
});