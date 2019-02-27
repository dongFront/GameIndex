<template>
    <div>
        <div id="imglist" v-for="v in pager.data">
            <img :src="require('../assets/'+v.img)" alt="" />
        </div>
        <ul id="pager" v-for="v in pager.data">
            <li class="width" v-if="pager.pno-1>0">
                <a href="javascript:;" class="width1" 　@click.prevent="loadpager(pager.pno-1)">上一页</a>
            </li>
            <li v-if="pager.pno-2>0">
                <a href="javascript:;" 　@click.prevent="loadpager(pager.pno-1)">{{pager.pno-2}}</a>
            </li>
            <li v-if="pager.pno-1>0">
                <a href="javascript" 　@click.prevent="loadpager(pager.pno-1)">{{pager.pno-1}}</a>
            </li>
            <li class="active">
                <a href="javascript:;">{{pager.pno}}</a>
            </li>
            <li v-if="pager.pno+1<=pager.pageCount">
                <a href="javascript:;" @click.prevent="loadpager(pager.pno+1)">{{pager.pno+1}}</a>
            </li>
            <li v-if="pager.pno+2<=pager.pageCount">
                <a href="javascript:;" 　 @click.prevent="loadpager(pager.pno+2)">{{pager.pno+2}}</a>
            </li>
            <li v-if="pager.pno+1<=pager.pageCount" class="width">
                <a href="javascript:;" @click.prevent="loadpager(pager.pno+1)" class="width1">下一页</a>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      pageSize: 1,
      pager: {}
    };
  },
  methods: {
    loadpager(pno) {
      console.log(this.pageSize);
      var url = `http://127.0.0.1:3500/imglist?pno=${pno}&pageSize=${this.pageSize}`;
      axios
        .get(url)
        .then(res => {
          console.log("res");
          this.pager = res.data;
          var pno = parseInt(res.data.pno);
          this.pager.pno = pno;
          console.log(res.data);
        })
        .catch(err => {
          console.log("连接远程服务器失败，无法获取数据");
        });
    }
  },
  mounted() {
    this.loadpager(1);
  }
};
</script>

<style scoped>
#pager {
  font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans GB", "微软雅黑", "tahoma", "simsun", "宋体";
  color: rgb(247, 177, 10);
  font-size: 20px;
  width: 480px;
  height: 40px;
  margin-left: 670px;
  margin-top: 15px;
}
#pager > li {
  width: 53px;
  float: left;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #f8b700;
}

#pager > li > a {
  display: inline-block;
  width: 53px;
  height: 40px;
}

#pager > :not(:nth-child(1)) {
  border-left: none;
}
#pager > li.width {
  width: 83px;
}
#pager > li > a.width1 {
  width: 83px;
}
#imglist > img {
  width: 1152px;
  height: 680px;
}
.active {
  background-color: rgb(95, 13, 0);
}
</style>