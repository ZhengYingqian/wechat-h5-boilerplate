
/**
 * Module dependencies.
 */

var express = require('express'),
    path = require('path'),
    ejs = require('ejs'),
    app = express(),
    server = require('http').createServer(app);
var createError = require('http-errors');

app.set('port', process.env.PORT || 4331);
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //替换文件扩展名ejs为html
app.use(express.static(path.join(__dirname, 'dist')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// angular启动页
app.get('/', function (req, res) {
    res.sendfile('dist/index.html');
});

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});