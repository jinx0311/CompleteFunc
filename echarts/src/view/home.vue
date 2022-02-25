<template>
    <div class="home">
          <top :name="loanDataList.AppName"></top>
          <div class="show_tem"  >
              <div class="left" style="width:20%">
                    <div class="block">
                      <div class="title" style="margin-bottom:10px;">首-漏斗数据</div>
                       <left-table :scale="scale" :height="'63'" :sendData="loanDataList.firstLoanFunnel"></left-table>
                     </div>
                    <div class="block" style="margin-top:10px">
                      <div class="title" style="margin-bottom:10px;">复-漏斗数据</div>
                       <left-table :scale="scale" :height="'27'" :sendData="loanDataList.reLoanFunnel"></left-table>
                     </div>
              </div>
              <!-- 中上 -->
              <div class="middle">
                 <div class="block">
                      <div class="title">当日统计</div>
                      <div class="cont">
                          <span>注册人数：{{loanDataList.loanData.reg }}人</span>
                           <span>首正式提交：{{loanDataList.loanData.oder_apply }}次</span>
                          <span>复结果申请：{{loanDataList.loanData.reloan_apply }}次</span>
                      </div>
                 </div>
                 <div class="block">
                      <div class="title">提前提交率</div>
                    <echartLineBack class="echarts" ref="myEcharts6" :scale="scale"  :id="'echarts6'" :firstClear="loanDataList.firstClear" :reloanClear="loanDataList.reloanClear" ></echartLineBack>
                 </div>
                 <div class="block">
                      <div class="title">首复-通过率</div>
                      <echart-line class="echarts" ref="myEcharts1" :scale="scale" :id="'echarts1'" :applyRateList="loanDataList.passRateList"></echart-line>
                 </div>
                 <div class="block">
                      <div class="title">提交正式率</div>
                      <echart-line class="echarts" ref="myEcharts2" :scale="scale"  :id="'echarts2'" :applyRateList="loanDataList.applyRateList"></echart-line>
                 </div>
                 <div class="block">
                      <div class="title">首-确认率</div>
                       <echart-vertical class="echarts" ref="myEcharts3" :scale="scale"  :id="'echarts3'" :loanConfirm="loanDataList.firstLoanConfirm" ></echart-vertical>
                 </div>
                 <div class="block">
                      <div class="title">复-当日转化率</div>
                      <echart-vertical class="echarts" ref="myEcharts4" :scale="scale"  :id="'echarts4'" :loanConfirm="loanDataList.ReLoanConfirm"></echart-vertical>
                 </div>
                 <div class="block" style="width:100%">
                      <div class="title">投放转化效果（reg-apply-pass）</div>
                       <echart-all class="echarts" ref="myEcharts5" :scale="scale"  :id="'echarts5'" :circulateList="loanDataList.circulateList"></echart-all>
                 </div>

              </div>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import top from '@/components/top.vue'
import leftTable from '@/components/leftTable.vue'
import echartLine from '../components/echartLine'
import echartVertical from '../components/echartVertical.vue'
import echartLineBack from '../components/echartLineBack.vue'
import echartAll from '../components/echartAll.vue'
const baseurl = '/api';
export default{
    data(){
        return{
          width:1920,
          height:1080,
          scale:null,
          loanDataList :{
            firstLoanFunnel:[],
            reLoanFunnel:[],
            loanData:{},
            applyRateList:[],
            passRateList:[],
          }
        }
    },
    components:{top,leftTable,echartLine,echartVertical,echartLineBack,echartAll},

    mounted(){
      this.getData()
      setInterval(() => {
     this.getData()
    }, 30000);
    this.setScale()
         window.onresize=()=>{
               this.$refs.myEcharts1.init();
               this.$refs.myEcharts2.init();
               this.$refs.myEcharts3.init();
               this.$refs.myEcharts4.init();
               this.$refs.myEcharts5.init();
               this.$refs.myEcharts6.init();
               this.setScale()
         }
    },
    methods:{
      getScale() {
         const { width, height } = this;
          let ww = window.innerWidth / width;
          let wh = window.innerHeight / height;
          return ww < wh ? ww : wh;
      },
       setScale() {
      this.scale = this.getScale();
      console.log(this.scale);
    },
      getData(){
           axios.get(baseurl +'/getLoanDataList').then(res=>{

        if(res.data.code==0){
          this.loanDataList=res.data.data
        }
      })
      },
       debounce(fn, delay) {
      let delays = delay || 500;
      let timer;
      return function() {
        let th = this;
        let args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          timer = null;
          fn.apply(th, args);
        }, delays);
      };
    }
    }
}
 </script>
<style scoped>
 .middle{
     width: 79%;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
 }
 .middle .block{
     width: 33%;
     height:208px;
 }
 .middle .cont{
      display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
      height: 120px;
      letter-spacing: 2px;
      padding-top: 20px;
 }
 .cont p{ font-size: 40px;}
 .cont span{
    display: inline-block;
    width:100%;
    padding-left: 15%;
     font-size: 30px;
 }
.show_tem{
    box-sizing: border-box;
    background-image: url(/static/img/bigLine.5d24b4c.png);
    background-size: 100% 100%;
    margin: 0;
    position: relative;
    bottom: 27px;
    padding: 10px;
    padding-top: 15px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;

}

.title{
    width: 100%;
    background-image: linear-gradient(to right,rgb(9,54,126), rgb(20,34,95));
    padding: 5px 10px;
    font-size: 20px;
    box-sizing: border-box;
}
.home{
   width:1920px;
   height:1080px;
  position: fixed;
    left: -50%;
    top: -33%;
   background: green;
    color: #fff;
    transform: scale(0.5,.7);
    background-image: linear-gradient(#16245a, #0f1b46);
}
#ScaleBox {
  --scale: 1;
}
.ScaleBox {
  display: flex;
  height: 100%;
  flex-direction: column;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;

  z-index: 999;
}
.echarts{
  width: 100%;
}
</style>
