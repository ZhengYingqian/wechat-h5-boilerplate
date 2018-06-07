
/**
 * Module dependencies.
 */

var express = require('express'),
    path = require('path'),
    ejs = require('ejs'),
    app = express(),
    server = require('http').createServer(app);
	// compression = require("compression");

// app.use(compression({level:9}));//express compression to support gzip

app.set('port', process.env.PORT || 4331);
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //替换文件扩展名ejs为html
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// app.use(express.static(path.join(__dirname, 'javascripts')));
// app.use(express.static(path.join(__dirname, 'stylesheets')));
// app.use(express.static(path.join(__dirname, 'images')));
// app.use(express.static(path.join(__dirname, 'fonts')));
// app.use(express.static(path.join(__dirname, 'audios')));
app.use(express.static(path.join(__dirname, 'dist')));
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// angular启动页
app.get('/', function (req, res) {
  //res.sendfile('medWeb1.0/index.html');
    res.sendfile('dist/index.html');
});

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});