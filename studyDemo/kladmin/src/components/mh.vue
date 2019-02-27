<template>
    <div id="d1_mh" class="table">
        <ul id="ulist_mh" >
            <li>
                <a href=""><img src="../assets/img/mh1.jpg" alt=""/></a>
                <span>哀伤</span>

            </li>
            <li>
                <a href=""><img src="../assets/img/mh2.jpg" alt=""/></a>
                <span>冰凌</span>

            </li>
            <li>
                <a href=""><img src="../assets/img/mh3.jpg" alt=""/></a>
                    <span>三姐妹</span>
            </li>
        </ul>
    </div>

</template>

<script>
    import '../assets/css/base.css'

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
    #d1_mh{
        min-width: 1250px;
        height: 300px;
        background-color:  rgb(27,28,32);

    }
    #d1_mh>#ulist_mh{

        width: 1250px;
        height: 300px;
        margin: auto;
        margin-top: 15px;
    }
    #d1_mh>#ulist_mh>li{
        width: 416px;
        height: 300px;
        float: left;
        box-sizing: border-box;
        position: relative;
        }
    #d1_mh>#ulist_mh>li:hover{
        bottom:15px;
        border: 4px solid rgb(247, 177, 10);
    }
    #d1_mh>#ulist_mh>li>a>img{
        display: inline-block;
        width: 408px;
        height: 300px;
    }
    #d1_mh>#ulist_mh>li>span{
        position: absolute;
        font-size: 25px;
        left:50px;
        bottom:50px;
        color: white;
    }
</style>