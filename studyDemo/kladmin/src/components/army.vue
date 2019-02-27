<template>
        <div id="army" class="table">
            <div id="army_child"> 
                <img src="../assets/img/mh4.jpg" alt="">
                <div>《军团再临》现已上线</div>
                 <span>加入破碎群岛的战役，阻止燃烧军团的入侵！</span>
                <button>更多了解</button>
                <button>购买游戏时间</button>
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
    mounted()
    {

    }
    }
</script>

<style>
    #army{
        min-width: 1250px;
       font-family:"Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
       background-color: rgb(27,28,32);
     
    }
    #army_child{
            width: 1250px;
            height: 320px;
            margin: auto;
           
               position: relative;
                 margin-top: 10px;
    }
      #army_child>img{
          height: 100%;
          width: 1240px;
      }
     #army_child>div{
         position: absolute;
         top:60px;
           left: 50px;
           font-size: 45px;
           font-weight: bold;
           color:rgb(255,255,255)
      }
      #army_child>span{
            position: absolute;
           top:130px;
           left: 90px;
            font-size: 22px;
          color:rgb(235, 222, 194);
      }
      #army_child>button{
          position: absolute;
          width:176px;
          height: 46px;
          top:195px;
          font-size: 18px;
          color:rgb(247, 177, 10);
          outline: none;
        
      }
      #army_child>:nth-child(4){
            left: 70px;
          border: 1px solid rgb(247, 177, 10);
            background-color: black;
      }
     #army_child>:nth-child(5){
          left:270px;
            border: 1px solid red;
          background-color:rgb(95, 13, 0);
      }
</style>