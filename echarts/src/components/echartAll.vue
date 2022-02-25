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
      dataActive: [],
      dataReg: [],
      dataApply: [],
      dataLoan: [],
    } 
  },
  watch: {
    circulateList(val){
      console.log(val)
      if (val!=undefined){
        this.dataStrList=[]
        this.dataActive=[]
        this.dataReg=[]
        this.dataApply=[]
        this.dataLoan=[]
        val.forEach((item)=>{
          this.dataStrList.push(item.datestr2)
          this.dataActive.push(item.active)
          this.dataReg.push(item.reg)
          this.dataApply.push(item.oder_apply)
          this.dataLoan.push(item.loaning)
        }) 
        this.drawLine();
      } 
    }
  },
  props: ['circulateList','id','scale'],
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
            x:55,
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
            axisTick: {show:false},
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'注册',
            data: this.dataReg,
            type: 'bar',
            barWidth: 20,
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
                  color:'rgb(0,110,255)',
                }
              }
          },
          {
            name:'申贷',
            data: this.dataApply,
            type: 'bar',
            barWidth: 20,
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
                }
              }
          },
          {
            name:"放款",
            data: this.dataLoan,
            type: 'bar',
            barWidth: 20,
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
                  color:'rgb(255,92,51)',
                  lineStyle:{
                    color:'rgb(255,92,51)'
                  }
                }
              }
          },
          {
            name:'激活',
            data: this.dataActive,
            type: 'line',
            smooth: true,
            barWidth: 20,
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
                  color:'rgb(255,92,51)',
                  lineStyle:{
                    color:'rgb(255,92,51)'
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
