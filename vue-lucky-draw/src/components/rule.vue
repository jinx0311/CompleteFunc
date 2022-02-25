<template>
  <div class="rule" @scroll="scrollBox($event)">
    <img class="top" :src="img" alt="" />
    <div class="cont">
      <div class="borderOne">
        <img class="dian a" :src="dianL" alt="" />
        <img class="dian c" :src="dianR" alt="" />
        <img class="dian d" :src="dianL" alt="" />
        <img class="dian b" :src="dianR" alt="" />
        <p class="titleBig">Récord de premios</p>
        <div class="title" v-if="ruleList.length > 0">
          <p style="width:60%;text-align:left;font-weight:550">Premio</p>
          <p style="width:30%;text-align:right;font-weight:550">Fecha</p>
        </div>
        <ul>
          <li class="ruleList" v-for="(item, index) in ruleList" :key="index">
            <p style="width:60%">
              {{ item.prizeTitle || "Aún no hay récord de sorteo" }}
            </p>
            <div>
              <p>{{ item.prizeDate }}</p>
              <p>{{ item.prizeTime }}</p>
            </div>
          </li>
        </ul>
        <van-loading v-if="loading" />
        <p class="showAll" v-if="showAll">—————No hay más información—————</p>
        <p
          v-if="noDate"
          style="margin-top:3rem;font-size:0.28rem;"
          class="showAll"
        >
          Aún no hay récord de sorteo.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      showAll: false,
      pageAll: 1,
      loading: true, //是否加载
      pageNo: 1,
      total: "",
      noDate: false,
      ruleList: [],
      apiHead: "http://121.36.216.176:9090/gateway/ApiService/",
      //apiHead:'http://192.168.5.3:9090/gateway/ApiService/',
      //apiHead:'https://app.superapoyo.com/gateway/ApiService/',
      token: "ba76e35226bc4e34419b56ee2c1d64a5",
      img: require("../../static/img/rule_top.png"),
      dianL: require("../../static/img/leftD.png"),
      dianR: require("../../static/img/rightD.png")
    };
  },
  mounted() {
    let that = this;
    this.getToken();
    let activityId = sessionStorage.getItem("activityId");
    axios
      .post(that.apiHead + "api/v3/h5/v1/activity/prizeDetail", {
        access_token: that.token,
        activityId: activityId,
        pageNo: this.pageNo
      })
      .then(res => {
        if (res.data.code == 0) {
          let arr = res.data.data.prizeList;
          this.pageAll = Math.ceil(res.data.data.total / 10);
          if (this.pageAll < 2) {
            this.loading = false;
          }
          if (Array.isArray(arr) && arr.length > 0) {
            that.ruleList = arr.map(item => {
              let arr = [];
              arr = item.prizeTime.split(" ");
              let obj = {
                prizeTitle: item.prizeTitle,
                prizeDate: arr[0],
                prizeTime: arr[1]
              };
              return obj;
            });
          } else {
            this.loading = false;
            this.noDate = true;
          }
        } else {
          this.loading = false;
          this.noDate = true;
        }
      });
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getToken() {
      this.token = window.android.getAccessToken();
    },
    getList() {
      let activityId = sessionStorage.getItem("activityId");
      let that = this;
      this.pageNo = ++this.pageNo;
      if (this.pageNo > this.pageAll) {
        this.showAll = true;
        return;
      }
      axios
        .post(that.apiHead + "api/v3/h5/v1/activity/prizeDetail", {
          access_token: that.token,
          activityId: activityId,
          pageNo: this.pageNo
        })
        .then(res => {
          if (res.data.code == 0) {
            let arr = res.data.data.prizeList;
            let newArr = arr.map(item => {
              let arr = [];
              arr = item.prizeTime.split(" ");
              let obj = {
                prizeTitle: item.prizeTitle,
                prizeDate: arr[0],
                prizeTime: arr[1]
              };
              return obj;
            });
            that.ruleList = that.ruleList.concat(newArr);
          }
        });
      this.loading = true;
    },
    //滑动事件
    handleScroll() {
      if (
        document.documentElement.scrollTop +
          window.innerHeight -
          document.body.clientHeight >
          -10 &&
        this.loading
      ) {
        this.loading = false;
        if (this.pageAll > 1) {
          this.getList();
        }
      }
    }
  }
};
</script>
<style scoped lang="stylus">
.cont{
    width: 90vw;
    margin-left: 5vw;
    background: #FFF2E2
    padding: .2rem .2rem
    font-family: PingFang-SC-Bold, PingFang-SC;
    min-height: 8rem;
}
.borderOne{
    min-height: 12rem;
    border: 1px solid red;
    padding: 0 .2rem;
    position:relative;
}
.dian{
    position: absolute;
    width: 5px;
    height:5px;
}
.a{top:-3px;left:-2px;}
.b{bottom:-3px;left:-2px;}
.c{top:-3px;right:-2px;}
.d{bottom:-3px;right:-2px;}
.border{
    width: 95%;
    position absolute
    left 2.5%
    height: 1rem;
}
.top{
    width 100vw;
    margin-bottom: -12px;
}
.rule{
    background: #E73E3E;
    min-height: 100vh
}
.title{
    text-align: center
    display: flex
    padding: .3rem 0;
    font-weight: 600;

    flex-wrap: nowrap
    justify-content: space-between
    font-size: .3rem
    padding-top:.15rem
}
.titleBig{
   width: 100%;
    font-size: .32rem;
    text-align: center;
    margin-top: 0.3rem;
    font-weight: 550;

}
.ruleList{
    display: flex
    flex-wrap: nowrap
    align-items: center
    font-size .3rem
    margin-bottom: .2rem
    justify-content: space-between
    div{
        width: 30%
        text-align: right
    }
}
.van-loading{
    text-align: center
}
.showAll{
    font-size: .2rem;
    text-align: center;
    color: #ccc;
    margin-bottom: 10px
}
</style>
