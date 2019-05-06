const Koa = require('koa')

// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const templating = require('./templating')

const app = new Koa()

// 记录时间
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  var
      start = new Date().getTime(),
      execTime
  await next()
  execTime = new Date().getTime() - start
  ctx.response.set('X-Response-Time', `${execTime}ms`)
})


// 静态文件
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));


app.use(bodyParser());

app.use(templating('views', {
  noCache: true,
  watch: true
}));


app.use(controller())


app.listen(3000);
console.log('app started at port 3000...');