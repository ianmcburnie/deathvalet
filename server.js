var cluster = require("cluster"),
	express = require("express"),
    routes = require('./routes'),
    path = require('path'),
	numCPUs = require('os').cpus().length,
	useCluster = true;

if (useCluster === true && cluster.isMaster) {
	
	var cpuIndex = 0;
	for (; cpuIndex < numCPUs; cpuIndex++) {
		cluster.fork();
	}
	
	// Listen for dying workers
	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
		// Spawn a new worker
		cluster.fork();
	});
		
} else {
	
    var app = express();

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
		
		if(useCluster===true && cluster){
			console.log("Express server " + cluster.worker.id + " listening on port " + app.get('port'));
		}
		else{
			console.log("Express server listening on port " + app.get('port'));
		}
	});
	
}

