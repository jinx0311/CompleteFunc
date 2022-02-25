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
          dataStrList: [],
          dataList: [],
        }
    },
  watch: { 
    loanConfirm(val){
      console.log(val)
      if (val!=undefined){
        this.dataStrList=[]
        this.dataList=[]
        val.forEach((item)=>{
          this.dataStrList.push(item.datestr)
          this.dataList.push(item.rate)
        })
        this.drawLine();
      }
    }
  },
  props: ['loanConfirm','id','scale'],
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
            y:10,
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
            axisTick: {show:false},
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.dataList,
            type: 'bar',
            barWidth: 20,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  //backgroundColor:'#ddd',
                  fontSize:'10px'
              } 
              },
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
