//����ԭ����������ģ��
const http=require("http");
const  express=require("express");
const mysql=require("mysql");

//�������ӳ�
var pool=mysql.createPool({
    host:"127.0.0.1",
    password:"",
    user:"root",
    database:"ms",
    port:3306,
    connectionLimit:5
});

//����express����
var app=express();
//��������������
var server=http.createServer(app);
//�󶨶˿�
server.listen(3500);
//ʹ�þ�̬��Դ
app.use(express.static("public"));



//��ҳ��ѯ
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
        var obj={pno:pno,pageSize:pageSize};  //���շ��͵Ľ��

        var sql="SELECT count(gid) as c FROM ms_images";
        var progress=0; //�趨�������أ���ֹ���res.json

        //�������ݿ�
            //��ѯ��ҳ��
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

        //��ѯ����
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

//�ֲ�ͼ���ݲ�ѯ
app.get("/ro",(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	var sql="SELECT gid,img FROM ms_rotate"
	pool.query(sql,(err,result)=>{
		if(err) throw err;
        res.json(result);

	})

});





