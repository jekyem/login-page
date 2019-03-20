"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _ejs = _interopRequireDefault(require("ejs"));

var _login = _interopRequireDefault(require("./routes/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json());
app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.engine('html', _ejs.default.renderFile);
app.use(_express.default.static(__dirname + '/public/'));
app.use('/', _login.default);
app.listen(8080, function () {
  return console.log("Listeniddng on port 8080!");
});