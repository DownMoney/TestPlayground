var koa = require('koa');
var app = koa();

app.use(function *(next){
    console.log('Request');
    console.log('Start of the request: '+ (new Date).getMilliseconds());
    yield next;
    console.log('End of the request: '+ (new Date).getMilliseconds());
});

app.use(function *(){
    if(this.request.url == '/')
    {
        this.body = 'Hello World';
    }
    else
    {
        this.body = this.request.url;
    }
});

app.listen(3000);