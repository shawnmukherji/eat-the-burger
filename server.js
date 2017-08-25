//================ NODE DEPENDENCIES ===============//

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//=============== HANDLEBARS ======================//


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controllers.js');

app.use('/', router);

//open server

var port = process.env.PORT || 3000;
app.listen(port);
