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
      dataFirst: [],
      dataReloan: [],
      dataFirstPlan:[],
      dataTwoPlan:[],
      first: 0,
      reloan: 0,
    }
  },
  computed: {
    finalStatus: function (){
      return this.first+this.reloan
    }
  },
  watch: {
    firstClear(val){
      if (val!=undefined){
        this.first=1
        this.dataStrList=[]
        this.dataFirst=[]
        // this.dataReloan=[]
        this.dataFirstPlan=[]

        val.forEach((item)=>{
          this.dataStrList.push(item.datestr)
          this.dataFirst.push(parseFloat(item.lv).toFixed(1))
          this.dataFirstPlan.push(parseFloat(item.should_count).toFixed(1))
        })
        // this.reloanClear.forEach((item)=>{
        //   this.dataReloan=item.push(item.lv)
        // })
      }
    },
    reloanClear(val){
      if (val!=undefined){
        this.reloan=1
        this.dataReloan=[]
        this.dataTwoPlan=[]
        val.forEach((item)=>{
          this.dataReloan.push(parseFloat(item.lv).toFixed(1))
          this.dataTwoPlan.push(parseFloat(item.should_count).toFixed(1))
        })
      }
    },
    finalStatus(val){
      if (val>1){
        this.drawLine();
      }
    }

  },
  props: ['firstClear','reloanClear','id','scale'],
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
            y:30,
            x2:50,
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
            boundaryGap: false,
            data: this.dataStrList,
           
            axisTick: {show:false},
            splitLine:{show:false},
            axisLine: {
              show: true,
                lineStyle: {
                    type: 'solid',
                    color:'#113d5e'
                }
            },

            axisTick: {
              show: false, },
          },
          yAxis: [
            {
               
                type: 'value', 
                splitLine:{
                    lineStyle:{
                        type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                        },
                    show:true //隐藏或显示
                  },
                    axisLine: {show:false},
            axisTick: {show:false},
            splitLine:{show:false},
              },
               {
                type: 'value', 
                splitLine:{
                    lineStyle:{
                        type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                        },
                    show:true //隐藏或显示
                  },
                   axisLine: {show:false},
            axisTick: {show:false},
            splitLine:{show:false},
              }
          ], 
          
          series: [
            {
              name:'首贷',
              data: this.dataFirst,
              type: 'line',
               
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
                  color:'rgba(0,110,255)',
                  lineStyle:{
                    color:'rgb(0,110,255)'
                  }
                }
              }
            },
            {
              data: this.dataReloan,
              type: 'line',
              name:'复贷',
              symbol:'circle',
              label: {
                show: true,
                position: 'top',
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
            },
              {
              data: this.dataTwoPlan,
              type: 'bar',
              name:'复贷应还数量',
              symbol:'circle',
              yAxisIndex: 1,
              // label: {
              //   show: true,
              //   position: 'top',
              //   textStyle: {
              //     color: 'rgb(0,200,220)'
              // } 
              // },
              symbolSize:[7,7],
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
              name:'首贷应还数量',
              yAxisIndex: 1,
              data: this.dataFirstPlan,
              type: 'bar',
              areaStyle: {},
              // label: {
              //   show: true,
              //   position: 'top',
              //   textStyle: {
              //     color: 'rgb(0,110,255)'
              // } 
              // },
              itemStyle:{
                normal:{
                  color:'rgba(0,110,255)',
                  lineStyle:{
                    color:'rgb(0,110,255)'
                  }
                }
              }
            },
          ]
      };
      myChart.setOption(option);

    }
    }
}
 </script>
<style scoped>
</style>
