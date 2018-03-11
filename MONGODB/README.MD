mongodb NOSQL 数据库
文档型数据库 区别于关系型数据库（表关联 id 外键）
doc json 数据以bson形式存在 bson是json改良版
全面支持javascript 解析 shell 

mongod -v 
mongod --dbpath ../db/ 启动进程
F:\mongdb\bin mongod --dbpath F:\mongdb\data\db
27017

mongo shell 
show dbs/table 列出
use tutorial 选用数据库
命名空间的方式
collection 集合（table） 一般以s结尾
直接插入数据就能建表
collection.find() 查找
collection.count() 计算共有多少条记录
mongdb 不需要先声明，直接保存就可以创建
column 允许冗余
pretty() 数据看起来更好看
$and 接受一个数组
update 更新
$set 向表里面插入某个字段
$unset 删除表里面的一个字段