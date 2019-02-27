//引入原生及第三方模块
const http=require("http");
const  express=require("express");
const mysql=require("mysql");

//创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    password:"",
    user:"root",
    database:"ms",
    port:3306,
    connectionLimit:5
});

//创建express对象
var app=express();
//创建服务器对象
var server=http.createServer(app);
//绑定端口
server.listen(3500);
//使用静态资源
app.use(express.static("public"));



//分页查询
app.get("/imglist",(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
        var pno=parseInt(req.query.pno);
        var pageSize=parseInt(req.query.pageSize);

        if(!pno){
            pno=1;
        }
        if(!pageSize){
            pageSize=1;
        }
      //  res.send(pno+"_"+pageSize);
        var obj={pno:pno,pageSize:pageSize};  //最终发送的结果

        var sql="SELECT count(gid) as c FROM ms_images";
        var progress=0; //设定变量开关，防止多次res.json

        //连接数据库
            //查询总页数
        pool.query(sql,(err,result)=>{
            if(err) throw err;
             var total=result[0].c;
             var pageCount=Math.ceil(total/pageSize);
             obj.pageCount=pageCount;

            progress+=50;
            if(progress==100){
                res.json(obj);
            }
        })

        //查询内容
    var sql="SELECT gid,img FROM ms_images LIMIT ?,?"
    var offset=(pno-1)*pageSize;
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        //console.log(result);
        obj.data=result;

        progress+=50;
        if(progress==100){
            res.json(obj);
        }
    });


});

//轮播图数据查询
app.get("/ro",(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	var sql="SELECT gid,img FROM ms_rotate"
	pool.query(sql,(err,result)=>{
		if(err) throw err;
        res.json(result);

	})

});





