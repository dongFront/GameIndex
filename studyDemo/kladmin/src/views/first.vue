<template>
    <!--v-->
    <div>
        <div id="bg">
            <table></table>
            <headfirst></headfirst>
            <div id="text1">
                <p>《争霸艾泽拉斯》海岛探险</p>
                <p>&nbsp;&nbsp;&nbsp;开启全新篇章</p>
            </div>
            <div id="d1">
                <button id="btn1" @click="jump">开启新的篇章</button>
            </div>

        </div>
        <!-- 尾巴 -->
        <footerfirst></footerfirst>
    </div>
</template>

<script>
import "../assets/css/first.css";
import headfirst from "@/components/header1.vue";
import footerfirst from "../components/footer1.vue";
import "../assets/js/jquery-1.11.3.js";
import "../assets/css/animate.css";
import "../assets/js/first1.js";

export default {
  data() {
    return {};
  },
  methods: {
    //跳转路由地址
    jump() {
      console.log(22);
      this.$router.push("/second");
    }
  },
  mounted() {},
  components: {
    headfirst,
    footerfirst
  }
};
</script>

<style scoped>
#text1 {
  margin-top: 15%;
  margin-left: 10%;
}
#text1 > p {
  font-size: 45px;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  color: rgb(255, 255, 255);
}
#btn1 {
  width: 250px;
  height: 70px;
  font-size: 25px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  border-radius: 8%;
  background-color: rgb(37, 22, 17);
  border: 0;
  color: white;
  font-weight: bold;
  transition: all 0.5s;
  line-height: 70px;
}
#btn1:hover {
  cursor: pointer;
  font-size: 30px;
}
#d1 {
  width: 250px;
  height: 70px;
  margin: 50px auto;
}
</style>