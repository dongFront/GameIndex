<template>
    <div>
        <div id="bg2" class="b1">
            <table></table>
            <headfirst></headfirst>
            <div id="buy"> 购买《争霸艾泽拉斯》数字典藏礼包</div>
            <p>《魔兽世界》的史诗故事即将翻开新的篇章。探索即将登场的全新功能、玩法、剧情，<br/>以及更多内容！</p>
            <button id="btn1">了解更多</button>
            <button id="btn2">立即购买</button>

            <ul id="ulist3">
                <li v-for="(v,index) in banner">
                    <img :src="require('../assets/'+v.img)" alt="" :class="{show:change===index}" />
                </li>
            </ul>

        </div>

        <!--视频-->
        <div id="videoparent" v-show="isvideo==true">
            <video id="video1" src="../assets/img/dd.mp4" poster="" controls="true" auto>
            </video>
            <button @click="changevideo">X</button>
        </div>

        <!--spa页头-->
        <div id="bg3" class="table">

            <ul id="ulist2">
                <li>
                    <router-link class="a" to="/second/spa1">原画</router-link>
                </li>
                <li>
                    <router-link class="a" to="/second/build">音频</router-link>
                </li>
                <li>
                    <router-link class="a" to="/second/build">漫画</router-link>
                </li>
                <li>
                    <router-link class="a" to="/second/build">短篇小说</router-link>
                </li>
                <li>
                    <router-link class="a" to="/second/build">人物</router-link>
                </li>
                <li>
                    <router-link class="a" to="/second/build">书籍</router-link>
                </li>
                <li>
                    <router-link class="a" to="/second/build">显示全部</router-link>
                </li>
            </ul>
            <!--spa内容div-->
            <div>
                <router-view></router-view>
            </div>
        </div>

        <!--、视频-->
        <div id="d5_bg" class="table">
            <div id="d5">
                <img src="../assets/img/video.jpg" alt="" />
                <button @click="dis_video">点击观看视频</button>
                <div>争霸艾泽拉斯</div>
                <div id="d5_text">史诗即将展开崭新的篇章，联盟和部落已全面开战。 <br> 观看开场动画，感受激战豪情！</div>
            </div>
        </div>
        <!-- 军团 -->
        <army></army>
        <!-- flex -->
        <flex></flex>
        <!--漫画-->
        <mh></mh>
        <footerfirst></footerfirst>
    </div>

</template>


<script>
import headfirst from "@/components/header1.vue";
import footerfirst from "../components/footer1.vue";
import mh from "../components/mh.vue";
import army from "../components/army.vue";
import flex from "../components/flex.vue";

import "../assets/js/jquery-1.11.3.js";
import "../assets/css/base.css";

import "../assets/js/jquery-ui.js";
import "../assets/css/jquery-ui.theme.css";
import axios from "axios";

export default {
  data() {
    return {
      isvideo: false,
      banner: [],
      change: 3
    };
  },
  methods: {
    dis_video: function() {
      this.isvideo = true;
      console.log(this.isvideo);
    },
    changevideo: function() {
      this.isvideo = false;
    }
  },
  mounted() {
    var timer = setInterval(() => {
      this.change++;
      if (this.change >= 4) {
        this.change = 0;
      }
      this.change;
    }, 5500);
  },
  beforeMount() {
    var url = `http://127.0.0.1:3500/ro`;
    axios
      .get(url)
      .then(res => {
        this.banner = res.data;
        console.log(this.banner);
      })
      .catch(err => {
        console.log("网络错误,轮播图数据获取失败!");
      });
  },
  components: {
    headfirst,
    footerfirst,
    mh,
    army,
    flex
  }
};
</script>

<style>
#bg2 {
  min-width: 1250px;
  height: 750px;
  position: relative;
}
#bg2 > #buy {
  position: absolute;
  z-index: 2;
  font-size: 45px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  top: 250px;
  left: 15%;
}
#bg2 > p {
  position: absolute;
  z-index: 2;
  font-size: 25px;
  color: rgb(235, 222, 194);
  top: 300px;
  left: 13%;
}
#bg2 > button {
  position: absolute;
  z-index: 2;
  width: 176px;
  height: 46px;
  top: 370px;

  font-size: 18px;
  color: rgb(247, 177, 10);
  outline: none;
  transition: all 1s;
}
#bg2 > #btn1 {
  background-color: black;
  left: 13%;
  border: 1px solid rgb(247, 177, 10);
}
#bg2 > #btn2 {
  left: calc(13% + 220px);
  background-color: rgb(95, 13, 0);
  border: 1px solid red;
}

#bg2 > button:hover {
  width: 200px;
  height: 60px;
}

/*图片轮播*/
#bg2 > #ulist3 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
#bg2 > #ulist3 > li > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 750px;
  opacity: 0;
  transition: all 2.5s linear;
}

#bg2 > #ulist3 > li > img.show {
  opacity: 1;
}

/* 折叠 */
#accordion {
  display: inline-block;
  background-color: black;
  width: 160px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  font-weight: bold;
  margin-left: 5%;
}
#accordion > h3 {
  background-color: #004444;
  border-color: black;
}
#bg3 {
  min-width: 1250px;
  background-color: rgb(27, 28, 32);
  position: relative;
  height: 900px;
}

/*视频*/
#d5_bg {
  background-color: rgb(27, 28, 32);
}
#d5 {
  width: 1240px;
  height: 280px;
  margin: auto;
  margin-top: 10px;
  position: relative;
}
#d5 > img {
  width: 1240px;
  height: 280px;
}
#d5 > button {
  position: absolute;
  bottom: 50px;
  right: 60px;
  width: 200px;
  height: 60px;
  font-size: 20px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  background-color: rgb(95, 13, 0);
  color: rgb(247, 177, 10);
  border: 2px solid rgb(234, 48, 18);
  outline: none;
  transition: all 0.5s;
}
#d5 > button:hover {
  background-color: rgba(248, 183, 0, 0.6);
  color: black;
  border-color: black;
}
#d5 > div {
  position: absolute;
  top: 60px;
  right: 360px;
  font-size: 45px;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  color: rgb(255, 255, 255);
}
#d5 > #d5_text {
  position: absolute;
  font-weight: normal;
  top: 130px;
  right: 120px;
  font-size: 22px;
  color: rgb(235, 222, 194);
}

#videoparent {
  width: 1000px;
  height: 600px;
  position: fixed;
  z-index: 20;
  top: calc(50% - 300px);
  left: calc(50% - 500px);
}

#video1 {
  width: 1000px;
  height: 600px;
}

#videoparent > button {
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 30px;
  position: absolute;
  top: 30px;
  right: 50px;
  border: none;
  outline: none;
}

#videoparent > div :hover {
  cursor: help;
}

#listmiddle {
  border: 1px solid red;
  margin: auto;
}

/*spa页头*/
#bg3 > ul {
  width: 1152px;
  height: 76px;
  margin: 20px auto;
  border: 1px solid gray;
  box-sizing: border-box;
  background-color: rgb(37, 22, 17);
}
#bg3 > ul > li {
  float: left;
  text-align: center;
}
#bg3 > ul > li > .a {
  display: inline-block;
  height: 75px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  font-size: 25px;
  padding: 0 50px;
  line-height: 75px;
}

#bg3 > ul > li:hover {
  background-color: #f8b700;
}
#bg3 > ul > li > .a:hover {
  color: black;
}
/*spa内容*/
#bg3 > div {
  width: 1152px;
  height: 750px;
  margin: auto;
  /*border: 1px solid red;*/
}
</style>