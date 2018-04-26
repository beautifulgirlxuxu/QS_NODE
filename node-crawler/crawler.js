var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request({
    url: 'http://www.jxufe.edu.cn/index.html',
    method: 'GET'
}, function(e,r,b) {
    //e:错误代码 b:爬下来的内容
    if(e || !b) {return;}
    var $ = cheerio.load(b);
    var result = [];
    var titles = $('.centerInner');
    for(var i=0; i < titles.length; i++) {
        result.push($(titles[i]).text());
    }
    fs.writeFileSync('result.json', result);
})