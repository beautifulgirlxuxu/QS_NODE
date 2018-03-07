const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const mime = require('mime');
const handlebars = require('handlebars');

const server = http.createServer();
server.on('request',request.bind(this));

function request (req,res){
    const { pathname } = url.parse(req.url)
    //req res
    console.log(url.parse(req.url));
    let filepath = path.join(config.root,pathname);
    if(pathname === '/'){
        const rootPath = path.join(config.root,'index.html')
        // 文件类型 text/html/png/text/css MimeType
        // header http 响应头 状态码， 响应体
        console.log(mime.getType(rootPath));
        res.setHeader('Content-Type', mime.getType(rootPath)+';charset=utf-8');
        return fs.createReadStream(rootPath).pipe(res)
    }

    // 文件或目录
    // fs.stat返回一个文件目录的详细信息
    // 文件系统 接口
    fs.stat (filepath, (err, stats) => {
        if (err) {
            res.end('not found');
            return ;
        }
        if (stats.isDirectory()) {
            console.log('目录');
            // 得到所有文件
            // 阻塞 node异步无阻塞
            let files = fs.readdirSync(filepath);
            files = files.map(file => ({
                name: file,
                url: path.join(pathname, file)
            }));
            // list 函数返回compile之后的模板
            let html = list()({
                title: pathname,
                files
            })

            function list() {
                let tmpl = fs.readFileSync(path.resolve(__dirname, 'template', 'list.html'), 'utf8')
                return handlebars.compile(tmpl);
            }
            
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

            // read html <= 变量 compile
            // html list 
            // console.log(files);
            // files = files.map()
        } else {
            res.setHeader('Content-Type', mime.getType(filepath) + ';charset=utf-8');
            fs.createReadStream(filepath).pipe(res);
        }
    })
}
server.listen(config.port,()=>{
    console.log(`静态文件服务器启动成功，访问localhost:${config.port}`)
})
