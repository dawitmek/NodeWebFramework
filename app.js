let express = require('express')
let path = require('path')


let app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use("/", require("./routes/web/"));
// app.use("/api", require("./routes/api"));

app.listen(app.get('port'), function () {
    console.log("server listening on port " + app.get('port'));
})