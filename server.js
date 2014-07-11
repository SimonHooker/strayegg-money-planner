 var app = express();

 app.set('port', 80);
 
/* serves main page */
app.get('/', function(req, res) {
    res.sendfile('index.html')
});

app.post("/user/add", function(req, res) {
	/* some server side logic */
	res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
	console.log('static file request : ' + req.params);
	res.sendfile( __dirname + req.params[0]);
});

app.listen(80, function() {
	console.log("Listening on " + port);
});