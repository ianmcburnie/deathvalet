var express = require("express"),
    app = express(),
    routes = require('./routes'),
    path = require('path');

app.configure(function(){
    app.set('port', process.env.PORT || process.env.npm_package_config_development_port || 5000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);
   
app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});