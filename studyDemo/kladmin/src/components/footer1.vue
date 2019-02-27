<template>
    <div id="d2">
        
        <p id="p1">
            <a href=""><span></span>在线客服</a>
            <a href=""><span></span>反馈</a>
            <a href=""><span></span>加入我们</a>

        </p>
         
        <div id="p2">
          
            <span>合作品牌:</span>
            <a href=""></a>
            <i>＋</i>
        </div>

        <div id="p3">
                <img src="../assets/img/tb3.png" alt="">
        </div>

        <ul id="u1">
            <li><a href="">隐私</a></li>
            <li><a href="">法律条款</a></li>
            <li><a href="">API</a></li>
            
        </ul>
        <table></table>
        <div id="p6">
          
        </div>

        <p id="p4">
            ©2018 暴雪娱乐有限公司版权所有 由上海网之易网络科技发展有限公司运营 著作权侵权 | 新出审字[2014]1451号
      文网进字[2014]0116号 | 沪网文号〔2017〕9633-727号 | 增值电信业务经营许可证编号：沪B2－20080012
     互联网违法和不良信息举报电话：0571-28090163 沪公网安备 31011502022167号 | 上海市网络游戏行业自律公约
|    适龄提示：适合13岁及以上使用  家长监护工程>
        </p>

    </div>

</template>

<script>
    export default{
        data(){
        return {}
    }
    ,
    methods:{

    }
    ,
    mounted()
    {

    }
    }
</script>

<style scoped>
    #d2{
        min-width: 1250px;
    height:300px;
    background-color: rgb(0,0,0);
    position: relative;
     font-family:"Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
    }
    #d2>#p1{
        width:300px;
        
          position: absolute;
          left: 10%;
          top:15%;

    }
     #d2>:nth-child(1) a{
          display: inline-block;
         width:79px;
         height:22px;
       
         text-align: center;
         line-height: 22px;
         box-sizing: border-box;
        
     }
  #d2 :nth-child(1)  span{
      display: inline-block;
      width: 19px;
      height: 19px;
      /* border:1px solid red; */
      background: url(../assets/img/tb1.png) no-repeat -6px -7px;
       box-sizing: border-box;
     vertical-align:middle

}
 #d2 :nth-child(1) :nth-child(2) span{
      background: url(../assets/img/tb1.png) no-repeat -36px -8px;
 }
  #d2 :nth-child(1) :nth-child(3) span{
      background: url(../assets/img/tb1.png) no-repeat -63px -8px;
 }

/* 右侧 */
#p2{
        width: 200px;
      height:33px;
     
 
   
    color:white;
     box-sizing: border-box;
    position: absolute;
    right: 5%;
      top:15%;
  
    
}
#p2>span{
   
    width:70px;
     height:31px;
    line-height: 31px;
    font-size: 14px;
    font-weight: bold;
   
      box-sizing: border-box;
      
    float: left;
      
    
}
#p2>a{
 
    width:95px;
    height: 31px;
     background: url(../assets/img/tb2.png) no-repeat -352px;
 
      box-sizing: border-box;
     float: left;
      


}
#p2>i{
   float: left;
    width: 16px;
    height: 16px;
    
    background-color: #241101;
    margin-left:2px;
   margin-top:7px;
   font-style: normal;
   text-align: center;
   line-height: 16px;
   font-weight: bold;
   color:#ac771f;
     
}

#p3{
    width:350px;
  
    position: absolute;
    top:35%;
    left:10%;
}

#u1{
    width: 200px;
    height:33px;
  
     position: absolute;
    top: 35%;
    right:5%;
}
#u1>li{
   height: 30px;
    float:left;
    
    line-height: 30px;
    padding-left:5px;
    padding-right: 5px;
   

}
#u1>li:not(:first-child){
    border-left:1px solid rgba(255,255,255,.3);

}
#u1>li>a{
     font-size:15px;
     color:white;
}
#p4{
    
    width:520px;
  
    color:rgba(255,255,255,.3);
    position: absolute;
    top:50%;
    right:5%;
}
#p6{
    width:450px;
    height: 100px;
  
   /*background: url(../assets/img/timg.gif) no-repeat 72% 45%;*/
  margin: auto;
  margin-top:3%;
}

</style>