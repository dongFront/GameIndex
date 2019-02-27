<template>
        <div id="flexparent" class="table">
            <div id=flex>
                    <div>
                        <a href=""><img src="../assets/img/flex1.jpg" alt=""></a>
                        <div>
                        <span>《魔兽世界是什么？》</span>
                        <div>新玩家入门</div>
                        </div>
                    </div>
                   <div>
                          <a href=""><img src="../assets/img/flex2.jpg" alt=""></a>
                           <div>
                        <span>艾泽拉斯需要你</span>
                        <div>老玩家回归</div>
                          </div>
                    </div>
                      <div>
                          <a href=""><img src="../assets/img/flex3.jpg" alt=""></a>
                           <div>
                        <span>7.3.5版本</span>
                        <div>更新说明</div>
                          </div>
                    </div>
                      <div>
                          <a href=""><img src="../assets/img/flex4.jpg" alt=""></a>
                           <div>
                        <span>最近更新</span>
                        <div>7.3.5版本在线修正</div>
                          </div>
                    </div>
              </div>

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
    mounted() {

    }
  }
</script>

<style>
    #flexparent{
         min-width: 1250px;
         background-color: rgb(27,28,32);
          font-family:"Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
    }


    #flex{
        width: 1250px;
        height:1100px;
        margin: auto;
        margin-top:10px;
     
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #flex>div{
        width: 620px;
        height: 540px;
     position: relative;
      
     box-sizing: border-box;
    }

#flex>div:hover{
   border: 1px solid rgb(248, 183, 0);
}



   #flex>div>a>img{
        width: 617px;
          height: 350px;
   }

   #flex>div>div{
    margin-top:30px;
   height: 130px;
   
      
   }
     #flex>div>div>div,#flex>div>div>span{
         display: block;
      
         padding: 10px;
         width: 250px;
         text-align: center;
  
         margin: auto;
        
     }

#flex>div>div>span{
    color: rgb(235, 222, 194);
    font-size: 20px;

}
 #flex>div>div>div{
        color:rgb(248, 183, 0);
         font-size:30px;
         font-weight: bold;
 }

</style>