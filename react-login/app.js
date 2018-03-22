const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const convert = require('koa-convert')
const koaStatic = require('koa-static');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const routers = require('./routes/index');
const config = require('./config')
const app = new Koa();
app.use(bodyParser());
app.use(views(path.join(__dirname,'./views'),{
    extension: 'ejs'
}))
mongoose.Promise = global.Promise;
mongoose.connect(config.database);


app.use(routers.routes())
.use(routers.allowedMethods())

app.use(convert(koaStatic(
    path.join(__dirname,'./static')
)));  //convert转义一些文件


app.listen(3000,()=>{
    console.log('The server is on port 3000');
    console.log(__dirname)
});