<template>
    <div>
       <div :id="id" style="width:100%;height:180px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default{
    data(){
        return{
          echartData: [
            {
              datastr:'',
              applyRate: 0.00
            }
          ],
          dataStrList:[],
          dataList:[],
          dataListRe:[],
        }
    },
  watch: {
    applyRateList(val){
      if (val!=undefined){
        this.echartData=val
        this.dataStrList=[]
        this.dataList=[]
        this.dataListRe=[]
        this.echartData.forEach((item)=>{
          this.dataStrList.push(item.datestr)
          this.dataList.push(item.applyRate)
          this.dataListRe.push(item.applyRateRe)
        })
        console.log(this.dataStrList)
        console.log(this.dataList)
        this.drawLine();
      }
    }
  },
  props: ['applyRateList','id','scale'],
    methods:{
       init(){
           let myChart = echarts.init(document.getElementById(this.id))
           myChart.resize()
         },
         drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById(this.id))
        // 绘制图表
        const option = {
          grid:{
            x:35,
            y:20,
            x2:0,
            y2:30,
          },

           tooltip: {
             show:true,
             trigger: 'axis',
            axisPointer: {
              type: 'none',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          xAxis: {
            type: 'category',
            data: this.dataStrList,
            axisLine: {show:false},
            axisTick: {show:false},
            splitLine:{show:false},
          },
          yAxis: {
            type: 'value',
            axisLine: {show:false},
            axisTick: {show:false},
            splitLine:{show:false},
          },
          series: [
            {
              data: this.dataList,
              type: 'line',
              name:'首贷',
              symbol:'circle',
              symbolSize:[5,5],
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize:'10px'
              } 
              }, 
              itemStyle:{  
                normal:{
                  color:'rgb(0,200,220)',
                  lineStyle:{
                    color:'rgb(0,200,220)'
                  }
                }
              }
            },
            {
              data: this.dataListRe,
              type: 'line',
              name:'复贷',
              symbol:'circle',
              label: {
                show: true,
                position: 'bottom',
                textStyle: {
                  color: '#fff',
                  fontSize:'10px'
              } 
              },
              symbolSize:[7,7],
               itemStyle:{
                normal:{
                  color:'rgb(0,110,255)',
                  lineStyle:{
                    color:'rgb(0,110,255)'
                  }
                }
              }
            }
          ]
        };
        myChart.setOption(option);
    }
    }
}
 </script>
<style scoped>
</style>
